import { useMemo, useState } from "react";
import { EXAMS, accentMap, examSplit, type Exam } from "@/lib/exams";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type PlanSettings = Record<string, { hoursPerWeek: number }>;
type PlanProgress = Record<string, boolean>; // `${examId}:${week}:${block}`

const BLOCKS = ["general", "specific", "review"] as const;
type Block = (typeof BLOCKS)[number];

const BLOCK_LABEL: Record<Block, string> = {
  general: "Conhecimentos gerais",
  specific: "Conhecimentos específicos",
  review: "Revisão e simulado",
};

type Week = {
  index: number;
  start: Date;
  end: Date;
  phase: "Base" | "Aprofundamento" | "Reta final";
  hours: Record<Block, number>;
  questions: number;
};

function startOfWeek(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  const day = copy.getDay(); // 0 dom
  const diff = day === 0 ? -6 : 1 - day; // segunda-feira
  copy.setDate(copy.getDate() + diff);
  return copy;
}

function fmt(d: Date) {
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

function buildWeeks(exam: Exam, hoursPerWeek: number): Week[] {
  const examDate = new Date(exam.date);
  const first = startOfWeek(new Date());
  const weeks: Week[] = [];
  const { general, specific } = examSplit(exam);
  const totalQ = general + specific;

  let cursor = new Date(first);
  let i = 0;
  while (cursor.getTime() < examDate.getTime() && i < 120) {
    const end = new Date(cursor);
    end.setDate(end.getDate() + 6);
    weeks.push({
      index: i,
      start: new Date(cursor),
      end: end.getTime() > examDate.getTime() ? examDate : end,
      phase: "Base",
      hours: { general: 0, specific: 0, review: 0 },
      questions: 0,
    });
    cursor = new Date(cursor);
    cursor.setDate(cursor.getDate() + 7);
    i++;
  }

  const n = weeks.length;
  return weeks.map((w, idx) => {
    const ratio = n <= 1 ? 1 : idx / (n - 1);
    // Revisão cresce ao longo do tempo: 10% no início, 45% na reta final.
    const reviewShare = 0.1 + 0.35 * ratio;
    const studyShare = 1 - reviewShare;
    const gShare = (general / totalQ) * studyShare;
    const sShare = (specific / totalQ) * studyShare;
    const phase: Week["phase"] =
      ratio < 0.45 ? "Base" : ratio < 0.8 ? "Aprofundamento" : "Reta final";
    const round = (v: number) => Math.round(v * 2) / 2;
    return {
      ...w,
      phase,
      hours: {
        general: round(hoursPerWeek * gShare),
        specific: round(hoursPerWeek * sShare),
        review: round(hoursPerWeek * reviewShare),
      },
      questions: Math.round(hoursPerWeek * (8 + 6 * ratio)),
    };
  });
}

export function StudyPlan() {
  const [selected, setSelected] = useState(EXAMS[0]!.id);
  const { value: settings, setValue: setSettings } =
    useLocalStorage<PlanSettings>(
      "plan.settings",
      Object.fromEntries(EXAMS.map((e) => [e.id, { hoursPerWeek: 12 }])),
    );
  const { value: progress, setValue: setProgress } =
    useLocalStorage<PlanProgress>("plan.progress", {});

  const exam = EXAMS.find((e) => e.id === selected)!;
  const hoursPerWeek = settings[exam.id]?.hoursPerWeek ?? 12;
  const weeks = useMemo(
    () => buildWeeks(exam, hoursPerWeek),
    [exam, hoursPerWeek],
  );

  const totalTasks = weeks.length * BLOCKS.length;
  const doneTasks = weeks.reduce(
    (acc, w) =>
      acc + BLOCKS.filter((b) => progress[`${exam.id}:${w.index}:${b}`]).length,
    0,
  );
  const pct = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  const a = accentMap[exam.accent];
  const split = examSplit(exam);
  const totalHours = weeks.length * hoursPerWeek;

  const toggle = (week: number, block: Block) => {
    const key = `${exam.id}:${week}:${block}`;
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleWeek = (week: number, on: boolean) => {
    setProgress((prev) => {
      const next = { ...prev };
      for (const b of BLOCKS) next[`${exam.id}:${week}:${b}`] = on;
      return next;
    });
  };

  return (
    <section id="plano" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Plano de estudos
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Metas semanais calculadas a partir da data da prova e da divisão
            entre gerais e específicas.
          </p>
        </div>
      </div>

      {/* seletor de concurso */}
      <div className="mt-6 flex flex-wrap gap-2">
        {EXAMS.map((e) => {
          const active = e.id === exam.id;
          return (
            <button
              key={e.id}
              type="button"
              onClick={() => setSelected(e.id)}
              className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-colors ${
                active
                  ? `${accentMap[e.accent].badge} border-transparent`
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {e.orgShort}
            </button>
          );
        })}
      </div>

      {/* painel de controle */}
      <div className="mt-5 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="font-display text-sm font-bold">
              {exam.role} — {exam.orgShort}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Prova em {exam.dateLabel} · {weeks.length}{" "}
              {weeks.length === 1 ? "semana" : "semanas"} de preparação ·{" "}
              {split.general} itens gerais / {split.specific} específicos
              {exam.general == null ? " (estimativa)" : " (proporção do edital)"}
            </p>

            <label className="mt-5 block">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Horas de estudo por semana: {hoursPerWeek}h
              </span>
              <input
                type="range"
                min={4}
                max={40}
                step={1}
                value={hoursPerWeek}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    [exam.id]: { hoursPerWeek: Number(e.target.value) },
                  }))
                }
                className="mt-2 w-full accent-current"
              />
            </label>
            <p className="mt-2 text-xs text-muted-foreground">
              Carga total planejada até a prova: ~{totalHours}h
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background/60 p-4">
            <div className="flex items-baseline justify-between">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Progresso
              </span>
              <span className="text-display text-2xl font-bold tabular-nums">
                {pct}%
              </span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full ${a.bar} transition-all`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {doneTasks} de {totalTasks} metas concluídas.
            </p>
            <button
              type="button"
              onClick={() =>
                setProgress((prev) => {
                  const next = { ...prev };
                  for (const k of Object.keys(next)) {
                    if (k.startsWith(`${exam.id}:`)) delete next[k];
                  }
                  return next;
                })
              }
              className="mt-3 rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
            >
              Zerar progresso deste concurso
            </button>
          </div>
        </div>
      </div>

      {/* cronograma */}
      <ol className="mt-5 flex flex-col gap-3">
        {weeks.map((w) => {
          const allDone = BLOCKS.every(
            (b) => progress[`${exam.id}:${w.index}:${b}`],
          );
          return (
            <li
              key={w.index}
              className={`rounded-2xl border bg-card p-4 sm:p-5 transition-colors ${
                allDone ? "border-foreground/30 opacity-70" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-bold ${a.soft}`}
                  >
                    {w.index + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold">
                      Semana {w.index + 1} · {fmt(w.start)} a {fmt(w.end)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Fase: {w.phase} · meta de {w.questions} questões
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleWeek(w.index, !allDone)}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-muted"
                >
                  {allDone ? "Reabrir semana" : "Marcar semana"}
                </button>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {BLOCKS.map((b) => {
                  const key = `${exam.id}:${w.index}:${b}`;
                  const done = Boolean(progress[key]);
                  return (
                    <label
                      key={b}
                      className={`flex cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5 transition-colors ${
                        done
                          ? "border-transparent bg-muted"
                          : "border-border bg-background/60 hover:bg-secondary"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={done}
                        onChange={() => toggle(w.index, b)}
                        className="mt-0.5 h-4 w-4"
                      />
                      <span className="text-sm leading-snug">
                        <span
                          className={done ? "line-through opacity-70" : ""}
                        >
                          {BLOCK_LABEL[b]}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {w.hours[b]}h nesta semana
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
