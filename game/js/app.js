import { LAB_DELIVERABLES, labPersona, labSessionTitle } from "../content/lab-deliverables.js?v=20261003h";
import { buildLabPrompt } from "../content/lab-prompts.js?v=20261003h";
import { aula03BriefOf } from "../content/aula03-brief.js?v=20261003h";
import { FILES, WAVE_DIR, pastaSemana, pastaBonus } from "../content/arquivos-jornada.js?v=20261003h";
import { EX, casoBanner, casoLinha, casoCabecalho } from "../content/casos-exemplo.js?v=20261003h";

export function startJornada(cfg = {}) {
  const MAP_ISLANDS = cfg.islands || [];
  const KEY = "afsl-cofre-v5";
  const WEEKS = [
    { n: 1, w: 1, t: "Habilidades na era da IA" },
    { n: 2, w: 1, t: "O novo organograma" },
    { n: 3, w: 2, t: "Outcomes vs. Outputs" },
    { n: 4, w: 2, t: "OKRs e backlog de valor" },
    { n: 5, w: 2, t: "Do problema ao produto" },
    { n: 6, w: 2, t: "Hierarquia de backlog" },
    { n: 7, w: 3, t: "Modelos mentais" },
    { n: 8, w: 3, t: "Kanban e fluxo" },
    { n: 9, w: 3, t: "Engenharia de ciclos" },
    { n: 10, w: 3, t: "FinOps" },
    { n: 11, w: 4, t: "Liderança holárquica" },
    { n: 12, w: 4, t: "Design de agents" },
    { n: 13, w: 4, t: "Orquestração agêntica" },
    { n: 14, w: 4, t: "Esteira agêntica" },
    { n: 15, w: 5, t: "Líder transformador" },
    { n: 16, w: 5, t: "Potencial humano" },
    { n: 17, w: 4, t: "Bônus · medida da entrega", bonus: true }
  ];
  const WAVES = { 1: "Pré-voo", 2: "Produto", 3: "Delivery", 4: "Times híbridos", 5: "Homeostase" };
  const WAVE_META = {
    1: { pilar: "Pré-voo", subtitle: "O Despertar", artefato: "" },
    2: { pilar: "Produto", subtitle: "O Mapa de Valor", artefato: "" },
    3: { pilar: "Delivery", subtitle: "A Engenharia do Ciclo", artefato: "Métricas de fluxo (apoio)" },
    4: { pilar: "Times híbridos", subtitle: "Humano & IA no loop", artefato: "Workflow Agêntico" },
    5: { pilar: "Homeostase", subtitle: "Seu potencial humano", artefato: "PDI Advisor" }
  };
  const LEADER_CALL = {
    1: "Você não opera a máquina. Você desenha a base.",
    2: "Você não entrega volume. Você entrega valor.",
    3: "Você não reza pelo ciclo. Você engenharia o ritmo.",
    4: "Você não perde o time. Você orquestra humano & IA.",
    5: "Você não some na IA. Você lidera a era."
  };
  const WAVE_LINE = {
    1: "Antes de voar, identifique sua base de fundamentos",
    2: "O Mapa de Valor",
    3: "A Engenharia do Ciclo",
    4: "Times Híbridos: Humano & IA",
    5: "O real potencial humano"
  };
  const SEMANA_TRILHA = {
    1: "Os líderes e suas habilidades fundamentais na era da IA",
    2: "O novo organograma: os departamentos e cargos que a IA criou",
    3: "Outcomes vs. Outputs: o que o seu time realmente entrega?",
    4: "Discovery Estratégico: OKRs e o Backlog que Gera Valor",
    5: "Do Problema ao Produto",
    6: "Hierarquia de Backlog e a Esteira Upstream com IA",
    7: "Modelos Mentais importantes para a Liderança Moderna",
    8: "Kanban Sistêmico e Métricas de Fluxo",
    9: "Engenharia de Ciclos",
    10: "FinOps e a Visão Econômica do Desenvolvimento",
    11: "Liderança Holárquica: o ecossistema Humano & IA",
    12: "Design de Agents: LangChain, LangGraph, Tools, Skills, Hooks e Personas",
    13: "Orquestração Agêntica: construindo o maestro do seu time",
    14: "A Esteira Agêntica Inteligente: RAG, MCP, Subagents e Evals",
    15: "Consolidação do Líder Transformador da Era IA",
    16: "O real potencial humano na era da IA",
    17: "Medida da entrega — além do fluxo"
  };

  function weekTitle(n) {
    const label = SEMANA_TRILHA[n] || WEEKS[n - 1].t;
    if (isBonus(n)) return "Plus — " + label;
    return "Semana " + String(n).padStart(2, "0") + " — " + label;
  }

  function weekTitleHtml(n) {
    const label = SEMANA_TRILHA[n] || WEEKS[n - 1].t;
    if (isBonus(n)) return '<span class="week-kicker">Plus</span>' + label;
    return '<span class="week-kicker">Semana ' + String(n).padStart(2, "0") + "</span>" + label;
  }

  const COPY_BTN_ICON = '<svg class="btn-copy__ico" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

  function copyBtnHtml(label, extraClass, attrs) {
    const extra = attrs ? " " + attrs : "";
    return '<button type="button" class="btn-copy' + (extraClass ? " " + extraClass : "") + '"' + extra + ">" + COPY_BTN_ICON + "<span>" + label + "</span></button>";
  }

  function labOf() { return LABS[week]; }

  function labEtapas(lab) {
    if (lab.etapas && lab.etapas.length) return lab.etapas;
    const out = [];
    const pushEtapa = (tools) => {
      const clean = tools.filter((t) => t && t.label && t.href);
      if (clean.length) out.push({ tools: clean });
    };
    const alt = String(lab.alt || "").trim();
    const hasAlt = alt && alt !== "—";
    const tool = String(lab.tool || "").trim();
    if (hasAlt && lab.href2) {
      pushEtapa([{ label: toolShortName(tool), href: lab.href }, { label: toolShortName(alt), href: lab.href2 }]);
      return out;
    }
    if (lab.href2 && /\s+ou\s+/i.test(tool)) {
      const parts = tool.split(/\s+ou\s+/i).map((s) => s.trim()).filter(Boolean);
      if (parts.length === 2) {
        pushEtapa([
          { label: toolShortName(parts[0]), href: lab.href },
          { label: toolShortName(parts[1]), href: lab.href2 },
        ]);
        return out;
      }
    }
    pushEtapa([{ label: toolShortName(tool), href: lab.href }]);
    if (lab.href2) pushEtapa([{ label: toolShortName(alt || "Alternativa"), href: lab.href2 }]);
    return out;
  }

  function toolShortName(raw) {
    let s = String(raw || "").trim();
    if (!s || s === "—") return s;
    s = s.split(/\s+ou\s+/i)[0].trim();
    s = s.split(/\s*\+\s*/)[0].trim();
    s = s.split(/\s*\/\s*/)[0].trim();
    s = s.split(/\s*·\s*/)[0].trim();
    s = s.replace(/\s*\(.*?\)\s*/g, " ").trim();
    s = s.replace(/\s*(free|cloud|Hobby|Artifact|Project|Gem|juiz|Sheets)\s*/gi, " ").trim();
    s = s.replace(/\s+/g, " ").trim();
    if (/^gpt$/i.test(s)) return "GPT";
    if (/^gemini$/i.test(s)) return "Gemini";
    if (/^claude$/i.test(s)) return "Claude";
    if (/^cursor$/i.test(s)) return "Cursor";
    if (/^kiro$/i.test(s)) return "Kiro";
    if (/^n8n/i.test(s)) return "n8n";
    if (/^zapier/i.test(s)) return "Zapier";
    if (/^napkin/i.test(s)) return "Napkin";
    if (/^lovable/i.test(s)) return "Lovable";
    if (/^notebooklm/i.test(s)) return "NotebookLM";
    if (/^gamma/i.test(s)) return "Gamma";
    if (/^copilot/i.test(s)) return "Copilot";
    if (/^promptfoo/i.test(s)) return "Promptfoo";
    if (/^eraser/i.test(s)) return "Eraser";
    if (/^whimsical/i.test(s)) return "Whimsical";
    if (/^chatgpt/i.test(s)) return "ChatGPT";
    if (/^v0/i.test(s)) return "v0";
    return s;
  }

  function etapaHeading(i, total) {
    if (total === 1) return "Etapa única";
    return "Etapa " + (i + 1);
  }

  function labToolsSummary(lab) {
    return labEtapas(lab)
      .flatMap((e) => e.tools.map((t) => t.label))
      .join(" · ");
  }

  function labToolsHtml(lab, vertical) {
    const etapas = labEtapas(lab);
    const paired = etapas.length > 1;
    const cls = "lab-tools" + (vertical ? " is-vertical" : "");
    let html = '<div class="' + cls + '">';
    if (paired) {
      html += '<div class="lab-tools-block is-paired"><div class="lab-tools-group">';
      etapas.forEach((etapa, ei) => {
        html += '<div class="lab-etapa">';
        html += '<span class="lab-etapa-label">' + etapaHeading(ei, etapas.length) + "</span>";
        html += '<div class="lab-etapa-btns">';
        (etapa.tools || []).forEach((t) => {
          html += '<a class="lab-tool" href="' + t.href + '" target="_blank" rel="noopener noreferrer">' + t.label + "</a>";
        });
        html += "</div></div>";
      });
      html += "</div></div>";
    } else {
      const tools = (etapas[0] && etapas[0].tools) ? etapas[0].tools : [];
      if (tools.length) {
        html += '<div class="lab-tools-block is-solo is-tools-stack">';
        html += '<span class="lab-etapa-label">Etapa única</span>';
        html += '<div class="lab-etapa-btns">';
        tools.forEach((t) => {
          html += '<a class="lab-tool" href="' + t.href + '" target="_blank" rel="noopener noreferrer">' + t.label + "</a>";
        });
        html += "</div></div>";
      }
    }
    html += "</div>";
    return html;
  }

  function islandState(g) {
    const won = wonSet();
    const color = WAVE_COLOR[g.wave];
    if (g.kind === "setup") {
      return { open: true, done: save.setupS01, here: needsSetupPrompt(), color };
    }
    const nxt = nextHole();
    return {
      open: true,
      done: won.has(g.n),
      here: g.n === nxt && !won.has(g.n),
      color,
    };
  }

  function islandPoint(m, item) {
    const ref = item.refWeek ?? 1;
    const node = weekNode(m, ref);
    const pad = Math.max(44, 52 * m.s);
    const lane = item.lane || "margin";
    let x;
    if (lane === "right") x = m.w - m.padR - pad * 0.55;
    else if (lane === "left") x = m.padL + pad;
    else {
      const onRight = node.x > m.cx;
      x = onRight ? m.padL + pad : m.w - m.padR - pad;
    }
    let y = node.y + (item.dy || 0) * m.s;
    y = Math.max(m.padT + pad, Math.min(m.bot - pad, y));
    return { x, y };
  }

  function orbitHtml(g, st) {
    let cls = "map-orbit";
    if (st.done) cls += " on";
    if (st.here) cls += " next";
    if (g.kind === "setup" && needsSetupPrompt()) cls += " needs-attn";
    const tip = g.title + (g.sub ? " — " + g.sub : "");
    return '<button type="button" class="' + cls + '" data-gadget="' + g.id + '"'
      + (st.open ? "" : " disabled")
      + ' style="--gadget-color:' + st.color + '" title="' + tip + '" aria-label="' + tip + '">'
      + '<span class="orbit-icon" aria-hidden="true">' + g.icon + "</span>"
      + "</button>"
      + '<span class="orbit-caption">' + g.shortLabel + "</span>";
  }

  function bindMapGadgets(layer) {
    if (!layer || layer.dataset.bound === "1") return;
    layer.dataset.bound = "1";
    layer.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-gadget]");
      if (!btn || btn.disabled) return;
      ev.preventDefault();
      ev.stopPropagation();
      const id = btn.getAttribute("data-gadget");
      const g = MAP_ISLANDS.find((x) => x.id === id);
      if (!g) return;
      if (g.kind === "setup") {
        openMapSetup();
        return;
      }
      enterWeek(g.n);
    });
  }

  function renderMapGadgets() {
    const layer = document.getElementById("map-gadgets");
    if (!layer) return;
    bindMapGadgets(layer);
    if (mode !== "map") { layer.innerHTML = ""; return; }
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (ch < 8 || cw < 8) return;
    const m = mapMetrics(cw, ch);
    layer.innerHTML = MAP_ISLANDS.map((g) => {
      const pt = islandPoint(m, g);
      const st = islandState(g);
      return '<div class="orbit-wrap" style="left:' + pt.x + "px;top:" + pt.y + 'px">'
        + orbitHtml(g, st)
        + "</div>";
    }).join("");
  }

  function openMapSetup() {
    closeCofre();
    openDock("setup");
    syncHud();
    toast("Setup — organize " + LEADER_DIR + " no Drive");
  }

  function bindScoreButtons() {
    document.querySelectorAll(".nota-score-block[data-n]").forEach((b) => {
      b.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        applyScore(Number(b.getAttribute("data-n")));
      };
    });
  }

  function closeNotaDialog() {
    const dlg = document.getElementById("nota-dialog");
    if (dlg && dlg.open) dlg.close();
  }

  function openNotaDialog() {
    if (phase !== "nota" || mode !== "level") return;
    const dlg = document.getElementById("nota-dialog");
    if (!dlg) return;
    const lab = labOf();
    const lead = document.getElementById("nota-lead");
    if (lead) {
      const meta = LAB_DELIVERABLES[week] || {};
      lead.textContent = phraseLines(meta.deliverable || lab.out);
    }
    const box = document.getElementById("nota-scores");
    if (box) box.innerHTML = scoreScaleHtml();
    bindScoreButtons();
    if (!dlg.open) dlg.showModal();
  }

  const PILL_STEPS = [
    { id: "conceito", label: "Conceito" },
    { id: "homework", label: "Homework Prático" },
    { id: "lab_ia", label: "Lab aula 03" },
  ];

  function pillIndexForPhase(ph) {
    if (ph === "conceito") return 0;
    if (ph === "raiz") return 1;
    if (ph === "brief") return 2;
    if (ph === "lab" || ph === "setup") return 2;
    if (ph === "nota") return 3;
    return 0;
  }

  function lessonStepLabel(ph) {
    if (ph === "brief") return "Lab aula 03 · 3/4";
    const steps = ["Conceito aula 01", "Homework aula 02", "Lab aula 03", "Fechamento"];
    const idx = pillIndexForPhase(ph);
    return steps[Math.min(idx, steps.length - 1)] + " · " + Math.min(idx + 1, steps.length) + "/4";
  }

  function wavesWonCount() {
    const won = wonSet();
    let n = 0;
    for (let w = 1; w <= 5; w++) {
      if (IN_WAVE[w].every((wk) => won.has(wk))) n++;
    }
    return n;
  }

  const COURSE_NAME = "AI-First Operations Leadership";
  const LEADER_DIR = "AI-First-Operations-Leadership-Jornada";
  const COFRE_DIR = LEADER_DIR + "/";
  const IN_WAVE = { 1: [1, 2], 2: [3, 4, 5, 6], 3: [7, 8, 9, 10], 4: [11, 12, 13, 14], 5: [15, 16] };
  let WAVE_COLOR = { 1: "#777777", 2: "#4a4a4a", 3: "#555555", 4: "#1a1a1a", 5: "#666666" };

  function phraseLines(s) {
    if (!s) return "";
    let t = String(s).trim();

    // Parênteses inteiros na mesma linha (espaços não separáveis dentro)
    t = t.replace(/\(([^)]*)\)/g, (_, inner) => "(" + inner.replace(/ /g, "\u00A0") + ")");

    // Seta → lista paralela (· ou /): linha própria com ↓ apontando para o grupo
    const arrowParts = t.split(/\s→\s/);
    if (arrowParts.length === 2) {
      const target = arrowParts[1];
      const parallel = /\s·\s/.test(target) || /\s\/\s/.test(target);
      if (parallel) t = arrowParts[0].trim() + "\n↓\n" + target.trim();
    } else if (arrowParts.length > 2) {
      let out = arrowParts[0].trim();
      for (let i = 1; i < arrowParts.length; i++) out += "\n→ " + arrowParts[i].trim();
      t = out;
    }

    // Ponto final → nova linha (frase seguinte)
    t = t.replace(/\.\s+(?=[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ"'(]|\d)/g, ".\n");

    // Ponto e vírgula → nova linha
    t = t.replace(/;\s+/g, ";\n");

    // Dois-pontos antes de cláusula (minúscula) → nova linha
    t = t.replace(/:\s+(?=[a-záàâãéêíóôõúç])/g, ":\n");

    // Vírgula: quebra só se o trecho até a próxima vírgula tiver 1–2 palavras (evita órfão "com")
    t = t.replace(/,\s+/g, (comma, offset, str) => {
      const rest = str.slice(offset + comma.length);
      const segment = (rest.match(/^([^,;\n]+)/) || [""])[0].trim();
      const words = segment ? segment.split(/\s+/).filter(Boolean) : [];
      return words.length > 0 && words.length <= 2 ? ",\n" : ", ";
    });

    return t.replace(/\n{3,}/g, "\n\n").trim();
  }

  function applyBrand(cfg) {
    const root = document.documentElement;
    const c = cfg.cores || {};
    Object.keys(c).forEach((k) => root.style.setProperty("--" + k, c[k]));
    if (cfg.fontes) {
      if (cfg.fontes.titulo) root.style.setProperty("--font-title", cfg.fontes.titulo + ", sans-serif");
      if (cfg.fontes.corpo) root.style.setProperty("--font-body", cfg.fontes.corpo + ", sans-serif");
    }
    const brand = document.getElementById("brand-name");
    if (brand) brand.textContent = COURSE_NAME;
    if (cfg.waves) {
      WAVE_COLOR = {};
      Object.keys(cfg.waves).forEach((k) => { WAVE_COLOR[Number(k)] = cfg.waves[k]; });
    }
    const bar = document.getElementById("assinatura");
    if (bar && cfg.assinatura && cfg.assinatura.length) {
      const n = cfg.assinatura.length - 1;
      bar.style.background = "linear-gradient(90deg, " + cfg.assinatura.map((hex, i) => hex + " " + Math.round((i / n) * 100) + "%").join(", ") + ")";
    }
  }

  function loadBrand() {
    return fetch("brand-config.json").then((r) => (r.ok ? r.json() : Promise.reject())).then(applyBrand).catch(() => {
      applyBrand({
        nome: "",
        cores: {},
        waves: WAVE_COLOR,
        assinatura: ["#1a1a1a", "#777777", "#4a4a4a", "#888888", "#FFD700", "#555555", "#666666"],
      });
    });
  }
  const LABS = {
    1: { autor:"Teo · pedido com cláusulas", cap:"Homework → chat → consolidado dos 3 pilares", tool:"ChatGPT free", alt:"Gemini", href:"https://chatgpt.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"ChatGPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Consolidado do seu time nos 3 pilares (Product · Tech Delivery · Human & AI), no máximo 3 oportunidades com autor do Gantt",
      casca:"# Lab aula 03 semana 01.md\n\n## Time\n(1 linha)\n\n## Product Management\n- O que o arquivo mostra:\n- Já em uso / lacuna:\n- Oportunidade: ou SEM FATO\n\n## Tech Delivery\n- O que o arquivo mostra:\n- Já em uso / lacuna:\n- Oportunidade: ou SEM FATO\n\n## Human & AI Teams\n- O que o arquivo mostra:\n- Já em uso / lacuna:\n- Oportunidade: ou SEM FATO\n\n## Três oportunidades\n1.\n2.\n3.\n\n## GATE HUMANO\n- PARA: a IA não escolhe o que entra no calendário do time\n- QUEM:\n- SÓ DEPOIS:\n- FRASE DE TRAVA: Nenhuma oportunidade deste arquivo entra no calendário sem o sim de [QUEM].\n",
      prompt:"Anexe o Homework aula 02 semana 01.md preenchido. Persona: gestor sênior de times de tecnologia. Tarefa: consolidar AS IS em Product Management, Tech Delivery e Human & AI Teams, e apontar no máximo 3 oportunidades com autor do Gantt da Aula 2 só quando o fato sustentar. Exemplo A e Exemplo B não são o meu time. Seção vazia = SEM FATO. Output = Lab aula 03 semana 01.md. Não resuma no chat.",
      tips:["Passo: Homework Aula 2 + prompt → um chat → consolidado.","Oportunidade sem autor do Gantt ou sem fato no MD = risca.","A IA organiza; você autoriza o que entra no calendário."] },
    2: { autor:"Liu · lost in the middle", cap:"Fase 1 Enhancv · Fase 2 Loop Vitae", tool:"Enhancv", alt:"Gemini", href:"https://app.enhancv.com", href2:"https://gemini.google.com",
      etapas: [
        { tools: [{ label:"Enhancv", href:"https://app.enhancv.com" }] },
        { tools: [{ label:"Loop Vitae", href:"https://github.com/MylenaSN/Loop_Vitae" }, { label:"Gemini", href:"https://gemini.google.com" }] },
      ],
      out:"PDF no Enhancv + esteira Loop Vitae (vaga AI-Orchestrator Manager)",
      prompt:"Duas fases: (1) PDF no Enhancv com jornada + LinkedIn; (2) ZIP Loop_Vitae no Drive, Notebook Gemini, Curriculum-advisor, md-2-pdf.",
      tips:["Homework = jornada profissional — é o insumo do prompt.","Fase 1 = PDF ATS no Enhancv. Fase 2 = Loop Vitae (licença individual, não redistribuir).","Vaga hipotética: AI-Orchestrator Manager. Sem evidência → [FALTA EVIDÊNCIA]."] },
    3: { autor:"Wei · CoT", cap:"Diagrama da hierarquia", tool:"Claude ou GPT e mermaid", alt:"Napkin.ai (free)", href:"https://claude.ai", href2:"https://www.napkin.ai",
      etapas: [
        { tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"GPT", href:"https://chatgpt.com" }] },
        { tools: [{ label:"Napkin", href:"https://www.napkin.ai" }] },
      ],
      out:"5 linhas Classe, raciocínio, evidência e 1 diagrama",
      prompt:"Mostre o RACIOCÍNIO da classe ANTES do rótulo.\nItens reais: [cole 5 entregas].\nPara cada: Output / Outcome / Impact e 1 frase de evidência. Recuse se inventar métrica.\nDepois: diagrama mermaid da Hierarquia de Valor da Aula 2.",
      tips:["Sem CoT visível a classe é chute.","Diagrama bonito sem as 5 linhas não fecha.","Métrica que o time não mediu = alucinação."] },
    4: { autor:"Ng · workflow", cap:"Gráfico / planilha", tool:"Gemini (Sheets)", alt:"GPT", href:"https://gemini.google.com", href2:"https://chatgpt.com",
      etapas: [{ tools: [{ label:"Gemini", href:"https://gemini.google.com" }, { label:"GPT", href:"https://chatgpt.com" }] }],
      out:"Síntese dos KRs com baseline que VOCÊ mediu",
      prompt:"Workflow: 1) li a planilha/baseline que eu colei 2) resumo 3) NÃO mudo o alvo.\nOKR da Aula 2: [cole]. Se KR sem baseline, marque INVÁLIDO. Gere um gráfico simples baseline→hoje→target.",
      tips:["Moonshot sem baseline. Cole o número medido.","A IA mudou o target: isso é gate seu.","Gráfico sem eixo com unidade não serve ao C-Level."] },
    5: { autor:"intenção → UI", cap:"Protótipo e imagem coesa", tool:"Lovable (free)", alt:"v0 · Designer/Gemini imagem", href:"https://lovable.dev", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"Lovable", href:"https://lovable.dev" }, { label:"v0", href:"https://v0.dev" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Link do protótipo da fatia IN e 1 imagem de jornada",
      prompt:"Gere um protótipo SÓ da fatia IN do PBB: [cole IN/OUT]. Não implemente OUT. Depois (Gemini/Designer): uma imagem da jornada da persona — mesmo traço, sem stock genérico. O MVP serve o OKR da semana 04 — se a vitrine não liga ao KR, recuse.",
      tips:["Markdown no chat não é protótipo. Precisa do link.","Imagem de banco de foto: peça consistência com a persona.","Tudo IN: volte ao OUT da Aula 2."] },
    6: { autor:"Wake · INVEST", cap:"Scorecard INVEST 1–3", tool:"Custom GPT / Gem", alt:"Cursor no backlog.md", href:"https://chatgpt.com", href2:"https://cursor.com",
      etapas: [{ tools: [{ label:"GPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }, { label:"Cursor", href:"https://cursor.com" }] }],
      out:"Scorecard INVEST das 3 stories (máx. 18; nota 1 em qualquer critério reprova)",
      prompt:"Avalie as 3 user stories da Aula 2 com o Scorecard INVEST.\nPara cada critério (Independent, Negotiable, Valuable, Estimable, Small, Testable) atribua nota 1–3:\n1 = ruim (não atende) · 2 = aceitável (pode melhorar) · 3 = excelente.\nSome o total (máx. 18). Regra de corte: se QUALQUER critério = 1, marque REPROVADA e indique o ajuste mínimo.\nPROIBIDO dar 3 em todos os critérios sem justificativa ancorada no texto da story.\nFormato: tabela por story + total + veredito (aprovada/reprovada) + sugestão só para reprovadas.",
      tips:["Wake criou checklist Sim/Não — o scorecard 1–3 é adaptação de mercado.","Nota 1 em Independent manda a story de volta ao refinamento.","IA que dá 18/18 em tudo: você recusa e repontua à mão."] },
    7: { autor:"Lewis · RAG", cap:"Caderno e overview (áudio/vídeo)", tool:"NotebookLM (free)", alt:"Gemini com PDFs", href:"https://notebooklm.google.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"NotebookLM", href:"https://notebooklm.google.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Glossário com citação e 1 Audio/Video Overview",
      prompt:"Suba SÓ os artefatos da Aula 2 (mapa de topologia). Pergunte: liste 8–12 termos conflitantes COM citação do arquivo. Depois gere o Overview. Se não citar a fonte, o termo é alucinação.",
      tips:["Chat sem PDF = chute da web, não RAG.","Overview sem glossário citado é teatro.","Termo sem dono: volte ao mapa da Aula 2."] },
    8: { autor:"Anderson · fluxo", cap:"Dashboard Kanban e diagrama", tool:"Cursor Hobby", alt:"Copilot · mermaid no GPT", href:"https://cursor.com", href2:"https://github.com/features/copilot",
      etapas: [{ tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Copilot", href:"https://github.com/features/copilot" }, { label:"GPT", href:"https://chatgpt.com" }] }],
      out:"Dashboard LT/CT/TH/WIP/CFD e diagrama mermaid do fluxo",
      prompt:"A partir do dashboard da Aula 2 [cole números que EU medi], monte Lab aula 03 semana 08.md com:\n1) Lead Time (LT), Cycle Time (CT), Throughput (TH), WIP e CFD explicados em linguagem do time.\n2) Lei de Little: LT ≈ WIP ÷ TH — onde está o alavancador?\n3) Diagrama mermaid do fluxo atual.\n4) (Apoio futuro) Rascunho de prompt agnóstico para 3 agents: Métricas de fluxo · Esteira híbrida · Advisor de liderança — cada um com persona/steering/skill, sem depender de ferramenta.\nUse só números do meu contexto. Não invente target externo.",
      tips:["LT = tempo total até entregar. CT = tempo em trabalho ativo. TH = itens/ período. WIP = em progresso. CFD = diagrama de fluxo acumulado.","Sem números da Aula 2 o dashboard é teatro.","Os 3 agents do curso são apoiadores — esta semana fecha o painel de fluxo."] },
    9: { autor:"ritmos e voto", cap:"Board e workspace no IDE", tool:"Cursor e Claude Artifact", alt:"Whimsical free → cola no Mural", href:"https://cursor.com", href2:"https://claude.ai",
      etapas: [
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
        { tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"Whimsical", href:"https://whimsical.com" }] },
      ],
      out:"Antes/depois de 1 ritmo em 03 Delivery/semana-09/ e 1 pergunta de voto",
      prompt:"A partir da auditoria fica/sai/muda da Aula 2, desenhe um board (Agora / Proposta / Voto). Uma pergunta para Mentimeter. NÃO declare o ritmo vencedor.\nSalve o board em 03 Delivery/semana-09/Lab aula 03 semana 09.md — abra sua pasta " + LEADER_DIR + " no Cursor. Ciclo sem pasta no disco é rito.",
      tips:["Sem pergunta de voto a IA 'ganhou' sozinha.","Board sem a lista fica/sai/muda da Aula 2 é layout vazio.","Cola no Mural: o artefato precisa ser colável, não um ensaio."] },
    10: { autor:"Amodei · risco", cap:"Apresentação / PDF de 3 cenários", tool:"Gamma (free)", alt:"Gemini", href:"https://gamma.app", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"Gamma", href:"https://gamma.app" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Deck de 5 slides: conservador / base / agressivo e teto",
      prompt:"Gere apresentação curta com 3 ROIs a partir do Passaporte FinOps: [cole números]. O slide final é TETO ASSINADO POR HUMANO. Não recomende o agressivo. Console de cloud só em leitura.",
      tips:["Um único ROI 'o modelo disse'. Faltam 3.","Agressivo como único slide: esconde o conservador.","Sem teto assinado o C-Level compra teatro."] },
    11: { autor:"papel no loop", cap:"Esteira clássica vs GenAI", tool:"n8n cloud free ou Zapier free", alt:"Cursor numa etapa só", href:"https://n8n.io", href2:"https://cursor.com",
      etapas: [
        { tools: [{ label:"n8n", href:"https://n8n.io" }, { label:"Zapier", href:"https://zapier.com" }] },
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
      ],
      out:"1 etapa acelerada e 1 etapa PROIBIDA para o agente",
      prompt:"Do mapa da Aula 2: escolha 1 nó para automação sem LLM (n8n ou Zapier) e 1 nó para Cursor/Copilot. Mostre os dois fluxos. Proibido agente em decisão de valor ou gate humano.",
      tips:["'Vamos usar o Cursor' sem nó: volte ao mapa.","Tudo no agente: falta a etapa sem GenAI.","Zapier no julgamento = gate furado."] },
    12: { autor:"Chase / Moura / Wang", cap:"Arquivos de agent", tool:"Cursor", alt:"Kiro", href:"https://cursor.com", href2:"https://kiro.dev",
      etapas: [{ tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Kiro", href:"https://kiro.dev" }] }],
      out:"persona.md, steering.md e skill.md no disco",
      prompt:"A partir dos 3 blocos da Aula 2, gere os 3 arquivos no repo e um hook (evento→condição→gate). Chatbot Custom GPT sem arquivo NÃO conta. Inclua 3 proibições no steering.",
      tips:["Custom GPT sem pasta no git.","Falta o hook ligado ao gate da semana 11.","Persona sem proibição: o agent faz tudo."] },
    13: { autor:"Ng · spec-before-code", cap:"Diagrama e spec", tool:"Kiro", alt:"Cursor e Eraser/mermaid", href:"https://kiro.dev", href2:"https://www.eraser.io",
      etapas: [
        { tools: [{ label:"Kiro", href:"https://kiro.dev" }] },
        { tools: [{ label:"Cursor", href:"https://cursor.com" }, { label:"Eraser", href:"https://www.eraser.io" }] },
      ],
      out:"requirements → design (código opcional)",
      prompt:"Spec do maestro da Aula 2. Em Kiro (ou spec MD): requirements, design, gates. NÃO commitar código sem spec. Diagrama hierárquico input→roteamento→specialists→gate humano.",
      tips:["Código no primeiro commit: volte à spec.","Diagrama sem gate final humano.","Sem contratos de entrada/saída o maestro é um chat."] },
    14: { autor:"Lewis e Husain", cap:"RAG e eval (fine-tune só se RAG falhar)", tool:"Cursor e Sheets ou Promptfoo", alt:"NotebookLM na KB", href:"https://cursor.com", href2:"https://www.promptfoo.dev",
      etapas: [
        { tools: [{ label:"Cursor", href:"https://cursor.com" }] },
        { tools: [{ label:"Promptfoo", href:"https://www.promptfoo.dev" }, { label:"NotebookLM", href:"https://notebooklm.google.com" }] },
      ],
      out:"3 evals com limiar. Fine-tune NÃO é o default",
      prompt:"A KB da Aula 2 é a base (RAG). Escreva 3 casos de eval com limiar numérico. Sem limiar o workflow não promove.\nPergunta de líder: precisamos de fine-tune (AI Studio / AutoTrain) ou a KB resolve? Se a KB resolve, NÃO fine-tune.",
      tips:["'Funciona no chat' sem limiar.","Fine-tune pedido sem tentar RAG: Lewis primeiro.","Eval sem caso da KB é teste de teatro."] },
    15: { autor:"advisor próprio", cap:"Project do PDI", tool:"Claude Project / Custom GPT", alt:"Gemini Gem", href:"https://claude.ai", href2:"https://chatgpt.com",
      etapas: [{ tools: [{ label:"Claude", href:"https://claude.ai" }, { label:"GPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Advisor que recusa CHA genérico",
      prompt:"Alimente o Project com a linha do tempo da Aula 2. Categorias = as MINHAS. Se eu pedir 'faz um PDI CHA', recuse e peça evidência da timeline. 1 gap SMART da quinzena.",
      tips:["Prompt avulso 'me dá um PDI'. Sem Project.","CHA genérico passou: o advisor não está ancorado.","Gap sem SMART: não fecha a quinzena."] },
    16: { autor:"Amodei · autoria", cap:"Overview do ano e decisão OFFLINE", tool:"NotebookLM", alt:"Gamma PDF do pacote", href:"https://notebooklm.google.com", href2:"https://gamma.app",
      etapas: [{ tools: [{ label:"NotebookLM", href:"https://notebooklm.google.com" }, { label:"Gamma", href:"https://gamma.app" }] }],
      out:"Video/Audio Overview e 1 decisão escrita sem LLM",
      prompt:"Suba o pacote do ano (A3, OKR, métricas de fluxo, PDI). Gere Overview. A ATA: uma decisão do ritual EU escrevo offline — o modelo não escolhe o ritual do time.",
      tips:["O modelo escolheu a decisão: apague e escreva à mão.","Overview sem fontes do pacote.","Sem cláusula de autoria o PI some."] },
    17: { autor:"Albrecht / COSMIC / Anderson (ponte)", cap:"Língua de tamanho para o C-Level", tool:"ChatGPT free", alt:"Gemini", href:"https://chatgpt.com", href2:"https://gemini.google.com",
      etapas: [{ tools: [{ label:"ChatGPT", href:"https://chatgpt.com" }, { label:"Gemini", href:"https://gemini.google.com" }] }],
      out:"Lab aula 03 semana bonus.md — a IA estressa a unidade; não inventa PF",
      casca:"# Homework aula 02 semana bonus.md\n\n## Time\n(1 linha)\n\n## O que o fluxo já diz\n- Lead time:\n- Cycle time:\n- Throughput:\n- WIP:\n\n## Lente deste ciclo (UMA)\nfuncional | técnica | qualitativa\n\n## Unidade\n\n## O que NÃO conta\n\n## Frase para o C-Level\n\n## Por que isso deixa o time puxar sem estimar o card\n",
      prompt:"Preencher Lab aula 03 semana bonus.md estressando a unidade que o time já escreveu na Aula 2 — sem inventar pontos de função, COSMIC ou LOC fora do bloco.\nFormato:\n# Lab aula 03 semana bonus.md\n## Lente (copiada da Aula 2)\n## O que inflaria esta unidade (3 tentações)\n## O que a diretoria entenderia errado\n## GATE HUMANO\n- PARA: a IA não troca a lente nem inventa contagem\n- QUEM: cargo que assina a língua do trimestre\n- SÓ DEPOIS:\n- FRASE DE TRAVA: Nenhuma contagem entra no comitê sem o sim de [QUEM].\nRegra: se o bloco da Aula 2 estiver vazio, PERGUNTE. Recuse velocity como tamanho.",
      tips:["A IA escolheu APF sozinha. Volte à lente do A2.","Número de PF sem inventário = alucinação.","Velocity no slide do C-Level: recuse."] }
  };

  const PLAY = {
    1: { metodo:"Gantt histórico + leitura STATIK do serviço (Homework)",
      a1:[
        { t: "As 5 revoluções", d: "Entender o fio das cinco Revoluções Industriais e o padrão de substituição/reestruturação de papéis em cada era." },
        { t: "AI-era Leaders", d: "Na 5ª Revolução (era agêntica) o líder é orquestrador de sistemas híbridos — a IA fortalece papéis humanos." },
        { t: "Padrões da Revolução", d: "Não tratar a era atual como ruptura sem precedente; o padrão histórico de reestruturação de papéis continua." }
      ],
      a2Short: ["Gantt de autores", "Homework STATIK", "Sua resposta"],
      a2:[
        "Gantt da sala: reconhecer métodos nas eras\n(âncora, não lista decorativa)",
        "Homework aula 02 semana 01.md\n— 5 seções STATIK; digite só em Sua resposta",
        "Exemplos A e B / Orion são de outros times; o coração do prompt na Aula 3 é a sua análise humana de líder da Aula 2"
      ] },
    2: { metodo:"Jornada profissional (MD) → currículo da vaga-alvo",
      a1:[
        { t: "Quem a empresa de IA contrata", d: "Olhe a página de vagas, não o organograma do PowerPoint. Exemplo real: Receita 74 · Engenharia/Produto 51 · Growth 21 · Operações 18 · Pesquisa 5. Pesquisa é ~3%. O modelo não é o produto — colocar o modelo em uso é." },
        { t: "Cargo que nasce × cargo que some", d: "Nasce: Enterprise Deployment (25 vagas — metade da engenharia) = fazer a IA funcionar no cliente. Some/encolhe: Customer Support (1 vaga). O trabalho não sumiu: foi para produto, agente e deployment." },
        { t: "Ler o quadro com os 3 pilares", d: "Use Product · Tech Delivery · Human & AI (Semana 01) como lente: Product → Core Experience e Growth; Tech Delivery → Deployment e Platform; Human & AI → Agents, Safety e o buraco do suporte." }
      ],
      a2Short: ["Jornada profissional", "Evidências e gap", "Vaga-alvo"],
      a2:["Preencha Homework aula 02 semana 02.md — sua jornada: marcos, o que faz de fato, time em 3 colunas.","Liste só o que você prova (número, cargo ou data). Sem prova = [FALTA EVIDÊNCIA]. Nomeie o gap #1.","Escolha a vaga-alvo (cargo que não existia há ~3 anos). Esse MD + LinkedIn alimentam o Lab aula 03."] },
    3: { metodo:"Hierarquia de Valor (Impacto → Outcome → Output → Task)",
      a1:[
        { t: "Output, outcome, impact", d: "Output é entrega; outcome é mudança observável; impact é efeito no negócio." },
        { t: "Volume ≠ valor", d: "Contar entregas sem medir mudança para o cliente confunde atividade com resultado." },
        { t: "Pergunta de valor", d: "Trocar \"o que entregamos?\" por \"que resultado movemos?\" alinha o time ao impacto." }
      ],
      a2Short: ["Impacto estratégico", "Outcomes e outputs", "Priorizar 3 itens"],
      a2:["1 impacto estratégico no topo do board","2–3 outcomes, outputs e tasks ligadas","Priorizar 3 itens reais pela contribuição ao impacto"] },
    4: { metodo:"OKR → backlog (funil e hipótese)",
      a1:[
        { t: "KR com baseline", d: "KR sem baseline medido pelo time não é KR — é slogan." },
        { t: "Target assinado", d: "O target é decisão de cargo; o modelo não troca o alvo." },
        { t: "Backlog serve o objetivo", d: "Projeto entra se testa uma hipótese do OKR. O contrário — backlog mandando no objetivo — invalida o funil." }
      ],
      a2Short: ["Objetivo e KRs", "Baseline medido", "Projetos com hipótese"],
      a2:["1 Objetivo e 2 KRs","Baseline que VOCÊ mediu","4 projetos com hipótese"] },
    5: { metodo:"Lean Inception e PBB no board",
      a1:[
        { t: "Persona evidenciada", d: "Persona sem identificação, sem rotina, sem ações no produto não é persona." },
        { t: "Core do MVP", d: "A fatia do MVP é o core — o que não pode ficar de fora do primeiro passo. Adjacente e transformacional tendem ao próximo passo. Se o essencial ficar de fora, o MVP não valida o propósito do produto." },
        { t: "MVP serve o OKR", d: "O MVP serve o OKR — nunca o contrário. Objetivo e KRs claros antes do board; vitrine que não liga ao KR é recusada." }
      ],
      a2Short: ["Porquê e personas", "MVP no mapa", "IN e OUT"],
      a2:["Porquê, personas e jornada","MVP no mapa de entrega","IN / OUT explícito"] },
    6: { metodo:"User Story Mapping (Patton) e Scorecard INVEST (Wake)",
      a1:[
        { t: "Backlog como jornada", d: "Patton: atividades → passos → stories; fatia horizontal = MVP com jornada completa, ainda que rasa." },
        { t: "INVEST qualitativo", d: "Wake: checklist nas 6 letras — story que falha em alguma volta ao refinamento antes do sprint." },
        { t: "Scorecard 1–3", d: "No mercado: nota 1 = ruim, 2 = aceitável, 3 = excelente por critério (máx. 18). Qualquer nota 1 reprova a story." }
      ],
      a2Short: ["Scorecard 3 stories", "1 story reescrita", "Critério de corte"],
      a2:["3 stories do fluxo feliz com tabela INVEST (nota 1–3 por critério, total até 18)","1 story reescrita se reprovada (qualquer nota 1)","Registrar qual critério forçou o retorno ao refinamento"] },
    7: { metodo:"Team Topologies e linguagem compartilhada (DDD)",
      a1:[
        { t: "Quatro tipos de time", d: "Stream-aligned, Platform, Enabling, Complicated-subsystem (Skelton & Pais) — cada um com papel e carga cognitiva." },
        { t: "Bounded context", d: "Termos decisores do bounded context precisam ter significado explícito para toda a equipe." },
        { t: "Interação entre tipos", d: "Stream consome platform; enabling reduz atrito. Uma interação nomeada vale mais que organograma novo." }
      ],
      a2Short: ["Mapa 4 tipos", "Ajuste de fronteira", "Glossário do time"],
      a2:["Mapa dos 4 tipos e carga cognitiva","1 ajuste de fronteira (interação, não cargo)","Glossário de 8–12 termos do time"] },
    8: { metodo:"Kanban sistêmico (Anderson) e métricas de fluxo",
      a1:[
        { t: "Métricas de fluxo", d: "LT: da entrada à entrega; CT: do início do trabalho à entrega; TH: itens por período; WIP: trabalho em progresso; CFD: diagrama de fluxo acumulado." },
        { t: "Lei de Little", d: "LT ≈ WIP ÷ TH. Se o WIP sobe e o throughput não acompanha, o lead time explode — é matemática do fluxo, não opinião." },
        { t: "Board visível", d: "Políticas de WIP, classes de serviço e puxar explícitas no Kanban. Só se gerencia o que se vê." }
      ],
      a2Short: ["Dashboard de fluxo", "Segmentar por tipo", "Alavanca Little"],
      a2:["Dashboard com LT, CT, TH, WIP e CFD","Segmento por tipologia (bug · feature · risco)","1 alavancador via Lei de Little"] },
    9: { metodo:"Auditoria de cadências e métricas em 3 camadas",
      a1:[
        { t: "Rito ≠ ritmo", d: "Reunião sem métrica de ciclo é rito. Ritmo é cadência que o painel de fluxo que você já mede justifica." },
        { t: "Voto do time", d: "Fica / sai / muda é decisão do time. A IA não declara o ritmo vencedor." },
        { t: "Kill criteria", d: "Adotar framework de escala (SAFe, Flight Levels, Spotify) só com patrocínio e critério de abandono se não funcionar." }
      ],
      a2Short: ["Fica / sai / muda", "Painel 3 camadas", "Ritmo candidato"],
      a2:["Lista fica / sai / muda","Painel em 3 camadas: operacional → tático → estratégico","1 ritmo candidato (voto do time decide)"] },
    10: { metodo:"Business case enxuto e Passaporte FinOps",
      a1:[
        { t: "Core · adjacente · transformacional", d: "Core melhora o que já funciona; adjacente expande o próximo; transformacional aposta alto — exige kill criteria desde o início." },
        { t: "Teto de budget", d: "Budget de iniciativa é o teto explícito: sem teto, cada gasto parece justificável isoladamente." },
        { t: "ROI com julgamento", d: "ROI (Return on Investment) compara opções, mas não substitui contexto — retorno de curto prazo pode esconder valor estratégico." }
      ],
      a2Short: ["Problema em 1 frase", "Baseline e custos", "Passaporte FinOps"],
      a2:["Problema em 1 frase — sem mencionar ferramenta","Baseline, custo e benefício com premissas explícitas","Passaporte FinOps: custo unitário, teto, alerta, dono e métrica de valor"] },
    11: { metodo:"Mapa híbrido e Context / Prompt / Steering",
      a1:[
        { t: "Loop com gates", d: "Todo processo é um loop; gate humano é o ponto onde decisão irreversível não pode ser automática." },
        { t: "Automação vs GenIA", d: "Regra fixa → automação clássica; ambiguidade de linguagem → GenIA (IA generativa); alto risco → gate humano obrigatório." },
        { t: "Líder orquestrador", d: "Você desenha onde humanos precisam estar acordados — não executa cada nó no lugar do time." }
      ],
      a2Short: ["Mapa do ecossistema", "Context no nó crítico", "Teste com 1 caso"],
      a2:["Mapa do ecossistema: humanos, agentes, ferramentas, gates e dados","Context, Prompt e Steering no nó mais crítico do loop","Testar o conjunto com 1 caso real e documentar escala para humano"] },
    12: { metodo:"Persona, Steering e Skill (1 agente)",
      a1:[
        { t: "Anatomia do agente", d: "Persona (quem é), Tools (o que chama), Skills (procedimentos) e orquestração (quem decide a próxima ação)." },
        { t: "Conceito antes da marca", d: "LangChain/LangGraph e IDEs usam nomes diferentes para os mesmos conceitos — aprenda o conceito, não só o rótulo do vendor." },
        { t: "Identidade mínima", d: "Agente sem persona é colaborador sem descrição de cargo — improvisa a cada chamada." }
      ],
      a2Short: ["Persona e steering", "Teste de escalada", "3 arquivos no disco"],
      a2:["Persona com missão, Steering com limites e Skill com passos","Teste cenário feliz e cenário de escalada para humano","3 blocos versionados no disco (persona / steering / skill)"] },
    13: { metodo:"Spec de sistema agêntico sustentável",
      a1:[
        { t: "Quatro níveis de agente", d: "Reativo → com tools → multi-step → hierárquico: cada nível soma autonomia com critério." },
        { t: "Maestro, não gargalo", d: "Orquestrador coordena specialists e gates — se executa tudo, vira ponto único de falha." },
        { t: "Escalar com base", d: "Subir de agente simples para sistema hierárquico só quando processo e gates já estão claros para humanos." }
      ],
      a2Short: ["Diagrama do maestro", "Contratos e roteamento", "Guia de expansão"],
      a2:["Diagrama: orquestrador, specialists e gates humanos","Contratos de entrada/saída, regras de roteamento e runbook de falha","Guia de como incluir o próximo agente sem redesenhar o núcleo"] },
    14: { metodo:"KB viva e critério de subagents",
      a1:[
        { t: "RAG traz verdade", d: "RAG (Retrieval-Augmented Generation) busca na sua base antes de responder — antídoto contra alucinação de fato." },
        { t: "MCP conecta", d: "MCP (Model Context Protocol) liga agentes a ferramentas e dados sem reescrever integração a cada vendor." },
        { t: "Subagents e evals", d: "Subagents dividem missões distintas; evals (avaliações sistemáticas) medem se você pode confiar no sistema." }
      ],
      a2Short: ["KB com casos reais", "Critério subagents", "Limiar de promoção"],
      a2:["KB viva: 5–10 casos reais versionados com o porquê","Decisão documentada: dividir em subagents só se missão e eval forem distintos","Limiar numérico de promoção — sem limiar, workflow não sobe"] },
    15: { metodo:"Linha do tempo experiência → skill → evidência",
      a1:[
        { t: "Meta antes de categorias", d: "Defina o papel que quer exercer em 12–24 meses — categorias nascem da meta, não de framework genérico." },
        { t: "Evidência, não currículo", d: "Conquista comprova skill; skill sem evidência é autodeclaração." },
        { t: "CHA como apoio", d: "CHA (Conhecimento, Habilidade, Atitude) informa perguntas — não impõe a estrutura do seu plano." }
      ],
      a2Short: ["Timeline 5 marcos", "Gaps nomeados", "Ação SMART"],
      a2:["Linha do tempo: experiência → skill → evidência (5 marcos)","Gaps nomeados nos SEUS grupos de competência","1 ação SMART da quinzena ligada a um gap com evidência"] },
    16: { metodo:"Pensamento arbóreo e rascunho vs decisão de autoria",
      a1:[
        { t: "Sinais de dependência", d: "Pedido sem critério, aceitar saída sem questionar e orgulho de \"uso IA para tudo\" — sinais de ferramenta no centro." },
        { t: "Sobrevivente → transformador", d: "Transformador desenha onde a IA entra, com critério, gate e autoria clara — não reage com medo ou dependência." },
        { t: "IA a serviço", d: "Pergunta-teste: se a ferramenta sumisse hoje, você ainda saberia fazer esse julgamento?" }
      ],
      a2Short: ["Mapa arbóreo", "Rascunho vs decisão", "Artefatos do ano"],
      a2:["Mapa arbóreo: tronco (tese) · galhos (domínios) · folhas (execução)","Declaração: 1 rascunho vs 1 decisão de autoria (PI)","Preservar artefatos do ano como registro do raciocínio"] },
    17: { metodo:"Uma lente de tamanho e frase para o C-Level (além de LT/CT/TH)",
      a1:[
        { t: "Fluxo ≠ tamanho", d: "LT/CT/TH dizem quando o card anda. Não dizem o que saiu para a diretoria." },
        { t: "Uma lente", d: "Funcional, técnica ou qualitativa — uma por ciclo. A IA não troca a lente." },
        { t: "No estimates", d: "Não estimar o card em hora. Ainda assim o time nomeia unidade e o que não conta." }
      ],
      a2Short: ["Recorte de fluxo", "Lente e unidade", "Frase C-Level"],
      a2:["Recorte de fluxo que vocês já medem","Uma lente, unidade e o que não conta","1 frase de C-Level e 1 linha de no-estimates"] }
  };



  const canvas = document.getElementById("c");
  const ctx = canvas.getContext("2d");
  const hintB = document.querySelector("#hint b");
  const hintS = document.querySelector("#hint span");

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY)) || {};
      if (!s.won) s.won = [];
      if (!s.cofre) s.cofre = [];
      if (!s.setupS01) s.setupS01 = false;
      return s;
    } catch { return { won: [], cofre: [], setupS01: false }; }
  }
  function persist() { localStorage.setItem(KEY, JSON.stringify(save)); }
  let save = load();

  function wonSet() { return new Set(save.won); }
  function isBonus(n) { return n === 17; }
  function unlocked(n) {
    return n >= 1 && n <= 17;
  }
  function nextHole() {
    for (let i = 1; i <= 16; i++) { if (unlocked(i) && !wonSet().has(i)) return i; }
    return 16;
  }
  function streak() {
    let s = 0;
    for (let i = 1; i <= 16; i++) { if (!wonSet().has(i)) break; s++; }
    return s;
  }

  let mode = "map";
  let week = 1;
  let phase = "conceito";
  let a1open = [];
  let a2pin = [];
  let a3open = [];
  let a3chip = null;
  let stamps = { fato: false, hipotese: false, alucinacao: false };
  let winLock, labDone, scoreLock, reforco;
  let toastT = 0;

  function rng(seed) {
    let s = seed * 1103515245 + 12345;
    return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  }

  function playOf() { return PLAY[week]; }
  function needsSetup() { return week === 1; }
  function needsSetupPrompt() {
    return !save.setupS01 && !save.won.includes(1);
  }
  function showSetupNag() {
    return false;
  }

  function closeCofre() {
    document.getElementById("cofre").classList.remove("show");
  }

  function showMap() {
    mode = "map";
    document.getElementById("stage").className = "map-only";
    document.getElementById("mesa").classList.remove("show");
    closeDock();
    closeCofre();
    resize();
    renderExplorer();
    renderMapGadgets();
    syncHud();
  }

  let railFocus = 1;
  let mesaWeekPaint = 0;
  let mesaA3Paint = "";

  function railForPhase(ph) {
    if (ph === "conceito") return 1;
    if (ph === "raiz") return 2;
    return 3;
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function seqNext(flags, len) {
    for (let i = 0; i < len; i++) {
      if (!flags[i]) return i;
    }
    return len;
  }

  function a3BriefReady() {
    const brief = aula03BriefOf(week);
    return brief.cards.every((_, i) => a3open[i]);
  }

  function briefHtml() {
    const brief = aula03BriefOf(week);
    const meta = LAB_DELIVERABLES[week] || {};
    const ready = a3BriefReady();
    const a3Next = seqNext(a3open, brief.cards.length);
    const focus = ready ? brief.cards.length - 1 : a3Next;
    const why = brief.porque || meta.why || brief.tese || "";
    let html = '<div class="a3-brief' + (ready ? " is-ready" : "") + '">';
    html += '<p class="a3-brief-kicker">' + escapeHtml(brief.autor || "Aula 3") + "</p>";
    html += '<p class="a3-brief-label">Por que este lab</p>';
    html += '<p class="a3-brief-why">' + escapeHtml(why) + "</p>";
    if (!ready) {
      html += '<p class="a3-brief-label">Passo ' + (focus + 1) + " de " + brief.cards.length + "</p>";
      html += '<div class="a3-brief-los is-seq">';
      brief.cards.forEach((card, i) => {
        if (i > a3Next) return;
        const open = !!a3open[i];
        html += '<button type="button" class="piece a3-lo' + (open ? " on" : " next") + '" data-a3="' + i + '">';
        if (open) html += '<span class="tag">✓ ' + escapeHtml(card.t) + "</span>";
        else html += '<span class="card-d">' + phraseLines(card.d) + "</span>";
        html += "</button>";
      });
      html += "</div>";
      if (focus === 0 && brief.track && brief.track.length) {
        html += '<p class="a3-brief-label">Do motor ao sistema</p>';
        html += '<div class="a3-track" role="list">';
        brief.track.forEach((item, i) => {
          const on = a3chip === "t" + i;
          html += '<button type="button" class="a3-chip' + (on ? " on" : "") + '" data-a3chip="t' + i + '" role="listitem">';
          html += '<b>' + (i + 1) + "</b><span>" + escapeHtml(item.k) + "</span><small>" + escapeHtml(item.role) + "</small>";
          html += "</button>";
        });
        html += "</div>";
        if (a3chip && a3chip.charAt(0) === "t") {
          const item = brief.track[Number(a3chip.slice(1))];
          if (item) html += '<p class="a3-chip-def"><strong>' + escapeHtml(item.k) + "</strong> — " + escapeHtml(item.d) + "</p>";
        }
      }
      if (focus === 1 && brief.grid && brief.grid.length) {
        html += '<p class="a3-brief-label">Contrato do prompt</p>';
        html += '<div class="a3-grid">';
        brief.grid.forEach((item, i) => {
          const on = a3chip === "g" + i;
          html += '<button type="button" class="a3-pillar' + (on ? " on" : "") + '" data-a3chip="g' + i + '">';
          html += '<b>' + escapeHtml(item.n) + "</b><span>" + escapeHtml(item.t) + "</span><small>" + escapeHtml(item.q) + "</small>";
          html += "</button>";
        });
        html += "</div>";
        if (a3chip && a3chip.charAt(0) === "g") {
          const item = brief.grid[Number(a3chip.slice(1))];
          if (item) html += '<p class="a3-chip-def"><strong>' + escapeHtml(item.t) + "</strong> — " + escapeHtml(item.d) + "</p>";
        }
      }
    } else {
      html += '<ul class="a3-brief-done">';
      brief.cards.forEach((card) => {
        html += "<li>✓ " + escapeHtml(card.t) + "</li>";
      });
      html += "</ul>";
      if (meta.deliverable) {
        html += '<p class="a3-brief-label">No lab você gera</p>';
        html += '<p class="a3-brief-do">' + escapeHtml(meta.deliverable) + "</p>";
      }
      const briefFiles = meta.files && meta.files.length ? meta.files : [filesOf(week).a3];
      if (briefFiles.length) {
        html += '<p class="a3-brief-label">Nesta pasta</p>';
        html += '<p class="a3-brief-do">' + briefFiles.map((name) => escapeHtml(name)).join(" · ") + "</p>";
      }
      html += '<p class="a3-brief-take">' + escapeHtml(brief.takeaway) + "</p>";
      html += '<button type="button" id="btn-open-lab" class="btn-feito a3-open-lab">Abrir o Lab aula 03</button>';
    }
    html += "</div>";
    return html;
  }

  function applyRailFocus() {
    [1, 2, 3].forEach((n) => {
      document.getElementById("rail-a" + n).classList.toggle("is-active", railFocus === n);
    });
    document.querySelectorAll("#mesa-tabs .mesa-tab").forEach((btn) => {
      const n = Number(btn.getAttribute("data-rail"));
      btn.classList.toggle("on", n === railFocus);
    });
  }

  function updateMesaTabs() {
    const tabs = document.querySelectorAll("#mesa-tabs .mesa-tab");
    if (!tabs.length) return;
    const a1ready = playOf().a1.every((_, i) => a1open[i]);
    const a2ready = playOf().a2.every((_, i) => a2pin[i]);
    tabs.forEach((btn) => {
      const n = Number(btn.getAttribute("data-rail"));
      if (n === 2) btn.disabled = !a1ready;
      if (n === 3) btn.disabled = !a2ready;
    });
  }

  function bindRailTabs() {
    const nav = document.getElementById("mesa-tabs");
    if (!nav || nav.dataset.boundTabs) return;
    nav.dataset.boundTabs = "1";
    nav.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".mesa-tab");
      if (!btn || btn.disabled) return;
      railFocus = Number(btn.getAttribute("data-rail"));
      applyRailFocus();
    });
  }

  function bindMesaClicksOnce() {
    const mesa = document.getElementById("mesa");
    if (!mesa || mesa.dataset.boundClicks) return;
    mesa.dataset.boundClicks = "1";
    mesa.addEventListener("click", (ev) => {
      const a1 = ev.target.closest("[data-a1]");
      if (a1 && mesa.contains(a1)) {
        onA1Click(Number(a1.getAttribute("data-a1")), a1);
        return;
      }
      const a2 = ev.target.closest("[data-a2]");
      if (a2 && mesa.contains(a2) && !a2.disabled) {
        onA2Click(Number(a2.getAttribute("data-a2")), a2);
      }
    });
  }

  function onA1Click(i, el) {
    a1open[i] = true;
    if (el) el.classList.add("on");
    const ready = playOf().a1.every((_, idx) => a1open[idx]);
    if (ready && phase === "conceito") phase = "raiz";
    document.getElementById("rail-a2").classList.toggle("locked", !ready);
    document.querySelectorAll("[data-a2]").forEach((btn) => {
      btn.disabled = !ready;
    });
    updateMesaTabs();
    syncHud();
  }

  function onA2Click(i, el) {
    if (!playOf().a1.every((_, idx) => a1open[idx])) return;
    a2pin[i] = true;
    if (el) el.classList.add("on");
    const ready = playOf().a2.every((_, idx) => a2pin[idx]);
    if (ready && (phase === "raiz" || phase === "conceito")) {
      labDone = false;
      a3open = [];
      a3chip = null;
      phase = "brief";
      mesaA3Paint = "";
      paintA3Panel();
    }
    const railA3 = document.getElementById("rail-a3");
    railA3.classList.toggle("locked", !ready);
    railA3.classList.toggle("has-brief", phase === "brief" && ready);
    railA3.classList.toggle("has-lab", phase === "lab" && ready);
    updateCasoPanel();
    updateMesaTabs();
    syncHud();
  }

  function enterWeek(n) {
    week = n;
    phase = "conceito";
    closeNotaDialog();
    railFocus = 1;
    a1open = [];
    a2pin = [];
    a3open = [];
    a3chip = null;
    stamps = { fato: false, hipotese: false, alucinacao: false };
    labDone = false;
    scoreLock = false;
    winLock = false;
    reforco = false;
    mesaWeekPaint = 0;
    mesaA3Paint = "";
    mode = "level";
    document.getElementById("stage").className = "level-on";
    document.getElementById("mesa").classList.add("show");
    closeDock();
    syncHud();
    renderExplorer();
    renderMesa();
  }

  function filesOf(n) { return FILES[n]; }
  function waveOfWeek(n) { return WEEKS[n - 1].w; }

  function cofreRelPath(n, file) {
    if (isBonus(n)) return COFRE_DIR + pastaBonus() + "/" + file;
    return COFRE_DIR + WAVE_DIR[WEEKS[n - 1].w] + "/" + pastaSemana(n) + "/" + file;
  }

  function nextCofreHole() {
    for (let n = 1; n <= 17; n++) {
      const f = filesOf(n);
      if (!save.cofre.find((x) => x.id === f.a2)) return { n, file: f.a2, aula: 2 };
      if (!save.cofre.find((x) => x.id === f.a3)) return { n, file: f.a3, aula: 3 };
    }
    return null;
  }

  function renderExplorer() {
    const tree = document.getElementById("ex-tree");
    const won = wonSet();
    const nxt = nextHole();
    const activeW = waveOfWeek(nxt);

    function waveCard(w) {
      const meta = WAVE_META[w];
      const ids = IN_WAVE[w];
      const done = ids.filter((n) => won.has(n)).length;
      const expanded = w === activeW;
      const waveComplete = done === ids.length;
      let html = '<div class="ex-wave' + (expanded ? " open" : " collapsed") + (waveComplete ? " wave-done" : "") + '" data-wave="' + w + '" style="--wave-color:' + WAVE_COLOR[w] + ';border-left-color:' + WAVE_COLOR[w] + '">';
      html += '<button type="button" class="ex-wave-head" data-toggle-wave="' + w + '">';
      html += '<div class="ex-wave-top"><span>Wave ' + String(w).padStart(2, "0") + "</span><span>" + done + "/" + ids.length + "</span></div>";
      html += '<span class="ex-wave-pilar">' + meta.pilar;
      if (waveComplete) html += '<span class="ex-wave-check" aria-hidden="true"> ✓</span>';
      html += "</span>";
      html += '<span class="ex-wave-sub">' + meta.subtitle + "</span>";
      html += "</button><div class='ex-holes'>";
      ids.forEach((n) => {
        const cls = (won.has(n) ? " on" : "") + (n === nxt && !won.has(n) ? " next" : "");
        const style = won.has(n) ? " style='background:" + WAVE_COLOR[w] + "'" : "";
        html += '<button type="button" class="ex-week' + cls + '" data-ex="' + n + '" title="' + weekTitle(n).replace(/"/g, "&quot;") + '"' + style + ">" + n + "</button>";
      });
      html += "</div></div>";
      return html;
    }

    let html = "";
    for (let w = 1; w <= 5; w++) html += waveCard(w);
    tree.innerHTML = html;
    tree.querySelectorAll("[data-toggle-wave]").forEach((el) => {
      el.onclick = () => {
        const key = el.getAttribute("data-toggle-wave");
        tree.querySelectorAll(".ex-wave").forEach((wave) => {
          const wk = wave.getAttribute("data-wave");
          const isTarget = String(wk) === String(key);
          wave.classList.toggle("open", isTarget);
          wave.classList.toggle("collapsed", !isTarget);
        });
      };
    });
    tree.querySelectorAll("[data-ex]").forEach((el) => {
      el.onclick = (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        const n = Number(el.getAttribute("data-ex"));
        enterWeek(n);
      };
    });
    const head = document.getElementById("ex-head-title");
    if (head) head.innerHTML = mode === "level" ? weekTitleHtml(week) : weekTitleHtml(nxt);
    const tag = document.getElementById("ex-tagline");
    if (tag) tag.hidden = true;
  }

  function depositWeek(n) {
    const f = filesOf(n);
    const ids = [f.a2, f.a3];
    ids.forEach((id) => {
      if (!save.cofre.find((x) => x.id === id)) {
        save.cofre.push({
          id: id,
          semana: n,
          aula: id.indexOf("Homework") === 0 ? 2 : 3,
          path: isBonus(n)
            ? pastaBonus() + "/" + id
            : WAVE_DIR[WEEKS[n - 1].w] + "/" + pastaSemana(n) + "/" + id
        });
      }
    });
    persist();
  }

  function manifestOut() {
    return {
      slug_parceiro: "",
      oferta: "INI-AFSL-AS",
      artefatos: save.cofre.slice(),
    };
  }

  function nextNomes() {
    for (let n = 1; n <= 16; n++) {
      const f = filesOf(n);
      if (!save.cofre.find((x) => x.id === f.a2) || !save.cofre.find((x) => x.id === f.a3)) return f;
    }
    return filesOf(16);
  }

  function renderCofre() {
    const list = document.getElementById("cofre-list");
    const meta = document.getElementById("cofre-meta");
    const hole = nextCofreHole();
    const done16 = wonSet().has(16);
    meta.textContent = done16
      ? phraseLines(COFRE_DIR + " no Drive. Exporte o manifest e cole no git do engine.")
      : (hole
        ? COFRE_DIR + save.cofre.length + "/34 · próximo " + cofreRelPath(hole.n, hole.file)
        : COFRE_DIR + save.cofre.length + "/34 · diretório completo");
    const rows = [];
    for (let n = 1; n <= 17; n++) {
      const f = filesOf(n);
      const a2 = save.cofre.find((x) => x.id === f.a2);
      const a3 = save.cofre.find((x) => x.id === f.a3);
      const mark = (ok, id, num) => ok
        ? "<code title='" + cofreRelPath(num, id) + "'>" + cofreRelPath(num, id) + "</code>"
        : "<span class='miss' title='" + cofreRelPath(num, id) + "'>" + cofreRelPath(num, id) + "</span>";
      const label = isBonus(n) ? "B04" : "S" + String(n).padStart(2, "0");
      rows.push("<li><b>" + label + "</b><br>" + mark(a2, f.a2, n) + "<br>" + mark(a3, f.a3, n) + "</li>");
    }
    list.innerHTML = rows.join("");
  }

  function homeworkContextLines() {
    const p = playOf();
    const pins = p.a2.filter((_, i) => a2pin[i]);
    const f = filesOf(week);
    const pad = String(week).padStart(2, "0");
    const inputFile = "input-semana-" + pad + ".txt";
    const a3hint = week === 2
      ? " A entrega do homework é o A3 Report aula 02 semana 02.md — cole o mesmo texto aqui, no Homework e no " + inputFile + "."
      : "";
    if (!pins.length) {
      return "Leia o contrato da Aula 2 no painel ao lado. No disco: " + inputFile + " na pasta semana-" + pad + "." + a3hint + " Lacuna = pergunte — não invente.";
    }
    return [
      "Insumo da Aula 2 (painel ao lado + " + inputFile + " na pasta da semana):",
      pins.map((x, i) => (i + 1) + ". " + x).join("\n"),
      week === 2 ? "Arquivo-fonte: A3 Report aula 02 semana 02.md (mesmo texto no Homework e no input)." : "",
      "Use só fatos que aparecem no contrato. Não complete com web nem com 'todo time faz'."
    ].filter(Boolean).join("\n");
  }

  function parseSixPillars(text) {
    const out = { persona: "", contexto: "", tarefa: "", tom: "", formato: "", exemplos: "" };
    const src = String(text || "").trim();
    if (!src) return out;
    const re = /^(Persona|Contexto|Tarefa|Tom|Formato|Exemplos)\s*:\s*/gim;
    const markers = [];
    let m;
    while ((m = re.exec(src))) {
      markers.push({ label: m[1], start: m.index, bodyStart: m.index + m[0].length });
    }
    if (!markers.length) {
      out.tarefa = src;
      return out;
    }
    markers.forEach((mk, i) => {
      const end = i + 1 < markers.length ? markers[i + 1].start : src.length;
      out[mk.label.toLowerCase()] = src.slice(mk.bodyStart, end).trim();
    });
    return out;
  }

  function labFormatoBlock(lab) {
    const meta = LAB_DELIVERABLES[week] || {};
    const f = filesOf(week);
    const lines = [];
    lines.push("OUTPUT DESTA AULA:");
    lines.push(meta.deliverable || lab.out);
    if (meta.outputs && meta.outputs.length) {
      lines.push("Formato esperado: " + meta.outputs.join(" · "));
    }
    const names = (meta.files && meta.files.length) ? meta.files : [f.a3];
    lines.push("Salvar como: " + names.join(", ") + " na pasta da semana no seu diretório.");
    lines.push("Comando: entregue o conteúdo completo pronto para colar no arquivo — não resuma só no chat.");
    if (week === 1) {
      lines.push("Semana 01: rode o mesmo prompt em ChatGPT e Gemini; salve os dois outputs e compare o GATE.");
    } else if (week === 2) {
      lines.push("Aula 2 (insumo): A3 Report aula 02 semana 02.md — cole o mesmo texto em " + f.a2 + " e input-semana-02.txt.");
      lines.push("Aula 3 (entrega): " + f.a3 + " · Link Project aula 03 semana 02.txt");
    } else {
      lines.push("Aula 2 (insumo): " + f.a2 + " · Aula 3 (entrega): " + f.a3);
    }
    if (lab.casca) lines.push("Use o modelo de referência abaixo — mantenha os títulos das seções.");
    if (week === 16) {
      lines.push("Fechamento: exporte o manifest e sincronize a pasta com o Drive.");
    } else if (week > 1) {
      const last = filesOf(week - 1);
      const has = save.cofre.find((x) => x.id === last.a3);
      if (has) lines.push("Leia também a entrega da semana anterior: " + cofreRelPath(week - 1, last.a3));
    }
    if (meta.artefato) lines.push("Contribui para o artefato da trilha: " + meta.artefato);
    return lines.join("\n");
  }

  function labDeliverableHtml(wk) {
    const meta = LAB_DELIVERABLES[wk];
    if (!meta) return "";
    let html = '<section class="lab-deliverable">';
    html += "<h3 class=\"lab-session-title\">" + labSessionTitle(wk) + "</h3>";
    html += "<p class=\"lab-deliver-what\"><b>O que você vai gerar:</b> " + phraseLines(meta.deliverable) + "</p>";
    html += "<p class=\"lab-deliver-why\"><b>Por quê:</b> " + phraseLines(meta.why) + "</p>";
    if (meta.outputs && meta.outputs.length) {
      html += "<p class=\"lab-deliver-format\"><b>Formato:</b> " + meta.outputs.join(" · ") + "</p>";
    }
    if (meta.artefato) {
      html += "<p class=\"lab-deliver-artefato\"><b>Artefato da trilha:</b> " + meta.artefato + "</p>";
    }
    const f = filesOf(wk);
    const files = meta.files && meta.files.length ? meta.files : [f.a3];
    html += "<p class=\"lab-deliver-files\"><b>Arquivo(s) sugerido(s):</b> ";
    html += files.map((name) => "<code class='file'>" + name + "</code>").join(" ");
    html += "</p></section>";
    return html;
  }

  function formatPromptSixPillars(lab) {
    return buildLabPrompt(week, {
      reforco: false,
      homework: homeworkContextLines(),
      files: filesOf(week),
      lab,
      persona: labPersona(week, false),
    });
  }

  function formatPromptReforco(lab) {
    return buildLabPrompt(week, {
      reforco: true,
      homework: homeworkContextLines(),
      files: filesOf(week),
      lab,
      persona: labPersona(week, true),
    });
  }

  function promptLabText() {
    const lab = labOf();
    if (reforco) return formatPromptReforco(lab);
    return formatPromptSixPillars(lab);
  }

  function contractChunks(wk) {
    const ex = EX[wk];
    const need = PLAY[wk].a2.length;
    if (ex.chunks && ex.chunks.length === need) return ex.chunks;
    const t = ex.a2;
    const header = t.split(/\n\n/)[0].trim();
    const mCausa = t.match(/\n?(Problema:[\s\S]*?)(?=\nContramedida|$)/);
    const mContra = t.match(/\n?(Contramedida[\s\S]*)/);
    if (need === 3 && header && mCausa && mContra) {
      return [header, mCausa[1].trim(), mContra[1].trim()];
    }
    const paras = t.split(/\n\n+/).filter((x) => x.trim());
    if (paras.length >= need) {
      if (paras.length === need) return paras;
      const out = paras.slice(0, need - 1);
      out.push(paras.slice(need - 1).join("\n\n"));
      return out;
    }
    const size = Math.ceil(t.length / need) || 1;
    return Array.from({ length: need }, (_, i) => t.slice(i * size, (i + 1) * size).trim());
  }

  function revealedContract(wk) {
    const chunks = contractChunks(wk);
    const n = a2pin.filter(Boolean).length;
    return { text: n ? chunks.slice(0, n).join("\n\n") : "", n, total: chunks.length };
  }

  function revealedExemplo(wk) {
    const chunks = contractChunks(wk);
    const n = a2pin.filter(Boolean).length;
    const ex = EX[wk];
    if (!n) {
      return "Marque os cartões do homework para montar o exemplo.";
    }
    const lines = [
      casoCabecalho(wk),
      casoLinha(wk),
      "",
      chunks.slice(0, n).join("\n\n"),
    ];
    if (n >= chunks.length) {
      const pv = ex.pv.map((row) => row.t + ": " + row.d).join("\n");
      lines.push("", "Referência de output:", pv, "========== FIM ==========");
    }
    return lines.join("\n");
  }

  function labLabHtml() {
    const lab = labOf();
    const toolCount = labEtapas(lab).reduce((n, e) => n + (e.tools || []).length, 0);
    const manyCls = toolCount >= 3 ? " has-many-tools" : "";
    let html = '<div class="lab-lab">';
    if (reforco) {
      html += "<p class='lab-chip reforco'>Nota 1 — chat novo. Use o contrato ao lado.</p>";
    }
    html += labDeliverableHtml(week);
    if (lab.casca) {
      html += '<p class="lab-chip lab-template">Modelo de referência: ' + copyBtnHtml("Copiar estrutura", "btn-copy--compact", 'id="btn-casca"') + "</p>";
    }
    html += '<div class="lab-workspace' + manyCls + '">';
    html += '<div class="lab-workspace-main">';
    html += '<section class="lab-frame lab-frame-prompt"><div class="lab-frame-head"><span class="lab-frame-label">'
      + (reforco ? "Prompt reforço" : "Prompt")
      + '</span>' + copyBtnHtml("Copiar", "btn-copy--compact btn-copy-lab", 'data-copy="prompt"') + "</div>"
      + '<pre class="lab-frame-body" data-lab-body="prompt"></pre></section>';
    html += "</div>";
    html += '<div class="lab-workspace-side">';
    html += '<div class="lab-tools-scroll">';
    html += labToolsHtml(lab, true);
    html += "</div>";
    html += '<button type="button" id="btn-lab-done" class="btn-feito lab-done-side">✓ Feito</button>';
    html += "</div></div></div>";
    return html;
  }

  function labCopyMap() {
    return { prompt: promptLabText() };
  }

  function copyToClipboard(text, okMsg) {
    if (!text) return;
    const ok = () => toast(okMsg || "Copiado");
    const legacy = () => {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;left:-9999px;top:0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ta.setSelectionRange(0, text.length);
        const worked = document.execCommand("copy");
        document.body.removeChild(ta);
        if (worked) ok();
        else toast("Selecione o texto e copie (Ctrl+C)", true);
      } catch (_) {
        toast("Selecione o texto e copie (Ctrl+C)", true);
      }
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(ok).catch(legacy);
    } else {
      legacy();
    }
  }

  function copyLabText(text) {
    copyToClipboard(text, "Copiado");
  }

  function fillLabFrames() {
    const map = labCopyMap();
    document.querySelectorAll("[data-lab-body]").forEach((el) => {
      const key = el.getAttribute("data-lab-body");
      if (map[key]) el.textContent = map[key];
    });
    document.querySelectorAll(".btn-copy-lab[data-copy]").forEach((btn) => {
      const key = btn.getAttribute("data-copy");
      btn.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        copyLabText(labCopyMap()[key] || map[key]);
      };
    });
    const casca = document.getElementById("btn-casca");
    if (casca) {
      casca.onclick = (ev) => {
        ev.preventDefault();
        copyLabText(labOf().casca);
      };
    }
  }

  function updateCasoPanel() {
    const p = playOf();
    const a1ready = p.a1.every((_, i) => a1open[i]);
    const pinCount = a2pin.filter(Boolean).length;
    const rev = revealedContract(week);
    const casoEl = document.getElementById("caso");
    const btnCaso = document.getElementById("btn-caso");
    const casoPre = document.getElementById("caso-body");
    const mesaEl = document.getElementById("mesa");
    if (!a1ready || pinCount === 0) {
      casoEl.className = "is-hidden";
      if (mesaEl) mesaEl.classList.remove("has-caso");
      document.getElementById("caso-who").textContent = "";
      casoPre.textContent = "";
      btnCaso.disabled = true;
      return;
    }
    casoEl.className = pinCount < p.a2.length ? "partial" : "";
    if (mesaEl) mesaEl.classList.add("has-caso");
    const inLab = phase === "lab" || phase === "nota";
    document.getElementById("caso-who").textContent = inLab
      ? casoBanner(week)
      : "Homework exemplo · " + pinCount + "/" + p.a2.length;
    casoPre.textContent = inLab && pinCount >= p.a2.length
      ? revealedExemplo(week)
      : rev.text;
    btnCaso.disabled = false;
  }

  function paintA3Panel() {
    const a2ready = playOf().a2.every((_, i) => a2pin[i]);
    let cards3 = "";
    let foot3 = "";
    if (!a2ready) {
      cards3 = "";
      foot3 = "";
    } else if (phase === "nota") {
      cards3 = "<div class='nota-block'>"
        + "<p class='nota-lead'>" + phraseLines("Toque o botão abaixo para escolher 1, 2 ou 3.") + "</p>"
        + "</div>";
      foot3 = '<button type="button" id="btn-open-nota" class="cta-nota">Dar nota 1 · 2 · 3</button>';
    } else if (phase === "lab") {
      cards3 = labLabHtml();
      foot3 = "";
    } else if (phase === "brief") {
      cards3 = briefHtml();
      foot3 = "";
    }
    const a3sig = [week, phase, a2ready ? 1 : 0, a3open.map(Boolean).join(""), a3chip || "", reforco ? 1 : 0].join("|");
    const toolsEl = document.getElementById("caso-tools");
    if (mesaA3Paint === a3sig) return;
    mesaA3Paint = a3sig;
    if (toolsEl) {
      toolsEl.hidden = true;
      toolsEl.innerHTML = "";
    }
    document.getElementById("cards-a3").innerHTML = cards3;
    document.getElementById("foot-a3").innerHTML = foot3;
    if (phase === "lab" && a2ready) fillLabFrames();
    const gotoMap = document.getElementById("btn-goto-map");
    if (gotoMap) gotoMap.onclick = () => {
      showMap();
      openMapSetup();
    };
    const openNota = document.getElementById("btn-open-nota");
    if (openNota) openNota.onclick = () => openNotaDialog();
    const labDoneBtn = document.getElementById("btn-lab-done");
    if (labDoneBtn) labDoneBtn.onclick = () => startGateFromLab();
    document.querySelectorAll("[data-a3]").forEach((el) => {
      el.onclick = () => {
        const i = Number(el.getAttribute("data-a3"));
        if (i !== seqNext(a3open, aula03BriefOf(week).cards.length)) return;
        a3open[i] = true;
        a3chip = null;
        railFocus = 3;
        renderMesa();
        syncHud();
      };
    });
    document.querySelectorAll("[data-a3chip]").forEach((el) => {
      el.onclick = (ev) => {
        ev.stopPropagation();
        const id = el.getAttribute("data-a3chip");
        a3chip = a3chip === id ? null : id;
        renderMesa();
      };
    });
    const openLab = document.getElementById("btn-open-lab");
    if (openLab) {
      openLab.onclick = () => {
        if (!a3BriefReady()) return;
        phase = "lab";
        railFocus = 3;
        renderMesa();
        syncHud();
      };
    }
  }

  function renderMesa() {
    const p = playOf();
    const lab = labOf();
    const a1ready = p.a1.every((_, i) => a1open[i]);
    const a2ready = p.a2.every((_, i) => a2pin[i]);
    document.getElementById("lead-a1").textContent = "Conceitos da semana";
    document.getElementById("lead-a2").innerHTML = "";
    document.getElementById("lead-a3").innerHTML = !a2ready
      ? ""
      : (phase === "nota" || phase === "brief"
        ? ""
        : phraseLines((LAB_DELIVERABLES[week] || {}).deliverable || lab.out));
    const a3Head = document.querySelector("#rail-a3 h2");
    if (a3Head) {
      a3Head.textContent = phase === "brief"
        ? "Lab aula 03 · Por que o lab"
        : "Lab · aula 03";
    }
    const railA2 = document.getElementById("rail-a2");
    const railA3 = document.getElementById("rail-a3");
    railA2.classList.toggle("locked", !a1ready);
    railA3.classList.toggle("locked", !a2ready);
    railA3.classList.toggle("has-lab", phase === "lab" && a2ready);
    railA3.classList.toggle("has-brief", phase === "brief" && a2ready);
    const a1box = document.getElementById("cards-a1");
    const a2box = document.getElementById("slots-a2");
    if (mesaWeekPaint !== week || a1box.children.length !== p.a1.length) {
      a1box.innerHTML = p.a1.map((card, i) => {
        const open = !!a1open[i];
        return '<button type="button" class="piece' + (open ? " on" : "") + '" data-a1="' + i + '"><span class="tag">' + card.t + "</span><span class='card-d'>" + phraseLines(card.d) + "</span></button>";
      }).join("");
      a2box.innerHTML = p.a2.map((txt, i) => {
        const label = (p.a2Short && p.a2Short[i]) ? p.a2Short[i] : ("Passo " + (i + 1));
        const open = !!a2pin[i];
        return '<button type="button" class="piece' + (open ? " on" : "") + '" data-a2="' + i + '"' + (a1ready ? "" : " disabled") + '><span class="tag">' + label + "</span><span class='card-body'>" + phraseLines(txt) + "</span></button>";
      }).join("");
      mesaWeekPaint = week;
    } else {
      a1box.querySelectorAll("[data-a1]").forEach((el) => {
        el.classList.toggle("on", !!a1open[Number(el.getAttribute("data-a1"))]);
      });
      a2box.querySelectorAll("[data-a2]").forEach((el) => {
        const i = Number(el.getAttribute("data-a2"));
        el.classList.toggle("on", !!a2pin[i]);
        el.disabled = !a1ready;
      });
    }
    updateCasoPanel();
    document.getElementById("foot-a2").innerHTML = "";
    paintA3Panel();
    bindScoreButtons();
    bindRailTabs();
    bindMesaClicksOnce();
    if (phase === "nota") railFocus = 3;
    applyRailFocus();
    updateMesaTabs();
    syncHud();
  }

  function scoreScaleHtml() {
    return '<button type="button" class="nota-score-block low" data-n="1">'
      + '<b class="nota-score-num">1</b>'
      + '<span class="nota-score-title">Prompt reforço</span>'
      + "</button>"
      + '<button type="button" class="nota-score-block mid" data-n="2">'
      + '<b class="nota-score-num">2</b>'
      + '<span class="nota-score-title">Resultado ok, depois de algumas iterações</span>'
      + "</button>"
      + '<button type="button" class="nota-score-block ok" data-n="3">'
      + '<b class="nota-score-num">3</b>'
      + '<span class="nota-score-title">Resultado sem alucinações</span>'
      + "</button>";
  }

  function exemploTurma() {
    const ex = EX[week];
    const pv = ex.pv.map((row) => row.t + ": " + row.d).join("\n");
    return [
      casoCabecalho(week),
      casoLinha(week),
      "",
      ex.a2,
      "",
      "Assim parece o output:",
      pv,
      "========== FIM DO EXEMPLO =========="
    ].join("\n");
  }

  function muralCardText() {
    const lab = labOf();
    const W = WEEKS[week - 1];
    const id = "Semana " + String(week).padStart(2, "0");
    return [
      id + " · Wave 0" + W.w + " · " + W.t,
      "Lab: " + lab.cap,
      "Ferramenta: " + labToolsSummary(lab),
      "Entrega: " + lab.out,
      "Homework aula 02: " + filesOf(week).a2,
      "Lab aula 03: " + filesOf(week).a3,
      ...(filesOf(week).extras && filesOf(week).extras.length
        ? ["Tambem nesta pasta: " + filesOf(week).extras.join(" · ")]
        : []),
      "",
      "Caso da turma (Aula 2):",
      EX[week].a2,
      "",
      lab.prompt,
    ].join("\n");
  }

  function closeDock() {
    const dock = document.getElementById("dock");
    dock.classList.remove("show", "nota");
    document.getElementById("stage").classList.remove("dock-open");
    document.getElementById("tips").classList.remove("show");
    document.getElementById("tips").innerHTML = "";
  }

  function openDock(kind) {
    closeCofre();
    if (kind !== "setup") return;
    const dock = document.getElementById("dock");
    const actions = document.getElementById("dock-actions");
    dock.classList.remove("nota");
    document.getElementById("tips").classList.remove("show");
    document.getElementById("tips").innerHTML = "";
    document.getElementById("dock-who").textContent = "Setup · pastas no Desktop";
    document.getElementById("dock-title").textContent = phraseLines("Criar pastas da jornada");
    document.getElementById("dock-meta").textContent = "Terminal · Python 3 · 5 pastas Wave";
    document.getElementById("dock-prompt").textContent = setupPrompt();
    document.getElementById("dock-prompt").style.display = "";
    actions.innerHTML = '<button type="button" id="btn-setup-done" class="btn-feito">✓ Feito</button>';
    document.getElementById("btn-setup-done").onclick = finishSetup;
    dock.classList.add("show");
    document.getElementById("stage").classList.add("dock-open");
    syncHud();
  }

  function setupPrompt() {
    return [
      "PASTAS DA JORNADA — Desktop",
      "",
      "Cria no Desktop: AI-First-Operations-Leadership-Jornada/",
      "com 5 pastas (uma por Wave). Os arquivos de cada aula entram depois.",
      "",
      "Nao renomeie pastas. O jogo aponta para estes nomes:",
      "  01 Pre-voo          → Wave 01 — O Despertar",
      "  02 Produto          → Wave 02 — O Mapa de Valor",
      "  03 Delivery         → Wave 03 — A Engenharia do Ciclo",
      "  04 Times hibridos   → Wave 04 — Humano & IA",
      "  05 Homeostase       → Wave 05 — Seu potencial humano",
      "",
      "────────────────────────────────",
      "PRE-REQUISITO: Python 3",
      "────────────────────────────────",
      "",
      "Confira se ja tem:",
      "  python --version",
      "  (ou)  py --version",
      "  (ou)  python3 --version",
      "",
      "Se NAO tiver Python 3:",
      "",
      "Windows (Prompt de Comando, como Administrador se pedir):",
      "  winget install Python.Python.3.12",
      "",
      "macOS (Terminal, com Homebrew):",
      "  brew install python3",
      "",
      "Linux (Debian/Ubuntu):",
      "  sudo apt update && sudo apt install -y python3",
      "",
      "Feche e abra o terminal de novo. Confira com python --version.",
      "",
      "────────────────────────────────",
      "COMANDO DO SETUP",
      "────────────────────────────────",
      "",
      "1) Abra o terminal na pasta do jogo (domain/game).",
      "2) Rode UM destes blocos:",
      "",
      "Windows (Prompt de Comando):",
      "  python setup-jornada.py",
      "  (se der erro:  py setup-jornada.py)",
      "",
      "macOS / Linux (Terminal):",
      "  python3 setup-jornada.py",
      "",
      "Pronto. Volte ao jogo e marque Feito.",
      "Nas proximas aulas vamos colocar os arquivos dentro das Waves.",
    ].join("\n");
  }

  function finishSetup() {
    save.setupS01 = true;
    persist();
    if (mode === "map") {
      closeDock();
      toast("Setup ok — 5 Waves no Desktop. Os arquivos entram aula a aula.");
      renderMapGadgets();
      syncHud();
      return;
    }
    phase = "lab";
    toast("Diretório " + COFRE_DIR + " pronto. Aba Lab aula 03.");
    railFocus = 3;
    renderMesa();
    syncHud();
  }

  function startGateFromLab() {
    labDone = true;
    phase = "nota";
    renderMesa();
    syncHud();
    openNotaDialog();
  }

  function applyScore(n) {
    closeNotaDialog();
    const lab = labOf();
    if (n === 1) {
      scoreLock = false;
      phase = "lab";
      labDone = false;
      reforco = true;
      stamps = { fato: false, hipotese: false, alucinacao: false };
      railFocus = 3;
      toast("Nota 1 — rode o reforço com o contrato ao lado.", true);
      renderMesa();
      syncHud();
      return;
    }
    closeDock();
    depositWeek(week);
    toast(n === 3
      ? phraseLines("Nota 3 — o primeiro output já era o foco. Salve em " + cofreRelPath(week, filesOf(week).a2) + " e " + cofreRelPath(week, filesOf(week).a3))
      : phraseLines("Nota 2 — depois das iterações, ficou bom. Salve em " + cofreRelPath(week, filesOf(week).a2) + " e " + cofreRelPath(week, filesOf(week).a3)));
    winWeek();
  }

  function winWeek() {
    if (winLock) return;
    winLock = true;
    if (!save.won.includes(week)) save.won.push(week);
    persist();
    let mapDelay = 150;
    if (week === 16) {
      toast("Campo fechado. Exporte o manifest.");
      mapDelay = 1600;
    } else if (isBonus(week)) {
      toast("Bônus no diretório. A trilha das semanas 11 a 16 continua no mesmo lugar.");
      mapDelay = 900;
    }
    setTimeout(showMap, mapDelay);
  }

  function toast(msg, bad) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.className = bad ? "bad show" : "show";
    clearTimeout(toastT);
    toastT = setTimeout(() => { el.className = bad ? "bad" : ""; }, 1800);
  }

  function setHint(title) {
    hintB.textContent = title;
    hintS.textContent = "";
    if (mode !== "map") return;
    const barB = document.querySelector("#bar-status b");
    const barS = document.querySelector("#bar-status span");
    if (barB) barB.textContent = title;
    if (barS) barS.textContent = "";
  }

  function syncHud() {
    const app = document.getElementById("app");
    app.classList.toggle("is-map", mode === "map");
    app.classList.toggle("is-level", mode !== "map");
    document.body.classList.toggle("journey-map", mode === "map");
    document.body.classList.toggle("journey-level", mode === "level");
    const trailWon = save.won.filter((n) => n <= 16).length;
    document.getElementById("hud-streak").innerHTML = mode === "level"
      ? "<em>Semana</em>" + week + "/16"
      : "<em>Semanas</em>" + trailWon + "/16";
    const wavesEl = document.getElementById("hud-waves");
    if (wavesEl) wavesEl.innerHTML = "<em>Waves</em>" + wavesWonCount() + "/5";
    const lessonEl = document.getElementById("hud-lesson");
    if (lessonEl) {
      lessonEl.innerHTML = mode === "level"
        ? "<em>Aula</em>" + lessonStepLabel(phase)
        : "<em>Aula</em>—";
    }
    const mantraEl = document.getElementById("leader-mantra");
    const brandEl = document.getElementById("brand-name");
    if (brandEl) brandEl.textContent = COURSE_NAME;
    const pills = document.getElementById("pills");
    if (mode === "map") {
      document.getElementById("title").textContent = COURSE_NAME;
      mantraEl.textContent = "";
      mantraEl.hidden = true;
      const waveLine = WAVE_LINE[WEEKS[nextHole() - 1].w];
      document.getElementById("sub").textContent = waveLine;
      pills.innerHTML = "";
      setHint("Mapa da trilha");
      return;
    }
    const titleEl = document.getElementById("title");
    const wantedTitle = weekTitleHtml(week);
    if (titleEl.innerHTML !== wantedTitle) titleEl.innerHTML = wantedTitle;
    document.getElementById("sub").textContent = "";
    mantraEl.textContent = "";
    if (pills.innerHTML) pills.innerHTML = "";
    if (phase === "conceito") {
      setHint("Conceito aula 01");
    } else if (phase === "raiz") {
      setHint("Homework aula 02");
    } else if (phase === "brief") {
      setHint("Lab aula 03");
    } else if (phase === "lab") {
      setHint("Lab aula 03");
    } else if (phase === "nota") {
      setHint("Fechamento");
    } else {
      setHint("Lab aula 03");
    }
    if (mode === "level") mantraEl.hidden = true;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.floor(canvas.clientWidth);
    const h = Math.floor(canvas.clientHeight);
    if (w < 8 || h < 8) return;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    renderMapGadgets();
  }

  function mapMetrics(w, h) {
    const s = Math.max(0.48, Math.min(1.4, Math.min(w / 560, h / 400)));
    const padL = Math.max(20, w * 0.09);
    const padR = Math.max(20, w * 0.09);
    const padT = Math.max(16, h * 0.08);
    const padB = Math.max(18, h * 0.08);
    return {
      padL, padR, padT, padB,
      cx: padL + (w - padL - padR) / 2,
      top: padT,
      bot: h - padB,
      w, h, s
    };
  }

  function trailPoint(m, t) {
    const y = m.bot - t * (m.bot - m.top);
    const amp = (m.w - m.padL - m.padR) * (0.12 + t * 0.18);
    let x = m.cx + Math.sin(t * Math.PI * 2.15 + 0.4) * amp;
    x = Math.max(m.padL + 24, Math.min(m.w - m.padR - 24, x));
    return { x, y };
  }

  function trailNodesEven(m, count) {
    const steps = 240;
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      pts.push(Object.assign({ t }, trailPoint(m, t)));
    }
    const cum = [0];
    for (let i = 1; i < pts.length; i++) {
      cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    }
    const total = cum[cum.length - 1];
    const nodes = [];
    for (let s = 0; s < count; s++) {
      const target = count === 1 ? 0 : (s / (count - 1)) * total;
      let j = 1;
      while (j < cum.length && cum[j] < target) j++;
      const seg = cum[j] - cum[j - 1];
      const f = seg > 0 ? (target - cum[j - 1]) / seg : 0;
      const p0 = pts[j - 1];
      const p1 = pts[j];
      nodes.push({
        x: p0.x + (p1.x - p0.x) * f,
        y: p0.y + (p1.y - p0.y) * f,
        t: p0.t + (p1.t - p0.t) * f,
      });
    }
    return nodes;
  }

  function weekNode(m, n) {
    return trailNodesEven(m, 16)[Math.min(15, Math.max(0, n - 1))];
  }

  function mapLayout(w, h) {
    const m = mapMetrics(w, h);
    return trailNodesEven(m, 16).map((p, i) => ({
      n: i + 1,
      x: p.x,
      y: p.y,
      wave: WEEKS[i].w,
      t: p.t,
    }));
  }

  function hexRgb(hex) {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  function rgba(hex, a) {
    const c = hexRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }

  function drawMap(w, h) {
    ctx.clearRect(0, 0, w, h);
    const m = mapMetrics(w, h);
    const nodes = mapLayout(w, h);
    const won = wonSet();
    const now = performance.now() / 1000;
    const nxt = nextHole();
    const cuts = [0, 2, 6, 10, 14, 16];
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#EDE8F4");
    sky.addColorStop(1, "#F4F4F4");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, w, h);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let wave = 1; wave <= 5; wave++) {
      const t0 = cuts[wave - 1] / 15;
      const t1 = Math.min(1, (cuts[wave] - 0.02) / 15);
      const lit = IN_WAVE[wave].some((n) => unlocked(n));
      ctx.beginPath();
      for (let i = 0; i <= 32; i++) {
        const p = trailPoint(m, t0 + (t1 - t0) * (i / 32));
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = rgba(WAVE_COLOR[wave], lit ? 0.16 : 0.07);
      ctx.lineWidth = Math.max(28, Math.min(72, 58 * m.s));
      ctx.stroke();
    }

    ctx.beginPath();
    for (let i = 0; i <= 90; i++) {
      const p = trailPoint(m, i / 90);
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.88)";
    ctx.lineWidth = Math.max(10, 16 * m.s);
    ctx.stroke();

    const crowd = Math.round((90 + save.cofre.length * 2) * (0.7 + m.s));
    for (let i = 0; i < crowd; i++) {
      const t = (i / crowd + now * 0.012) % 1;
      const p = trailPoint(m, t);
      const q = trailPoint(m, Math.min(1, t + 0.01));
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const len = Math.hypot(dx, dy) || 1;
      const lane = ((i % 7) - 3) * (1.6 * m.s);
      const px = p.x + (-dy / len) * lane;
      const py = p.y + (dx / len) * lane;
      const weekN = 1 + Math.floor(t * 15);
      const walking = unlocked(Math.min(16, weekN));
      const col = walking ? WAVE_COLOR[WEEKS[Math.min(15, weekN - 1)].w] : "#FFFFFF";
      ctx.beginPath();
      ctx.arc(px, py, (walking ? 2.2 : 1.7) * m.s, 0, Math.PI * 2);
      ctx.fillStyle = walking ? rgba(col, 0.72) : "rgba(255,255,255,0.92)";
      ctx.fill();
      if (!walking) {
        ctx.strokeStyle = "rgba(180,180,188,0.55)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function drawWeekFlag(nd, col, r, breathe) {
      const cr = r * breathe;
      const poleX = nd.x;
      const baseY = nd.y - cr;
      const poleH = 10 * m.s;
      const topY = baseY - poleH;
      ctx.strokeStyle = "rgba(51,51,51,0.88)";
      ctx.lineWidth = Math.max(1.2, 1.5 * m.s);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(poleX, baseY + 1);
      ctx.lineTo(poleX, topY);
      ctx.stroke();
      const fh = 7.5 * m.s;
      const fw = 8.5 * m.s;
      ctx.beginPath();
      ctx.moveTo(poleX, topY);
      ctx.lineTo(poleX - fw, topY + fh * 0.5);
      ctx.lineTo(poleX, topY + fh);
      ctx.closePath();
      ctx.fillStyle = col;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }

    nodes.forEach((nd) => {
      const done = won.has(nd.n);
      const here = nd.n === nxt && !done;
      const col = WAVE_COLOR[nd.wave];
      const r = (12 + (here ? 3 : 0) + (done ? 1 : 0)) * m.s;
      const breathe = here ? 1 + Math.sin(now * 2.3) * 0.09 : 1;
      if (here || done) {
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, (r + 11) * breathe, 0, Math.PI * 2);
        ctx.fillStyle = rgba(col, here ? 0.26 : 0.14);
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(nd.x, nd.y, r * breathe, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
      ctx.lineWidth = 2.6;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "700 " + Math.max(9, 11 * m.s) + "px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(nd.n), nd.x, nd.y);
    });

    nodes.forEach((nd) => {
      if (!won.has(nd.n)) return;
      const col = WAVE_COLOR[nd.wave];
      const here = nd.n === nxt;
      const r = (12 + (here ? 3 : 0) + 1) * m.s;
      const breathe = here ? 1 + Math.sin(now * 2.3) * 0.09 : 1;
      drawWeekFlag(nd, col, r, breathe);
    });
  }

  function render() {
    if (mode !== "map") return;
    const w = canvas.clientWidth;
    const hgt = canvas.clientHeight;
    if (w && hgt) drawMap(w, hgt);
  }

  function tick() {
    render();
    requestAnimationFrame(tick);
  }

  canvas.addEventListener("pointerdown", (ev) => {
    if (mode !== "map") return;
    ev.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const nodes = mapLayout(rect.width, rect.height);
    const s = mapMetrics(rect.width, rect.height).s;
    const hitR = Math.max(24, 32 * s);
    const hits = nodes
      .map((nd) => ({ nd, d: Math.hypot(nd.x - x, nd.y - y) }))
      .filter((o) => o.d < hitR)
      .sort((a, b) => a.d - b.d);
    if (!hits.length) return;
    enterWeek(hits[0].nd.n);
  });

  document.getElementById("btn-dock-close").onclick = closeDock;
  document.getElementById("btn-cofre-close").onclick = closeCofre;
  document.getElementById("btn-caso").onclick = (ev) => {
    ev.preventDefault();
    const t = document.getElementById("caso-body").textContent;
    if (!t) return;
    copyToClipboard(casoLinha(week) + "\n\n" + t, "Exemplo copiado");
  };
  document.getElementById("btn-cofre").onclick = () => {
    const el = document.getElementById("cofre");
    const open = !el.classList.contains("show");
    if (open) closeDock();
    el.classList.toggle("show", open);
    if (open) renderCofre();
  };
  document.getElementById("btn-export").onclick = () => {
    const blob = new Blob([JSON.stringify(manifestOut(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "jornada.manifest.json";
    a.click();
    toast("Manifest pronto — cole em " + LEADER_DIR);
  };
  document.getElementById("file-manifest").onchange = (ev) => {
    const file = ev.target.files && ev.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!Array.isArray(data.artefatos)) throw new Error("sem artefatos");
        save.cofre = data.artefatos;
        data.artefatos.forEach((x) => {
          if (x.semana && !save.won.includes(x.semana) && x.aula === 3) save.won.push(x.semana);
        });
        save.won.sort((a, b) => a - b);
        persist();
        renderCofre();
        renderExplorer();
        syncHud();
        toast("Diretório alimentado pelo manifest");
      } catch (e) {
        toast("Manifest inválido", true);
      }
    };
    reader.readAsText(file);
  };
  document.getElementById("btn-back").onclick = showMap;
  const notaLater = document.getElementById("nota-later");
  if (notaLater) {
    notaLater.onclick = () => {
      closeNotaDialog();
      if (phase === "nota") {
        phase = "lab";
        renderMesa();
        syncHud();
      }
    };
  }
  document.getElementById("btn-clear").onclick = () => {
    if (mode !== "level") return;
    enterWeek(week);
  };
  document.getElementById("btn-reset").onclick = () => {
    save = { won: [], cofre: [], setupS01: false };
    persist();
    showMap();
  };

  function bootFromUrl() {
    const w = Number(new URLSearchParams(location.search).get("week"));
    if (!(w >= 1 && w <= 17)) return;
    enterWeek(w);
  }

  window.addEventListener("resize", resize);
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      resize();
    }).observe(canvas);
  }
  resize();
  renderExplorer();
  syncHud();
  loadBrand().then(() => {
    resize();
    bootFromUrl();
    requestAnimationFrame(() => {
      resize();
      requestAnimationFrame(tick);
    });
  });
}