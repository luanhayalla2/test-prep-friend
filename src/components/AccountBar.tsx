import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { EXAMS } from "@/lib/exams";
import { readLocalSnapshot, writeLocalSnapshot } from "@/lib/sync-keys";
import { getUserState, saveUserState } from "@/lib/sync.functions";

type Mode = "signin" | "signup";

export function AccountBar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [targetExam, setTargetExam] = useState(EXAMS[0]!.id);
  const [mode, setMode] = useState<Mode>("signin");
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const pulled = useRef(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUserEmail(data.session?.user.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUserEmail(session?.user.email ?? null);
      if (!session) pulled.current = false;
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const push = useCallback(async () => {
    setStatus("enviando…");
    try {
      await saveUserState({ data: { json: JSON.stringify(readLocalSnapshot()) } });
      setStatus(`salvo ${new Date().toLocaleTimeString("pt-BR")}`);
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "erro ao salvar");
    }
  }, []);

  // Puxa o estado da conta ao entrar.
  useEffect(() => {
    if (!userEmail || pulled.current) return;
    pulled.current = true;
    (async () => {
      setStatus("sincronizando…");
      try {
        const remote = await getUserState();
        const parsed = remote.json
          ? (JSON.parse(remote.json) as Record<string, unknown>)
          : null;
        if (parsed && Object.keys(parsed).length > 0) {
          const changed = writeLocalSnapshot(parsed);
          setStatus("progresso restaurado");
          if (changed) window.location.reload();
        } else {
          await push();
        }
      } catch (e) {
        setStatus(e instanceof Error ? e.message : "erro ao sincronizar");
      }
    })();
  }, [userEmail, push]);

  // Auto-salva mudanças locais a cada 20s.
  useEffect(() => {
    if (!userEmail) return;
    let last = JSON.stringify(readLocalSnapshot());
    const id = setInterval(() => {
      const now = JSON.stringify(readLocalSnapshot());
      if (now !== last) {
        last = now;
        void push();
      }
    }, 20000);
    return () => clearInterval(id);
  }, [userEmail, push]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: displayName, target_exam: targetExam },
          },
        });
        if (error) throw error;
        setMsg("Conta criada. Confirme o e-mail para entrar.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        setOpen(false);
        setPassword("");
      }
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Falha na autenticação");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    await push();
    await supabase.auth.signOut();
    setStatus("");
  }

  return (
    <section id="conta" className="mt-14 scroll-mt-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-display text-2xl font-bold sm:text-3xl">Sua conta</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Entre para sincronizar aulas concluídas, metas do plano e melhores
              resultados entre dispositivos.
            </p>
          </div>
          {userEmail ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => void push()}
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                Salvar agora
              </button>
              <button
                onClick={() => void signOut()}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {open ? "Fechar" : "Entrar / Criar conta"}
            </button>
          )}
        </div>

        {userEmail ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Conectado como <strong className="text-foreground">{userEmail}</strong>
            {status ? ` · ${status}` : ""}
          </p>
        ) : null}

        {!userEmail && open ? (
          <form onSubmit={submit} className="mt-6 grid gap-4 sm:max-w-md">
            <div className="flex gap-2">
              {(["signin", "signup"] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-semibold ${
                    mode === m
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {m === "signin" ? "Entrar" : "Criar conta"}
                </button>
              ))}
            </div>

            {mode === "signup" ? (
              <>
                <Field label="Nome de exibição">
                  <input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                    maxLength={80}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  />
                </Field>
                <Field label="Concurso alvo">
                  <select
                    value={targetExam}
                    onChange={(e) => setTargetExam(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                  >
                    {EXAMS.map((ex) => (
                      <option key={ex.id} value={ex.id}>
                        {ex.orgShort} — {ex.role}
                      </option>
                    ))}
                  </select>
                </Field>
              </>
            ) : null}

            <Field label="E-mail">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>
            <Field label="Senha">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                maxLength={72}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
            </Field>

            <button
              type="submit"
              disabled={busy}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
            >
              {busy ? "Aguarde…" : mode === "signin" ? "Entrar" : "Criar conta"}
            </button>
            {msg ? <p className="text-sm text-muted-foreground">{msg}</p> : null}
          </form>
        ) : null}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
