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

/** Sétimo lote de questões autorais inéditas, no estilo das provas. */
export const BATCH7_QUESTIONS: Record<string, Question[]> = {
  pmma: [
    q("pmma-r1", "Língua Portuguesa", "geral", "Assinale a alternativa grafada corretamente.", ["Excessão", "Exceção", "Esceção", "Eceção"], 1, "A grafia correta é \"exceção\"."),
    q("pmma-r2", "Língua Portuguesa", "geral", "Em \"Os soldados, cansados, retornaram ao quartel\", o termo \"cansados\" exerce função de:", ["Predicativo do sujeito", "Objeto direto", "Adjunto adverbial", "Vocativo"], 0, "Atribui característica ao sujeito por meio de verbo significativo: predicativo do sujeito (predicado verbo-nominal)."),
    q("pmma-r3", "Matemática", "geral", "Um uniforme de R$ 200 recebeu desconto de 15%. O novo preço é:", ["R$ 150", "R$ 170", "R$ 175", "R$ 185"], 1, "200 × 0,85 = R$ 170."),
    q("pmma-r4", "Raciocínio Lógico", "geral", "Se Ana é mais alta que Bia e Bia é mais alta que Carla, então:", ["Carla é mais alta que Ana.", "Ana é mais alta que Carla.", "Bia é a mais alta.", "Não se pode concluir nada."], 1, "A relação \"mais alto que\" é transitiva: Ana > Bia > Carla."),
    q("pmma-r5", "Informática", "geral", "O dispositivo ou software que filtra o tráfego de rede segundo regras de segurança é o:", ["Firewall", "Modem", "Navegador", "Compactador"], 0, "O firewall controla conexões de entrada e saída conforme políticas definidas."),
    q("pmma-r6", "Direito Constitucional", "especifica", "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de autoridade:", ["Policial", "Judiciária competente", "Administrativa", "Militar, em qualquer caso"], 1, "Art. 5º, LXI, ressalvados transgressão militar ou crime propriamente militar definidos em lei."),
    q("pmma-r7", "Direito Penal", "especifica", "O crime praticado por funcionário público que exige vantagem indevida em razão da função é:", ["Corrupção passiva", "Concussão", "Peculato", "Prevaricação"], 1, "Art. 316 do CP: exigir é concussão; solicitar ou receber é corrupção passiva (art. 317)."),
    q("pmma-r8", "Direito Penal", "especifica", "Retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal configura:", ["Prevaricação", "Condescendência criminosa", "Peculato culposo", "Advocacia administrativa"], 0, "Art. 319 do CP."),
    q("pmma-r9", "Processo Penal", "especifica", "O preso será informado de seus direitos, entre os quais o de:", ["Permanecer calado.", "Escolher o juiz.", "Não ser identificado.", "Recusar qualquer revista."], 0, "Art. 5º, LXIII da CF: o preso será informado de seus direitos, entre eles o de permanecer calado."),
    q("pmma-r10", "Direitos Humanos", "especifica", "Segundo a Lei 13.060/2014, os agentes de segurança devem priorizar:", ["O uso de arma de fogo em qualquer abordagem.", "Instrumentos de menor potencial ofensivo.", "A dispensa de treinamento.", "O uso da força como primeira opção."], 1, "A Lei 13.060/2014 disciplina o uso preferencial de instrumentos de menor potencial ofensivo, observando legalidade, necessidade, razoabilidade e proporcionalidade."),
  ],
  cbmma: [
    q("cbmma-r1", "Língua Portuguesa", "geral", "Indique a alternativa em que há um verbo no futuro do pretérito.", ["Eu salvarei a vítima.", "Eu salvaria a vítima.", "Eu salvei a vítima.", "Eu salvava a vítima."], 1, "\"Salvaria\" é futuro do pretérito; \"salvarei\", futuro do presente; \"salvei\", pretérito perfeito; \"salvava\", imperfeito."),
    q("cbmma-r2", "Matemática", "geral", "A área de um terreno retangular de 15 m por 8 m é:", ["23 m²", "46 m²", "120 m²", "150 m²"], 2, "Área = 15 × 8 = 120 m²."),
    q("cbmma-r3", "Raciocínio Lógico", "geral", "Numa equipe, todo mergulhador é nadador. Logo:", ["Todo nadador é mergulhador.", "Algum nadador é mergulhador, se houver mergulhadores.", "Nenhum nadador é mergulhador.", "Todo não nadador é mergulhador."], 1, "Se o conjunto de mergulhadores está contido no de nadadores e não é vazio, algum nadador é mergulhador; a recíproca não vale."),
    q("cbmma-r4", "Atualidades", "geral", "O fenômeno climático marcado pelo aquecimento anormal das águas do Pacífico Equatorial é o:", ["La Niña", "El Niño", "Monção", "Furacão"], 1, "El Niño é o aquecimento; La Niña, o resfriamento anormal."),
    q("cbmma-r5", "Combate a incêndio", "especifica", "O fenômeno em que gases quentes acumulados no teto inflamam-se e o fogo se generaliza no ambiente é o:", ["Backdraft", "Flashover", "Boil over", "BLEVE"], 1, "Flashover: inflamação generalizada do ambiente. Backdraft: explosão por entrada súbita de ar em ambiente pobre em oxigênio."),
    q("cbmma-r6", "Combate a incêndio", "especifica", "Incêndios em líquidos inflamáveis, como gasolina, são da classe:", ["A", "B", "C", "D"], 1, "Classe B: líquidos e gases inflamáveis, que queimam em superfície."),
    q("cbmma-r7", "Primeiros socorros", "especifica", "Na avaliação primária do trauma (XABCDE), a letra X refere-se a:", ["Exposição da vítima", "Hemorragia exsanguinante", "Vias aéreas", "Escala de Glasgow"], 1, "O X prioriza o controle de hemorragias externas graves antes da via aérea (A)."),
    q("cbmma-r8", "Primeiros socorros", "especifica", "Na escala de coma de Glasgow, a pontuação mínima possível é:", ["0", "1", "3", "8"], 2, "Cada parâmetro (ocular, verbal, motor) vale no mínimo 1, totalizando 3; o máximo é 15."),
    q("cbmma-r9", "Salvamento e resgate", "especifica", "Antes de abordar vítima em acidente de trânsito, a primeira preocupação do socorrista deve ser:", ["Retirar a vítima do veículo.", "A segurança da cena.", "Ligar o rádio.", "Fotografar o local."], 1, "Garantir a segurança da cena evita novas vítimas, inclusive a equipe."),
    q("cbmma-r10", "Defesa civil", "especifica", "As ações de proteção e defesa civil abrangem prevenção, mitigação, preparação, resposta e:", ["Punição", "Recuperação", "Tributação", "Licitação"], 1, "Art. 3º da Lei 12.608/2012."),
  ],
  tcema: [
    q("tcema-r1", "Língua Portuguesa", "geral", "Assinale o pronome de tratamento adequado a conselheiros de Tribunal de Contas em comunicações oficiais, conforme o Manual de Redação da Presidência (3ª ed.):", ["Vossa Majestade", "Senhor", "Vossa Santidade", "Vossa Magnificência"], 1, "A 3ª edição do Manual simplificou o tratamento, adotando \"Senhor/Senhora\" para autoridades em geral."),
    q("tcema-r2", "Raciocínio Lógico", "geral", "Em um grupo, 60% são servidores e, destes, 25% são auditores. Os auditores representam do total:", ["15%", "25%", "35%", "40%"], 0, "0,60 × 0,25 = 0,15 = 15%."),
    q("tcema-r3", "Informática", "geral", "No Excel, a função que retorna a média aritmética de um intervalo é:", ["=SOMA()", "=MÉDIA()", "=CONT.NÚM()", "=MÁXIMO()"], 1, "MÉDIA calcula a média; CONT.NÚM conta células numéricas; MÁXIMO retorna o maior valor."),
    q("tcema-r4", "Matemática Financeira", "geral", "Um produto subiu 20% e depois caiu 20%. Em relação ao preço inicial, ele:", ["Ficou igual.", "Caiu 4%.", "Subiu 4%.", "Caiu 2%."], 1, "1,2 × 0,8 = 0,96: queda de 4%."),
    q("tcema-r5", "Controle externo", "especifica", "Os Tribunais de Contas dos Estados são integrados por quantos conselheiros, segundo a CF/88?", ["Sete", "Nove", "Cinco", "Onze"], 0, "Art. 75, parágrafo único: sete conselheiros. O TCU tem nove ministros."),
    q("tcema-r6", "Direito Administrativo", "especifica", "O atributo que permite à Administração executar seus atos sem recorrer previamente ao Judiciário é a:", ["Tipicidade", "Autoexecutoriedade", "Presunção de legitimidade", "Imperatividade"], 1, "Autoexecutoriedade: execução direta pela Administração nos casos previstos em lei ou de urgência."),
    q("tcema-r7", "Direito Administrativo", "especifica", "Pela Lei 8.429/1992, alterada pela Lei 14.230/2021, os atos de improbidade exigem:", ["Culpa leve.", "Dolo.", "Apenas dano ao erário.", "Responsabilidade objetiva."], 1, "Após 2021, somente condutas dolosas configuram improbidade administrativa."),
    q("tcema-r8", "Direito Financeiro", "especifica", "A receita corrente líquida, na LRF, serve de base principalmente para:", ["Calcular limites de despesa com pessoal e dívida.", "Fixar salários de servidores.", "Definir alíquotas de impostos.", "Eleger conselheiros."], 0, "A RCL é parâmetro para limites de pessoal, endividamento e reserva de contingência."),
    q("tcema-r9", "Orçamento público", "especifica", "Os créditos adicionais destinados a despesas urgentes e imprevisíveis, como guerra ou calamidade, são os:", ["Suplementares", "Especiais", "Extraordinários", "Ordinários"], 2, "Art. 167, §3º da CF e art. 41 da Lei 4.320/64."),
    q("tcema-r10", "Arquivologia", "especifica", "O instrumento que define prazos de guarda e destinação dos documentos é a:", ["Tabela de temporalidade", "Planta baixa", "Folha de ponto", "Ata"], 0, "A tabela de temporalidade estabelece prazos nas fases corrente e intermediária e a destinação final (eliminação ou guarda permanente)."),
  ],
  pcma: [
    q("pcma-r1", "Língua Portuguesa", "geral", "Assinale a frase em que o \"se\" é partícula apassivadora.", ["Vendem-se armas apreendidas.", "Precisa-se de investigadores.", "Ele se feriu.", "Se chover, a operação será adiada."], 0, "Com verbo transitivo direto, \"vendem-se armas\" = \"armas são vendidas\". Em \"precisa-se de\" é índice de indeterminação do sujeito."),
    q("pcma-r2", "Raciocínio Lógico", "geral", "Quantas linhas tem a tabela-verdade de uma proposição com 3 variáveis?", ["3", "6", "8", "9"], 2, "2ⁿ linhas: 2³ = 8."),
    q("pcma-r3", "Informática", "geral", "A cópia de segurança de dados, feita para recuperação em caso de perda, é o:", ["Backup", "Spam", "Plugin", "Cache"], 0, "Backup é a cópia de segurança dos dados."),
    q("pcma-r4", "Direito Penal", "especifica", "No homicídio, a qualificadora do motivo fútil refere-se a motivo:", ["Insignificante e desproporcional.", "De relevante valor moral.", "Torpe e repugnante.", "Por defesa própria."], 0, "Fútil é o motivo banal, desproporcional; torpe é o abjeto; relevante valor moral é causa de diminuição."),
    q("pcma-r5", "Direito Penal", "especifica", "É inimputável, pelo CP, o agente que ao tempo da ação era:", ["Maior de 70 anos.", "Menor de 18 anos.", "Reincidente.", "Embriagado voluntariamente."], 1, "Art. 27 do CP. A embriaguez voluntária não exclui a imputabilidade (art. 28, II)."),
    q("pcma-r6", "Processo Penal", "especifica", "Pelo CPP, a prisão preventiva pode ser decretada:", ["Pelo delegado, de ofício.", "Pelo juiz, a requerimento do MP, do querelante, do assistente ou por representação da autoridade policial.", "Somente após o trânsito em julgado.", "Pelo escrivão de polícia."], 1, "Art. 311 do CPP, após a Lei 13.964/2019, vedou a decretação de ofício pelo juiz."),
    q("pcma-r7", "Processo Penal", "especifica", "A prisão temporária, em regra, tem prazo de:", ["24 horas", "5 dias, prorrogável por igual período", "30 dias, improrrogável", "60 dias"], 1, "Lei 7.960/1989: 5 dias prorrogáveis por mais 5. Em crimes hediondos, 30 + 30 (Lei 8.072/90)."),
    q("pcma-r8", "Medicina Legal", "especifica", "Os livores cadavéricos (hipóstases) tendem a se fixar após aproximadamente:", ["30 minutos", "2 horas", "8 a 12 horas", "7 dias"], 2, "Surgem por volta de 2–3 h e fixam-se entre cerca de 8 e 12 horas após a morte."),
    q("pcma-r9", "Criminologia", "especifica", "A prevenção criminal primária atua:", ["Sobre o condenado, na execução da pena.", "Nas causas e raízes do crime, como educação, emprego e moradia.", "Apenas em áreas de alto risco já identificadas.", "Somente com policiamento ostensivo."], 1, "Primária: raízes sociais. Secundária: grupos e locais de risco. Terciária: o recluso, evitando reincidência."),
    q("pcma-r10", "Legislação Estadual", "especifica", "A Lei 11.340/2006 (Maria da Penha) prevê que medidas protetivas de urgência poderão ser concedidas:", ["Somente após o fim do processo.", "Pelo juiz, a requerimento do MP ou da ofendida.", "Apenas pelo delegado, definitivamente.", "Somente com testemunhas."], 1, "Art. 19 da Lei 11.340/2006; a Lei 14.188/2021 ainda permite afastamento do agressor pelo delegado ou policial em casos específicos."),
  ],
};
