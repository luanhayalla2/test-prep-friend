import { QUESTIONS, type Question } from "./questions";
import { EXTRA_QUESTIONS } from "./questions-extra";
import { MORE_QUESTIONS } from "./questions-more";
import { BATCH4_QUESTIONS } from "./questions-batch4";

export type { Question };

/** Banco completo (base + complementar) por concurso. */
export function getQuestions(examId: string): Question[] {
  return [
    ...(QUESTIONS[examId] ?? []),
    ...(EXTRA_QUESTIONS[examId] ?? []),
    ...(MORE_QUESTIONS[examId] ?? []),
    ...(BATCH4_QUESTIONS[examId] ?? []),
  ].map((question) => ({
    provenance: "autoral" as const,
    sourceLabel: "Inédita · estilo da prova",
    ...question,
  }));
}

export function findQuestion(examId: string, id: string): Question | undefined {
  return getQuestions(examId).find((q) => q.id === id);
}

function hashSeed(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomFromSeed(seed: number) {
  let value = seed;
  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

/** Embaralhamento repetível para manter servidor e navegador em sincronia. */
export function shuffle<T>(arr: T[], seedKey: string): T[] {
  const a = [...arr];
  const random = randomFromSeed(hashSeed(seedKey));
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const tmp = a[i];
    if (tmp === undefined || a[j] === undefined) continue;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a;
}
