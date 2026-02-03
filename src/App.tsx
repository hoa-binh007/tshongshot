import { useTranslation } from "react-i18next";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "de";

  const setLang = (next: "de" | "vi" | "en") => {
    i18n.changeLanguage(next);
  };

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container">
          <div className="navbarInner">
            <div
              className="brand"
              onClick={() => scrollToId("top")}
              style={{ cursor: "pointer" }}
              aria-label="Home"
            >
              HONG SHOT
            </div>

            <nav className="navLinks">
              <a href="#product" onClick={(e) => { e.preventDefault(); scrollToId("product"); }}>
                {lang === "de" ? "Produkt" : lang === "vi" ? "Sản phẩm" : "Product"}
              </a>
              <a href="#brew" onClick={(e) => { e.preventDefault(); scrollToId("brew"); }}>
                {t("prep_title")}
              </a>
              <a href="#ingredients" onClick={(e) => { e.preventDefault(); scrollToId("ingredients"); }}>
                {lang === "de" ? "Inhaltsstoffe" : lang === "vi" ? "Thành phần" : "Ingredients"}
              </a>
              <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId("faq"); }}>
                {t("faq_title")}
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}>
                {lang === "de" ? "Kontakt" : lang === "vi" ? "Liên hệ" : "Contact"}
              </a>
            </nav>

            <div className="navRight">
              <div className="langSwitch" aria-label="Language switch">
                <button
                  className={`langBtn ${lang === "de" ? "langBtnActive" : ""}`}
                  onClick={() => setLang("de")}
                  type="button"
                >
                  DE
                </button>
                <button
                  className={`langBtn ${lang === "vi" ? "langBtnActive" : ""}`}
                  onClick={() => setLang("vi")}
                  type="button"
                >
                  VI
                </button>
                <button
                  className={`langBtn ${lang === "en" ? "langBtnActive" : ""}`}
                  onClick={() => setLang("en")}
                  type="button"
                >
                  EN
                </button>
              </div>

              <button className="btn btn-primary" onClick={() => scrollToId("contact")} type="button">
                {lang === "de" ? "Interesse" : lang === "vi" ? "Quan tâm" : "Interested"}
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
              <h1 className="heroTitle">
                {lang === "de"
                  ? "Hong Shot – Korean Red Ginseng als Getränk"
                  : lang === "vi"
                  ? "Hong Shot – Hồng sâm Hàn Quốc dạng thức uống"
                  : "Hong Shot – Korean Red Ginseng as a drink"}
              </h1>

              <p className="heroLead">
                {lang === "de"
                  ? "Dein tägliches Ritual: warm oder iced – in Sekunden zubereitet."
                  : lang === "vi"
                  ? "Thói quen mỗi ngày: uống nóng hoặc lạnh – pha nhanh trong vài giây."
                  : "A simple daily ritual: hot or iced – ready in seconds."}
              </p>

              <div className="heroActions">
                <button className="btn btn-primary" onClick={() => scrollToId("contact")} type="button">
                  {lang === "de"
                    ? "Interesse / Bestellung"
                    : lang === "vi"
                    ? "Quan tâm / Đặt hàng"
                    : "Interest / Order"}
                </button>

                <button className="btn btn-ghost" onClick={() => scrollToId("brew")} type="button">
                  {lang === "de" ? "Mehr erfahren" : lang === "vi" ? "Tìm hiểu thêm" : "Learn more"}
                </button>
              </div>

              <div className="heroBadges">
                <div className="badgeRow">
                  <div className="badge">
                    {lang === "de"
                      ? "Traditionelle Wurzel / Ritual"
                      : lang === "vi"
                      ? "Thói quen / truyền thống"
                      : "Tradition / daily ritual"}
                  </div>
                  <div className="badge">
                    {lang === "de"
                      ? "Mild / warm im Geschmack"
                      : lang === "vi"
                      ? "Vị dịu / ấm"
                      : "Mild, warm taste"}
                  </div>
                  <div className="badge">
                    {lang === "de"
                      ? "Kapsel → Getränk in Sekunden"
                      : lang === "vi"
                      ? "Viên nang → thức uống trong vài giây"
                      : "Capsule → drink in seconds"}
                  </div>
                </div>
              </div>

              <p className="muted" style={{ marginTop: 18, fontSize: 13 }}>
                {lang === "de"
                  ? "Nahrungsergänzungsmittel / Getränk. Kein Arzneimittel. Kein Heilversprechen."
                  : lang === "vi"
                  ? "Sản phẩm dinh dưỡng / đồ uống. Không phải thuốc."
                  : "Food supplement / beverage product. Not a medicine."}
              </p>
            </div>

            <div className="heroImageCard">
              <div className="heroImagePlaceholder">
                <div>
                  <div style={{ fontSize: 18, marginBottom: 6 }}>
                    {lang === "de" ? "Packshot / Produktfoto" : lang === "vi" ? "Hình sản phẩm" : "Product image"}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85 }}>
                    {lang === "de"
                      ? "Hier später Bild: Kapseln / Maschine / fertiges Getränk"
                      : lang === "vi"
                      ? "Sau này thêm ảnh: viên nang / máy / ly đã pha"
                      : "Later: capsules / machine / prepared drink"}
                  </div>
                </div>
              </div>

              {/* Später echtes Bild:
              <img src="/images/packshot.png" alt="Hong Shot Packshot" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* BREW */}
      <section className="section" id="brew">
        <div className="container">
          <h2 className="sectionTitle">{t("prep_title")}</h2>
          <div className="grid grid-3">
            <div className="card cardPad">{lang === "de" ? "1) Kapsel einlegen" : lang === "vi" ? "1) Cho viên nang" : "1) Insert capsule"}</div>
            <div className="card cardPad">{lang === "de" ? "2) Extrahieren" : lang === "vi" ? "2) Chiết xuất" : "2) Extract"}</div>
            <div className="card cardPad">{lang === "de" ? "3) Genießen" : lang === "vi" ? "3) Thưởng thức" : "3) Enjoy"}</div>
          </div>

          <div style={{ marginTop: 16 }} className="card cardPad">
            <div className="muted">
              {lang === "de"
                ? `Heiß: ${t("prep_hot")} · Kalt: ${t("prep_cold")}`
                : lang === "vi"
                ? `Nóng: ${t("prep_hot")} · Lạnh: ${t("prep_cold")}`
                : `Hot: ${t("prep_hot")} · Cold: ${t("prep_cold")}`}
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="section" id="ingredients">
        <div className="container">
          <h2 className="sectionTitle">
            {lang === "de" ? "Inhaltsstoffe" : lang === "vi" ? "Thành phần" : "Ingredients"}
          </h2>
          <div className="card cardPad">
            <div className="muted">
              {lang === "de"
                ? "Platzhalter – hier später sauber nach Zutatenliste."
                : lang === "vi"
                ? "Chỗ này sẽ cập nhật theo danh sách thành phần."
                : "Placeholder – later based on the ingredient list."}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="sectionTitle">{t("faq_title")}</h2>

          <div className="faqItem">
            <div className="faqQ">{t("faq_q1")}</div>
            <div className="faqA">{t("faq_a1")}</div>
          </div>

          <div style={{ height: 12 }} />

          <div className="faqItem">
            <div className="faqQ">{t("faq_q2")}</div>
            <div className="faqA">{t("faq_a2")}</div>
          </div>

          <div style={{ height: 12 }} />

          <div className="faqItem">
            <div className="faqQ">{t("faq_q3")}</div>
            <div className="faqA">{t("faq_a3")}</div>
          </div>

          <div style={{ height: 12 }} />

          <div className="faqItem">
            <div className="faqQ">{t("faq_q4")}</div>
            <div className="faqA">{t("faq_a4")}</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="sectionTitle">
            {lang === "de" ? "Kontakt" : lang === "vi" ? "Liên hệ" : "Contact"}
          </h2>
          <div className="card cardPad">
            <div className="muted">
              {lang === "de"
                ? "Hier kommt gleich das Interesse-Formular rein."
                : lang === "vi"
                ? "Sắp có form đăng ký quan tâm."
                : "The interest form will be added here."}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
