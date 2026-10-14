export type SectionScore = { correct: number; total: number };

export type ExamReport = {
  examId: string;
  examLabel: string;
  mode: "pratica" | "completo" | "revisao";
  finishedAt: number;
  durationMs: number;
  total: number;
  correct: number;
  geral: SectionScore;
  especifica: SectionScore;
  bySubject: Record<string, SectionScore>;
  wrongIds: string[];
};

export function pct(s: SectionScore) {
  return s.total ? Math.round((s.correct / s.total) * 100) : 0;
}

export function weakestSubjects(report: ExamReport, limit = 5) {
  return Object.entries(report.bySubject)
    .map(([subject, s]) => ({ subject, ...s, pct: pct(s) }))
    .sort((a, b) => a.pct - b.pct || b.total - a.total)
    .slice(0, limit);
}

export function recommendations(report: ExamReport): string[] {
  const weak = weakestSubjects(report, 3).filter((w) => w.pct < 80);
  const out: string[] = [];
  const overall = pct({ correct: report.correct, total: report.total });
  out.push(
    overall >= 80
      ? "Desempenho consistente: mantenha o ritmo e aumente o volume de questões inéditas."
      : overall >= 60
        ? "Desempenho intermediário: priorize revisão dirigida das matérias abaixo antes de novos conteúdos."
        : "Desempenho abaixo do alvo: reforce teoria das matérias críticas antes de simulados completos.",
  );
  for (const w of weak) {
    out.push(
      `${w.subject}: ${w.pct}% de acerto — meta de 30 questões e 1 revisão teórica nesta semana.`,
    );
  }
  if (report.wrongIds.length) {
    out.push(
      `${report.wrongIds.length} questão(ões) entraram na fila de revisão espaçada — faça a sessão de revisão sugerida.`,
    );
  }
  return out;
}

export function formatDuration(ms: number) {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h
    ? `${h}h ${String(m).padStart(2, "0")}min`
    : `${m}min ${String(sec).padStart(2, "0")}s`;
}
