import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Concursos do Maranhão 2026 — Contagem regressiva" },
      {
        name: "description",
        content:
          "Contagem regressiva para os concursos do Maranhão 2026: PMMA Soldado, CBM-MA Praça Combatente, TCE-MA Técnico Administrativo e PCMA Oficial Investigador.",
      },
      { property: "og:title", content: "Concursos do Maranhão 2026 — Contagem regressiva" },
      {
        property: "og:description",
        content:
          "Acompanhe a contagem regressiva para PMMA, CBM-MA, TCE-MA e PCMA 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Exam = {
  id: string;
  org: string;
  orgShort: string;
  role: string;
  date: string; // ISO date (UTC noon to avoid TZ edge)
  dateLabel: string;
  status: "confirmed" | "expected";
  totalQuestions?: number;
  general?: number;
  specific?: number;
  education?: string;
  note?: string;
  accent: "ochre" | "terra" | "ink" | "accent";
};

const EXAMS: Exam[] = [
  {
    id: "pmma",
    org: "Polícia Militar do Maranhão",
    orgShort: "PMMA",
    role: "Soldado QP",
    date: "2026-10-11T12:00:00Z",
    dateLabel: "11 de outubro de 2026",
    status: "confirmed",
    totalQuestions: 120,
    general: 50,
    specific: 70,
    accent: "terra",
  },
  {
    id: "cbmma",
    org: "Corpo de Bombeiros Militar do Maranhão",
    orgShort: "CBM-MA",
    role: "Praça Combatente QPBM-0",
    date: "2026-10-18T12:00:00Z",
    dateLabel: "18 de outubro de 2026",
    status: "confirmed",
    totalQuestions: 100,
    general: 30,
    specific: 70,
    accent: "ochre",
  },
  {
    id: "tcema",
    org: "Tribunal de Contas do Estado do Maranhão",
    orgShort: "TCE-MA",
    role: "Técnico Administrativo",
    date: "2026-11-22T12:00:00Z",
    dateLabel: "22 de novembro de 2026",
    status: "expected",
    accent: "ink",
  },
  {
    id: "pcma",
    org: "Polícia Civil do Maranhão",
    orgShort: "PCMA",
    role: "Oficial Investigador",
    date: "2026-12-06T12:00:00Z",
    dateLabel: "06 de dezembro de 2026",
    status: "expected",
    education: "Nível superior",
    accent: "accent",
  },
];

const accentMap = {
  ochre: {
    badge: "bg-ochre text-ochre-foreground",
    ring: "ring-ochre/40",
    bar: "bg-ochre",
    text: "text-ochre",
    soft: "bg-ochre/10 text-ochre",
  },
  terra: {
    badge: "bg-terra text-terra-foreground",
    ring: "ring-terra/40",
    bar: "bg-terra",
    text: "text-terra",
    soft: "bg-terra/10 text-terra",
  },
  ink: {
    badge: "bg-ink text-background",
    ring: "ring-foreground/30",
    bar: "bg-foreground",
    text: "text-foreground",
    soft: "bg-foreground/10 text-foreground",
  },
  accent: {
    badge: "bg-accent text-accent-foreground",
    ring: "ring-accent/40",
    bar: "bg-accent",
    text: "text-accent",
    soft: "bg-accent/10 text-accent",
  },
} as const;

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function getTimeLeft(target: string): TimeLeft {
  const now = Date.now();
  const then = new Date(target).getTime();
  const total = Math.max(0, then - now);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total % 86400000) / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  return { days, hours, minutes, seconds, total };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <main className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <ExamBoard />
        <Legend />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-pulse-dot absolute inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Edital 2026 · Maranhão
          </span>
        </div>

        <h1 className="text-display mt-6 text-4xl font-bold leading-[1.02] sm:text-6xl">
          Concursos do <span className="text-accent">Maranhão</span>
          <br />
          <span className="text-muted-foreground">contagem regressiva</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Quatro seleções em sequência entre outubro e dezembro de 2026.
          Acompanhe quantos dias restam para cada prova — com o detalhamento de
          itens e os requisitos de cada cargo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#provas"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ver as provas
          </a>
          <a
            href="#legenda"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Como ler este painel
          </a>
        </div>
      </div>
    </header>
  );
}

