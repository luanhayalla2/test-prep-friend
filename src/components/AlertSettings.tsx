import { useEffect, useMemo, useRef, useState } from "react";
import { EXAMS, accentMap, type Exam } from "@/lib/exams";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type AlertRule = { minutes: number; enabled: boolean };
export type AlertConfig = Record<string, AlertRule[]>;

const DEFAULT_OFFSETS = [7 * 24 * 60, 24 * 60, 60];

function defaultConfig(): AlertConfig {
  const cfg: AlertConfig = {};
  for (const e of EXAMS) {
    cfg[e.id] = DEFAULT_OFFSETS.map((m) => ({ minutes: m, enabled: true }));
  }
  return cfg;
}

export function formatOffset(minutes: number) {
  if (minutes % (24 * 60) === 0) {
    const d = minutes / (24 * 60);
    return `${d} ${d === 1 ? "dia" : "dias"} antes`;
  }
  if (minutes % 60 === 0) {
    const h = minutes / 60;
    return `${h} ${h === 1 ? "hora" : "horas"} antes`;
  }
  return `${minutes} min antes`;
}

type Permission = "default" | "granted" | "denied" | "unsupported";

export function AlertSettings() {
  const { value: config, setValue: setConfig, hydrated } =
    useLocalStorage<AlertConfig>("alerts.config", defaultConfig());
  const { value: fired, setValue: setFired } = useLocalStorage<
    Record<string, number>
  >("alerts.fired", {});
  const [permission, setPermission] = useState<Permission>("default");
  const [lastCheck, setLastCheck] = useState<Date | null>(null);
  const firedRef = useRef(fired);
  firedRef.current = fired;

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission as Permission);
  }, []);

  // Motor de alertas: verifica a cada 20s enquanto a página estiver aberta.
  useEffect(() => {
    if (!hydrated) return;
    if (permission !== "granted") return;

    const check = () => {
      const now = Date.now();
      setLastCheck(new Date());
      const newlyFired: Record<string, number> = {};

      for (const exam of EXAMS) {
        const target = new Date(exam.date).getTime();
        for (const rule of config[exam.id] ?? []) {
          if (!rule.enabled) continue;
          const key = `${exam.id}:${rule.minutes}`;
          if (firedRef.current[key]) continue;
          const triggerAt = target - rule.minutes * 60000;
          if (now >= triggerAt && now < target) {
            new Notification(`${exam.orgShort} — ${exam.role}`, {
              body: `Sua prova é em ${formatOffset(rule.minutes).replace(
                " antes",
                "",
              )}. Data: ${exam.dateLabel}.`,
              tag: key,
            });
            newlyFired[key] = now;
          }
        }
      }

      if (Object.keys(newlyFired).length > 0) {
        setFired((prev) => ({ ...prev, ...newlyFired }));
      }
    };

    check();
    const id = setInterval(check, 20000);
    return () => clearInterval(id);
  }, [config, hydrated, permission, setFired]);

  const requestPermission = async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermission(result as Permission);
    if (result === "granted") {
      new Notification("Alertas ativados", {
        body: "Você receberá avisos antes de cada prova enquanto o painel estiver aberto.",
      });
    }
  };

  const toggle = (examId: string, minutes: number) => {
    setConfig((prev) => ({
      ...prev,
      [examId]: (prev[examId] ?? []).map((r) =>
        r.minutes === minutes ? { ...r, enabled: !r.enabled } : r,
      ),
    }));
    setFired((prev) => {
      const next = { ...prev };
      delete next[`${examId}:${minutes}`];
      return next;
    });
  };

  const addRule = (examId: string, minutes: number) => {
    if (!Number.isFinite(minutes) || minutes <= 0) return;
    setConfig((prev) => {
      const list = prev[examId] ?? [];
      if (list.some((r) => r.minutes === minutes)) return prev;
      return {
        ...prev,
        [examId]: [...list, { minutes, enabled: true }].sort(
          (a, b) => b.minutes - a.minutes,
        ),
      };
    });
  };

  const removeRule = (examId: string, minutes: number) => {
    setConfig((prev) => ({
      ...prev,
      [examId]: (prev[examId] ?? []).filter((r) => r.minutes !== minutes),
    }));
  };

  const activeCount = useMemo(
    () =>
      Object.values(config).reduce(
        (acc, list) => acc + list.filter((r) => r.enabled).length,
        0,
      ),
    [config],
  );

  return (
    <section id="alertas" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Alertas de prova
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Escolha com quanta antecedência quer ser avisado de cada concurso.
          </p>
        </div>
        <span className="hidden sm:block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {activeCount} ativos
        </span>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm font-bold">
              Notificações do navegador
            </p>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              {permission === "granted"
                ? "Ativadas. Os avisos disparam enquanto esta página estiver aberta em alguma aba."
                : permission === "denied"
                  ? "Bloqueadas nas configurações do navegador — libere as notificações deste site para receber os avisos."
                  : permission === "unsupported"
                    ? "Este navegador não suporta notificações. Os alertas continuam visíveis aqui na lista."
                    : "Permita as notificações para receber os avisos programados."}
            </p>
            {lastCheck ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Última verificação às{" "}
                {lastCheck.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            ) : null}
          </div>
          {permission !== "granted" && permission !== "unsupported" ? (
            <button
              type="button"
              onClick={requestPermission}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ativar notificações
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {EXAMS.map((exam) => (
          <ExamAlertCard
            key={exam.id}
            exam={exam}
            rules={config[exam.id] ?? []}
            fired={fired}
            onToggle={toggle}
            onAdd={addRule}
            onRemove={removeRule}
          />
        ))}
      </div>
    </section>
  );
}

function ExamAlertCard({
  exam,
  rules,
  fired,
  onToggle,
  onAdd,
  onRemove,
}: {
  exam: Exam;
  rules: AlertRule[];
  fired: Record<string, number>;
  onToggle: (examId: string, minutes: number) => void;
  onAdd: (examId: string, minutes: number) => void;
  onRemove: (examId: string, minutes: number) => void;
}) {
  const a = accentMap[exam.accent];
  const [amount, setAmount] = useState("3");
  const [unit, setUnit] = useState<"minutes" | "hours" | "days">("days");

  const submitCustom = () => {
    const n = Number(amount);
    const factor = unit === "days" ? 1440 : unit === "hours" ? 60 : 1;
    onAdd(exam.id, Math.round(n * factor));
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className={`h-1 w-full ${a.bar}`} />
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] ${a.badge}`}
          >
            {exam.orgShort}
          </span>
          <span className="text-sm font-semibold">{exam.role}</span>
        </div>

        <ul className="flex flex-col gap-2">
          {rules.length === 0 ? (
            <li className="text-sm text-muted-foreground">
              Nenhum alerta configurado para este concurso.
            </li>
          ) : null}
          {rules.map((rule) => {
            const key = `${exam.id}:${rule.minutes}`;
            const sent = Boolean(fired[key]);
            return (
              <li
                key={rule.minutes}
                className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background/60 px-3 py-2"
              >
                <label className="flex flex-1 cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rule.enabled}
                    onChange={() => onToggle(exam.id, rule.minutes)}
                    className="h-4 w-4 accent-[currentColor] text-foreground"
                  />
                  <span className="text-sm">
                    {formatOffset(rule.minutes)}
                    {sent ? (
                      <span className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide bg-muted text-muted-foreground">
                        enviado
                      </span>
                    ) : null}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => onRemove(exam.id, rule.minutes)}
                  aria-label={`Remover alerta ${formatOffset(rule.minutes)}`}
                  className="rounded px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  remover
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center gap-2 border-t border-border pt-4">
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Antecedência"
            className="w-20 rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as typeof unit)}
            aria-label="Unidade"
            className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-sm"
          >
            <option value="minutes">minutos</option>
            <option value="hours">horas</option>
            <option value="days">dias</option>
          </select>
          <button
            type="button"
            onClick={submitCustom}
            className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-muted"
          >
            Adicionar alerta
          </button>
        </div>
      </div>
    </article>
  );
}
