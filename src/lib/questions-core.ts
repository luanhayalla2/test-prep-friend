import type { Question } from "./questions";

/**
 * Banco por matéria alinhado aos programas oficiais dos editais
 * (Língua Portuguesa, Matemática/Raciocínio Lógico e Legislação/Direito).
 */
export const CORE_QUESTIONS: Record<string, Question[]> = {
  pmma: [
    // ---------- Língua Portuguesa ----------
    {
      id: "pmma-c1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Entregou o armamento ao sargento que estava de serviço\", a oração sublinhada é adjetiva restritiva porque:",
      options: [
        "Vem sempre entre vírgulas.",
        "Delimita qual sargento, sem generalizar o referente.",
        "Exerce função de sujeito da oração principal.",
        "Equivale a um advérbio de tempo.",
      ],
      answer: 1,
      explanation:
        "A adjetiva restritiva restringe o referente (apenas o sargento que estava de serviço) e, por isso, não é isolada por vírgulas.",
    },
    {
      id: "pmma-c2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a frase com regência verbal correta.",
      options: [
        "Assisti o filme sobre a corporação.",
        "O policial obedeceu a ordem do comandante.",
        "Prefiro treinar do que descansar.",
        "Chegou na sede às oito horas.",
      ],
      answer: 1,
      explanation:
        "\"Obedecer\" é transitivo indireto e exige a preposição \"a\". \"Assistir\" (ver) também pede \"a\"; \"preferir\" pede \"a\" e não \"do que\"; \"chegar\" pede \"a\", não \"em\".",
    },
    {
      id: "pmma-c3",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Fizeram-se necessárias novas viaturas\", a partícula \"se\" é:",
      options: [
        "Índice de indeterminação do sujeito.",
        "Partícula apassivadora, com sujeito \"novas viaturas\".",
        "Pronome reflexivo.",
        "Conjunção condicional.",
      ],
      answer: 1,
      explanation:
        "Com verbo transitivo direto, o \"se\" apassiva e o verbo concorda com o sujeito paciente: \"novas viaturas fizeram-se necessárias\".",
    },
    {
      id: "pmma-c4",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Qual alternativa apresenta erro de colocação pronominal segundo a norma-padrão?",
      options: [
        "Não me falaram do resultado.",
        "Quem me avisou foi o cabo.",
        "Me disseram que a prova será em outubro.",
        "Tudo se resolveu na inspeção.",
      ],
      answer: 2,
      explanation:
        "Na norma-padrão não se inicia período com pronome átono: o correto é \"Disseram-me que...\".",
    },
    {
      id: "pmma-c5",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "\"O efetivo, bem como os oficiais, ______ presente à solenidade.\" Completa corretamente a lacuna:",
      options: ["estiveram", "esteve", "estavam", "estarão"],
      answer: 1,
      explanation:
        "Com a expressão intercalada \"bem como\", o verbo concorda com o núcleo do sujeito (\"o efetivo\"), no singular.",
    },
    {
      id: "pmma-c6",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Embora estivesse cansado, o soldado concluiu a ronda\", a oração destacada é:",
      options: [
        "Subordinada adverbial concessiva.",
        "Subordinada adverbial causal.",
        "Coordenada sindética adversativa.",
        "Subordinada substantiva objetiva direta.",
      ],
      answer: 0,
      explanation:
        "\"Embora\" introduz concessão: admite um fato contrário que não impede a ação principal.",
    },
    {
      id: "pmma-c7",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa com acentuação totalmente correta.",
      options: [
        "juri, refem, heroi",
        "júri, refém, herói",
        "júri, refem, heroi",
        "juri, refém, herói",
      ],
      answer: 1,
      explanation:
        "\"Júri\" (paroxítona terminada em -i), \"refém\" (oxítona em -em) e \"herói\" (ditongo aberto tônico -ói em oxítona) são acentuadas.",
    },
    // ---------- Matemática e RL ----------
    {
      id: "pmma-c8",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Uma viatura percorre 180 km em 2h30min. Mantida a mesma velocidade média, quantos km percorre em 4 horas?",
      options: ["252 km", "270 km", "288 km", "300 km"],
      answer: 2,
      explanation: "180 ÷ 2,5 = 72 km/h; 72 × 4 = 288 km.",
    },
    {
      id: "pmma-c9",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Numa turma de 60 recrutas, 3/5 foram aprovados no TAF. Quantos foram reprovados?",
      options: ["18", "24", "36", "40"],
      answer: 0,
      explanation: "Aprovados: 3/5 × 60 = 36. Reprovados: 60 − 36 = 24… ",
    },
    {
      id: "pmma-c10",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "A negação lógica de \"Todo policial é treinado\" é:",
      options: [
        "Nenhum policial é treinado.",
        "Algum policial não é treinado.",
        "Todo policial não é treinado.",
        "Alguns policiais são treinados.",
      ],
      answer: 1,
      explanation:
        "A negação de uma proposição universal afirmativa é uma particular negativa: existe ao menos um que não é.",
    },
    {
      id: "pmma-c11",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Se \"Se chove, então a operação é adiada\" é verdadeira e a operação NÃO foi adiada, conclui-se que:",
      options: [
        "Choveu.",
        "Não choveu.",
        "Nada se conclui.",
        "A operação foi cancelada.",
      ],
      answer: 1,
      explanation:
        "Modus tollens: se p→q é verdadeira e q é falsa, então p é falsa.",
    },
    {
      id: "pmma-c12",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Um soldado recebe R$ 3.200,00 e tem desconto de 11% em previdência. Qual o valor líquido?",
      options: ["R$ 2.828,00", "R$ 2.848,00", "R$ 2.880,00", "R$ 2.912,00"],
      answer: 1,
      explanation: "11% de 3.200 = 352. 3.200 − 352 = R$ 2.848,00.",
    },
    {
      id: "pmma-c13",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "De quantas maneiras 4 policiais podem ser dispostos em fila para uma formatura?",
      options: ["12", "16", "24", "64"],
      answer: 2,
      explanation: "Permutação simples: 4! = 24.",
    },
    // ---------- Legislação / Direito ----------
    {
      id: "pmma-c14",
      subject: "Legislação Institucional PMMA",
      kind: "especifica",
      statement:
        "Segundo o art. 144 da Constituição Federal, às polícias militares cabem:",
      options: [
        "A apuração de infrações penais comuns.",
        "A polícia ostensiva e a preservação da ordem pública.",
        "O controle externo da atividade policial.",
        "A polícia judiciária da União.",
      ],
      answer: 1,
      explanation:
        "Art. 144, §5º: às polícias militares cabem a polícia ostensiva e a preservação da ordem pública; a apuração de infrações é da polícia civil.",
    },
    {
      id: "pmma-c15",
      subject: "Legislação Institucional PMMA",
      kind: "especifica",
      statement:
        "Os militares dos Estados são regidos, quanto a crimes militares, por qual diploma?",
      options: [
        "Código Penal comum, exclusivamente.",
        "Código Penal Militar (Decreto-Lei nº 1.001/1969).",
        "Lei de Improbidade Administrativa.",
        "Código de Processo Civil.",
      ],
      answer: 1,
      explanation:
        "Crimes militares são definidos pelo Código Penal Militar; a Justiça Militar Estadual processa e julga militares dos Estados.",
    },
    {
      id: "pmma-c16",
      subject: "Legislação Institucional PMMA",
      kind: "especifica",
      statement:
        "A hierarquia e a disciplina, bases institucionais das forças militares estaduais, estão previstas:",
      options: [
        "Apenas em regulamentos internos.",
        "No art. 42 da Constituição Federal.",
        "Somente no Estatuto dos Servidores Civis.",
        "Na Lei de Acesso à Informação.",
      ],
      answer: 1,
      explanation:
        "O art. 42 da CF trata dos militares dos Estados, organizados com base na hierarquia e disciplina.",
    },
    {
      id: "pmma-c17",
      subject: "Direito Penal e Processual Penal",
      kind: "especifica",
      statement:
        "A prisão em flagrante pode ser efetuada por qualquer pessoa do povo e deve ser realizada pelas autoridades policiais quando o agente:",
      options: [
        "Confessa crime ocorrido há meses.",
        "É encontrado, logo depois, com instrumentos que façam presumir ser ele o autor.",
        "É apenas suspeito por denúncia anônima.",
        "Está sendo investigado em inquérito.",
      ],
      answer: 1,
      explanation:
        "Art. 302 do CPP: é flagrante próprio, impróprio (perseguição) ou presumido — encontrado logo depois com instrumentos/objetos que o presumam autor.",
    },
    {
      id: "pmma-c18",
      subject: "Direito Penal e Processual Penal",
      kind: "especifica",
      statement:
        "Age em legítima defesa quem repele injusta agressão, atual ou iminente, a direito seu ou de outrem, usando:",
      options: [
        "Qualquer meio, sem limites.",
        "Moderadamente dos meios necessários.",
        "Somente meios não letais.",
        "Apenas força após autorização judicial.",
      ],
      answer: 1,
      explanation:
        "Art. 25 do Código Penal exige moderação no uso dos meios necessários; o excesso é punível.",
    },
    {
      id: "pmma-c19",
      subject: "Direitos Humanos e Cidadania",
      kind: "especifica",
      statement:
        "Conforme o art. 5º da CF, a prática do racismo constitui crime:",
      options: [
        "Afiançável e prescritível.",
        "Inafiançável e imprescritível, sujeito a pena de reclusão.",
        "De menor potencial ofensivo.",
        "Punível apenas com multa.",
      ],
      answer: 1,
      explanation:
        "Art. 5º, XLII: a prática do racismo é crime inafiançável e imprescritível, sujeito à pena de reclusão.",
    },
    {
      id: "pmma-c20",
      subject: "Direitos Humanos e Cidadania",
      kind: "especifica",
      statement:
        "O uso da força por agentes de segurança deve observar os princípios de:",
      options: [
        "Legalidade, necessidade, proporcionalidade e moderação.",
        "Discricionariedade absoluta.",
        "Oportunidade e conveniência ilimitadas.",
        "Sigilo e irresponsabilidade funcional.",
      ],
      answer: 0,
      explanation:
        "São os princípios reconhecidos nos documentos da ONU e nas diretrizes nacionais sobre uso da força.",
    },
  ],

  cbmma: [
    {
      id: "cbmma-c1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"É necessário coragem para entrar no incêndio\", a concordância nominal:",
      options: [
        "Está incorreta; o certo é \"é necessária coragem\".",
        "Está correta, pois a expressão \"é necessário\" fica invariável quando o substantivo não vem determinado.",
        "Exige o plural do adjetivo.",
        "Depende do gênero do verbo.",
      ],
      answer: 1,
      explanation:
        "Expressões como \"é necessário\", \"é proibido\" e \"é bom\" ficam invariáveis quando o substantivo aparece sem artigo ou determinante.",
    },
    {
      id: "cbmma-c2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa em que há erro de crase.",
      options: [
        "Compareceu à ocorrência de imediato.",
        "Referiu-se à guarnição de serviço.",
        "Voltou à casa de seus pais.",
        "Estava disposto à ajudar as vítimas.",
      ],
      answer: 3,
      explanation:
        "Não há crase antes de verbo no infinitivo: \"disposto a ajudar\".",
    },
    {
      id: "cbmma-c3",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"A guarnição chegou rápido, contudo o fogo já se alastrara\", a conjunção \"contudo\" estabelece relação de:",
      options: ["Conclusão", "Adversidade/oposição", "Explicação", "Alternância"],
      answer: 1,
      explanation:
        "\"Contudo\" é conjunção coordenativa adversativa, indicando contraste.",
    },
    {
      id: "cbmma-c4",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "\"Os bombeiros ______ o resgate assim que ______ possível.\" Completa corretamente:",
      options: [
        "farão / for",
        "fará / forem",
        "farão / seja",
        "fazerão / for",
      ],
      answer: 0,
      explanation:
        "Futuro do presente no plural (\"farão\") e futuro do subjuntivo do verbo ser (\"for\"), concordando com o sujeito oracional.",
    },
    {
      id: "cbmma-c5",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Uma mangueira despeja 250 litros por minuto. Quantos minutos são necessários para encher um reservatório de 9.000 litros?",
      options: ["30", "36", "40", "45"],
      answer: 1,
      explanation: "9.000 ÷ 250 = 36 minutos.",
    },
    {
      id: "cbmma-c6",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Uma escada de 5 m encostada na parede tem a base a 3 m do muro. Que altura ela alcança?",
      options: ["3,5 m", "4 m", "4,5 m", "5 m"],
      answer: 1,
      explanation: "Pitágoras: √(5² − 3²) = √16 = 4 m.",
    },
    {
      id: "cbmma-c7",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Em um grupo de 80 bombeiros, 45 fazem APH, 30 fazem salvamento em altura e 10 fazem os dois. Quantos não fazem nenhum dos dois?",
      options: ["10", "15", "20", "25"],
      answer: 1,
      explanation:
        "União: 45 + 30 − 10 = 65. Fora da união: 80 − 65 = 15.",
    },
    {
      id: "cbmma-c8",
      subject: "Matemática e Raciocínio Lógico",
      kind: "geral",
      statement:
        "Um tanque perde 4% de seu volume por hora. Partindo de 2.000 L, quanto resta após 1 hora?",
      options: ["1.900 L", "1.920 L", "1.960 L", "1.980 L"],
      answer: 1,
      explanation: "4% de 2.000 = 80; 2.000 − 80 = 1.920 L.",
    },
    {
      id: "cbmma-c9",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Aos corpos de bombeiros militares, além das atribuições definidas em lei, incumbe:",
      options: [
        "A execução de atividades de defesa civil.",
        "A polícia judiciária estadual.",
        "O controle externo da atividade policial.",
        "A fiscalização tributária.",
      ],
      answer: 0,
      explanation:
        "Art. 144, §5º, parte final, da CF: aos corpos de bombeiros militares incumbe a execução de atividades de defesa civil.",
    },
    {
      id: "cbmma-c10",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Os bombeiros militares estaduais são considerados, pela Constituição:",
      options: [
        "Servidores civis comuns.",
        "Militares dos Estados, do Distrito Federal e dos Territórios.",
        "Empregados públicos celetistas.",
        "Agentes políticos.",
      ],
      answer: 1,
      explanation:
        "Art. 42 da CF classifica os membros das PMs e CBMs como militares dos Estados, do DF e dos Territórios.",
    },
    {
      id: "cbmma-c11",
      subject: "Legislação e Defesa Civil",
      kind: "especifica",
      statement:
        "Na Política Nacional de Proteção e Defesa Civil (Lei nº 12.608/2012), as ações se organizam em:",
      options: [
        "Somente resposta e reconstrução.",
        "Prevenção, mitigação, preparação, resposta e recuperação.",
        "Apenas prevenção e fiscalização.",
        "Somente socorro imediato.",
      ],
      answer: 1,
      explanation:
        "A lei estrutura a atuação em prevenção, mitigação, preparação, resposta e recuperação.",
    },
    {
      id: "cbmma-c12",
      subject: "Prevenção e Combate a Incêndio",
      kind: "especifica",
      statement:
        "O agente extintor indicado para incêndio em equipamentos elétricos energizados (Classe C) é:",
      options: [
        "Água pressurizada.",
        "Dióxido de carbono (CO₂) ou pó químico.",
        "Espuma mecânica.",
        "Areia úmida.",
      ],
      answer: 1,
      explanation:
        "CO₂ e pó químico não conduzem eletricidade; água e espuma são condutoras e não devem ser usadas em Classe C.",
    },
    {
      id: "cbmma-c13",
      subject: "Salvamento e APH",
      kind: "especifica",
      statement:
        "Na avaliação primária do APH (protocolo XABCDE), a letra \"X\" corresponde a:",
      options: [
        "Exame neurológico.",
        "Controle de hemorragia exsanguinante.",
        "Exposição da vítima.",
        "Verificação de pulso carotídeo.",
      ],
      answer: 1,
      explanation:
        "O \"X\" antecede as vias aéreas e trata do controle imediato de hemorragias graves, principal causa evitável de morte.",
    },
    {
      id: "cbmma-c14",
      subject: "Física e Química do Incêndio",
      kind: "especifica",
      statement:
        "O tetraedro do fogo é composto por combustível, comburente, calor e:",
      options: [
        "Fumaça",
        "Reação em cadeia",
        "Pressão",
        "Umidade",
      ],
      answer: 1,
      explanation:
        "A reação química em cadeia é o quarto elemento; sua quebra (extinção química) apaga o fogo.",
    },
  ],

  tcema: [
    {
      id: "tcema-c1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Faz-se necessário revisar os relatórios\", o sujeito da oração é:",
      options: [
        "Indeterminado.",
        "\"revisar os relatórios\" (oração subordinada substantiva subjetiva).",
        "\"os relatórios\".",
        "Inexistente (oração sem sujeito).",
      ],
      answer: 1,
      explanation:
        "A oração reduzida de infinitivo funciona como sujeito de \"faz-se necessário\".",
    },
    {
      id: "tcema-c2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa correta quanto ao uso do porquê.",
      options: [
        "Não sei por que o processo foi arquivado.",
        "Ele faltou porquê estava doente.",
        "Explique o por que da glosa.",
        "Porque você não veio à sessão?",
      ],
      answer: 0,
      explanation:
        "\"Por que\" separado e sem acento em interrogativas indiretas; \"porquê\" só como substantivo; \"por quê\" em fim de frase.",
    },
    {
      id: "tcema-c3",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "No texto oficial, a redação clara e impessoal exige, entre outros, o uso de:",
      options: [
        "Gírias e regionalismos para aproximação.",
        "Linguagem formal, concisão, clareza e impessoalidade.",
        "Adjetivação abundante.",
        "Primeira pessoa do singular sempre.",
      ],
      answer: 1,
      explanation:
        "São atributos da redação oficial previstos no Manual de Redação da Presidência da República.",
    },
    {
      id: "tcema-c4",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "\"Anexo, seguem as certidões\" apresenta erro porque o correto é:",
      options: [
        "\"Anexos seguem as certidões\".",
        "\"Anexas, seguem as certidões\".",
        "\"Em anexos seguem as certidões\".",
        "A frase está correta.",
      ],
      answer: 1,
      explanation:
        "\"Anexo\" é adjetivo e concorda em gênero e número com o substantivo: certidões anexas.",
    },
    {
      id: "tcema-c5",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "A proposição \"Se o gestor presta contas, então não há multa\" é logicamente equivalente a:",
      options: [
        "Se há multa, então o gestor não presta contas.",
        "Se não há multa, então o gestor presta contas.",
        "O gestor presta contas e não há multa.",
        "Se o gestor não presta contas, então há multa.",
      ],
      answer: 0,
      explanation:
        "A equivalência é a contrapositiva: p→q ≡ ~q→~p.",
    },
    {
      id: "tcema-c6",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "A negação de \"Algum processo foi julgado\" é:",
      options: [
        "Todo processo foi julgado.",
        "Nenhum processo foi julgado.",
        "Algum processo não foi julgado.",
        "Nem todo processo foi julgado.",
      ],
      answer: 1,
      explanation:
        "A negação de uma particular afirmativa é a universal negativa.",
    },
    {
      id: "tcema-c7",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Um servidor digitaliza 45 processos em 3 horas. Mantido o ritmo, quantos digitaliza em 7 horas?",
      options: ["90", "95", "105", "115"],
      answer: 2,
      explanation: "45 ÷ 3 = 15 por hora; 15 × 7 = 105.",
    },
    {
      id: "tcema-c8",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Numa licitação, o valor caiu de R$ 250.000 para R$ 200.000. A redução percentual foi de:",
      options: ["16%", "20%", "25%", "30%"],
      answer: 1,
      explanation: "50.000 ÷ 250.000 = 0,20 = 20%.",
    },
    {
      id: "tcema-c9",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Compete ao Tribunal de Contas, no exercício do controle externo:",
      options: [
        "Julgar as contas dos administradores e demais responsáveis por dinheiros públicos.",
        "Julgar crimes de responsabilidade do governador.",
        "Legislar sobre orçamento.",
        "Nomear os secretários estaduais.",
      ],
      answer: 0,
      explanation:
        "Art. 71, II, da CF (aplicável aos TCEs pelo art. 75): julgar as contas dos administradores e responsáveis por bens e valores públicos.",
    },
    {
      id: "tcema-c10",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Quanto às contas anuais prestadas pelo Chefe do Executivo, cabe ao Tribunal de Contas:",
      options: [
        "Julgá-las definitivamente.",
        "Emitir parecer prévio, cabendo o julgamento ao Poder Legislativo.",
        "Arquivá-las sem análise.",
        "Encaminhá-las ao Ministério Público para julgamento.",
      ],
      answer: 1,
      explanation:
        "Art. 71, I, da CF: o TC aprecia mediante parecer prévio; o julgamento é do Legislativo.",
    },
    {
      id: "tcema-c11",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "São princípios expressos da Administração Pública no art. 37 da CF:",
      options: [
        "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        "Legalidade, celeridade, economicidade e oralidade.",
        "Supremacia, autotutela, indisponibilidade e razoabilidade.",
        "Motivação, ampla defesa, contraditório e devido processo.",
      ],
      answer: 0,
      explanation:
        "São os cinco princípios expressos (LIMPE); os demais são implícitos ou infraconstitucionais.",
    },
    {
      id: "tcema-c12",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "Na Lei nº 14.133/2021, a modalidade adequada para contratar bens e serviços comuns é:",
      options: ["Concorrência", "Pregão", "Diálogo competitivo", "Leilão"],
      answer: 1,
      explanation:
        "O pregão é obrigatório para bens e serviços comuns, cujos padrões de desempenho podem ser objetivamente definidos no edital.",
    },
    {
      id: "tcema-c13",
      subject: "Controle Externo / TCE",
      kind: "especifica",
      statement:
        "O controle exercido pela própria Administração sobre seus atos é chamado de:",
      options: [
        "Controle externo.",
        "Controle interno (autotutela).",
        "Controle social.",
        "Controle jurisdicional.",
      ],
      answer: 1,
      explanation:
        "A Administração pode anular atos ilegais e revogar os inconvenientes (Súmulas 346 e 473 do STF).",
    },
    {
      id: "tcema-c14",
      subject: "Administração Pública",
      kind: "especifica",
      statement:
        "A Lei de Responsabilidade Fiscal (LC nº 101/2000) tem como pilar:",
      options: [
        "Ação planejada e transparente, prevenindo riscos e desvios nas contas públicas.",
        "Ampliação irrestrita de despesa com pessoal.",
        "Sigilo dos relatórios fiscais.",
        "Dispensa de metas fiscais.",
      ],
      answer: 0,
      explanation:
        "Art. 1º, §1º: gestão fiscal responsável pressupõe ação planejada e transparente e cumprimento de metas.",
    },
  ],

  pcma: [
    {
      id: "pcma-c1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"O investigador cujas provas foram juntadas depôs ontem\", o termo \"cujas\":",
      options: [
        "É pronome relativo com valor possessivo, sem artigo depois.",
        "É conjunção integrante.",
        "É pronome demonstrativo.",
        "Exige artigo: \"cujas as provas\".",
      ],
      answer: 0,
      explanation:
        "\"Cujo(a)\" liga dois substantivos em relação de posse e nunca é seguido de artigo.",
    },
    {
      id: "pcma-c2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Assinale a alternativa com emprego correto de \"mal\" e \"mau\".",
      options: [
        "O mal condutor do inquérito foi advertido.",
        "Ele agiu de mau jeito.",
        "O mau exemplo teve mal resultado.",
        "Mal chegou à delegacia, foi chamado pelo delegado.",
      ],
      answer: 3,
      explanation:
        "\"Mal\" é advérbio (opõe-se a bem) e também conjunção temporal; \"mau\" é adjetivo (opõe-se a bom).",
    },
    {
      id: "pcma-c3",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Chegaram à delegacia os depoimentos que faltavam\", o sujeito é:",
      options: [
        "\"à delegacia\"",
        "\"os depoimentos que faltavam\"",
        "Indeterminado",
        "Oculto",
      ],
      answer: 1,
      explanation:
        "O verbo \"chegar\" é intransitivo e concorda com o sujeito posposto \"os depoimentos que faltavam\".",
    },
    {
      id: "pcma-c4",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Na interpretação textual, inferir significa:",
      options: [
        "Copiar literalmente o texto.",
        "Concluir algo não explícito, com base nas pistas do texto.",
        "Resumir o primeiro parágrafo.",
        "Opinar livremente sobre o tema.",
      ],
      answer: 1,
      explanation:
        "A inferência é sustentada pelo texto, diferente da opinião pessoal ou da extrapolação.",
    },
    {
      id: "pcma-c5",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Três suspeitos: A diz que B mentiu; B diz que C mentiu; C diz que A e B mentiram. Se apenas um fala a verdade, quem é?",
      options: ["A", "B", "C", "Nenhum"],
      answer: 0,
      explanation:
        "Se A é verdadeiro, B mente (logo C fala a verdade? não — B mente ao dizer que C mentiu, então C fala verdade) — inconsistente com 'apenas um'. Testando: apenas A verdadeiro é a única hipótese em que C mente ao afirmar que A mentiu, mantendo B mentiroso.",
    },
    {
      id: "pcma-c6",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Numa investigação com 5 suspeitos, de quantos modos se pode escolher uma dupla para acareação?",
      options: ["10", "15", "20", "25"],
      answer: 0,
      explanation: "Combinação C(5,2) = 10.",
    },
    {
      id: "pcma-c7",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Um inquérito tem prazo de 30 dias; já correram 40% do prazo. Quantos dias restam?",
      options: ["12", "16", "18", "20"],
      answer: 2,
      explanation: "40% de 30 = 12 dias corridos; restam 30 − 12 = 18 dias.",
    },
    {
      id: "pcma-c8",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "O crime de furto (art. 155 do CP) distingue-se do roubo porque no furto:",
      options: [
        "Há violência ou grave ameaça.",
        "Não há violência ou grave ameaça à pessoa.",
        "A coisa é sempre imóvel.",
        "Não há dolo.",
      ],
      answer: 1,
      explanation:
        "O roubo (art. 157) exige violência, grave ameaça ou redução da capacidade de resistência; o furto é subtração sem esses elementos.",
    },
    {
      id: "pcma-c9",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "Considera-se consumado o crime quando:",
      options: [
        "Iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente.",
        "Nele se reúnem todos os elementos de sua definição legal.",
        "O agente apenas cogita a prática.",
        "Há preparação dos meios.",
      ],
      answer: 1,
      explanation:
        "Art. 14, I, do CP. A alternativa \"a\" descreve a tentativa (inciso II).",
    },
    {
      id: "pcma-c10",
      subject: "Direito Processual Penal",
      kind: "especifica",
      statement:
        "O inquérito policial é procedimento:",
      options: [
        "Judicial, contraditório e sigiloso.",
        "Administrativo, inquisitivo e, em regra, sigiloso.",
        "Jurisdicional e público.",
        "Facultativo e contraditório.",
      ],
      answer: 1,
      explanation:
        "É peça informativa de natureza administrativa, presidida pelo delegado; o contraditório pleno ocorre na ação penal.",
    },
    {
      id: "pcma-c11",
      subject: "Direito Processual Penal",
      kind: "especifica",
      statement:
        "Na audiência de custódia, o preso em flagrante deve ser apresentado à autoridade judicial em até:",
      options: ["12 horas", "24 horas", "48 horas", "72 horas"],
      answer: 1,
      explanation:
        "Art. 310 do CPP: apresentação em até 24 horas após a prisão em flagrante.",
    },
    {
      id: "pcma-c12",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem:",
      options: [
        "A polícia ostensiva e preservação da ordem pública.",
        "As funções de polícia judiciária e a apuração de infrações penais, exceto as militares e as de competência da União.",
        "O policiamento das rodovias federais.",
        "A defesa civil.",
      ],
      answer: 1,
      explanation:
        "Art. 144, §4º, da CF.",
    },
    {
      id: "pcma-c13",
      subject: "Legislação Especial",
      kind: "especifica",
      statement:
        "Na Lei nº 11.343/2006 (Drogas), ao usuário para consumo pessoal aplicam-se:",
      options: [
        "Pena privativa de liberdade de 1 a 3 anos.",
        "Advertência, prestação de serviços à comunidade e medida educativa.",
        "Reclusão de 5 a 15 anos.",
        "Multa exclusivamente.",
      ],
      answer: 1,
      explanation:
        "Art. 28 prevê penas alternativas e não privativas de liberdade para o porte para consumo pessoal.",
    },
    {
      id: "pcma-c14",
      subject: "Legislação Especial",
      kind: "especifica",
      statement:
        "Segundo a Lei Maria da Penha (Lei nº 11.340/2006), as medidas protetivas de urgência:",
      options: [
        "Só podem ser concedidas após a denúncia.",
        "Podem ser concedidas de imediato, inclusive sem oitiva das partes.",
        "Dependem de perícia prévia.",
        "São exclusivas de casos com lesão corporal grave.",
      ],
      answer: 1,
      explanation:
        "Art. 19, §1º: as medidas podem ser concedidas de imediato, independentemente de audiência das partes e de manifestação do Ministério Público.",
    },
  ],
};
