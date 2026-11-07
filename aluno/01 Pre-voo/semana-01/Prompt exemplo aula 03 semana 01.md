# Prompt exemplo aula 03 semana 01.md

Exemplo · Orion Varejo · Logística Reversa.  
**First Loop · ouro** — mesmo texto do painel lateral no game (Homework → Lab aula 03).  
Copie o **tipo** de evidência e a **prática do autor**. Não copie no lugar do seu homework.

```
Squad Leader Lunna lidera a Squad Logística Reversa na Orion Varejo (big tech do varejo). Núcleo: Product Leader Bartolomeu, Tech Lead Yoshi, dois engenheiros, Designer Pops, QA Maggie. Escopo: app e torre de devoluções — solicitação do cliente, triagem no CD, reestoque ou descarte. WMS legado no ar.

## 1. Propósito e demanda (Sua resposta)
- Objetivo e como mede: reduzir o ciclo devolução → crédito. Hoje a Review conta "stories Done no prazo", mas o CD Extrema ainda carimba "não conforme" no papel — a métrica de tela não mostra se o cliente recebeu o crédito.
- O que tira o sono: a demo na Review ganha aplauso; o % de devoluções fechadas no SLA quase nunca entra na pauta.
- Reclamação: operação do CD e CX pedem previsibilidade do crédito e fila que não explode no pós-Black Friday.
- Autor: Perri / Deming.
- Prática no mundo real: Perri = Build Trap (entregamos o card e o resultado de negócio não muda). Deming = sem definição operacional de "pronto" (SLA de crédito), a Review vira show de tela.

## 2. Fontes de demanda
- Quem pede: marketplace ops e CX pedem direto; o canal oficial é o board do Bartolomeu.
- Como chega: card no Jira quando passa pelo PO; urgência de devolução fura a fila no Slack (#logistica-reversa).
- Planejado × não planejado: ~55% planejado / 45% urgências — Maggie anotou na última sprint.
- Autor: Ford / Anderson.
- Prática no mundo real: Ford = linha oficial vs. fura-fila. Anderson (STATIK) = mapear quem pede e quanto do tempo é interrupção — sem isso o quadro mente.

## 3. Capacidade
- Especialista: só Yoshi mexe no conector do WMS de RMA; o resto puxa front da jornada do cliente. Tudo que toca o legado espera Yoshi.
- Tarefas ao mesmo tempo: 3–4 por pessoa quando o CD trava a homologação — em vez de destravar, cada um puxa outra card.
- Autor: Taylor / Skelton e Pais.
- Prática no mundo real: Taylor = ilha de conhecimento (só uma pessoa mexe). Skelton & Pais = isso é desenho de time e carga cognitiva, não "falta de esforço".

## 4. Fluxo
- Etapas reais: Análise → Dev → Code review → Homologação no CD → Deploy.
- Onde mais para: Homologação no CD Extrema — uma pessoa de operações libera o lote; cards ficam dias "prontos" sem uso no chão.
- Regra para avançar: informal — cada um move o card quando "acha que está ok".
- Autor: Ford / Ohno.
- Prática no mundo real: Ford = a linha tem etapas. Ohno = espera (homologação) é desperdício mesmo quando o quadro não mostra a coluna.

## 5. Urgência
- Quando entra urgência: pico de devolução ou pedido do diretor de Supply — o card em andamento fica parado no meio.
- Data fixa: Black Friday / campanhas de marketplace furam a fila por acordo.
- Próximo item: teoricamente o topo do board; na prática, quem gritou no Slack.
- Autor: Ohno / Ng.
- Prática no mundo real: Ohno = se quase tudo é crítico, a fila deixa de existir. Ng = quem autoriza furar a fila é uma pessoa com critério — não o canal que gritou mais alto.
```
