export type Exam = {
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

export const EXAMS: Exam[] = [
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

export const accentMap = {
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

/** Split geral/específico, com padrão para editais ainda não publicados. */
export function examSplit(exam: Exam): { general: number; specific: number } {
  if (exam.general != null && exam.specific != null) {
    return { general: exam.general, specific: exam.specific };
  }
  return { general: 40, specific: 60 };
}
