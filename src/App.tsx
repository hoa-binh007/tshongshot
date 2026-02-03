export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="heroGrid">
            {/* LEFT */}
            <div>
              <h1 className="heroTitle">Hong Shot – Korean Red Ginseng als Getränk</h1>
              <p className="heroLead">
                Dein tägliches Ritual: warm oder iced – in Sekunden zubereitet.
              </p>

              <div className="heroActions">
                <button className="btn btn-primary">Interesse / Bestellung</button>
                <button className="btn btn-ghost">Mehr erfahren</button>
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

            {/* RIGHT */}
            <div className="heroImageCard">
              <div className="heroImagePlaceholder">
                <div>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>Packshot / Produktfoto</div>
                  <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85 }}>
                    Hier später Bild: Kapseln / Maschine / fertiges Getränk
                  </div>
                </div>
              </div>

              {/* Wenn du später ein Bild hast:
              <img src="/images/packshot.png" alt="Hong Shot Packshot" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Nächste Section (Platzhalter) */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">FAQ</h2>
          <div className="faqItem">
            <div className="faqQ">Was ist drin?</div>
            <div className="faqA">Korean Red Ginseng (Details später je nach Zutatenliste).</div>
          </div>
        </div>
      </section>
    </main>
  );
}
