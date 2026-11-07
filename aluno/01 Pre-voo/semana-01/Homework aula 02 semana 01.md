# Homework aula 02 semana 01.md

> **Creator:** Mylena de Souza Nascimento. Licença individual do aluno matriculado na formação AI-First Operations Leadership. Não redistribuir. Inteligência artificial não é autora.

Leitura do serviço **como está hoje** (STATIK — Anderson: propósito, demanda, capacidade, fluxo, classes de serviço). Digite **só** nas seções **Sua resposta — digite aqui o diagnóstico do seu time**. Exemplos A e B não são o seu time — são apenas para você se inspirar. Não copie.

Cada seção nomeia um método do Gantt da Aula 2. Se a sua resposta parecer com o método, anote o autor. Se não parecer, deixe o autor em branco.

---

## 1. Propósito e propósito do serviço

**Objetivo:** alinhar a visão do time, o que conta como sucesso e as dores de gestão.

**Perguntas**

1. Qual é o objetivo principal do seu time hoje dentro da empresa, e como você mede se o time está entregando o valor esperado?
2. Do seu ponto de vista de liderança, o que mais tira o seu sono ou causa frustração na gestão desse fluxo?
3. Quais são as reclamações mais frequentes que você recebe de stakeholders ou clientes sobre as entregas do time?

**Métodos que cabem aqui**

- Drucker — o resultado do trabalho do conhecimento aparece fora da sua mesa. A medida é o que o outro reconhece, não o card que saiu.
- Doerr — medir o que importa. Feature no prazo, sem baseline de valor, é contagem.
- Perri — Build Trap: o time entrega no prazo e o cliente continua reclamando.

**Exemplo A — pressão por prazo.** "Nosso objetivo é sustentar e evoluir a plataforma de pagamentos. Medimos sucesso por features entregues no prazo, mas meu maior problema é a falta de previsibilidade. Prometemos datas para a diretoria e raramente cumprimos porque surgem urgências no meio do caminho, o que gera muita reclamação dos stakeholders."

**Exemplo B — sobrecarga e qualidade.** "Somos o time responsável pelo app B2C. O cliente reclama bastante de bugs que sobem para produção e do tempo que levamos para responder chamados. A equipe está sobrecarregada, e sinto que passamos mais tempo apagando incêndio do que construindo código novo."

**Sua resposta — digite aqui o diagnóstico do seu time**

- Objetivo e como mede:
- O que tira o sono:
- Reclamação mais frequente:
- Autor do Gantt que você reconhece aqui (ou em branco):

---

## 2. Fontes de demanda e entrada de trabalho

**Objetivo:** quem tem autoridade para pedir, por qual canal, e quanto do tempo é interrupção.

**Perguntas**

1. Quem são as pessoas ou áreas que têm autonomia para pedir demandas diretamente para o seu time?
2. Como essas demandas chegam até vocês hoje? Existe um canal oficial ou o trabalho fura a fila por conversas paralelas?
3. Qual é a proporção aproximada entre o trabalho planejado (projetos, melhorias) e o não planejado (bugs, suporte, chamados)?

**Métodos que cabem aqui**

- Smith — quando cada pedido entra por um canal, ninguém vê o todo.
- Ford — a fila oficial existe; o favor no Slack é trabalho que fura a linha.
- STATIK (Anderson) — esta seção é a fonte de demanda. Sem ela, o quadro mente.

**Exemplo A — entrada caótica.** "Teoricamente tudo deveria vir pelo Jira via Product Owner. Na prática, diretores e gestores de outras áreas chamam os desenvolvedores diretamente no Slack ou WhatsApp pedindo favores urgentes. Estimaria que 40% do nosso tempo vai para apagar esses incêndios não planejados."

**Exemplo B — entrada centralizada, volume alto.** "Toda demanda passa por mim e pelo PO no nosso refinamento semanal. Nós temos 3 grandes clientes internos disputando a mesma capacidade. O problema não é a falta de canal, mas sim a quantidade massiva de pedidos que não conseguimos priorizar sem gerar atrito."

**Sua resposta — digite aqui o diagnóstico do seu time**

- Quem pede:
- Como chega (canal oficial e o que fura a fila):
- Planejado × não planejado (só se você sabe; senão escreva "não medi"):
- Autor do Gantt que você reconhece aqui (ou em branco):

---

## 3. Capacidade e limites do serviço

**Objetivo:** especialização, gargalo de pessoa e quantas coisas cada um toca ao mesmo tempo.

**Perguntas**

