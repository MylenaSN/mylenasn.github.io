---
id: spec-mosby-jornada-aluno
titulo: Spec Mosby — motor de jornada gamificada
feature: FEAT-JORNADA
atualizado_em: "2026-08-29"
---

# Spec Mosby — Jornada gamificada (16 semanas / 5 waves)

Pedido de origem: master prompt “Game-Based Student Journey” (Humanity-style, LMS, brand pack). Este arquivo é a especificação **antes** de código.

## 1. Diagnóstico de contexto

| Pergunta | Resposta |
|----------|----------|
| Subdomínio | **Supporting** do currículo (Trilhas é Core). **Core** do produto que o aluno *joga*. |
| BC que recebe | **Jornada do Aluno** (novo). Não abre 4 BCs. |
| Vazamento | `GamificationEngine` como BC separado faria `Level` ≠ `Semana`. `BrandPackContext` já é **Parceiro**. `LmsIntegrationContext` é Generic (adapter). |

O briefing `src/BoundedContexts/{StudentJourney, GamificationEngine, BrandPack, Lms}` **não** entra neste repositório. ARCHITECTURE §9: runtime nasce depois desta spec, sem contaminar Trilhas.

Mapa de contexto:

```
Trilhas (Core) ──Conformist──► Jornada do Aluno
Parceiro       ──Conformist──► Jornada (só tema)
Jornada        ──porta──────► Adapters LMS (xAPI / postMessage)
Produção       ──não lê──────  progresso do aluno
```

Produção emite aulas. Jornada **consome** ids de semana/aula; não reescreve LO.

## 2. Modelo de domínio

### Entidades / VOs

- **ProgressoDoAluno** (entity, root)
- **SemanaEmJogo** (entity) — estado da máquina
- **NoDaAula** (VO) — `{semana: 1..16, tipo: conceito|raiz|aceleracao}`
- **EvidenciaRaiz** (VO) — URI + carimbo
- **NotaDeGate** (VO) — 1–3 (1 alucinou → prompt de reforço com bloco da Aula 2 · 2 iterações e ficou bom · 3 o primeiro output já era o foco) + fato|hipótese|alucinação
- **Streak** (VO) — inteiro ≥ 0; zera se a semana calendário fecha sem vitória (loss-aversion: checkpoint na **mentoria**, não no login)
- **BrandSlug** (VO) — aponta Parceiro; o aggregate **não** guarda HEX

### Aggregate root e invariantes

Root: `ProgressoDoAluno`.

1. `aceleracao` só transita para *aberta* se `raiz` tem `EvidenciaRaiz`.
2. Semana *vencida* ⇔ evidência da raiz **e** `NotaDeGate` na aceleração (lab da semana, se v2).
3. Wave *liberada* ⇔ todas as semanas da wave anterior *vencidas*.
4. Streak incrementa só em `AceleracaoValidada`, não em `ConceitoConcluido`.
5. 48 nós existem; o **jogo** dos dois trilhos aplica lock só A2→A3. Aula 1 nunca destrava Aula 3.

### Domain events

`ConceitoConcluido` · `RaizEvidenciada` · `AceleracaoValidada` · `WaveDesbloqueada` · `StreakQuebrou` · `ProgressoSincronizado` (adapter).

### Domain service

`CalculaMomentum` — streak + “semana em risco” (mentoria segunda sem vitória). Não é XP genérico. Não mora no LMS.

## 3. Camadas (Clean Architecture) — quando o runtime nascer

| Camada | O quê | Onde *não* pôr |
|--------|-------|----------------|
| Entities | Invariantes acima | `hotmart.courseId`, HEX, React |
| Use cases | `AbrirSemana`, `RegistrarEvidenciaRaiz`, `ValidarAceleracao`, `CalcularStreak`, `InjetarTema` (lê porta Parceiro) | SQL, postMessage |
| Interface adapters | Repository progresso; Presenter do mapa; `ProgressSync` | Regras de lock |
| Frameworks | Canvas/PWA, LocalStorage, xAPI, Hotmart/WP/Udemy | Linguagem ubíqua |

Portas internas:

- `ProgressoRepository`
- `TemaDoParceiro` (lê kit — implementação no BC Parceiro / JSON gerado do `tema.md`)
- `HostProgress` (xAPI statement) — implementação por host

`brand-config.json` é **adapter de tema**, gerado do kit, não fonte da verdade.

## 4. Regra de dependência