function ExamBoard() {
  return (
    <section id="provas" className="mt-14 scroll-mt-6">
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-display text-2xl font-bold sm:text-3xl">
            Calendário de provas
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Atualizado em tempo real — datas em horário de Brasília.
          </p>
        </div>
        <span className="hidden sm:block font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          4 seleções
        </span>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {EXAMS.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
}

function ExamCard({ exam }: { exam: Exam }) {
  const a = accentMap[exam.accent];
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(exam.date));
    const id = setInterval(() => setTime(getTimeLeft(exam.date)), 1000);
    return () => clearInterval(id);
  }, [exam.date]);

  const isExpected = exam.status === "expected";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card card-rule transition-shadow hover:shadow-md ${a.ring} ring-1`}
    >
      <div className={`h-1 w-full ${a.bar}`} />

      <div className="flex flex-col gap-6 p-6 sm:p-7">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-md px-2 py-0.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] ${a.badge}`}
              >
                {exam.orgShort}
              </span>
              <span
                className={`inline-flex items-center rounded-md border border-border px-2 py-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.12em] ${
                  isExpected
                    ? "bg-muted text-muted-foreground"
                    : "bg-background text-foreground"
                }`}
              >
                {isExpected ? "Data prevista" : "Data confirmada"}
              </span>
            </div>
            <h3 className="text-display mt-3 text-xl font-bold leading-tight sm:text-2xl">
              {exam.role}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{exam.org}</p>
          </div>
        </div>

        {/* countdown */}
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Faltam
            </span>
            <span className="text-xs text-muted-foreground">
              {exam.dateLabel}
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            <TimeUnit value={time?.days ?? 0} label="dias" emphasis />
            <TimeUnit value={time?.hours ?? 0} label="horas" />
            <TimeUnit value={time?.minutes ?? 0} label="min" />
            <TimeUnit value={time?.seconds ?? 0} label="seg" />
          </div>
          <ProgressBar total={time?.total ?? 0} accentClass={a.bar} />
        </div>

        {/* details */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {exam.totalQuestions ? (
            <Detail icon="qty" label={`${exam.totalQuestions} itens`} />
          ) : null}
          {exam.general != null && exam.specific != null ? (
            <Detail
              icon="split"
              label={`${exam.general} gerais · ${exam.specific} específicas`}
            />
          ) : null}
          {exam.education ? (
            <Detail icon="edu" label={exam.education} />
          ) : null}
        </div>
      </div>
    </article>
  );
}

function TimeUnit({
  value,
  label,
  emphasis,
}: {
  value: number;
  label: string;
  emphasis?: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={`text-display tabular-nums leading-none ${
          emphasis ? "text-3xl font-bold sm:text-4xl" : "text-2xl font-semibold"
        }`}
      >
        {emphasis ? value : pad(value)}
      </div>
      <div className="mt-1 font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function ProgressBar({
  total,
  accentClass,
}: {
  total: number;
  accentClass: string;
}) {
  // Show a rough "urgency" bar: full = far away, shrinks as approaches.
  // Reference span: ~100 days out = full; 0 days = empty.
  const days = total / 86400000;
  const pct = Math.min(100, Math.max(2, (days / 100) * 100));
  return (
    <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
      <div
        className={`h-full rounded-full ${accentClass} transition-all duration-1000`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function Detail({
  icon,
  label,
}: {
  icon: "qty" | "split" | "edu";
  label: string;
}) {
  const glyphs: Record<string, string> = {
    qty: "§Ã§",
    split: "Ã¢",
    edu: "Ã©",
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span className={`text-foreground`} aria-hidden>
        {glyphs[icon]}
      </span>
      <span>{label}</span>
    </span>
  );
}

function Legend() {
  return (
    <section id="legenda" className="mt-14 scroll-mt-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
        <h2 className="text-display text-lg font-bold sm:text-xl">
          Como ler este painel
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-foreground">Data confirmada</strong> —
              o edital já fixou o dia da prova. <strong className="text-foreground">Data prevista</strong> —
              data esperada segundo o cronograma do banca/órgão, sujeita a
              alteração até a publicação do edital.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" />
            <span>
              A contagem regressiva atualiza a cada segundo. A barra sob os
              números indica a urgência: quanto mais curta, mais próxima a
              prova.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terra" />
            <span>
              Para PMMA e CBM-MA, o detalhamento separa itens de
              conhecimentos gerais e específicos conforme o edital.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
            <span>
              Confirme sempre o edital oficial do órgão. Este painel é um
              auxílio de estudo, não substitui a fonte oficial.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
        <p className="text-sm text-muted-foreground">
          Concursos do Maranhão 2026 — painel de contagem regressiva.
        </p>
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          PMMA · CBM-MA · TCE-MA · PCMA
        </p>
      </div>
    </footer>
  );
}
