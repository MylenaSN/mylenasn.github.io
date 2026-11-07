(function () {
  const KEY = "patronloop-aiel-v1";
  const PASS = "human loop";

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  if (sessionStorage.getItem(KEY) === "1") {
    location.replace("play.html");
    return;
  }

  const dialog = document.getElementById("gate-dialog");
  const form = document.getElementById("gate-form");
  const pass = document.getElementById("gate-pass");
  const err = document.getElementById("gate-err");

  document.getElementById("btn-enter").onclick = () => {
    err.hidden = true;
    pass.value = "";
    dialog.showModal();
    pass.focus();
  };

  document.getElementById("gate-cancel").onclick = () => dialog.close();

  form.onsubmit = (ev) => {
    ev.preventDefault();
    if (norm(pass.value) !== norm(PASS)) {
      err.hidden = false;
      pass.select();
      return;
    }
    sessionStorage.setItem(KEY, "1");
    location.href = "play.html";
  };
})();