```
UI / LMS / Storage  →  Use cases  →  ProgressoDoAluno
         ↑                    ↘
    TemaDoParceiro              HostProgress (interface)
```

Trilhas **não** importa Jornada. Jornada **não** escreve densidade. Se o player precisar do texto da aula, lê Produção por id — Conformist, read-only.

## 5. SOLID (aplicado a *esta* Feature)

- **SRP** — lock dos trilhos ≠ skin do parceiro ≠ sync LMS.
- **OCP** — host novo = novo adapter `HostProgress`, sem mudar o aggregate.
- **LSP** — todo `HostProgress` aceita os mesmos events; Hotmart não ganha método `darBadge`.
- **ISP** — UI do mapa não depende de xAPI.
- **DIP** — persistência atrás de `ProgressoRepository`.

## 6. Componentes

- Pacote `jornada` (CCP: muda quando a regra do tabuleiro muda).
- Pacote `skin` (muda com o kit).
- Pacote `hosts` (muda com o LMS).
- Sem ciclo: `jornada` não conhece `hosts`.

## 7. Decisões de design

> **Decisão 1:** Um BC (Jornada), não quatro.  
> **Motivo:** Evans — fronteira = modelo. Puzzle, streak e gate falam a mesma língua (`Semana`, `Raiz`, `Gate`). Marca e LMS já têm cerca.

> **Decisão 2:** Não criar `src/` neste repositório nesta fatia.  
> **Motivo:** ARCHITECTURE §1 e §9; contributing recusa árvore SDLC copiada. Walking skeleton primeiro no modelo + canvas.

> **Decisão 3:** Aula 1 = pathfinding (mapa), Aula 2 = bottleneck (Raiz), Aula 3 = boost **com** gate — não “dopamine hit” sem HITL.  
> **Motivo:** densidade + laboratorio-ia-mercado; 10x sem evidência da 2 é kaikaku.

> **Decisão 4:** 48 nós, lock em 16 pares A2→A3.  
> **Motivo:** `jogo-dois-trilhos.md`. Humanity-style = fluxo na **semana**, não 48 puzzles desconectados.

> **Decisão 5:** Streak conta **semanas vencidas**, checkpoint na mentoria.  
> **Motivo:** mapa A já tem Segunda ao vivo; loss-aversion no ritual real, não no daily login.

> **Decisão 6:** `brand-config.json` é projeção do kit Parceiro.  
> **Motivo:** HEX não se inventa no game; OCP para outro slug.

> **Decisão 7:** LMS = Generic. xAPI / postMessage atrás de porta.  
> **Motivo:** adapters não são BC (catálogo atual).

## 8. O que não fazer

- Scaffold `src/BoundedContexts/` na raiz AI-era Leaders.
- Segundo currículo em TypeScript (LOs, densidade).
- XP / lives / loot que abrem Aula 3 sem evidência da Raiz.
- BC de marca paralelo a `partners/{slug}/`.
- Flutter/React “porque o prompt pediu mobile” como fatia sem walking skeleton (Patton: troca de Driver).
- Relotar as 48 aulas v1 para “caber no game”.

---

## User Story Map (Patton) — fatia 1

Espinha do aluno (já em `jornada-usuario.md`): Mentoria → Conceito → Prática → IA → Empresa → Volta.

Walking skeleton **desta** Feature (atravessa Conceito + Prática + IA):

1. Abre o mapa da semana corrente (Aula 1 jogável).
2. Fecha Conceito → Raiz destrava.
3. Anexa evidência da Raiz → Aceleração destrava.
4. Registra gate (+ lab) → semana vencida no mapa.
5. Persistência local basta; LMS é fatia 2 (`US-JOR-04`).

Abaixo da linha (depois): streak visível, brand pack, sync host, 16 bosses mobile, puzzle Humanity por nó.

---

## Tríade semanal no motor (engajamento)

| Aula | Loop | Mecânica no mapa | Recompensa |
|------|------|------------------|------------|
| 1 Conceito | Baixo atrito | Pathfinding: “onde estou na wave” | Clareza; abre Raiz |
| 2 Raiz | Alto atrito, sem IA | Bottleneck: evidência do time | Único key da semana |
| 3 Aceleração | Lab + gate | Boost 10x **depois** da key | Dopamina *após* HITL |

Isso já é o canvas Dois trilhos + desafios-mobile. O engine **projeta** o que a densidade já manda.
