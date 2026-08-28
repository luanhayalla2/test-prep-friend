export type Question = {
  id: string;
  subject: string;
  kind: "geral" | "especifica";
  statement: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
};

export const QUESTIONS: Record<string, Question[]> = {
  pmma: [
    {
      id: "pmma-g1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa em que a concordância verbal está correta.",
      options: [
        "Haviam muitos candidatos na sala de prova.",
        "Fazem dois anos que o edital foi publicado.",
        "Existe vagas para diversos cargos.",
        "Houve muitas inscrições para o concurso.",
      ],
      answer: 3,
      explanation:
        "\"Haver\" no sentido de existir é impessoal (\"haviam\" está errado); \"fazer\" indicando tempo decorrido é impessoal (\"fazem\" está errado); \"existir\" é pessoal e concorda com o sujeito, então seria \"existem vagas\". Em \"houve muitas inscrições\", \"haver\" está no sentido de ocorrer — correto como impessoal apenas no sentido de existir; aqui \"houve\" no sentido de acontecer também é impessoal, e a construção está correta.",
    },
    {
      id: "pmma-g2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"O policial, que patrulhava a rua, foi aplaudido\", as vírgulas foram usadas para:",
      options: [
        "Separar o vocativo.",
        "Isolar oração subordinada adjetiva explicativa.",
        "Separar oração subordinada adverbial.",
        "Isolar termo deslocado de valor adverbial.",
      ],
      answer: 1,
      explanation:
        "\"Que patrulhava a rua\" é oração subordinada adjetiva explicativa (generaliza o referente \"o policial\"), e por isso vem entre vírgulas.",
    },
    {
      id: "pmma-g3",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Um quartel tem 240 militares. Se 35% estão escalados para o serviço ostensivo, quantos militares estão nessa escala?",
      options: ["72", "84", "96", "104"],
      answer: 1,
      explanation: "35% de 240 = 0,35 × 240 = 84 militares.",
    },
    {
      id: "pmma-g4",
      subject: "Informática",
      kind: "geral",
      statement:
        "No Windows, o atalho de teclado utilizado para alternar entre janelas abertas é:",
      options: ["Ctrl + Tab", "Alt + Tab", "Shift + Tab", "Ctrl + Esc"],
      answer: 1,
      explanation:
        "Alt + Tab alterna entre as janelas abertas. Ctrl + Tab alterna abas dentro de um mesmo programa.",
    },
    {
      id: "pmma-g5",
      subject: "Atualidades do Maranhão",
      kind: "geral",
      statement: "A capital do estado do Maranhão é:",
      options: ["Imperatriz", "Caxias", "São Luís", "Timon"],
      answer: 2,
      explanation:
        "São Luís, fundada por franceses em 1612, é a capital do Maranhão e seu centro administrativo.",
    },
    {
      id: "pmma-e1",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Segundo a Constituição Federal, às polícias militares e aos corpos de bombeiros militares cabe, ressalvada a competência da União, a função de:",
      options: [
        "Polícia judiciária e apuração de infrações penais.",
        "Polícia ostensiva e preservação da ordem pública.",
        "Defesa da soberania nacional nas fronteiras.",
        "Segurança privada de autoridades estaduais.",
      ],
      answer: 1,
      explanation:
        "Art. 144, § 5º, CF: às PMs e CBMs cabem a polícia ostensiva e a preservação da ordem pública.",
    },
    {
      id: "pmma-e2",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "O crime de desobediência (art. 330 do Código Penal) caracteriza-se por:",
      options: [
        "Resistir fisicamente à prisão em flagrante.",
        "Desobedecer a ordem de funcionário público legalmente competente para dá-la.",
        "Desacatar autoridade com palavras ofensivas.",
        "Impedir ato de ofício governamental com violência.",
      ],
      answer: 1,
      explanation:
        "Art. 330 CP: desobedecer a ordem de funcionário público legalmente competente — pena de detenção. Não exige violência (isso seria resistência, art. 329).",
    },
    {
      id: "pmma-e3",
      subject: "Legislação Institucional",
      kind: "especifica",
      statement:
        "A hierarquia policial-militar fundamenta-se, principalmente, nos princípios da:",
      options: [
        "Legalidade e moralidade.",
        "Disciplina e hierarquia.",
        "Publicidade e eficiência.",
        "Isonomia e proporcionalidade.",
      ],
      answer: 1,
      explanation:
        "Nas instituições militares estaduais, disciplina e hierarquia são os pilares da organização, conforme a Constituição e os estatutos estaduais.",
    },
    {
      id: "pmma-e4",
      subject: "Direitos Humanos",
      kind: "especifica",
      statement:
        "Sobre o uso da força pelos policiais militares, é correto afirmar que:",
      options: [
        "É discricionário e não sofre controle judicial.",
        "Deve observar os princípios da necessidade, proporcionalidade e legalidade.",
        "Pode ser empregada como forma de punição imediata.",
        "Só é admitida após autorização do juiz competente.",
      ],
      answer: 1,
      explanation:
        "O uso da força deve ser excepcional, necessário e proporcional, nos termos da lei e dos tratados de direitos humanos.",
    },
  ],
  cbmma: [
    {
      id: "cbmma-g1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa em que todas as palavras estão grafadas corretamente.",
      options: [
        "Exceção, beneficente, ascensão.",
        "Excessão, beneficiente, ascenção.",
        "Exceção, beneficente, assenção.",
        "Exçeção, beneficiante, ascensão.",
      ],
      answer: 0,
      explanation:
        "As formas corretas são exceção, beneficente e ascensão (ato de subir; \"ascenção\" não existe).",
    },
    {
      id: "cbmma-g2",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Uma guarnição percorreu 150 km em 2 horas e 30 minutos. A velocidade média foi de:",
      options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
      answer: 2,
      explanation: "150 km ÷ 2,5 h = 60 km/h.",
    },
    {
      id: "cbmma-g3",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Na sequência 3, 6, 12, 24, ..., o próximo termo é:",
      options: ["30", "36", "42", "48"],
      answer: 3,
      explanation: "Cada termo é o dobro do anterior: 24 × 2 = 48.",
    },
    {
      id: "cbmma-g4",
      subject: "Informática",
      kind: "geral",
      statement:
        "Qual item é considerado um dispositivo de saída de dados?",
      options: ["Teclado", "Mouse", "Monitor", "Scanner"],
      answer: 2,
      explanation:
        "Monitor é dispositivo de saída (exibe informação); os demais são dispositivos de entrada.",
    },
    {
      id: "cbmma-g5",
      subject: "Atualidades do Maranhão",
      kind: "geral",
      statement:
        "O Parque Nacional dos Lençóis Maranhenses é conhecido principalmente por:",
      options: [
        "Cânions e cachoeiras de águas vermelhas.",
        "Dunas de areia com lagoas de água doce intercaladas.",
        "Formações rochosas com pinturas rupestres.",
        "Extensos manguezais sem vegetação de dunas.",
      ],
      answer: 1,
      explanation:
        "O parque é famoso pelas dunas com lagoas de água doce formadas no período chuvoso, na região de Barreirinhas.",
    },
    {
      id: "cbmma-e1",
      subject: "Prevenção e Combate a Incêndio",
      kind: "especifica",
      statement: "As classes de incêndio são definidas conforme o material em combustão. Incêndio em equipamentos elétricos energizados é classificado como:",
      options: ["Classe A", "Classe B", "Classe C", "Classe D"],
      answer: 2,
      explanation:
        "Classe A: sólidos (madeira, papel). Classe B: líquidos inflamáveis. Classe C: equipamentos elétricos energizados. Classe D: metais pirofóricos.",
    },
    {
      id: "cbmma-e2",
      subject: "Salvamento e Primeiros Socorros",
      kind: "especifica",
      statement:
        "Na avaliação primária de uma vítima, o mnemônico ABCDE refere-se, em primeiro lugar, a:",
      options: [
        "Administrar oxigênio.",
        "Avaliar e garantir a permeabilidade das vias aéreas.",
        "Aplicar desfibrilação precoce.",
        "Analisar sinais de fraturas expostas.",
      ],
      answer: 1,
      explanation:
        "A = Airway (vias aéreas): primeiro passo da avaliação primária é garantir vias aéreas pérvias, seguido de respiração, circulação, déficit neurológico e exposição.",
    },
    {
      id: "cbmma-e3",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "De acordo com o art. 144 da Constituição Federal, os corpos de bombeiros militares são:",
      options: [
        "Órgãos da administração direta federal.",
        "Forças auxiliares e reserva do Exército.",
        "Subordinados ao Ministério da Justiça.",
        "Autarquias de regime especial dos estados.",
      ],
      answer: 1,
      explanation:
        "Art. 144, § 6º, CF: PMs e CBMs são forças auxiliares e reserva do Exército, subordinando-se aos governos estaduais.",
    },
    {
      id: "cbmma-e4",
      subject: "Noções de Física Aplicada ao Incêndio",
      kind: "especifica",
      statement:
        "O método de extinção de incêndio que consiste em eliminar o material combustível da área atingida é o:",
      options: [
        "Abafamento.",
        "Resfriamento.",
        "Retirada de material.",
        "Inibição da reação em cadeia.",
      ],
      answer: 2,
      explanation:
        "Retirada do material combustível (ex.: isolamento da área) elimina um dos elementos do tetraedro do fogo, extinguindo o incêndio.",
    },
  ],
  tcema: [
    {
      id: "tcema-g1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa em que o emprego do sinal indicativo de crase está correto.",
      options: [
        "Refiro-me à questão levantada na reunião.",
        "Ele se dirigiu à V. Exa. com respeito.",
        "O servidor chegou à pé ao trabalho.",
        "Entregou o relatório à ele em mãos.",
      ],
      answer: 0,
      explanation:
        "\"Referir-se a\" + \"a questão\" gera crase (à). Não há crase antes de pronome de tratamento (exceto senhora/madame/dona), antes de palavra masculina (a pé) nem antes de pronome pessoal (a ele).",
    },
    {
      id: "tcema-g2",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Se todo técnico é pontual e alguns servidores são técnicos, então:",
      options: [
        "Todo servidor é pontual.",
        "Nenhum servidor é pontual.",
        "Alguns servidores são pontuais.",
        "Todo pontual é técnico.",
      ],
      answer: 2,
      explanation:
        "Se alguns servidores são técnicos e todo técnico é pontual, esses servidores (que são técnicos) são pontuais: logo, alguns servidores são pontuais.",
    },
    {
      id: "tcema-g3",
      subject: "Informática",
      kind: "geral",
      statement:
        "No Microsoft Excel, a função que retorna a média aritmética de um intervalo de células é:",
      options: ["=SOMA()", "=MÉDIA()", "=SE()", "=MÁXIMO()"],
      answer: 1,
      explanation:
        "=MÉDIA(A1:A10) calcula a média aritmética do intervalo. =SOMA soma; =MÁXIMO retorna o maior valor.",
    },
    {
      id: "tcema-g4",
      subject: "Atualidades do Maranhão",
      kind: "geral",
      statement:
        "O Centro Histórico de São Luís, reconhecido como Patrimônio Mundial pela UNESCO, é conhecido por:",
      options: [
        "Suas construções em estilo gótico.",
        "O maior conjunto de sobrados com azulejos portugueses da América Latina.",
        "As muralhas medievais do período colonial.",
        "As igrejas barrocas com ouro de Minas Gerais.",
      ],
      answer: 1,
      explanation:
        "São Luís foi reconhecida pela UNESCO em 1997 pelo conjunto arquitetônico colonial, com fachadas revestidas de azulejos portugueses.",
    },
    {
      id: "tcema-e1",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "O Tribunal de Contas do Estado, no exercício de suas atribuições, presta auxílio ao Poder:",
      options: ["Executivo", "Legislativo", "Judiciário", "Eleitoral"],
      answer: 1,
      explanation:
        "Os Tribunais de Contas auxiliam o Poder Legislativo no controle externo da administração pública (art. 71 e 75, CF).",
    },
    {
      id: "tcema-e2",
      subject: "Administração Pública",
      kind: "especifica",
      statement:
        "São princípios expressos da Administração Pública previstos no art. 37 da Constituição Federal:",
      options: [
        "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        "Legalidade, finalidade, razoabilidade e proporcionalidade.",
        "Supremacia do interesse público e presunção de legitimidade.",
        "Autotutela, hierarquia e disciplina.",
      ],
      answer: 0,
      explanation:
        "O caput do art. 37, CF, lista o famoso LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.",
    },
    {
      id: "tcema-e3",
      subject: "Controle Externo",
      kind: "especifica",
      statement:
        "A fiscalização contábil, financeira, orçamentária, operacional e patrimonial dos órgãos e entidades da administração pública estadual é exercida, quanto à legalidade, legitimidade e economicidade, pelo:",
      options: [
        "Poder Executivo, com exclusividade.",
        "Controle interno de cada Poder, com auxílio do Tribunal de Contas.",
        "Ministério Público Estadual.",
        "Tribunal de Justiça do Estado.",
      ],
      answer: 1,
      explanation:
        "O controle externo é exercido pelo Legislativo com o auxílio do TCE, integrando-se ao sistema de controle interno de cada Poder (art. 74 e 75, CF).",
    },
    {
      id: "tcema-e4",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "O ato administrativo que possui vício de competência:",
      options: [
        "É sempre nulo e insanável.",
        "Pode, em regra, ser convalidado, desde que a competência não seja exclusiva.",
        "Somente pode ser anulado pelo Poder Judiciário.",
        "Prescreve em cinco anos.",
      ],
      answer: 1,
      explanation:
        "Vício de competência admite convalidação, exceto quando a competência é exclusiva de determinado órgão ou autoridade.",
    },
  ],
  pcma: [
    {
      id: "pcma-g1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.",
      options: [
        "Prefiro mais o estudo teórico do que a prática.",
        "Assisti o filme indicado pelo professor.",
        "Ele obedeceu às determinações do superior.",
        "Namoro ela há dois anos.",
      ],
      answer: 2,
      explanation:
        "\"Obedecer\" é transitivo indireto (obedecer a alguém). \"Preferir\" não aceita \"mais\"; \"assistir\" (ver) exige preposição; \"namorar\" é transitivo indireto.",
    },
    {
      id: "pcma-g2",
      subject: "Informática",
      kind: "geral",
      statement:
        "O tipo de malware que sequestra dados da vítima por criptografia e exige pagamento para a liberação é o:",
      options: ["Spyware", "Ransomware", "Adware", "Worm"],
      answer: 1,
      explanation:
        "Ransomware criptografa arquivos e exige resgate (geralmente em criptomoeda) para devolver o acesso.",
    },
    {
      id: "pcma-g3",
      subject: "Atualidades do Maranhão",
      kind: "geral",
      statement:
        "A cidade maranhense conhecida como \"Princesa do Sertão\" é:",
      options: ["Caxias", "Barra do Corda", "Grajaú", "Codó"],
      answer: 0,
      explanation:
        "Caxias, no leste maranhense, é conhecida como \"Princesa do Sertão\" e marco histórico da Balaiada.",
    },
    {
      id: "pcma-g4",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "A negação da proposição \"Todos os investigadores compareceram à reunião\" é:",
      options: [
        "Nenhum investigador compareceu à reunião.",
        "Pelo menos um investigador não compareceu à reunião.",
        "Todos os investigadores faltaram à reunião.",
        "Alguns investigadores compareceram à reunião.",
      ],
      answer: 1,
      explanation:
        "A negação de \"todo A é B\" é \"existe (pelo menos um) A que não é B\".",
    },
    {
      id: "pcma-e1",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Segundo o art. 144, § 4º, da Constituição Federal, às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de:",
      options: [
        "Polícia ostensiva e preservação da ordem pública.",
        "Polícia judiciária e apuração de infrações penais, exceto as militares.",
        "Polícia de fronteira e fiscalização aduaneira.",
        "Perícia técnica e identificação civil, com exclusividade.",
      ],
      answer: 1,
      explanation:
        "Art. 144, § 4º, CF: às polícias civis incumbem as funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
    },
    {
      id: "pcma-e2",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "A tentativa, no direito penal brasileiro, configura-se quando:",
      options: [
        "O agente pensa em cometer o crime, mas desiste.",
        "Iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente.",
        "O agente pratica todos os atos necessários à consumação, mas o resultado não ocorre por erro de tipo.",
        "O crime se consuma com resultado diverso do pretendido.",
      ],
      answer: 1,
      explanation:
        "Art. 14, II, CP: tentativa ocorre quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente.",
    },
    {
      id: "pcma-e3",
      subject: "Direito Processual Penal",
      kind: "especifica",
      statement:
        "O inquérito policial, em regra, é um procedimento:",
      options: [
        "Judicial e contraditório.",
        "Administrativo, escrito e inquisitivo.",
        "Presidido pelo juiz de garantias.",
        "Indispensável ao oferecimento da denúncia.",
      ],
      answer: 1,
      explanation:
        "O inquérito é procedimento administrativo, escrito, sigiloso e inquisitivo (sem contraditório). É dispensável para a denúncia, servindo de peça informativa.",
    },
    {
      id: "pcma-e4",
      subject: "Criminologia",
      kind: "especifica",
      statement:
        "A vertente da criminologia que estuda a vítima, seu papel e sua relação com o crime é denominada:",
      options: ["Etiologia criminal", "Vitimologia", "Penologia", "Antropologia criminal"],
      answer: 1,
      explanation:
        "A vitimologia (ou vítimo-criminologia) estuda a vítima, sua personalidade e sua contribuição para a gênese do crime.",
    },
  ],
};
