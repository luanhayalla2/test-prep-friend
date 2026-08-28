export type LessonTrack = {
  examId: string;
  subjects: { name: string; query: string; kind: "geral" | "especifica" }[];
};

const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

const qc = (q: string) =>
  `https://www.qconcursos.com/questoes-de-concursos/disciplinas?search=${encodeURIComponent(q)}`;

export function ytSearch(q: string) {
  return yt(q);
}
export function qcSearch(q: string) {
  return qc(q);
}

export const LESSON_TRACKS: LessonTrack[] = [
  {
    examId: "pmma",
    subjects: [
      { name: "Língua Portuguesa", query: "língua portuguesa para concursos PM aula", kind: "geral" },
      { name: "Matemática e Raciocínio Lógico", query: "matemática raciocínio lógico concurso PM aula", kind: "geral" },
      { name: "Informática", query: "informática para concursos aula completa", kind: "geral" },
      { name: "Atualidades do Maranhão", query: "história e geografia do Maranhão para concursos", kind: "geral" },
      { name: "Direito Constitucional", query: "direito constitucional art 144 PM concurso aula", kind: "especifica" },
      { name: "Direito Penal e Processual Penal", query: "direito penal para polícia militar aula", kind: "especifica" },
      { name: "Legislação Institucional PMMA", query: "estatuto PMMA legislação policial militar Maranhão aula", kind: "especifica" },
      { name: "Direitos Humanos e Cidadania", query: "direitos humanos para concursos policiais aula", kind: "especifica" },
    ],
  },
  {
    examId: "cbmma",
    subjects: [
      { name: "Língua Portuguesa", query: "língua portuguesa para concursos bombeiros aula", kind: "geral" },
      { name: "Matemática e Raciocínio Lógico", query: "matemática para concurso bombeiro militar aula", kind: "geral" },
      { name: "Informática", query: "informática para concursos aula completa", kind: "geral" },
      { name: "Atualidades do Maranhão", query: "história e geografia do Maranhão para concursos", kind: "geral" },
      { name: "Prevenção e Combate a Incêndio", query: "combate a incêndio classes de fogo aula bombeiros", kind: "especifica" },
      { name: "Salvamento e APH", query: "atendimento pré-hospitalar APH bombeiros aula", kind: "especifica" },
      { name: "Física e Química do Incêndio", query: "física química do incêndio tetraedro do fogo aula", kind: "especifica" },
      { name: "Direito Constitucional", query: "direito constitucional art 144 bombeiro militar aula", kind: "especifica" },
    ],
  },
  {
    examId: "tcema",
    subjects: [
      { name: "Língua Portuguesa", query: "língua portuguesa para concursos aula completa", kind: "geral" },
      { name: "Raciocínio Lógico", query: "raciocínio lógico para concursos aula", kind: "geral" },
      { name: "Informática", query: "informática para concursos aula completa", kind: "geral" },
      { name: "Atualidades do Maranhão", query: "história e geografia do Maranhão para concursos", kind: "geral" },
      { name: "Direito Constitucional", query: "direito constitucional art 71 tribunal de contas aula", kind: "especifica" },
      { name: "Direito Administrativo", query: "direito administrativo para concursos aula", kind: "especifica" },
      { name: "Administração Pública", query: "administração pública princípios concurso aula", kind: "especifica" },
      { name: "Controle Externo / TCE", query: "controle externo tribunal de contas estadual aula concurso", kind: "especifica" },
    ],
  },
  {
    examId: "pcma",
    subjects: [
      { name: "Língua Portuguesa", query: "língua portuguesa para concursos policiais aula", kind: "geral" },
      { name: "Informática", query: "informática para concursos aula completa", kind: "geral" },
      { name: "Raciocínio Lógico", query: "raciocínio lógico para concursos aula", kind: "geral" },
      { name: "Atualidades do Maranhão", query: "história e geografia do Maranhão para concursos", kind: "geral" },
      { name: "Direito Penal", query: "direito penal para polícia civil aula", kind: "especifica" },
      { name: "Direito Processual Penal", query: "direito processual penal inquérito policial aula", kind: "especifica" },
      { name: "Direito Constitucional", query: "direito constitucional art 144 polícia civil aula", kind: "especifica" },
      { name: "Criminologia", query: "criminologia para concurso polícia civil aula", kind: "especifica" },
    ],
  },
];
