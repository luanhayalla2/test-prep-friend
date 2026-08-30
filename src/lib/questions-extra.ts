import type { Question } from "./questions";

/** Banco complementar de questões, por concurso. */
export const EXTRA_QUESTIONS: Record<string, Question[]> = {
  pmma: [
    {
      id: "pmma-x1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa em que a crase foi empregada corretamente.",
      options: [
        "O soldado dirigiu-se à pé até o quartel.",
        "Entregou o relatório à comandante da unidade.",
        "Começou à trabalhar cedo.",
        "Refiro-me à ela.",
      ],
      answer: 1,
      explanation:
        "Não há crase antes de palavra masculina (\"a pé\"), antes de verbo (\"a trabalhar\") nem antes de pronome pessoal (\"a ela\"). Em \"à comandante\" há fusão da preposição com o artigo feminino — uso correto.",
    },
    {
      id: "pmma-x2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Os policiais agiram rapidamente\", a palavra destacada \"rapidamente\" é:",
      options: [
        "Adjetivo, pois qualifica o substantivo.",
        "Advérbio de modo, pois indica como a ação ocorreu.",
        "Pronome indefinido.",
        "Conjunção coordenativa.",
      ],
      answer: 1,
      explanation:
        "Advérbios em -mente formados de adjetivos indicam circunstância; aqui, o modo da ação verbal \"agiram\".",
    },
    {
      id: "pmma-x3",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Um efetivo de 240 policiais será dividido em equipes de 15. Quantas equipes serão formadas?",
      options: ["14", "15", "16", "18"],
      answer: 2,
      explanation: "240 ÷ 15 = 16 equipes completas.",
    },
    {
      id: "pmma-x4",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Se \"todo soldado é servidor público\" e \"João é soldado\", conclui-se logicamente que:",
      options: [
        "João pode não ser servidor público.",
        "João é servidor público.",
        "Todo servidor público é soldado.",
        "Nenhuma conclusão é possível.",
      ],
      answer: 1,
      explanation:
        "É um silogismo válido (modus ponens categórico): o particular pertence ao conjunto maior. A recíproca (\"todo servidor é soldado\") não é válida.",
    },
    {
      id: "pmma-x5",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Segundo a CF/88, as polícias militares e os corpos de bombeiros militares são forças:",
      options: [
        "Auxiliares e reserva do Exército, subordinadas aos Governadores.",
        "Subordinadas diretamente ao Presidente da República.",
        "Vinculadas ao Poder Judiciário estadual.",
        "Órgãos do Ministério Público estadual.",
      ],
      answer: 0,
      explanation:
        "Art. 144, §6º da CF/88: polícias militares e bombeiros militares são forças auxiliares e reserva do Exército, subordinados aos Governadores dos Estados, DF e Territórios.",
    },
    {
      id: "pmma-x6",
      subject: "Direitos Humanos",
      kind: "especifica",
      statement:
        "Sobre o uso da força pelo agente de segurança pública, é correto afirmar que deve observar:",
      options: [
        "Apenas o critério de eficácia da ação.",
        "Legalidade, necessidade, proporcionalidade, moderação e conveniência.",
        "Livre arbítrio do agente em serviço.",
        "Autorização judicial prévia em qualquer hipótese.",
      ],
      answer: 1,
      explanation:
        "Os princípios internacionais e a Portaria Interministerial 4.226/2010 fixam legalidade, necessidade, proporcionalidade, moderação e conveniência como balizas do uso diferenciado da força.",
    },
    {
      id: "pmma-x7",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "O agente que, em serviço, pratica lesão corporal ao exceder dolosamente os limites do uso da força responde por:",
      options: [
        "Nada, por estar em estrito cumprimento do dever legal.",
        "Excesso doloso, respondendo pelo crime praticado.",
        "Apenas falta disciplinar administrativa.",
        "Crime culposo, sempre.",
      ],
      answer: 1,
      explanation:
        "Art. 23, parágrafo único, do CP: o agente responde pelo excesso doloso ou culposo, mesmo quando havia causa excludente de ilicitude no início da conduta.",
    },
    {
      id: "pmma-x8",
      subject: "Legislação Institucional",
      kind: "especifica",
      statement:
        "A hierarquia e a disciplina, bases institucionais das corporações militares estaduais, significam, respectivamente:",
      options: [
        "Ordenação da autoridade em graus e rigorosa observância das normas.",
        "Igualdade entre os postos e liberdade de conduta.",
        "Antiguidade de serviço e tempo de curso.",
        "Regime de trabalho e escala de serviço.",
      ],
      answer: 0,
      explanation:
        "Hierarquia é a ordenação da autoridade em níveis (postos e graduações); disciplina é a rigorosa observância das leis, regulamentos e ordens legítimas.",
    },
  ],
  cbmma: [
    {
      id: "cbmma-x1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a frase em que há erro de regência verbal.",
      options: [
        "Assisti ao treinamento de salvamento.",
        "Obedeceu à ordem do comandante.",
        "Prefiro treinar do que descansar.",
        "Aspirava ao posto de sargento.",
      ],
      answer: 2,
      explanation:
        "\"Preferir\" exige a estrutura \"preferir A a B\": \"Prefiro treinar a descansar\". As demais estão corretas.",
    },
    {
      id: "cbmma-x2",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Uma mangueira despeja 250 litros por minuto. Quantos litros em 12 minutos?",
      options: ["2.500 L", "2.750 L", "3.000 L", "3.250 L"],
      answer: 2,
      explanation: "250 × 12 = 3.000 litros.",
    },
    {
      id: "cbmma-x3",
      subject: "Atualidades",
      kind: "geral",
      statement:
        "A Defesa Civil, no sistema brasileiro de proteção, atua principalmente em:",
      options: [
        "Investigação criminal de incêndios.",
        "Prevenção, preparação, resposta e recuperação diante de desastres.",
        "Fiscalização tributária de municípios.",
        "Julgamento de infrações ambientais.",
      ],
      answer: 1,
      explanation:
        "A Política Nacional de Proteção e Defesa Civil (Lei 12.608/2012) organiza a atuação nos eixos prevenção, mitigação, preparação, resposta e recuperação.",
    },
    {
      id: "cbmma-x4",
      subject: "Combate a Incêndio",
      kind: "especifica",
      statement:
        "O método de extinção por abafamento atua sobre qual elemento do triângulo do fogo?",
      options: ["Calor", "Comburente (oxigênio)", "Combustível", "Reação em cadeia"],
      answer: 1,
      explanation:
        "Abafamento reduz a concentração de oxigênio; resfriamento retira calor; isolamento retira combustível; extinção química quebra a reação em cadeia.",
    },
    {
      id: "cbmma-x5",
      subject: "Combate a Incêndio",
      kind: "especifica",
      statement:
        "Incêndio em equipamentos elétricos energizados é classificado como:",
      options: ["Classe A", "Classe B", "Classe C", "Classe D"],
      answer: 2,
      explanation:
        "Classe A: sólidos comuns; B: líquidos/gases inflamáveis; C: equipamentos energizados; D: metais pirofóricos.",
    },
    {
      id: "cbmma-x6",
      subject: "Primeiros Socorros",
      kind: "especifica",
      statement:
        "Na RCP em adulto por socorrista leigo, a frequência de compressões recomendada é de:",
      options: [
        "60 a 80 por minuto",
        "100 a 120 por minuto",
        "140 a 160 por minuto",
        "40 a 60 por minuto",
      ],
      answer: 1,
      explanation:
        "As diretrizes atuais recomendam 100 a 120 compressões por minuto, com profundidade de 5 a 6 cm e mínima interrupção.",
    },
    {
      id: "cbmma-x7",
      subject: "Salvamento",
      kind: "especifica",
      statement:
        "Na avaliação primária de uma vítima de trauma, a sequência de prioridades segue:",
      options: [
        "Circulação, vias aéreas, respiração.",
        "Segurança da cena, vias aéreas com controle cervical, respiração e circulação.",
        "Transporte imediato antes de qualquer avaliação.",
        "Entrevista com testemunhas e depois avaliação.",
      ],
      answer: 1,
      explanation:
        "Garante-se primeiro a segurança da cena e do socorrista; em seguida o XABCDE, com controle da coluna cervical no manejo das vias aéreas.",
    },
    {
      id: "cbmma-x8",
      subject: "Produtos Perigosos",
      kind: "especifica",
      statement:
        "O painel de segurança laranja em veículos de transporte de produtos perigosos indica:",
      options: [
        "A placa do veículo e o estado de origem.",
        "O número de risco e o número ONU do produto.",
        "O peso bruto total da carga.",
        "A validade do licenciamento ambiental.",
      ],
      answer: 1,
      explanation:
        "No painel laranja, o número superior é o código de risco e o inferior é o número ONU, que identifica o produto transportado.",
    },
  ],
  tcema: [
    {
      id: "tcema-x1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em redação oficial, o padrão exigido pelo Manual de Redação da Presidência é:",
      options: [
        "Linguagem rebuscada e literária.",
        "Clareza, concisão, impessoalidade e uso do padrão culto.",
        "Uso frequente de gírias para aproximação.",
        "Emprego livre de abreviações.",
      ],
      answer: 1,
      explanation:
        "Os atributos da redação oficial são clareza, precisão, objetividade, concisão, coesão, impessoalidade, formalidade e uso do padrão culto da língua.",
    },
    {
      id: "tcema-x2",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "A negação de \"todos os processos foram julgados\" é:",
      options: [
        "Nenhum processo foi julgado.",
        "Pelo menos um processo não foi julgado.",
        "Todos os processos não foram julgados.",
        "Alguns processos foram julgados.",
      ],
      answer: 1,
      explanation:
        "A negação de um quantificador universal é o existencial da negação: existe ao menos um caso contrário.",
    },
    {
      id: "tcema-x3",
      subject: "Informática",
      kind: "geral",
      statement:
        "Em uma planilha, a fórmula =SOMA(A1:A5) retorna:",
      options: [
        "A média dos valores de A1 a A5.",
        "A soma dos valores do intervalo A1 até A5.",
        "A contagem de células preenchidas.",
        "O maior valor do intervalo.",
      ],
      answer: 1,
      explanation:
        "SOMA soma o intervalo; MÉDIA calcula a média; CONT.NÚM conta; MÁXIMO retorna o maior valor.",
    },
    {
      id: "tcema-x4",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "São princípios expressos da Administração Pública no art. 37 da CF/88:",
      options: [
        "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        "Legalidade, celeridade, autotutela e economicidade.",
        "Supremacia, razoabilidade, motivação e segurança jurídica.",
        "Eficiência, transparência, isonomia e continuidade.",
      ],
      answer: 0,
      explanation:
        "O caput do art. 37 traz LIMPE. Os demais princípios citados existem, mas são implícitos ou infraconstitucionais.",
    },
    {
      id: "tcema-x5",
      subject: "Controle Externo",
      kind: "especifica",
      statement:
        "Compete ao Tribunal de Contas do Estado, entre outras atribuições:",
      options: [
        "Julgar as contas dos administradores e demais responsáveis por dinheiros públicos estaduais.",
        "Legislar sobre matéria orçamentária.",
        "Processar criminalmente o Governador.",
        "Nomear os secretários estaduais.",
      ],
      answer: 0,
      explanation:
        "Aplicando-se simetricamente o art. 71 da CF/88, cabe ao TCE julgar contas de responsáveis por bens e valores públicos e apreciar as contas do Chefe do Executivo mediante parecer prévio.",
    },
    {
      id: "tcema-x6",
      subject: "Administração Pública",
      kind: "especifica",
      statement:
        "A licitação na modalidade pregão, conforme a Lei 14.133/2021, destina-se à contratação de:",
      options: [
        "Obras de engenharia de grande vulto.",
        "Bens e serviços comuns.",
        "Serviços técnicos de natureza singular.",
        "Concessões de uso de bem público.",
      ],
      answer: 1,
      explanation:
        "O pregão é obrigatório para bens e serviços comuns, cujos padrões de desempenho podem ser objetivamente definidos no edital.",
    },
    {
      id: "tcema-x7",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "A investidura em cargo público efetivo depende de:",
      options: [
        "Indicação da autoridade competente.",
        "Aprovação prévia em concurso público de provas ou de provas e títulos.",
        "Contrato temporário renovável.",
        "Processo seletivo simplificado, em qualquer caso.",
      ],
      answer: 1,
      explanation:
        "Art. 37, II da CF/88. Exceções: cargos em comissão de livre nomeação e exoneração e contratações temporárias do art. 37, IX.",
    },
    {
      id: "tcema-x8",
      subject: "Contabilidade Pública",
      kind: "especifica",
      statement:
        "Os estágios da despesa pública, na Lei 4.320/64, são:",
      options: [
        "Previsão, arrecadação e recolhimento.",
        "Empenho, liquidação e pagamento.",
        "Planejamento, execução e controle.",
        "Dotação, suplementação e anulação.",
      ],
      answer: 1,
      explanation:
        "Empenho reserva a dotação; liquidação verifica o direito adquirido do credor; pagamento extingue a obrigação. Os estágios da receita é que envolvem previsão e arrecadação.",
    },
  ],
  pcma: [
    {
      id: "pcma-x1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa com erro de concordância nominal.",
      options: [
        "Seguem anexos os documentos do inquérito.",
        "É proibida a entrada de pessoas estranhas.",
        "Os depoimentos estão anexo ao processo.",
        "Bastante provas foram colhidas.",
      ],
      answer: 3,
      explanation:
        "\"Bastante\" como pronome adjetivo concorda com o substantivo: \"bastantes provas\". A alternativa C também é discutível, mas o erro inequívoco de concordância é o da alternativa D.",
    },
    {
      id: "pcma-x2",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Se \"se choveu, então a rua está molhada\" é verdadeira e a rua NÃO está molhada, conclui-se que:",
      options: [
        "Choveu.",
        "Não choveu.",
        "Nada se pode concluir.",
        "A rua estava molhada antes.",
      ],
      answer: 1,
      explanation:
        "Modus tollens: negando o consequente, nega-se o antecedente.",
    },
    {
      id: "pcma-x3",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "O crime é considerado consumado quando:",
      options: [
        "O agente inicia a execução por atos preparatórios.",
        "Nele se reúnem todos os elementos de sua definição legal.",
        "Há apenas cogitação do agente.",
        "O agente desiste voluntariamente da execução.",
      ],
      answer: 1,
      explanation:
        "Art. 14, I do CP. Na tentativa, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente.",
    },
    {
      id: "pcma-x4",
      subject: "Direito Processual Penal",
      kind: "especifica",
      statement:
        "O inquérito policial tem como características principais:",
      options: [
        "Contraditório pleno e ampla defesa desde o início.",
        "Procedimento administrativo, inquisitivo, escrito e sigiloso.",
        "Natureza jurisdicional, com produção de provas definitivas.",
        "Obrigatoriedade de defesa técnica sob pena de nulidade.",
      ],
      answer: 1,
      explanation:
        "O IP é peça administrativa informativa, inquisitiva, escrita, sigilosa e dispensável, destinada a apurar autoria e materialidade.",
    },
    {
      id: "pcma-x5",
      subject: "Direito Processual Penal",
      kind: "especifica",
      statement:
        "A prisão em flagrante deve ser comunicada ao juiz competente em até:",
      options: ["12 horas", "24 horas", "48 horas", "72 horas"],
      answer: 1,
      explanation:
        "Art. 306, §1º do CPP: em até 24 horas encaminha-se o auto de prisão em flagrante ao juiz, com realização da audiência de custódia no mesmo prazo.",
    },
    {
      id: "pcma-x6",
      subject: "Criminologia",
      kind: "especifica",
      statement:
        "A criminologia, como ciência empírica e interdisciplinar, estuda:",
      options: [
        "Apenas a pena e sua dosimetria.",
        "Crime, criminoso, vítima e controle social.",
        "Somente o processo legislativo penal.",
        "A organização administrativa da polícia.",
      ],
      answer: 1,
      explanation:
        "Os quatro objetos clássicos da criminologia são o delito, o delinquente, a vítima e o controle social.",
    },
    {
      id: "pcma-x7",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Segundo a CF/88, às polícias civis, dirigidas por delegados de polícia de carreira, incumbem:",
      options: [
        "O policiamento ostensivo e a preservação da ordem pública.",
        "As funções de polícia judiciária e a apuração de infrações penais, exceto militares e as de competência da União.",
        "A fiscalização de trânsito nas rodovias federais.",
        "A defesa civil e o combate a incêndios.",
      ],
      answer: 1,
      explanation:
        "Art. 144, §4º da CF/88. O policiamento ostensivo é atribuição das polícias militares (§5º).",
    },
    {
      id: "pcma-x8",
      subject: "Legislação Especial",
      kind: "especifica",
      statement:
        "Na Lei Maria da Penha (Lei 11.340/2006), as medidas protetivas de urgência:",
      options: [
        "Só podem ser concedidas após o trânsito em julgado.",
        "Podem ser concedidas de imediato, independentemente de audiência das partes ou de manifestação do Ministério Público.",
        "Dependem sempre de representação criminal formal.",
        "Só se aplicam a relações conjugais formalizadas.",
      ],
      answer: 1,
      explanation:
        "Art. 19, §1º: o juiz pode conceder as medidas de imediato, sem audiência das partes e sem manifestação prévia do MP, que deve ser comunicado.",
    },
  ],
};
