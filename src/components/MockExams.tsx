import { useEffect, useMemo, useRef, useState } from "react";
import { EXAMS, accentMap } from "@/lib/exams";
import { getQuestions, shuffle, type Question } from "@/lib/question-bank";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  dueQueue,
  formatDue,
  grade as gradeCard,
  key as srsKey,
  nextReviewAt,
  type SrsState,
} from "@/lib/srs";
import {
  formatDuration,
  pct,
  recommendations,
  weakestSubjects,
  type ExamReport,
} from "@/lib/report";
import { downloadReportPdf } from "@/lib/report-pdf";

type Answers = Record<string, number>;
type BestScores = Record<string, { correct: number; total: number }>;
type Mode = "pratica" | "completo" | "revisao";

const SECONDS_PER_QUESTION = 180;

export function MockExams() {
  const [examId, setExamId] = useState(EXAMS[0]!.id);
  const [mode, setMode] = useState<Mode>("pratica");
  const [filter, setFilter] = useState<"todas" | "geral" | "especifica">("todas");
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [seed, setSeed] = useState(0);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());
  const reportedSeed = useRef<string>("");

  const { value: best, setValue: setBest } = useLocalStorage<BestScores>(
    "ma-simulado-best",
    {},
  );
  const { value: srs, setValue: setSrs } = useLocalStorage<SrsState>(
    "ma-srs-state",
    {},
  );
  const { value: lastReport, setValue: setLastReport } =
    useLocalStorage<ExamReport | null>("ma-last-report", null);

  const exam = EXAMS.find((e) => e.id === examId)!;
  const a = accentMap[exam.accent];
  const pool = useMemo(() => getQuestions(examId), [examId]);

  const questions = useMemo(() => {
    if (mode === "completo") {
      const geral = shuffle(pool.filter((q) => q.kind === "geral"));
      const esp = shuffle(pool.filter((q) => q.kind === "especifica"));
      return [...geral, ...esp];
    }
    if (mode === "revisao") {
      const due = dueQueue(srs, examId, pool.map((q) => q.id));
      const list = due
        .map((id) => pool.find((q) => q.id === id))
        .filter((q): q is Question => Boolean(q));
      return list.slice(0, 15);
    }
    const filtered =
      filter === "todas" ? pool : pool.filter((q) => q.kind === filter);
    return shuffle(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, filter, seed, mode, pool]);

  const totalTimeMs = questions.length * SECONDS_PER_QUESTION * 1000;
  const elapsed = now - startedAt;
  const remaining = Math.max(0, totalTimeMs - elapsed);

  // tick only in timed mode
  useEffect(() => {
    if (mode !== "completo" || submitted) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [mode, submitted, seed, examId]);

  const answeredCount = questions.filter((q) => answers[q.id] != null).length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const scorePct = questions.length
    ? Math.round((correct / questions.length) * 100)
    : 0;
  const record = best[`${examId}:${mode}:${filter}`];
  const pendingReview = dueQueue(srs, examId, pool.map((q) => q.id)).length;
  const nextDue = nextReviewAt(srs, examId, pool.map((q) => q.id));

  function reset(next?: Partial<{ examId: string; filter: typeof filter; mode: Mode }>) {
    if (next?.examId) setExamId(next.examId);
    if (next?.filter) setFilter(next.filter);
    if (next?.mode) setMode(next.mode);
    setAnswers({});
    setSubmitted(false);
    setSeed((s) => s + 1);
    setStartedAt(Date.now());
    setNow(Date.now());
  }

  function buildReport(durationMs: number): ExamReport {
    const bySubject: ExamReport["bySubject"] = {};
    let g = { correct: 0, total: 0 };
    let e = { correct: 0, total: 0 };
    const wrongIds: string[] = [];
    for (const q of questions) {
      const ok = answers[q.id] === q.answer;
      if (!ok) wrongIds.push(q.id);
      const s = (bySubject[q.subject] ??= { correct: 0, total: 0 });
      s.total += 1;
      if (ok) s.correct += 1;
      if (q.kind === "geral") {
        g = { correct: g.correct + (ok ? 1 : 0), total: g.total + 1 };
      } else {
        e = { correct: e.correct + (ok ? 1 : 0), total: e.total + 1 };
      }
    }
    return {
      examId,
      examLabel: `${exam.orgShort} — ${exam.role}`,
      mode,
      finishedAt: Date.now(),
      durationMs,
      total: questions.length,
      correct,
      geral: g,
      especifica: e,
      bySubject,
      wrongIds,
    };
  }

  function submit() {
    if (submitted || !questions.length) return;
    setSubmitted(true);

    let nextSrs = srs;
    for (const q of questions) {
      nextSrs = gradeCard(nextSrs, examId, q.id, answers[q.id] === q.answer);
    }
    setSrs(nextSrs);

    const key = `${examId}:${mode}:${filter}`;
    const prev = best[key];
    if (!prev || correct / questions.length > prev.correct / prev.total) {
      setBest({ ...best, [key]: { correct, total: questions.length } });
    }

    const report = buildReport(Date.now() - startedAt);
    setLastReport(report);
    reportedSeed.current = key;
  }

  // auto-submit when time runs out
  useEffect(() => {
    if (mode === "completo" && !submitted && questions.length && remaining === 0) {
      submit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, mode, submitted]);

  const report = submitted ? lastReport : null;

  return (
    <section id="simulados" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Simulados
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Prática livre, simulado cronometrado e revisão espaçada das questões
            que você errou.
          </p>
        </div>
        <span className="hidden sm:block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {questions.length} questões
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
        {/* exam picker */}
        <div className="flex flex-wrap gap-2">
          {EXAMS.map((e) => {
            const active = e.id === examId;
            return (
              <button
                key={e.id}
                onClick={() => reset({ examId: e.id })}
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

        {/* mode */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(
            [
              ["pratica", "Prática livre"],
              ["completo", "Simulado completo"],
              ["revisao", `Revisão (${pendingReview})`],
            ] as const
          ).map(([m, label]) => (
            <button
              key={m}
              onClick={() => reset({ mode: m })}
              className={`rounded-md border px-3 py-1 text-xs font-semibold transition-colors ${
                mode === m
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* filter (only in practice mode) */}
        {mode === "pratica" && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {(["todas", "geral", "especifica"] as const).map((f) => (
              <button
                key={f}
                onClick={() => reset({ filter: f })}
                className={`rounded-md border px-3 py-1 text-xs font-semibold transition-colors ${
                  filter === f
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-border bg-background text-muted-foreground hover:bg-secondary"
                }`}
              >
                {f === "todas"
                  ? "Todas"
                  : f === "geral"
                    ? "Conhecimentos gerais"
                    : "Conhecimentos específicos"}
              </button>
            ))}
            <button
              onClick={() => reset()}
              className="ml-auto rounded-md border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Novo simulado
            </button>
          </div>
        )}

        {/* status */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-background/60 p-4 text-sm">
          <span className="text-muted-foreground">
            Respondidas{" "}
            <strong className="text-foreground">
              {answeredCount}/{questions.length}
            </strong>
          </span>
          {mode === "completo" && questions.length > 0 && (
            <span className="text-muted-foreground">
              Tempo restante{" "}
              <strong
                className={`tabular-nums ${
                  remaining === 0
                    ? "text-terra"
                    : remaining < 60000
                      ? "text-terra"
                      : "text-foreground"
                }`}
              >
                {formatDuration(remaining)}
              </strong>
            </span>
          )}
          {mode === "completo" && (
            <span className="text-muted-foreground">
              Divisão{" "}
              <strong className="text-foreground">
                {questions.filter((q) => q.kind === "geral").length} gerais ·{" "}
                {questions.filter((q) => q.kind === "especifica").length}{" "}
                específicas
              </strong>
            </span>
          )}
          {submitted && (
            <span className="text-muted-foreground">
              Acertos{" "}
              <strong className={a.text}>
                {correct} ({scorePct}%)
              </strong>
            </span>
          )}
          {record && (
            <span className="text-muted-foreground">
              Melhor resultado{" "}
              <strong className="text-foreground">
                {Math.round((record.correct / record.total) * 100)}%
              </strong>
            </span>
          )}
          {mode !== "revisao" && nextDue && (
            <span className="text-muted-foreground">
              Próxima revisão{" "}
              <strong className="text-foreground">{formatDue(nextDue)}</strong>
            </span>
          )}
        </div>

        {/* progress bars (simulado completo) */}
        {mode === "completo" && questions.length > 0 && !submitted && (
          <div className="mt-3 space-y-3">
            <div>
              <div className="mb-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span>Progresso de questões</span>
                <span className="tabular-nums">
                  {answeredCount}/{questions.length}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                  style={{
                    width: `${questions.length ? (answeredCount / questions.length) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span>Tempo</span>
                <span className="tabular-nums">{formatDuration(remaining)}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full transition-[width] duration-1000 ease-linear ${
                    remaining === 0
                      ? "bg-terra"
                      : remaining < 60000
                        ? "bg-terra"
                        : remaining < 300000
                          ? "bg-amber-500"
                          : "bg-foreground"
                  }`}
                  style={{
                    width: `${
                      totalTimeMs
                        ? Math.min(100, (remaining / totalTimeMs) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* time-up warning */}
        {mode === "completo" && questions.length > 0 && !submitted && remaining === 0 && (
          <div className="mt-3 flex items-center gap-3 rounded-lg border border-terra bg-terra/10 px-4 py-3 text-sm font-semibold text-foreground">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-terra text-primary-foreground">
              !
            </span>
            <span>
              O tempo acabou! O simulado será corrigido automaticamente.
            </span>
          </div>
        )}

        {/* report */}
        {report && <ReportPanel report={report} accentText={a.text} />}

        {/* questions */}
        <ol className="mt-6 space-y-5">
          {questions.map((q, i) => (
            <QuestionCard
              key={q.id}
              index={i + 1}
              question={q}
              selected={answers[q.id]}
              submitted={submitted}
              accentSoft={a.soft}
              srsLabel={
                srs[srsKey(examId, q.id)]
                  ? `revisão ${srs[srsKey(examId, q.id)]!.box + 1}`
                  : undefined
              }
              onSelect={(idx) =>
                !submitted && setAnswers((prev) => ({ ...prev, [q.id]: idx }))
              }
            />
          ))}
        </ol>

        {questions.length === 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            {mode === "revisao"
              ? "Nenhuma questão pendente de revisão. Faça um simulado — as questões erradas voltam automaticamente aqui."
              : "Nenhuma questão neste filtro ainda."}
          </p>
        )}

        {questions.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={submit}
              disabled={submitted || answeredCount === 0}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
            >
              {submitted ? "Corrigido" : "Finalizar e corrigir"}
            </button>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Refazer
            </button>
            {submitted && report && (
              <button
                onClick={() => downloadReportPdf(report)}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Exportar relatório em PDF
              </button>
            )}
            {submitted && report && report.wrongIds.length > 0 && (
              <button
                onClick={() => reset({ mode: "revisao" })}
                className="inline-flex items-center justify-center rounded-lg border border-accent bg-accent/10 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/20"
              >
                Iniciar sessão de revisão ({report.wrongIds.length})
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function ReportPanel({
  report,
  accentText,
}: {
  report: ExamReport;
  accentText: string;
}) {
  const weak = weakestSubjects(report);
  return (
    <div className="mt-5 rounded-xl border border-border bg-background/60 p-5">
      <h3 className="text-display text-lg font-bold">Relatório de desempenho</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Stat
          label="Aproveitamento"
          value={`${pct({ correct: report.correct, total: report.total })}%`}
          hint={`${report.correct}/${report.total} questões`}
          valueClass={accentText}
        />
        <Stat
          label="Gerais"
          value={`${pct(report.geral)}%`}
          hint={`${report.geral.correct}/${report.geral.total}`}
        />
        <Stat
          label="Específicas"
          value={`${pct(report.especifica)}%`}
          hint={`${report.especifica.correct}/${report.especifica.total}`}
        />
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Tempo utilizado: {formatDuration(report.durationMs)}
      </p>

      {weak.length > 0 && (
        <div className="mt-4">
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Temas mais fracos
          </h4>
          <ul className="mt-2 space-y-2">
            {weak.map((w) => (
              <li key={w.subject} className="text-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-foreground">{w.subject}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {w.correct}/{w.total} · {w.pct}%
                  </span>
                </div>
                <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-foreground"
                    style={{ width: `${Math.max(2, w.pct)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Metas recomendadas
        </h4>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          {recommendations(report).map((r, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
  valueClass,
}: {
  label: string;
  value: string;
  hint: string;
  valueClass?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="font-display text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <div
        className={`text-display mt-1 text-2xl font-bold tabular-nums ${valueClass ?? ""}`}
      >
        {value}
      </div>
      <div className="text-xs text-muted-foreground">{hint}</div>
    </div>
  );
}

function QuestionCard({
  index,
  question,
  selected,
  submitted,
  accentSoft,
  srsLabel,
  onSelect,
}: {
  index: number;
  question: Question;
  selected: number | undefined;
  submitted: boolean;
  accentSoft: string;
  srsLabel?: string | undefined;
  onSelect: (i: number) => void;
}) {
  const letters = ["A", "B", "C", "D", "E"];
  const isRight = selected === question.answer;

  return (
    <li className="rounded-xl border border-border bg-background/60 p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
          Questão {index}
        </span>
        <span
          className={`rounded-md px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.12em] ${accentSoft}`}
        >
          {question.subject}
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {question.kind === "geral" ? "Geral" : "Específica"}
        </span>
        {srsLabel && (
          <span className="rounded-md border border-border px-2 py-0.5 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {srsLabel}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground">
        {question.statement}
      </p>

      <div className="mt-3 space-y-2">
        {question.options.map((opt, i) => {
          const chosen = selected === i;
          const rightOne = submitted && i === question.answer;
          const wrongChoice = submitted && chosen && i !== question.answer;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              disabled={submitted}
              className={`flex w-full items-start gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                rightOne
                  ? "border-accent bg-accent/10 text-foreground"
                  : wrongChoice
                    ? "border-terra bg-terra/10 text-foreground"
                    : chosen
                      ? "border-foreground bg-secondary text-foreground"
                      : "border-border bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              <span className="font-display text-xs font-bold">
                {letters[i]}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className="mt-3 rounded-lg border border-border bg-card p-3 text-xs leading-relaxed text-muted-foreground">
          <strong className={isRight ? "text-accent" : "text-terra"}>
            {isRight
              ? "Você acertou. "
              : "Resposta correta: " + letters[question.answer] + ". "}
          </strong>
          {question.explanation}
        </div>
      )}
    </li>
  );
}
