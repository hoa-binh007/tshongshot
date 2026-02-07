(function () {
  const KEY = "GINSENG_LANG";
  const DEFAULT_LANG = "vi";

  function getLang() {
    return localStorage.getItem(KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(KEY, lang);
    renderI18n();
    updateLangButtons();
  }

  function updateLangButtons() {
    const lang = getLang();
    const map = { de: "btnDe", vi: "btnVi", en: "btnEn" };
    Object.entries(map).forEach(([l, id]) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.classList.toggle("active", l === lang);
    });
  }

  function renderI18n() {
    const lang = getLang();
    document.documentElement.lang = lang;

    const nodes = document.querySelectorAll("[data-de]");
    // Debug: siehst du das NICHT in der Konsole, läuft app.js nicht.
    console.log("[Ginseng] renderI18n lang=", lang, "nodes=", nodes.length);

    nodes.forEach((el) => {
      const txt = el.getAttribute("data-" + lang);

      // Wenn Übersetzung fehlt: nichts überschreiben
      if (txt === null || txt === undefined) return;

      // OPTION braucht .text
      if (el.tagName === "OPTION") {
        el.text = txt;
        return;
      }

      // INPUT/TEXTAREA (falls du es nutzt)
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) el.setAttribute("placeholder", txt);
        if (el.type === "submit" || el.type === "button") el.value = txt;
        return;
      }

      // Standard
      el.innerHTML = txt;
    });
  }

  function setScale(name, value) {
    const input = document.querySelector(`input[name="${name}"]`);
    if (input) input.value = String(value);

    document.querySelectorAll(`button[data-scale="${name}"]`).forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-value") === String(value));
    });
  }

  // Global API
  window.Ginseng = {
    initLangButtons: function () {
      const btnDe = document.getElementById("btnDe");
      const btnVi = document.getElementById("btnVi");
      const btnEn = document.getElementById("btnEn");
      if (btnDe) btnDe.addEventListener("click", () => setLang("de"));
      if (btnVi) btnVi.addEventListener("click", () => setLang("vi"));
      if (btnEn) btnEn.addEventListener("click", () => setLang("en"));
    },
    renderI18n,
    setScale,
    t: function (map) {
      const lang = getLang();
      return (map && (map[lang] || map.vi || map.en || map.de)) || "";
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    try {
      window.Ginseng.initLangButtons();
      renderI18n();
      updateLangButtons();
    } catch (e) {
      console.error("[Ginseng] init failed", e);
    }
  });
})();
