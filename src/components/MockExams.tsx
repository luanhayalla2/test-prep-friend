import { useMemo, useState } from "react";
import { EXAMS, accentMap } from "@/lib/exams";
import { QUESTIONS, type Question } from "@/lib/questions";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Answers = Record<string, number>;
type BestScores = Record<string, { correct: number; total: number }>;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}

export function MockExams() {
  const [examId, setExamId] = useState(EXAMS[0]!.id);
  const [filter, setFilter] = useState<"todas" | "geral" | "especifica">("todas");
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [seed, setSeed] = useState(0);
  const { value: best, setValue: setBest } = useLocalStorage<BestScores>(
    "ma-simulado-best",
    {},
  );

  const exam = EXAMS.find((e) => e.id === examId)!;
  const a = accentMap[exam.accent];

  const pool = QUESTIONS[examId] ?? [];
  const questions = useMemo(() => {
    const filtered =
      filter === "todas" ? pool : pool.filter((q) => q.kind === filter);
    return shuffle(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examId, filter, seed]);

  const answeredCount = questions.filter((q) => answers[q.id] != null).length;
  const correct = questions.filter((q) => answers[q.id] === q.answer).length;
  const scorePct = questions.length
    ? Math.round((correct / questions.length) * 100)
    : 0;
  const record = best[`${examId}:${filter}`];

  function reset(nextExam = examId, nextFilter = filter) {
    setExamId(nextExam);
    setFilter(nextFilter);
    setAnswers({});
    setSubmitted(false);
    setSeed((s) => s + 1);
  }

  function submit() {
    setSubmitted(true);
    const key = `${examId}:${filter}`;
    const prev = best[key];
    if (!prev || correct / questions.length > prev.correct / prev.total) {
      setBest({ ...best, [key]: { correct, total: questions.length } });
    }
  }

  return (
    <section id="simulados" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Simulados
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Questões no estilo da banca, com correção e comentário item a item.
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
                onClick={() => reset(e.id, filter)}
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

        {/* filter */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(["todas", "geral", "especifica"] as const).map((f) => (
            <button
              key={f}
              onClick={() => reset(examId, f)}
              className={`rounded-md border px-3 py-1 text-xs font-semibold transition-colors ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
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

        {/* status */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-border bg-background/60 p-4 text-sm">
          <span className="text-muted-foreground">
            Respondidas{" "}
            <strong className="text-foreground">
              {answeredCount}/{questions.length}
            </strong>
          </span>
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
        </div>

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
              onSelect={(idx) =>
                !submitted && setAnswers((prev) => ({ ...prev, [q.id]: idx }))
              }
            />
          ))}
        </ol>

        {questions.length === 0 && (
          <p className="mt-6 text-sm text-muted-foreground">
            Nenhuma questão neste filtro ainda.
          </p>
        )}

        {questions.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={submit}
              disabled={submitted || answeredCount === 0}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40"
            >
              {submitted ? "Corrigido" : "Corrigir simulado"}
            </button>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Refazer
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function QuestionCard({
  index,
  question,
  selected,
  submitted,
  accentSoft,
  onSelect,
}: {
  index: number;
  question: Question;
  selected: number | undefined;
  submitted: boolean;
  accentSoft: string;
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
            {isRight ? "Você acertou. " : "Resposta correta: " + letters[question.answer] + ". "}
          </strong>
          {question.explanation}
        </div>
      )}
    </li>
  );
}
