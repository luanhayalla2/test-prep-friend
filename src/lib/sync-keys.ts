/** Chaves do localStorage sincronizadas com a conta. */
export const SYNC_KEYS = [
  "alerts.config",
  "alerts.fired",
  "plan.settings",
  "plan.progress",
  "ma-aulas-concluidas",
  "ma-simulado-best",
  "ma-srs-state",
  "ma-last-report",
] as const;

export function readLocalSnapshot(): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const key of SYNC_KEYS) {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) out[key] = JSON.parse(raw);
    } catch {
      /* ignore */
    }
  }
  return out;
}

export function writeLocalSnapshot(data: Record<string, unknown>): boolean {
  let changed = false;
  for (const key of SYNC_KEYS) {
    if (!(key in data)) continue;
    try {
      const next = JSON.stringify(data[key]);
      if (window.localStorage.getItem(key) !== next) {
        window.localStorage.setItem(key, next);
        changed = true;
      }
    } catch {
      /* ignore */
    }
  }
  return changed;
}
