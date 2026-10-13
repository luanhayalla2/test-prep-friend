import { useMemo, useState } from "react";
import { EXAMS, accentMap } from "@/lib/exams";
import { getQuestions, shuffle, type Question } from "@/lib/question-bank";

type Item = {
  id: string;
  subject: string;
  kind: Question["kind"];
  statement: string;
  claim: string;
  isTrue: boolean;
  explanation: string;
  correctText: string;
};

type Choice = "C" | "E";

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Converte questões de múltipla escolha em itens Certo/Errado no estilo Cebraspe. */
function toItems(examId: string, seed: number, size: number): Item[] {
  const all = shuffle(getQuestions(examId), `ce:${examId}:${seed}`).slice(0, size);
  return all.map((q) => {
    const h = hash(`${q.id}:${seed}`);
    const isTrue = h % 2 === 0;
    const wrong = q.options.map((_, i) => i).filter((i) => i !== q.answer);
    const idx = isTrue ? q.answer : wrong[h % wrong.length]!;
    return {
      id: q.id,
      subject: q.subject,
      kind: q.kind,
      statement: q.statement,
      claim: q.options[idx]!,
      isTrue,
      explanation: q.explanation,
      correctText: q.options[q.answer]!,
    };
  });
}

export function CertoErrado() {
  const [examId, setExamId] = useState("cbmma");
  const [size, setSize] = useState(20);
  const [seed, setSeed] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Choice>>({});
  const [submitted, setSubmitted] = useState(false);

  const items = useMemo(() => toItems(examId, seed, size), [examId, seed, size]);

  const restart = (next?: { examId?: string; size?: number }) => {
    if (next?.examId) setExamId(next.examId);
    if (next?.size) setSize(next.size);
    setSeed((s) => s + 1);
    setAnswers({});
    setSubmitted(false);
  };

  let right = 0;
  let wrong = 0;
  for (const it of items) {
    const a = answers[it.id];
    if (!a) continue;
    if ((a === "C") === it.isTrue) right++;
    else wrong++;
  }
  const blank = items.length - right - wrong;
  const net = right - wrong;

  return (
    <section id="certo-errado" className="mt-14 scroll-mt-6">
      <h2 className="font-display text-2xl font-bold tracking-tight">
        Certo ou Errado <span className="text-muted-foreground">· estilo Cebraspe</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Um erro anula um acerto. Deixar em branco não pontua nem desconta — como nas
        provas da PMMA e do CBM-MA.
      </p>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="mb-5 border-l-2 border-accent bg-accent/10 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Itens autorais:</strong> gerados a partir do
          banco inédito do app. Não são itens oficiais do Cebraspe.
        </div>

        <div className="flex flex-wrap gap-2">
          {EXAMS.map((e) => (
            <button
              key={e.id}
              onClick={() => restart({ examId: e.id })}
              className={`rounded-lg border px-3 py-1.5 font-display text-xs font-bold uppercase tracking-[0.12em] ${
                e.id === examId
                  ? `${accentMap[e.accent].badge} border-transparent`
                  : "border-border bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {e.orgShort}
            </button>
          ))}
          <span className="mx-2 self-center text-xs text-muted-foreground">Itens:</span>
          {[20, 40, 60].map((n) => (
            <button
              key={n}
              onClick={() => restart({ size: n })}
              className={`rounded-md border px-3 py-1 text-xs font-semibold ${
                size === n
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:bg-secondary"
              }`}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span>
            Respondidos: <strong>{right + wrong}</strong>/{items.length}
          </span>
          {submitted && (
            <>
              <span className="text-accent">Certos: {right}</span>
              <span className="text-destructive">Errados: {wrong}</span>
              <span className="text-muted-foreground">Em branco: {blank}</span>
              <span>
                Nota líquida: <strong>{net}</strong> / {items.length}
              </span>
            </>
          )}
        </div>

        <ol className="mt-5 space-y-4">
          {items.map((it, i) => {
            const a = answers[it.id];
            const ok = a ? (a === "C") === it.isTrue : null;
            return (
              <li key={it.id} className="rounded-xl border border-border bg-background p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {i + 1} · {it.subject} · {it.kind === "geral" ? "Gerais" : "Específicas"}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{it.statement}</p>
                <p className="mt-2 text-sm font-medium">Item: {it.claim}</p>
                <div className="mt-3 flex gap-2">
                  {(["C", "E"] as const).map((c) => (
                    <button
                      key={c}
                      disabled={submitted}
                      onClick={() =>
                        setAnswers((prev) => {
                          const next = { ...prev };
                          if (next[it.id] === c) delete next[it.id];
                          else next[it.id] = c;
                          return next;
                        })
                      }
                      className={`rounded-md border px-4 py-1 text-xs font-bold ${
                        a === c
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      {c === "C" ? "Certo" : "Errado"}
                    </button>
                  ))}
                </div>
                {submitted && (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    <strong
                      className={
                        ok === null ? "text-foreground" : ok ? "text-accent" : "text-destructive"
                      }
                    >
                      Gabarito: {it.isTrue ? "CERTO" : "ERRADO"}
                      {ok === null ? " (em branco)" : ok ? " · +1" : " · −1"}.
                    </strong>{" "}
                    {!it.isTrue && `Resposta correta: ${it.correctText}. `}
                    {it.explanation}
                  </p>
                )}
              </li>
            );
          })}
        </ol>

        <div className="mt-5 flex gap-2">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Corrigir
            </button>
          ) : (
            <button
              onClick={() => restart()}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Novo bloco
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
