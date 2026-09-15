import type { Question } from "./questions";

/** Quarto lote de questões autorais inéditas, no estilo das provas, por matéria e concurso. */
export const BATCH4_QUESTIONS: Record<string, Question[]> = {
  pmma: [
    {
      id: "pmma-n1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa em que a crase está empregada corretamente.",
      options: [
        "O soldado obedeceu à ordem do comandante.",
        "Cheguei à pé ao quartel.",
        "Refiro-me à tudo que foi dito.",
        "Entregou o relatório à ele.",
      ],
      answer: 0,
      explanation:
        "\"Obedecer\" pede a preposição \"a\" e \"ordem\" é feminina, logo há crase. Não há crase antes de palavra masculina, de pronome pessoal nem de \"tudo\".",
    },
    {
      id: "pmma-n2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em \"Embora estivesse cansado, o policial permaneceu de serviço\", a oração destacada é:",
      options: [
        "Subordinada adverbial concessiva.",
        "Subordinada adverbial causal.",
        "Coordenada sindética adversativa.",
        "Subordinada substantiva objetiva direta.",
      ],
      answer: 0,
      explanation: "\"Embora\" introduz ideia de concessão: oração subordinada adverbial concessiva.",
    },
    {
      id: "pmma-n3",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Uma viatura percorre 150 km em 2 horas. Mantendo a mesma velocidade média, quantos quilômetros percorrerá em 3 horas e 30 minutos?",
      options: ["225 km", "240 km", "262,5 km", "275 km"],
      answer: 2,
      explanation: "Velocidade média = 75 km/h. Em 3,5 h: 75 × 3,5 = 262,5 km.",
    },
    {
      id: "pmma-n4",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Se \"todo policial militar é servidor público\" e \"João é policial militar\", conclui-se corretamente que:",
      options: [
        "Todo servidor público é policial militar.",
        "João é servidor público.",
        "João pode não ser servidor público.",
        "Nenhum servidor público é policial militar.",
      ],
      answer: 1,
      explanation: "Silogismo direto: pertencendo ao conjunto menor, João pertence ao conjunto maior.",
    },
    {
      id: "pmma-n5",
      subject: "Informática",
      kind: "geral",
      statement: "O atalho Ctrl + Z, na maioria dos editores de texto, serve para:",
      options: ["Recortar o texto.", "Desfazer a última ação.", "Salvar o arquivo.", "Localizar uma palavra."],
      answer: 1,
      explanation: "Ctrl + Z desfaz a última ação; Ctrl + X recorta, Ctrl + S salva e Ctrl + F localiza.",
    },
    {
      id: "pmma-n6",
      subject: "Atualidades",
      kind: "geral",
      statement:
        "A segurança pública no Brasil é organizada constitucionalmente como responsabilidade:",
      options: [
        "Exclusiva da União.",
        "Exclusiva dos Estados.",
        "De todos e dever do Estado, exercida para preservação da ordem pública.",
        "Apenas dos municípios com guarda municipal.",
      ],
      answer: 2,
      explanation:
        "O art. 144 da Constituição define a segurança pública como dever do Estado, direito e responsabilidade de todos.",
    },
    {
      id: "pmma-n7",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement: "São órgãos da segurança pública previstos na Constituição Federal, EXCETO:",
      options: [
        "Polícia Federal.",
        "Polícia Rodoviária Federal.",
        "Corpo de Bombeiros Militar.",
        "Ministério Público Estadual.",
      ],
      answer: 3,
      explanation:
        "O Ministério Público é função essencial à justiça, não integra o rol de órgãos de segurança pública do art. 144.",
    },
    {
      id: "pmma-n8",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement:
        "Segundo a Constituição, às polícias militares cabe a polícia ostensiva e a preservação da ordem pública; aos corpos de bombeiros militares cabe, além de outras atribuições legais:",
      options: [
        "A apuração de infrações penais comuns.",
        "A execução de atividades de defesa civil.",
        "O controle externo da atividade policial.",
        "A guarda dos presídios estaduais.",
      ],
      answer: 1,
      explanation: "O § 5º do art. 144 atribui aos bombeiros militares a execução de atividades de defesa civil.",
    },
    {
      id: "pmma-n9",
      subject: "Direito Penal",
      kind: "especifica",
      statement: "A legítima defesa, no Código Penal, é classificada como:",
      options: [
        "Causa de exclusão da culpabilidade.",
        "Causa de exclusão da ilicitude.",
        "Causa de extinção da punibilidade.",
        "Causa de aumento de pena.",
      ],
      answer: 1,
      explanation: "A legítima defesa é excludente de ilicitude (antijuridicidade), prevista no art. 23 do CP.",
    },
    {
      id: "pmma-n10",
      subject: "Direito Penal",
      kind: "especifica",
      statement:
        "O agente que, podendo prever o resultado, age sem a cautela devida e causa lesão responde por crime:",
      options: ["Doloso.", "Culposo.", "Preterdoloso apenas.", "Atípico."],
      answer: 1,
      explanation:
        "Quando o resultado decorre de imprudência, negligência ou imperícia, sem intenção, o crime é culposo.",
    },
    {
      id: "pmma-n11",
      subject: "Direitos Humanos",
      kind: "especifica",
      statement: "No uso da força pela polícia, o princípio da proporcionalidade exige que:",
      options: [
        "A força empregada seja sempre a máxima disponível.",
        "A força seja compatível com a resistência oferecida e o objetivo legítimo.",
        "Arma de fogo seja a primeira opção em qualquer abordagem.",
        "A força só possa ser usada com autorização judicial prévia.",
      ],
      answer: 1,
      explanation:
        "A proporcionalidade impõe correspondência entre a força usada, a ameaça enfrentada e o fim legítimo buscado.",
    },
    {
      id: "pmma-n12",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "O princípio da legalidade, aplicado à Administração Pública, significa que o agente público:",
      options: [
        "Pode fazer tudo o que a lei não proíbe.",
        "Só pode fazer o que a lei autoriza ou determina.",
        "Pode afastar a lei por conveniência do serviço.",
        "Fica sujeito apenas às normas internas da corporação.",
      ],
      answer: 1,
      explanation:
        "Na esfera pública a legalidade é estrita: atua-se apenas conforme previsão legal, diferentemente do particular.",
    },
    {
      id: "pmma-n13",
      subject: "Legislação Estadual",
      kind: "especifica",
      statement: "A hierarquia e a disciplina, bases institucionais das polícias militares, implicam:",
      options: [
        "Ordenação da autoridade em níveis e rigorosa observância das normas.",
        "Liberdade plena de recusa de ordens legais.",
        "Igualdade absoluta entre todos os postos e graduações.",
        "Subordinação exclusiva ao poder judiciário.",
      ],
      answer: 0,
      explanation:
        "Hierarquia é a ordenação da autoridade em graus; disciplina é o cumprimento fiel das ordens legais e normas.",
    },
    {
      id: "pmma-n14",
      subject: "Direito Penal Militar",
      kind: "especifica",
      statement: "Considera-se crime propriamente militar aquele que:",
      options: [
        "Só pode ser praticado por militar, por violar dever funcional militar.",
        "Pode ser praticado por qualquer pessoa, inclusive civil.",
        "É punido apenas administrativamente.",
        "Depende sempre de representação da vítima.",
      ],
      answer: 0,
      explanation:
        "Crime propriamente militar exige a qualidade de militar do agente e ofende deveres próprios da caserna, como a deserção.",
    },
  ],
  cbmma: [
    {
      id: "cbmma-n1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a frase em que a regência verbal está de acordo com a norma-padrão.",
      options: [
        "Assisti o incêndio da calçada.",
        "Assisti ao incêndio da calçada.",
        "Prefiro mais treinar do que descansar.",
        "Cheguei no quartel às seis horas.",
      ],
      answer: 1,
      explanation:
        "\"Assistir\" no sentido de presenciar é transitivo indireto (assistir a algo); \"preferir\" não admite reforço \"mais... do que\"; chega-se \"ao\" quartel.",
    },
    {
      id: "cbmma-n2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Em \"A vítima foi socorrida pelos bombeiros\", a voz verbal é:",
      options: ["Ativa.", "Passiva analítica.", "Passiva sintética.", "Reflexiva."],
      answer: 1,
      explanation: "Verbo \"ser\" + particípio e agente da passiva explícito caracterizam a passiva analítica.",
    },
    {
      id: "cbmma-n3",
      subject: "Matemática",
      kind: "geral",
      statement:
        "Uma mangueira despeja 400 litros de água por minuto. Quantos minutos são necessários para encher um reservatório de 14.000 litros?",
      options: ["30", "35", "40", "45"],
      answer: 1,
      explanation: "14.000 ÷ 400 = 35 minutos.",
    },
    {
      id: "cbmma-n4",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement: "A negação da proposição \"todos os alarmes funcionaram\" é:",
      options: [
        "Nenhum alarme funcionou.",
        "Pelo menos um alarme não funcionou.",
        "Todos os alarmes não funcionaram.",
        "Alguns alarmes funcionaram.",
      ],
      answer: 1,
      explanation: "A negação de um universal afirmativo é um particular negativo: existe ao menos um contraexemplo.",
    },
    {
      id: "cbmma-n5",
      subject: "Física aplicada",
      kind: "geral",
      statement: "A transferência de calor que ocorre pelo movimento de massas de ar aquecido em um incêndio chama-se:",
      options: ["Condução.", "Convecção.", "Irradiação.", "Sublimação."],
      answer: 1,
      explanation:
        "Convecção é o transporte de calor pelo deslocamento do próprio fluido (ar quente sobe, ar frio desce).",
    },
    {
      id: "cbmma-n6",
      subject: "Informática",
      kind: "geral",
      statement: "Em uma planilha eletrônica, a fórmula =MÉDIA(A1:A5) retorna:",
      options: [
        "A soma das cinco células.",
        "A média aritmética dos valores do intervalo.",
        "O maior valor do intervalo.",
        "A contagem de células preenchidas.",
      ],
      answer: 1,
      explanation: "MÉDIA calcula a média aritmética dos valores numéricos do intervalo indicado.",
    },
    {
      id: "cbmma-n7",
      subject: "Combate a incêndio",
      kind: "especifica",
      statement: "O método de extinção por abafamento atua principalmente sobre qual elemento do tetraedro do fogo?",
      options: ["Combustível.", "Comburente (oxigênio).", "Calor.", "Reação em cadeia."],
      answer: 1,
      explanation: "Abafar é impedir o contato com o oxigênio, retirando o comburente da reação.",
    },
    {
      id: "cbmma-n8",
      subject: "Combate a incêndio",
      kind: "especifica",
      statement: "Incêndio em equipamentos elétricos energizados é classificado como:",
      options: ["Classe A.", "Classe B.", "Classe C.", "Classe D."],
      answer: 2,
      explanation:
        "Classe C envolve equipamentos elétricos energizados; exige agente extintor não condutor, como CO₂ ou pó químico.",
    },
    {
      id: "cbmma-n9",
      subject: "Combate a incêndio",
      kind: "especifica",
      statement: "Em incêndio de classe D, envolvendo metais pirofóricos, o agente extintor indicado é:",
      options: ["Água em jato pleno.", "Espuma mecânica.", "Pó químico especial.", "Gás carbônico."],
      answer: 2,
      explanation:
        "Metais combustíveis exigem pó químico especial (como grafite ou cloreto de sódio específico); água pode provocar reação violenta.",
    },
    {
      id: "cbmma-n10",
      subject: "Primeiros socorros",
      kind: "especifica",
      statement: "Na avaliação inicial de uma vítima inconsciente, a primeira conduta do socorrista é:",
      options: [
        "Iniciar imediatamente compressões torácicas.",
        "Garantir a segurança da cena e checar responsividade.",
        "Transportar a vítima rapidamente.",
        "Administrar medicação analgésica.",
      ],
      answer: 1,
      explanation:
        "A segurança da cena vem antes de qualquer atendimento; em seguida verifica-se responsividade e respiração.",
    },
    {
      id: "cbmma-n11",
      subject: "Primeiros socorros",
      kind: "especifica",
      statement: "Em uma hemorragia externa intensa em membro, a conduta inicial recomendada é:",
      options: [
        "Compressão direta sobre o ferimento.",
        "Aplicação imediata de torniquete em qualquer caso.",
        "Lavagem com álcool.",
        "Elevação isolada do membro sem curativo.",
      ],
      answer: 0,
      explanation:
        "A compressão direta é a primeira medida; o torniquete é reservado a sangramentos não controlados por compressão.",
    },
    {
      id: "cbmma-n12",
      subject: "Salvamento e resgate",
      kind: "especifica",
      statement: "No atendimento a vítima com suspeita de trauma de coluna cervical, deve-se:",
      options: [
        "Flexionar o pescoço para facilitar a respiração.",
        "Manter alinhamento e estabilização da cabeça e pescoço.",
        "Sentar a vítima imediatamente.",
        "Girar a vítima lateralmente sem apoio.",
      ],
      answer: 1,
      explanation:
        "A estabilização manual em posição neutra evita agravar lesão medular até a imobilização definitiva.",
    },
    {
      id: "cbmma-n13",
      subject: "Defesa civil",
      kind: "especifica",
      statement: "Entre as ações de defesa civil, a preparação corresponde a:",
      options: [
        "Reconstruir áreas atingidas por desastre.",
        "Capacitar equipes e planejar recursos antes do desastre.",
        "Socorrer vítimas durante o evento.",
        "Indenizar as famílias afetadas.",
      ],
      answer: 1,
      explanation:
        "Preparação antecede o desastre: planos, treinamentos, simulados e organização de recursos e sistemas de alerta.",
    },
    {
      id: "cbmma-n14",
      subject: "Legislação institucional",
      kind: "especifica",
      statement: "Nas vistorias de segurança contra incêndio, a atuação do Corpo de Bombeiros Militar tem caráter:",
      options: [
        "Exclusivamente punitivo.",
        "Preventivo e fiscalizatório, exigindo adequação às normas técnicas.",
        "Meramente consultivo, sem exigência legal.",
        "Restrito a edificações públicas.",
      ],
      answer: 1,
      explanation:
        "A atividade técnica de prevenção fiscaliza o cumprimento das normas de segurança contra incêndio e pânico em edificações em geral.",
    },
  ],
  tcema: [
    {
      id: "tcema-n1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa em que a concordância nominal está correta.",
      options: [
        "Seguem anexo as planilhas do relatório.",
        "Seguem anexas as planilhas do relatório.",
        "É proibido a entrada de visitantes.",
        "Elas mesmo assinaram o documento.",
      ],
      answer: 1,
      explanation:
        "\"Anexo\" concorda com o substantivo (anexas/planilhas); \"é proibida a entrada\" com artigo definido; \"elas mesmas\".",
    },
    {
      id: "tcema-n2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "Em texto oficial, o pronome de tratamento adequado para dirigir-se a um conselheiro de Tribunal de Contas é:",
      options: ["Vossa Excelência.", "Vossa Magnificência.", "Vossa Santidade.", "Vossa Senhoria."],
      answer: 0,
      explanation:
        "Autoridades de alto escalão, como conselheiros de tribunais, recebem o tratamento de Vossa Excelência.",
    },
    {
      id: "tcema-n3",
      subject: "Matemática Financeira",
      kind: "geral",
      statement:
        "Um capital de R$ 5.000,00 aplicado a juros simples de 2% ao mês rende, em 6 meses, juros de:",
      options: ["R$ 500,00", "R$ 600,00", "R$ 650,00", "R$ 720,00"],
      answer: 1,
      explanation: "J = C × i × t = 5.000 × 0,02 × 6 = R$ 600,00.",
    },
    {
      id: "tcema-n4",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement: "A proposição \"se choveu, então a rua está molhada\" é logicamente equivalente a:",
      options: [
        "Se a rua está molhada, então choveu.",
        "Se a rua não está molhada, então não choveu.",
        "Choveu e a rua não está molhada.",
        "Não choveu ou a rua não está molhada.",
      ],
      answer: 1,
      explanation: "A equivalência de p→q é a contrapositiva ~q→~p.",
    },
    {
      id: "tcema-n5",
      subject: "Informática",
      kind: "geral",
      statement: "O uso de senhas fortes e autenticação em dois fatores tem por objetivo principal garantir:",
      options: [
        "A disponibilidade dos dados apenas.",
        "O controle de acesso e a confidencialidade das informações.",
        "A velocidade de processamento.",
        "A compactação dos arquivos.",
      ],
      answer: 1,
      explanation:
        "São controles de acesso que protegem a confidencialidade, dificultando o uso indevido de credenciais.",
    },
    {
      id: "tcema-n6",
      subject: "Atualidades",
      kind: "geral",
      statement: "O controle externo da administração pública municipal, no Maranhão, é exercido pela Câmara com auxílio:",
      options: [
        "Do Tribunal de Contas do Estado.",
        "Do Tribunal de Justiça.",
        "Da Controladoria-Geral da União.",
        "Do Ministério da Economia.",
      ],
      answer: 0,
      explanation:
        "Nos municípios sem tribunal de contas próprio, o controle externo cabe ao Legislativo com auxílio do Tribunal de Contas do Estado.",
    },
    {
      id: "tcema-n7",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement: "O princípio da publicidade dos atos administrativos pode ser excepcionado quando:",
      options: [
        "O gestor considerar inconveniente a divulgação.",
        "A informação for sigilosa nos termos da lei, por segurança da sociedade e do Estado.",
        "O ato for de baixo valor econômico.",
        "Houver muitos interessados no ato.",
      ],
      answer: 1,
      explanation:
        "A publicidade é a regra; o sigilo é excepcional e deve estar previsto em lei, como nas hipóteses da Lei de Acesso à Informação.",
    },
    {
      id: "tcema-n8",
      subject: "Direito Administrativo",
      kind: "especifica",
      statement:
        "A modalidade de licitação da Lei nº 14.133/2021 destinada a aquisição de bens e serviços comuns é:",
      options: ["Concorrência.", "Pregão.", "Diálogo competitivo.", "Leilão."],
      answer: 1,
      explanation:
        "O pregão é obrigatório para bens e serviços comuns, cujos padrões de desempenho podem ser objetivamente definidos.",
    },
    {
      id: "tcema-n9",
      subject: "Controle externo",
      kind: "especifica",
      statement: "A tomada de contas especial é instaurada quando:",
      options: [
        "Há regular prestação de contas anual.",
        "Se apura dano ao erário e não há ressarcimento espontâneo.",
        "O gestor solicita orientação técnica.",
        "Há mudança de exercício financeiro.",
      ],
      answer: 1,
      explanation:
        "É procedimento excepcional para apurar responsabilidade por dano ao erário e quantificar o prejuízo.",
    },
    {
      id: "tcema-n10",
      subject: "Controle externo",
      kind: "especifica",
      statement: "A auditoria que avalia economicidade, eficiência e efetividade da gestão é a auditoria:",
      options: ["De conformidade.", "Operacional.", "Contábil apenas.", "De legalidade estrita."],
      answer: 1,
      explanation:
        "A auditoria operacional (de desempenho) examina resultados da gestão sob os aspectos de economia, eficiência e efetividade.",
    },
    {
      id: "tcema-n11",
      subject: "Direito Financeiro",
      kind: "especifica",
      statement: "Segundo a Lei de Responsabilidade Fiscal, a renúncia de receita deve:",
      options: [
        "Ser feita livremente pelo gestor.",
        "Vir acompanhada de estimativa de impacto orçamentário-financeiro e medidas de compensação.",
        "Depender apenas de autorização judicial.",
        "Ser vedada em qualquer hipótese.",
      ],
      answer: 1,
      explanation:
        "A LRF exige estimativa de impacto e demonstração de compensação ou de que a renúncia foi considerada na receita prevista.",
    },
    {
      id: "tcema-n12",
      subject: "Orçamento público",
      kind: "especifica",
      statement: "O instrumento que fixa metas e prioridades e orienta a elaboração da lei orçamentária anual é:",
      options: ["O PPA.", "A LDO.", "A LOA.", "O decreto de programação financeira."],
      answer: 1,
      explanation:
        "A Lei de Diretrizes Orçamentárias estabelece metas e prioridades e orienta a elaboração da LOA.",
    },
    {
      id: "tcema-n13",
      subject: "Contabilidade Pública",
      kind: "especifica",
      statement: "Na execução da despesa pública, a ordem correta dos estágios é:",
      options: [
        "Liquidação, empenho e pagamento.",
        "Empenho, liquidação e pagamento.",
        "Pagamento, empenho e liquidação.",
        "Empenho, pagamento e liquidação.",
      ],
      answer: 1,
      explanation: "A Lei nº 4.320/1964 estabelece empenho, liquidação e pagamento nessa sequência.",
    },
    {
      id: "tcema-n14",
      subject: "Arquivologia",
      kind: "especifica",
      statement: "Documentos que ainda são consultados com frequência pela unidade produtora estão na fase:",
      options: ["Corrente.", "Intermediária.", "Permanente.", "De eliminação."],
      answer: 0,
      explanation:
        "A fase corrente reúne documentos de uso frequente; depois vão à intermediária e, se de valor histórico, à permanente.",
    },
  ],
  pcma: [
    {
      id: "pcma-n1",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement: "Assinale a alternativa em que o emprego do sinal indicativo de crase é obrigatório.",
      options: [
        "Entregou o inquérito a autoridade competente.",
        "Voltou a interrogar a testemunha.",
        "Refiro-me a investigação concluída ontem.",
        "Começou a trabalhar cedo.",
      ],
      answer: 0,
      explanation:
        "\"Entregar a\" + \"a autoridade\" gera fusão de preposição e artigo: à autoridade. Antes de verbo no infinitivo não há crase.",
    },
    {
      id: "pcma-n2",
      subject: "Língua Portuguesa",
      kind: "geral",
      statement:
        "No trecho \"O delegado, homem experiente, conduziu o caso\", o termo destacado exerce função de:",
      options: ["Aposto explicativo.", "Vocativo.", "Adjunto adverbial.", "Predicativo do objeto."],
      answer: 0,
      explanation: "\"Homem experiente\" explica \"o delegado\": aposto explicativo entre vírgulas.",
    },
    {
      id: "pcma-n3",
      subject: "Raciocínio Lógico",
      kind: "geral",
      statement:
        "Em um grupo de 5 investigadores, de quantas maneiras é possível escolher uma dupla para uma diligência?",
      options: ["5", "10", "15", "20"],
      answer: 1,
      explanation: "Combinação de 5 elementos 2 a 2: C(5,2) = 10.",
    },
    {
      id: "pcma-n4",
      subject: "Informática",
      kind: "geral",
      statement: "Em investigação digital, a cadeia de custódia dos vestígios eletrônicos serve para:",
      options: [
        "Aumentar a velocidade da perícia.",
        "Garantir rastreabilidade e integridade da prova desde a coleta.",
        "Permitir alteração controlada dos arquivos.",
        "Substituir o laudo pericial.",
      ],
      answer: 1,
      explanation:
        "A cadeia de custódia documenta cada etapa do vestígio, assegurando sua integridade e admissibilidade.",
    },
    {
      id: "pcma-n5",
      subject: "Atualidades",
      kind: "geral",
      statement: "A Lei Maria da Penha trata principalmente de:",
      options: [
        "Crimes de trânsito.",
        "Mecanismos para coibir a violência doméstica e familiar contra a mulher.",
        "Improbidade administrativa.",
        "Crimes ambientais.",
      ],
      answer: 1,
      explanation: "A Lei nº 11.340/2006 cria mecanismos de prevenção e repressão à violência doméstica e familiar contra a mulher.",
    },
    {
      id: "pcma-n6",
      subject: "Direito Penal",
      kind: "especifica",
      statement: "O furto praticado mediante rompimento de obstáculo à subtração da coisa é:",
      options: ["Furto simples.", "Furto qualificado.", "Roubo.", "Apropriação indébita."],
      answer: 1,
      explanation:
        "O rompimento de obstáculo é qualificadora do furto (art. 155, § 4º, I, do Código Penal).",
    },
    {
      id: "pcma-n7",
      subject: "Direito Penal",
      kind: "especifica",
      statement: "Diferencia o roubo do furto a presença de:",
      options: [
        "Prejuízo patrimonial.",
        "Grave ameaça ou violência à pessoa.",
        "Reincidência do agente.",
        "Valor elevado da coisa.",
      ],
      answer: 1,
      explanation: "No roubo há violência ou grave ameaça à pessoa, ou redução da capacidade de resistência.",
    },
    {
      id: "pcma-n8",
      subject: "Direito Penal",
      kind: "especifica",
      statement: "O crime de peculato pressupõe que o agente seja:",
      options: [
        "Qualquer pessoa.",
        "Funcionário público, apropriando-se de bem em razão do cargo.",
        "Empresário privado.",
        "Somente autoridade policial.",
      ],
      answer: 1,
      explanation:
        "Peculato é crime próprio de funcionário público que se apropria de dinheiro ou bem de que tem posse em razão do cargo.",
    },
    {
      id: "pcma-n9",
      subject: "Processo Penal",
      kind: "especifica",
      statement: "O inquérito policial é procedimento:",
      options: [
        "Judicial e contraditório.",
        "Administrativo, inquisitivo e de natureza informativa.",
        "Obrigatoriamente público em todas as fases.",
        "Indispensável ao oferecimento da denúncia.",
      ],
      answer: 1,
      explanation:
        "O inquérito é peça administrativa informativa, inquisitiva e dispensável quando já houver elementos para a denúncia.",
    },
    {
      id: "pcma-n10",
      subject: "Processo Penal",
      kind: "especifica",
      statement: "Na prisão em flagrante, a comunicação ao juiz competente deve ocorrer:",
      options: [
        "Em até 24 horas, com remessa do auto de prisão em flagrante.",
        "Em até 10 dias.",
        "Somente após o oferecimento da denúncia.",
        "Apenas se houver pedido da defesa.",
      ],
      answer: 0,
      explanation:
        "O CPP determina comunicação imediata e remessa do auto em até 24 horas, com realização de audiência de custódia.",
    },
    {
      id: "pcma-n11",
      subject: "Processo Penal",
      kind: "especifica",
      statement: "A prova obtida por meio ilícito, segundo a Constituição, deve ser:",
      options: [
        "Admitida se favorecer a acusação.",
        "Desentranhada do processo, por ser inadmissível.",
        "Valorada com peso reduzido.",
        "Convertida em prova testemunhal.",
      ],
      answer: 1,
      explanation: "São inadmissíveis as provas obtidas por meios ilícitos (art. 5º, LVI), devendo ser desentranhadas.",
    },
    {
      id: "pcma-n12",
      subject: "Criminologia",
      kind: "especifica",
      statement: "A prevenção primária, em criminologia, atua:",
      options: [
        "Sobre as causas sociais do delito, antes da sua ocorrência.",
        "Sobre o autor já condenado.",
        "Somente no processo penal.",
        "Exclusivamente por meio de policiamento ostensivo.",
      ],
      answer: 0,
      explanation:
        "A prevenção primária enfrenta causas estruturais (educação, trabalho, moradia), diferentemente da secundária e terciária.",
    },
    {
      id: "pcma-n13",
      subject: "Medicina Legal",
      kind: "especifica",
      statement: "O exame de corpo de delito é indispensável nas infrações que:",
      options: [
        "Não deixam vestígios.",
        "Deixam vestígios materiais.",
        "São de menor potencial ofensivo.",
        "Envolvem apenas patrimônio público.",
      ],
      answer: 1,
      explanation:
        "Quando a infração deixa vestígios, o exame de corpo de delito é indispensável, podendo ser suprido por prova testemunhal se desaparecerem.",
    },
    {
      id: "pcma-n14",
      subject: "Direitos Humanos",
      kind: "especifica",
      statement: "Durante o interrogatório, é direito do investigado:",
      options: [
        "Permanecer em silêncio, sem que isso lhe prejudique.",
        "Ser obrigado a produzir prova contra si.",
        "Ter a presença de advogado vedada.",
        "Ser mantido incomunicável por 72 horas.",
      ],
      answer: 0,
      explanation:
        "O direito ao silêncio e a não autoincriminação estão assegurados no art. 5º, LXIII, da Constituição.",
    },
    {
      id: "pcma-n15",
      subject: "Direito Constitucional",
      kind: "especifica",
      statement: "Compete às polícias civis, dirigidas por delegados de polícia de carreira:",
      options: [
        "O policiamento ostensivo nas ruas.",
        "As funções de polícia judiciária e a apuração de infrações penais, exceto as militares.",
        "A defesa civil do estado.",
        "O controle do espaço aéreo.",
      ],
      answer: 1,
      explanation:
        "O art. 144, § 4º, atribui às polícias civis a polícia judiciária e a apuração de infrações penais, salvo militares e as de competência federal.",
    },
  ],
};