1. Hoje o seu time trabalha mais em modo especialista (só uma pessoa mexe na parte X) ou as pessoas conseguem puxar qualquer tarefa?
2. Quantas tarefas, em média, cada pessoa do time costuma tocar ao mesmo tempo?
3. Você tem clareza de quantas demandas o time consegue entregar por semana ou mês, e qual o tempo médio de uma demanda?

**Métodos que cabem aqui**

- Taylor — ilha de conhecimento: só uma pessoa mexe no legado, e tudo espera essa pessoa.
- Ohno — quando trava, puxar outra tarefa aumenta o que está em progresso.
- Skelton e Pais — gargalo de conhecimento é desenho do time, não falta de esforço.

**Exemplo A — ilhas de conhecimento.** "Temos gargalos pesados. Apenas um sênior conhece o legado do sistema, então tudo trava na revisão dele. O pessoal costuma tocar de 3 a 4 tarefas ao mesmo tempo porque, quando travam em uma, já puxam outra em vez de resolver o bloqueio."

**Exemplo B — falta de medida.** "As pessoas conseguem se ajudar em várias frentes, mas não tenho métricas claras de capacidade. Sei que entregamos cerca de 10 cards por sprint, mas o tempo de entrega varia de 3 dias a 2 meses, o que me impede de dar prazos confiáveis."

**Sua resposta — digite aqui o diagnóstico do seu time**

- Especialista:
- Tarefas ao mesmo tempo (ou "não contei"):
- Quantidade e tempo de entrega (ou "não medi"):
- Autor do Gantt que você reconhece aqui (ou em branco):

---

## 4. Mapeamento do fluxo de trabalho e regras

**Objetivo:** o caminho real da demanda e onde ela fica parada.

**Perguntas**

1. Quando uma ideia é aprovada, quais são as etapas reais que ela percorre até estar disponível para o usuário final?
2. Onde você percebe que o trabalho fica mais tempo parado aguardando alguém (aprovação, revisão, homologação)?
3. Existem regras claras para uma tarefa ir para a próxima etapa, ou cada pessoa avança do seu jeito?

**Métodos que cabem aqui**

- Ford — a linha tem etapas; o gargalo é onde o item espera.
- Deming — "pronto" sem critério vira demonstração de tela, não uso.
- Ohno — espera (homologação, janela de publicação) é etapa, mesmo quando o quadro não mostra.

**Exemplo A — homologação externa.** "O trabalho anda rápido no desenvolvimento, mas fica parado semanas na etapa de Aguardando Homologação porque dependemos do time de Negócios para testar e aprovar. As regras de transição são informais: cada um avança o card quando acha que está pronto."

**Exemplo B — etapa oculta.** "O card passa por Análise, Desenvolvimento, Testes e Deploy. Mas o processo de deploy é manual e burocrático, então acumulo tarefas numa coluna invisível de Aguardando Janela de Release antes de subir."

**Sua resposta — digite aqui o diagnóstico do seu time**

- Etapas reais:
- Onde mais para:
- Regra para avançar (clara ou cada um do seu jeito):
- Autor do Gantt que você reconhece aqui (ou em branco):

---

## 5. Classes de serviço e gestão de urgências

**Objetivo:** o que o time trata como crítico, o que tem data fixa e como se escolhe o próximo item.

**Perguntas**

1. Quando surge um erro grave em produção ou uma urgência de diretoria, como o time reage e o que acontece com o trabalho que já estava em andamento?
2. Vocês lidam com demandas que possuem data fixa inegociável (data comemorativa, adequação regulatória)?
3. Como é feita a escolha do próximo item quando uma pessoa fica livre?

**Métodos que cabem aqui**

- Ohno — se quase tudo é crítico, a fila deixa de existir.
- Ng — quem autoriza o que fura a fila é uma pessoa, não o canal que gritou mais alto.
- Mollick — co-inteligência: a data fixa fura a fila por acordo; o resto segue a ordem combinada.

**Exemplo A — urgência constante.** "Quando entra um bug crítico, tudo para. O problema é que quase tudo é tratado como crítico. O time larga o que está fazendo no meio, a tarefa anterior fica parada no quadro e perdemos o contexto quando tentamos voltar para ela."

**Exemplo B — prazo fixo.** "Temos entregas com prazos cravados por órgãos reguladores. Nesses casos, elas furam a fila. Para o resto, a regra é puxar o que está no topo da coluna de Priorizados, mas nem sempre o time segue essa ordem."

**Sua resposta — digite aqui o diagnóstico do seu time**

- O que acontece com o trabalho em andamento quando entra urgência:
- Existe data fixa? Qual tipo:
- Como se escolhe o próximo item:
- Autor do Gantt que você reconhece aqui (ou em branco):

---

## O que não escrever

Número que você não mediu. Nome de método que o time não pratica. Os exemplos A e B acima.
