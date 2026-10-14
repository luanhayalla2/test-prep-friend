/** Revisão espaçada simples (estilo Leitner) para as questões erradas. */

export type SrsCard = {
  box: number; // 0 = errada recente, cresce a cada acerto
  due: number; // timestamp
  wrong: number;
  right: number;
  lastResult: "acerto" | "erro";
};

export type SrsState = Record<string, SrsCard>; // key: `${examId}:${questionId}`

const MINUTE = 60_000;
const DAY = 86_400_000;

/** Intervalos por caixa. */
const INTERVALS = [10 * MINUTE, 1 * DAY, 3 * DAY, 7 * DAY, 16 * DAY, 35 * DAY];

export function key(examId: string, questionId: string) {
  return `${examId}:${questionId}`;
}

export function grade(
  state: SrsState,
  examId: string,
  questionId: string,
  correct: boolean,
  now = Date.now(),
): SrsState {
  const k = key(examId, questionId);
  const prev = state[k] ?? {
    box: 0,
    due: now,
    wrong: 0,
    right: 0,
    lastResult: "erro" as const,
  };
  const box = correct ? Math.min(prev.box + 1, INTERVALS.length - 1) : 0;
  return {
    ...state,
    [k]: {
      box,
      due: now + INTERVALS[box]!,
      wrong: prev.wrong + (correct ? 0 : 1),
      right: prev.right + (correct ? 1 : 0),
      lastResult: correct ? "acerto" : "erro",
    },
  };
}

/** Prioridade: erros primeiro, depois vencidas há mais tempo. */
export function dueQueue(
  state: SrsState,
  examId: string,
  ids: string[],
  now = Date.now(),
): string[] {
  return ids
    .map((id) => ({ id, card: state[key(examId, id)] }))
    .filter((e) => e.card && e.card.due <= now)
    .sort((a, b) => {
      const boxDiff = a.card!.box - b.card!.box;
      if (boxDiff !== 0) return boxDiff;
      return a.card!.due - b.card!.due;
    })
    .map((e) => e.id);
}

export function nextReviewAt(
  state: SrsState,
  examId: string,
  ids: string[],
): number | null {
  const times = ids
    .map((id) => state[key(examId, id)]?.due)
    .filter((d): d is number => typeof d === "number");
  return times.length ? Math.min(...times) : null;
}

export function formatDue(ts: number, now = Date.now()): string {
  const diff = ts - now;
  if (diff <= 0) return "agora";
  if (diff < 60 * MINUTE) return `em ${Math.round(diff / MINUTE)} min`;
  if (diff < DAY) return `em ${Math.round(diff / (60 * MINUTE))} h`;
  return `em ${Math.round(diff / DAY)} dia(s)`;
}
