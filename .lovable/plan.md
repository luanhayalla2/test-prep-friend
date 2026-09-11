# Ampliar e identificar os simulados

## O que será feito
- Conectar o terceiro lote de 57 perguntas ao banco usado em prática livre, simulado completo e revisão espaçada.
- Manter perguntas inéditas organizadas por PMMA, CBM-MA, TCE-MA e PCMA, seguindo matérias, linguagem e nível de cobrança das provas anteriores.
- Identificar claramente no app que essas perguntas são autorais, inspiradas no estilo das provas, e não questões ou gabaritos oficiais.
- Corrigir eventuais inconsistências entre pergunta, alternativa correta e explicação antes de liberar o lote.
- Eliminar a mudança aleatória de questões durante o carregamento inicial, preservando o embaralhamento ao iniciar ou refazer um simulado.

## Atualização dos gabaritos de 2026
- Registrar no banco de questões a origem e o status do gabarito, deixando o conteúdo atual marcado como autoral.
- Preparar a interface para distinguir “gabarito autoral” de “gabarito oficial”.
- As provas de 2026 ainda não aconteceram; a troca pelos gabaritos oficiais será feita somente após a publicação pelas bancas, usando a fonte oficial correspondente. Isso não poderá ser executado antecipadamente nesta etapa.

## Validação
- Conferir a quantidade de questões por concurso e por tipo de conhecimento.
- Testar prática livre, simulado completo, correção, revisão das erradas e geração do relatório.
- Verificar o app em tela grande e celular, sem erros de carregamento.

## Detalhes técnicos
- O agregador central passará a reunir os três lotes existentes.
- O modelo de questão receberá metadados de origem/status sem quebrar relatórios ou progresso já salvos.
- O embaralhamento será determinístico entre servidor e navegador e renovado apenas por ação do usuário.
