function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const lang = "de"; // Platzhalter – später kommt i18n state

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container">
          <div className="navbarInner">
            <div className="brand" onClick={() => scrollToId("top")} style={{ cursor: "pointer" }}>
              HONG SHOT
            </div>

            <nav className="navLinks">
              <a href="#product" onClick={(e) => { e.preventDefault(); scrollToId("product"); }}>Produkt</a>
              <a href="#brew" onClick={(e) => { e.preventDefault(); scrollToId("brew"); }}>Zubereitung</a>
              <a href="#ingredients" onClick={(e) => { e.preventDefault(); scrollToId("ingredients"); }}>Inhaltsstoffe</a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId("faq"); }}>FAQ</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>Kontakt</a>
            </nav>

            <div className="navRight">
              <div className="langSwitch">
                <button className={`langBtn ${lang === "de" ? "langBtnActive" : ""}`}>DE</button>
                <button className={`langBtn ${lang === "vi" ? "langBtnActive" : ""}`}>VI</button>
                <button className={`langBtn ${lang === "en" ? "langBtnActive" : ""}`}>EN</button>
              </div>

              <button className="btn btn-primary" onClick={() => scrollToId("contact")}>
                Interesse
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* TOP ANCHOR */}
      <div id="top" />

      {/* HERO */}
      <section className="hero" id="product">
        <div className="container">
          <div className="heroGrid">
            <div>
              <h1 className="heroTitle">Hong Shot – Korean Red Ginseng als Getränk</h1>
              <p className="heroLead">
                Dein tägliches Ritual: warm oder iced – in Sekunden zubereitet.
              </p>

              <div className="heroActions">
                <button className="btn btn-primary" onClick={() => scrollToId("contact")}>
                  Interesse / Bestellung
                </button>
                <button className="btn btn-ghost" onClick={() => scrollToId("brew")}>
                  Mehr erfahren
                </button>
              </div>

              <div className="heroBadges">
                <div className="badgeRow">
                  <div className="badge">Traditionelle Wurzel / Ritual</div>
                  <div className="badge">Mild / warm im Geschmack</div>
                  <div className="badge">Kapsel → Getränk in Sekunden</div>
                </div>
              </div>

              <p className="muted" style={{ marginTop: 18, fontSize: 13 }}>
                Nahrungsergänzungsmittel / Getränk. Kein Arzneimittel. Kein Heilversprechen.
              </p>
            </div>

            <div className="heroImageCard">
              <div className="heroImagePlaceholder">
                <div>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>Packshot / Produktfoto</div>
                  <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85 }}>
                    Hier später Bild: Kapseln / Maschine / fertiges Getränk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREW */}
      <section className="section" id="brew">
        <div className="container">
          <h2 className="sectionTitle">Zubereitung</h2>
          <div className="grid grid-3">
            <div className="card cardPad">1) Kapsel einlegen</div>
            <div className="card cardPad">2) Extrahieren</div>
            <div className="card cardPad">3) Genießen</div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="section" id="ingredients">
        <div className="container">
          <h2 className="sectionTitle">Inhaltsstoffe</h2>
          <div className="card cardPad">
            <div className="muted">
              Platzhalter – hier später sauber nach Zutatenliste.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <div className="faqItem">
            <div className="faqQ">Was ist drin?</div>
            <div className="faqA">Korean Red Ginseng (Details später je nach Zutatenliste).</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="sectionTitle">Kontakt</h2>
          <div className="card cardPad">
            <div className="muted">Hier kommt gleich das Interesse-Formular rein.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
