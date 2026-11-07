---
id: cofre-artefatos
titulo: Cofre — nomes que o engine lê
atualizado_em: "2026-08-30"
---

# Cofre do aluno

A trilha **guarda** o que a Aula 2 e a Aula 3 geraram. A semana seguinte **usa** o arquivo da anterior. Na Semana 16 o aluno baixa **este** jogo (git) e alimenta com a pasta do Drive. Os 3 agents da autora entram com prompt raiz; o quarto sistema é o engine.

Drive do aluno (uma pasta, nomes fixos). Adapter Drive **não** mora aqui — só o contrato de nome.

## Nome (o engine aponta para isto)

`Homework aula 02 semana {NN}.md` · `Lab aula 03 semana {NN}.md`

O Lab `.md` é o envelope. Semanas com entrega extra já nascem com o arquivo correspondente na mesma pasta — o aluno preenche, não inventa outro nome.

| Semana | Homework (aula 02) | Lab (aula 03) | Extras na pasta |
|--------|--------------------|---------------|-----------------|
| 01 | `Homework aula 02 semana 01.md` | `Lab aula 03 semana 01.md` | — |
| 02 | `Homework aula 02 semana 02.md` | `Lab aula 03 semana 02.md` | `A3 Report aula 02 semana 02.md` · `Link Project aula 03 semana 02.txt` |
| 03 | `Homework aula 02 semana 03.md` | `Lab aula 03 semana 03.md` | `Diagrama hierarquia aula 03 semana 03.md` |
| 04 | `Homework aula 02 semana 04.md` | `Lab aula 03 semana 04.md` | `Grafico KR aula 03 semana 04.csv` |
| 05 | `Homework aula 02 semana 05.md` | `Lab aula 03 semana 05.md` | `Link prototipo aula 03 semana 05.txt` · `Jornada persona aula 03 semana 05.md` (imagem `.png`) |
| 06 | `Homework aula 02 semana 06.md` | `Lab aula 03 semana 06.md` | — |
| 07 | `Homework aula 02 semana 07.md` | `Lab aula 03 semana 07.md` | `Link overview NotebookLM aula 03 semana 07.txt` |
| 08 | `Homework aula 02 semana 08.md` | `Lab aula 03 semana 08.md` | `Diagrama fluxo aula 03 semana 08.md` |
| 09 | `Homework aula 02 semana 09.md` | `Lab aula 03 semana 09.md` | `Pergunta voto aula 03 semana 09.txt` |
| 10 | `Homework aula 02 semana 10.md` | `Lab aula 03 semana 10.md` | `Deck FinOps aula 03 semana 10.md` (PDF `.pdf`) |
| 11 | `Homework aula 02 semana 11.md` | `Lab aula 03 semana 11.md` | `Diagrama esteira aula 03 semana 11.md` |
| 12 | `Homework aula 02 semana 12.md` | `Lab aula 03 semana 12.md` | `persona.md` · `steering.md` · `skill.md` |
| 13 | `Homework aula 02 semana 13.md` | `Lab aula 03 semana 13.md` | `Diagrama spec maestro aula 03 semana 13.md` |
| 14 | `Homework aula 02 semana 14.md` | `Lab aula 03 semana 14.md` | — |
| 15 | `Homework aula 02 semana 15.md` | `Lab aula 03 semana 15.md` | `Link Project advisor aula 03 semana 15.txt` |
| 16 | `Homework aula 02 semana 16.md` | `Lab aula 03 semana 16.md` | `Link overview aula 03 semana 16.txt` · `Ata ritual aula 03 semana 16.md` |
| Bônus | `Homework aula 02 semana bonus.md` | `Lab aula 03 semana bonus.md` | — |

O bônus **não** entra na progressão das semanas 01–16. Pasta: `04 Times hibridos/bonus-medida/`.

Índice: `jornada.manifest.json` (schema em [`jornada.manifest.schema.json`](./jornada.manifest.schema.json)).

## Progressão

A Aula 3 da semana N **lê** o A2 da semana N e, se existir, o A3 da semana N−1. Sem o nome certo o engine não aponta.

## Dois destinos, um contrato

| Onde | Papel |
|------|--------|
| **Google Drive** do aluno | Pasta viva durante as 16 semanas. Ele aciona os 3 agents + o jogo a partir daí. |
| **Git do engine** (esta Feature) | No fechamento, a turma recebe o diretório do jogo. Copia `aluno/` + o manifest. O `play.html` alimenta o mapa com os artefatos. |

O Drive **não** é Bounded Context. OAuth fica em `outer-layers/adapters/`. Aqui só o **id do arquivo**.

## Três agents + o engine

A autora entrega **3 prompts raiz** (não são currículo; não são ficha de Library). O aluno cola no Drive e chama do mesmo diretório.

| Id | Papel no fechamento | Prompt |
|----|---------------------|--------|
| `AGENT-01` | A definir pela autora | pasta `aluno/agents/` |
| `AGENT-02` | A definir pela autora | pasta `aluno/agents/` |
| `AGENT-03` | A definir pela autora | pasta `aluno/agents/` |
| **Engine** | Este jogo. Consolida as 16 semanas. | [`play.html`](./play.html) lê o manifest |

## Pacote que a turma baixa (semana 16)

```
aluno/
  jornada.manifest.json
  agents/
  01 Pre-voo/semana-01/Homework aula 02 semana 01.md
  01 Pre-voo/semana-01/Lab aula 03 semana 01.md
  02 Produto/semana-03/…
  03 Delivery/semana-09/Lab aula 03 semana 09.md   ← IDE do ciclo (Wave 03)
  04 Times hibridos/…
  05 Equilibrio AI-Era/semana-16/Lab aula 03 semana 16.md
```

Wave → semana. O aluno abre `aluno/` no Cursor. Drive pode espelhar a mesma árvore.

Invariante: o engine **não** inventa o artefato. Se o arquivo não está no manifest com o nome da tabela, a semana não alimenta o mapa.

## arquitetura-folder

Inventário desta pasta-contrato. Qualquer alteração aqui atualiza **esta** seção no mesmo passo — este arquivo vive na Feature; o hub da Feature lista a linha.

(Ver [`README.md`](./README.md) da Feature.)
