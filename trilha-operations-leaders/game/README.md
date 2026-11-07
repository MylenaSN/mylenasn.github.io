# Pacote `game/` — runtime desacoplado

Motor da jornada gamificada. **Consome** trilha como pacote de conteúdo (`content/`) e adapters (`brand-config.json`, pasta `aluno/`). O BC Trilhas **não** depende deste diretório.

Spec: [`../spec-mosby.md`](../spec-mosby.md).

## arquitetura-folder

| Elemento | Tipo | Papel | Liga a |
|----------|------|-------|--------|
| [`README.md`](./README.md) | hub | Inventário do runtime | [`play.html`](../play.html) · FEAT-JORNADA |
| [`css/play.css`](./css/play.css) | skin | Layout: desktop = viewport fixo + scroll interno; mobile ≤900px = scroll na página | `play.html` |
| [`js/boot.js`](./js/boot.js) | bootstrap | Monta engine + pacote de conteúdo | [`app.js`](./js/app.js) · [`map-islands.js`](./content/map-islands.js) |
| [`js/app.js`](./js/app.js) | engine | Estado, mapa, mesa, portfólio, dock | BC Jornada · `localStorage` |
| [`content/map-islands.js`](./content/map-islands.js) | conteúdo | Ilhas Setup/Plus **fora** do serpentino | [`plus-s01-setup-cofre.md`](../../../trilhas-conhecimento/AI-First-Operations-Leadership/densidade-pedagogica/plus-s01-setup-cofre.md) |
| [`content/casos-exemplo.js`](./content/casos-exemplo.js) | conteúdo | 5 times de exemplo (um por wave) — tipo de evidência, não o homework | [`app.js`](./js/app.js) · `Prompt exemplo` |
| [`content/lab-deliverables.js`](./content/lab-deliverables.js) | conteúdo | Título da sessão Lab + entrega + **personas por semana** (`LAB_PERSONAS`) | [`app.js`](./js/app.js) · trilha 3 artefatos |
| [`content/lab-prompts.js`](./content/lab-prompts.js) | conteúdo | Prompts Lab IA (seções 1–6 por semana) | [`app.js`](./js/app.js) |
| [`content/aula03-brief.js`](./content/aula03-brief.js) | conteúdo | Conceitos da Aula 3 (16+bônus) antes do prompt | [`app.js`](./js/app.js) fase `brief` |
| [`content/agents-prompt-seed.md`](./content/agents-prompt-seed.md) | conteúdo | Semente agnóstica para 3 agents (S08+) | [`app.js`](./js/app.js) Lab S08 · [`lab-deliverables.js`](./content/lab-deliverables.js) |

## Rodar

Na pasta do domain (`domain/game/`):

```bash
python -m http.server 8765
```

Abrir `http://127.0.0.1:8765/play.html` (módulos ES exigem servidor local).

## Ilhas do mapa

Setup e Plus ficam como **círculos na margem direita** do canvas (`#map-gadgets`), fora do serpentino.
