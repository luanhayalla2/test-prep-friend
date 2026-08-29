import { useState } from "react";
import { EXAMS, accentMap } from "@/lib/exams";
import { LESSON_TRACKS, ytSearch, qcSearch } from "@/lib/lessons";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function Lessons() {
  const [examId, setExamId] = useState(EXAMS[0]!.id);
  const { value: done, setValue: setDone } = useLocalStorage<
    Record<string, boolean>
  >("ma-aulas-concluidas", {});

  const exam = EXAMS.find((e) => e.id === examId)!;
  const a = accentMap[exam.accent];
  const track = LESSON_TRACKS.find((t) => t.examId === examId)!;

  const completed = track.subjects.filter(
    (s) => done[`${examId}:${s.name}`],
  ).length;
  const pct = Math.round((completed / track.subjects.length) * 100);

  return (
    <section id="aulas" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Aulas por matéria
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Trilha de estudo com videoaulas e bancos de questões para cada
            disciplina do edital.
          </p>
        </div>
        <span className="hidden sm:block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {pct}% concluído
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {EXAMS.map((e) => {
            const active = e.id === examId;
            return (
              <button
                key={e.id}
                onClick={() => setExamId(e.id)}
                className={`rounded-lg border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  active
                    ? `${accentMap[e.accent].badge} border-transparent`
                    : "border-border bg-background text-muted-foreground hover:bg-secondary"
                }`}
              >
                {e.orgShort}
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-muted-foreground">
              {exam.role} — {completed} de {track.subjects.length} matérias
              marcadas
            </span>
            <span className={`font-display font-bold ${a.text}`}>{pct}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full ${a.bar} transition-all`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {(["geral", "especifica"] as const).map((kind) => (
            <div key={kind}>
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {kind === "geral"
                  ? "Conhecimentos gerais"
                  : "Conhecimentos específicos"}
              </h3>
              <ul className="mt-3 space-y-3">
                {track.subjects
                  .filter((s) => s.kind === kind)
                  .map((s) => {
                    const key = `${examId}:${s.name}`;
                    const checked = !!done[key];
                    return (
                      <li
                        key={s.name}
                        className="rounded-xl border border-border bg-background/60 p-4"
                      >
                        <label className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              setDone({ ...done, [key]: !checked })
                            }
                            className="mt-1 h-4 w-4 shrink-0 accent-current"
                          />
                          <span
                            className={`text-sm font-semibold ${
                              checked
                                ? "text-muted-foreground line-through"
                                : "text-foreground"
                            }`}
                          >
                            {s.name}
                          </span>
                        </label>
                        <div className="mt-3 flex flex-wrap gap-2 pl-7">
                          <a
                            href={ytSearch(s.query)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                          >
                            Videoaulas
                          </a>
                          <a
                            href={qcSearch(s.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                          >
                            Banco de questões
                          </a>
                          <a
                            href="#simulados"
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary"
                          >
                            Simulado
                          </a>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Os links abrem buscas em plataformas externas (YouTube e Qconcursos).
          Marque a matéria ao concluir a revisão para acompanhar o avanço.
        </p>
      </div>
    </section>
  );
}
