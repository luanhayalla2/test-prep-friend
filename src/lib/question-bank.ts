import { QUESTIONS, type Question } from "./questions";
import { EXTRA_QUESTIONS } from "./questions-extra";

export type { Question };

/** Banco completo (base + complementar) por concurso. */
export function getQuestions(examId: string): Question[] {
  return [...(QUESTIONS[examId] ?? []), ...(EXTRA_QUESTIONS[examId] ?? [])];
}

export function findQuestion(examId: string, id: string): Question | undefined {
  return getQuestions(examId).find((q) => q.id === id);
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}
