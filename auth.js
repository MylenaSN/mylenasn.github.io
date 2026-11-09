(function () {
  var cfg = window.PATRONLOOP_AUTH || { clientId: "", allowed: [] };
  var style = document.createElement("style");
  style.textContent = "html.auth-locked body>*:not(#auth-gate){display:none!important}#auth-gate{max-width:34rem;margin:48px auto;padding:0 18px;font:16px/1.45 system-ui,sans-serif;color:#1a1a1a}";
  document.documentElement.classList.add("auth-locked");
  document.head.appendChild(style);

  function permitido(email) {
    var alvo = String(email || "").toLowerCase();
    return (cfg.allowed || []).some(function (item) {
      return String(item).toLowerCase() === alvo;
    });
  }

  function caixa(msg) {
    var box = document.getElementById("auth-gate");
    if (!box) {
      box = document.createElement("div");
      box.id = "auth-gate";
      (document.body || document.documentElement).appendChild(box);
    }
    box.textContent = "";
    var p = document.createElement("p");
    p.textContent = msg;
    box.appendChild(p);
    var slot = document.createElement("div");
    slot.id = "auth-btn";
    box.appendChild(slot);
    return slot;
  }

  function abrir() {
    document.documentElement.classList.remove("auth-locked");
    var box = document.getElementById("auth-gate");
    if (box) box.remove();
  }

  function verificar(token) {
    return fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(token))
      .then(function (r) {
        if (!r.ok) throw new Error("token");
        return r.json();
      })
      .then(function (info) {
        if (info.aud !== cfg.clientId) throw new Error("aud");
        if (String(info.email_verified) !== "true") throw new Error("mail");
        if (!permitido(info.email)) throw new Error("mail");
        if (Number(info.exp || 0) * 1000 < Date.now()) throw new Error("exp");
        sessionStorage.setItem("patronloop-google-token", token);
        abrir();
      });
  }

  var googlePronto = false;

  function desenhar(slot) {
    if (!slot || !window.google || !google.accounts) return;
    if (!googlePronto) {
      google.accounts.id.initialize({
        client_id: cfg.clientId,
        callback: function (resp) {
          verificar(resp.credential).catch(function () {
            sessionStorage.removeItem("patronloop-google-token");
            botao("Esta conta Google não entra.");
          });
        }
      });
      googlePronto = true;
    }
    google.accounts.id.renderButton(slot, { theme: "outline", size: "large", text: "signin_with" });
  }

  function botao(msg) {
    var slot = caixa(msg);
    if (window.google && google.accounts) {
      desenhar(slot);
      return;
    }
    if (document.getElementById("gsi-client")) return;
    var s = document.createElement("script");
    s.id = "gsi-client";
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true;
    s.onload = function () { desenhar(document.getElementById("auth-btn")); };
    document.head.appendChild(s);
  }

  function iniciar() {
    if (!document.body) return;
    if (!cfg.clientId) {
      caixa("O acesso está fechado até o identificador do cliente Google deste site existir.");
      return;
    }
    var salvo = sessionStorage.getItem("patronloop-google-token");
    if (!salvo) {
      botao("Entre com a conta Google autorizada.");
      return;
    }
    verificar(salvo).catch(function () {
      sessionStorage.removeItem("patronloop-google-token");
      botao("Entre com a conta Google autorizada.");
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
