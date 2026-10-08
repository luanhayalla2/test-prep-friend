import type { Question } from "./questions";

type K = Question["kind"];
const q = (
  id: string,
  subject: string,
  kind: K,
  statement: string,
  options: string[],
  answer: number,
  explanation: string,
): Question => ({ id, subject, kind, statement, options, answer, explanation });

/** Oitavo lote de questões autorais inéditas, no estilo das provas. */
export const BATCH8_QUESTIONS: Record<string, Question[]> = {
  pmma: [
    q("pmma-s1", "Língua Portuguesa", "geral", "Assinale a alternativa em que o verbo \"haver\" está corretamente empregado.", ["Haviam dez candidatos na sala.", "Havia dez candidatos na sala.", "Houveram muitas prisões.", "Devem haver vagas."], 1, "No sentido de existir, \"haver\" é impessoal e fica no singular, inclusive na locução (\"deve haver\")."),
    q("pmma-s2", "Língua Portuguesa", "geral", "O antônimo de \"efêmero\" é:", ["Passageiro", "Duradouro", "Breve", "Rápido"], 1, "Efêmero significa passageiro; o oposto é duradouro."),
    q("pmma-s3", "Matemática", "geral", "A média aritmética de 6, 8, 10 e 12 é:", ["8", "9", "10", "36"], 1, "(6 + 8 + 10 + 12) ÷ 4 = 36 ÷ 4 = 9."),
    q("pmma-s4", "Raciocínio Lógico", "geral", "Se p é verdadeira e q é falsa, a proposição p → q é:", ["Verdadeira", "Falsa", "Indeterminada", "Tautológica"], 1, "A condicional só é falsa quando o antecedente é verdadeiro e o consequente falso."),
    q("pmma-s5", "Informática", "geral", "No Word, o atalho Ctrl + N, na versão em português, normalmente aplica:", ["Novo documento", "Negrito", "Numeração", "Nada"], 1, "No Word em português, Ctrl+N aplica negrito; Ctrl+O abre um novo documento."),
    q("pmma-s6", "Direito Constitucional", "especifica", "São inadmissíveis, no processo, as provas obtidas por meios:", ["Periciais", "Ilícitos", "Documentais", "Testemunhais"], 1, "Art. 5º, LVI da CF."),
    q("pmma-s7", "Direito Constitucional", "especifica", "O remédio constitucional cabível contra prisão ilegal é o:", ["Mandado de segurança", "Habeas corpus", "Habeas data", "Ação popular"], 1, "Habeas corpus protege a liberdade de locomoção (art. 5º, LXVIII)."),
    q("pmma-s8", "Direito Penal", "especifica", "Peculato é crime praticado por funcionário público que:", ["Exige vantagem indevida.", "Apropria-se de dinheiro ou bem de que tem a posse em razão do cargo.", "Deixa de praticar ato de ofício.", "Revela segredo funcional."], 1, "Art. 312 do CP."),
    q("pmma-s9", "Direito Penal Militar", "especifica", "No CPM, recusar obedecer a ordem do superior sobre assunto ou matéria de serviço configura:", ["Recusa de obediência", "Motim", "Deserção", "Abandono de posto"], 0, "Art. 163 do CPM. Motim (art. 149) exige reunião de militares."),
    q("pmma-s10", "Legislação Estadual", "especifica", "O policiamento ostensivo e a preservação da ordem pública cabem, pela CF/88, às:", ["Polícias civis", "Polícias militares", "Guardas municipais", "Forças Armadas"], 1, "Art. 144, §5º da CF."),
  ],
  cbmma: [
    q("cbmma-s1", "Língua Portuguesa", "geral", "Indique a alternativa em que há sujeito oculto.", ["Choveu muito.", "Chegamos cedo ao quartel.", "Os bombeiros saíram.", "Há vítimas."], 1, "\"Chegamos\" indica o sujeito \"nós\" pela desinência. \"Choveu\" e \"há\" são orações sem sujeito."),
    q("cbmma-s2", "Matemática", "geral", "O volume de uma caixa d'água cúbica de 2 m de aresta é:", ["4 m³", "6 m³", "8 m³", "12 m³"], 2, "V = a³ = 2³ = 8 m³ (8.000 litros)."),
    q("cbmma-s3", "Raciocínio Lógico", "geral", "Na sequência 1, 4, 9, 16, 25, ..., o próximo número é:", ["30", "34", "36", "49"], 2, "São quadrados perfeitos: 6² = 36."),
    q("cbmma-s4", "Informática", "geral", "A extensão de arquivo normalmente associada a planilhas do Excel é:", [".docx", ".xlsx", ".pptx", ".txt"], 1, ".xlsx é planilha; .docx, documento do Word; .pptx, apresentação."),
    q("cbmma-s5", "Combate a incêndio", "especifica", "O extintor de CO₂ age principalmente por:", ["Abafamento", "Isolamento", "Diluição de metais", "Absorção de água"], 0, "O gás carbônico desloca o oxigênio (abafamento), com algum resfriamento."),
    q("cbmma-s6", "Combate a incêndio", "especifica", "O ponto de fulgor de um combustível é a temperatura em que ele:", ["Queima continuamente.", "Desprende vapores que se inflamam em contato com chama, sem manter a combustão.", "Inflama-se espontaneamente sem chama.", "Congela."], 1, "Fulgor: lampejo sem manter chama. Combustão: mantém a queima. Ignição: inflama sem fonte externa."),
    q("cbmma-s7", "Primeiros socorros", "especifica", "Diante de vítima consciente engasgada que não consegue tossir nem falar, deve-se aplicar:", ["Compressões abdominais (manobra de Heimlich).", "Água para beber.", "Tapas no rosto.", "Posição deitada imediata."], 0, "Obstrução grave em vítima consciente: compressões abdominais até desobstruir ou a vítima ficar inconsciente."),
    q("cbmma-s8", "Primeiros socorros", "especifica", "O DEA (desfibrilador externo automático) deve ser usado em vítima:", ["Consciente e respirando.", "Em parada cardiorrespiratória.", "Com fratura de braço.", "Com febre alta."], 1, "O DEA analisa o ritmo e indica choque em ritmos chocáveis na PCR."),
    q("cbmma-s9", "Salvamento e resgate", "especifica", "No resgate em altura, o equipamento que conecta o cinto à corda ou ancoragem é o:", ["Mosquetão", "Capacete", "Luva", "Coturno"], 0, "O mosquetão é o conector metálico entre cinto, corda e ancoragens."),
    q("cbmma-s10", "Defesa civil", "especifica", "A situação anormal que causa danos superáveis pela comunidade afetada, com comprometimento parcial da resposta, é a:", ["Calamidade pública", "Situação de emergência", "Estado de sítio", "Estado de defesa"], 1, "Situação de emergência: comprometimento parcial; calamidade pública: comprometimento substancial da capacidade de resposta."),
  ],
  tcema: [
    q("tcema-s1", "Língua Portuguesa", "geral", "Assinale a alternativa com concordância nominal correta.", ["É proibido a entrada.", "É proibida a entrada.", "Seguem anexo as notas.", "Elas mesmo assinaram."], 1, "Com determinante (\"a entrada\"), o adjetivo concorda: \"proibida\". \"Anexas\" e \"mesmas\" também concordam."),
    q("tcema-s2", "Raciocínio Lógico", "geral", "Em uma urna com 3 bolas vermelhas e 7 azuis, a probabilidade de sortear uma vermelha é:", ["3/7", "3/10", "7/10", "1/3"], 1, "Casos favoráveis ÷ possíveis = 3/10."),
    q("tcema-s3", "Informática", "geral", "No Excel, a função =SE(A1>10;\"Alto\";\"Baixo\") com A1 = 8 retorna:", ["Alto", "Baixo", "8", "Erro"], 1, "8 não é maior que 10, então retorna o valor se falso: \"Baixo\"."),
    q("tcema-s4", "Matemática Financeira", "geral", "Um título de R$ 5.000 com desconto comercial simples de 3% ao mês, 2 meses antes do vencimento, terá desconto de:", ["R$ 150", "R$ 300", "R$ 306", "R$ 600"], 1, "D = N·i·t = 5.000 × 0,03 × 2 = R$ 300."),
    q("tcema-s5", "Controle externo", "especifica", "Qualquer cidadão, partido, associação ou sindicato é parte legítima para, na forma da lei, denunciar irregularidades ao:", ["Tribunal de Contas", "Senado apenas", "Supremo Tribunal Federal", "Banco Central"], 0, "Art. 74, §2º da CF."),
    q("tcema-s6", "Direito Administrativo", "especifica", "O poder que permite à Administração aplicar sanções a servidores por infrações funcionais é o:", ["Poder de polícia", "Poder disciplinar", "Poder regulamentar", "Poder hierárquico"], 1, "Poder disciplinar: apura e pune infrações de servidores e de quem tem vínculo especial com a Administração."),
    q("tcema-s7", "Direito Administrativo", "especifica", "A responsabilidade civil do Estado por danos causados por seus agentes a terceiros, como regra, é:", ["Subjetiva", "Objetiva", "Inexistente", "Apenas penal"], 1, "Art. 37, §6º da CF: objetiva, assegurado o direito de regresso contra o agente em caso de dolo ou culpa."),
    q("tcema-s8", "Contabilidade Pública", "especifica", "O estágio da despesa que verifica o direito do credor com base nos documentos comprobatórios é a:", ["Fixação", "Liquidação", "Empenho", "Licitação"], 1, "Art. 63 da Lei 4.320/64."),
    q("tcema-s9", "Direito Financeiro", "especifica", "Pela LRF, é nulo o ato que aumente despesa com pessoal nos:", ["Primeiros 180 dias do mandato.", "180 dias anteriores ao final do mandato.", "Meses de férias.", "Anos eleitorais apenas no primeiro semestre."], 1, "Art. 21 da LC 101/2000, com redação da LC 173/2020."),
    q("tcema-s10", "Orçamento público", "especifica", "A lei que orienta a elaboração da LOA e dispõe sobre alterações na legislação tributária é a:", ["PPA", "LDO", "LRF", "Lei 4.320/64"], 1, "Art. 165, §2º da CF."),
  ],
  pcma: [
    q("pcma-s1", "Língua Portuguesa", "geral", "Na frase \"Embora tenha provas, o delegado aguardou\", substitui-se \"Embora\" sem alterar o sentido por:", ["Porque", "Ainda que", "Portanto", "Assim que"], 1, "\"Embora\" e \"ainda que\" são conjunções concessivas."),
    q("pcma-s2", "Raciocínio Lógico", "geral", "Se todos os investigadores são servidores e Pedro não é servidor, então:", ["Pedro é investigador.", "Pedro não é investigador.", "Pedro pode ser investigador.", "Todo servidor é investigador."], 1, "Se fosse investigador seria servidor; como não é servidor, não é investigador."),
    q("pcma-s3", "Informática", "geral", "O malware que se replica sozinho pela rede, sem precisar de outro arquivo hospedeiro, é o:", ["Vírus", "Worm", "Cavalo de Troia", "Keylogger"], 1, "Worm se propaga autonomamente; o vírus depende de arquivo hospedeiro."),
    q("pcma-s4", "Direito Penal", "especifica", "O crime de extorsão mediante sequestro está previsto no art. 159 do CP e consiste em:", ["Subtrair coisa com violência.", "Sequestrar pessoa com o fim de obter vantagem como condição ou preço do resgate.", "Restringir a liberdade sem finalidade econômica.", "Exigir vantagem como funcionário público."], 1, "Sem finalidade de vantagem, seria sequestro ou cárcere privado (art. 148)."),
    q("pcma-s5", "Direito Penal", "especifica", "O arrependimento posterior (art. 16 do CP) permite redução de pena quando, nos crimes sem violência ou grave ameaça, o dano é reparado:", ["Até o recebimento da denúncia ou queixa.", "Após a sentença.", "Somente na fase de execução.", "Em qualquer momento."], 0, "Reparação voluntária até o recebimento da denúncia ou queixa: redução de 1/3 a 2/3."),
    q("pcma-s6", "Processo Penal", "especifica", "Após a Lei 13.964/2019, a decisão sobre arquivamento do inquérito, pelo texto do art. 28 do CPP, é do:", ["Delegado", "Ministério Público", "Escrivão", "Investigador"], 1, "O MP ordena o arquivamento e comunica a vítima, o investigado e a autoridade policial; o STF admitiu controle judicial."),
    q("pcma-s7", "Processo Penal", "especifica", "Na busca pessoal, segundo o CPP, a mulher será revistada:", ["Por qualquer policial.", "Preferencialmente por outra mulher, se não importar retardamento ou prejuízo da diligência.", "Apenas por médico.", "Somente com ordem judicial."], 1, "Art. 249 do CPP."),
    q("pcma-s8", "Medicina Legal", "especifica", "O exame que visa identificar uma pessoa pelas impressões digitais é a:", ["Datiloscopia", "Odontologia legal", "Toxicologia", "Balística"], 0, "Datiloscopia estuda as impressões papilares dos dedos."),
    q("pcma-s9", "Criminologia", "especifica", "A teoria das janelas quebradas relaciona a criminalidade:", ["À genética do criminoso.", "À desordem e ao abandono de pequenos delitos no ambiente urbano.", "Apenas à pobreza.", "À ausência de leis penais."], 1, "Wilson e Kelling (1982): sinais de desordem não reprimidos estimulam delitos mais graves."),
    q("pcma-s10", "Legislação Especial", "especifica", "Pela Lei 11.343/2006, a conduta de portar droga para consumo pessoal:", ["É punida com reclusão.", "Sujeita o agente a advertência, prestação de serviços ou medida educativa, sem pena de prisão.", "É equiparada ao tráfico.", "Não é prevista na lei."], 1, "Art. 28 da Lei de Drogas; o STF (RE 635.659) despenalizou a posse de maconha para uso, com quantidade de referência de 40 g."),
  ],
};
