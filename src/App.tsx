export default function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="sectionTitle">Hong Shot – Korean Red Ginseng als Getränk</h1>
        <p className="muted">Dein tägliches Ritual: warm oder iced – in Sekunden zubereitet.</p>

        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <button className="btn btn-primary">Interesse / Bestellung</button>
          <button className="btn btn-ghost">Mehr erfahren</button>
        </div>

        <div style={{ marginTop: 28 }} className="grid grid-3">
          <div className="card cardPad">Traditionelle Wurzel / Ritual</div>
          <div className="card cardPad">Mild / warm im Geschmack</div>
          <div className="card cardPad">Kapsel → Getränk in Sekunden</div>
        </div>

        <div style={{ marginTop: 28 }} className="faqItem">
          <div className="faqQ">Was ist drin?</div>
          <div className="faqA">Korean Red Ginseng (Details später je nach Zutatenliste).</div>
        </div>
      </div>
    </div>
  )
}
