import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Lang = "de" | "vi" | "en";
type SectionId = "product" | "brew" | "ingredients" | "unboxing" | "faq" | "contact";

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || "de") as Lang;

  const setLang = (next: Lang) => {
    i18n.changeLanguage(next);
  };

  // Active section (scrollspy)
  const [activeId, setActiveId] = useState<SectionId>("product");

  const sections = useMemo(
    () =>
      [
        {
          id: "product" as const,
          label: lang === "de" ? "Produkt" : lang === "vi" ? "Sản phẩm" : "Product",
        },
        { id: "brew" as const, label: t("prep_title") },
        {
          id: "ingredients" as const,
          label: lang === "de" ? "Inhaltsstoffe" : lang === "vi" ? "Thành phần" : "Ingredients",
        },
        {
          id: "unboxing" as const,
          label: lang === "de" ? "Unboxing" : lang === "vi" ? "Mở hộp" : "Unboxing",
        },
        { id: "faq" as const, label: t("faq_title") },
        {
          id: "contact" as const,
          label: lang === "de" ? "Kontakt" : lang === "vi" ? "Liên hệ" : "Contact",
        },
      ] as const,
    [lang, t]
  );

  // Prep video: autoplay only when visible
  const prepVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = prepVideoRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;

        if (e.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scrollspy for sections
  useEffect(() => {
    const ids = sections.map((s) => s.id);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (!visible?.target?.id) return;

        const id = visible.target.id as SectionId;
        if (ids.includes(id)) setActiveId(id);
      },
      {
        // tuned so section becomes active when it's meaningfully in view
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

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

            <nav className="navLinks" aria-label="Main navigation">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`navLink ${activeId === s.id ? "navLinkActive" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(s.id);
                  }}
                >
                  {s.label}
                </a>
              ))}
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
                    {lang === "de" ? "Mild / warm im Geschmack" : lang === "vi" ? "Vị dịu / ấm" : "Mild, warm taste"}
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
              <img className="heroImg" src="/media/hero-capsules.jpg" alt="Hong Shot capsules" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* BREW */}
      <section className="section" id="brew">
        <div className="container">
          <h2 className="sectionTitle">{t("prep_title")}</h2>

          <div className="grid grid-3">
            <div className="card cardPad">
              {lang === "de" ? "1) Kapsel einlegen" : lang === "vi" ? "1) Cho viên nang" : "1) Insert capsule"}
            </div>
            <div className="card cardPad">
              {lang === "de" ? "2) Extrahieren" : lang === "vi" ? "2) Chiết xuất" : "2) Extract"}
            </div>
            <div className="card cardPad">
              {lang === "de" ? "3) Genießen" : lang === "vi" ? "3) Thưởng thức" : "3) Enjoy"}
            </div>
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

          <div style={{ marginTop: 16 }} className="card cardPad">
            <video
              ref={prepVideoRef}
              className="video"
              src="/media/prep-extraction.mp4"
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="muted" style={{ marginTop: 10 }}>
              {lang === "de"
                ? "So sieht die Extraktion aus (Loop ohne Ton)."
                : lang === "vi"
                ? "Video chiết xuất (lặp, không âm thanh)."
                : "Extraction video (loop, muted)."}
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="section" id="ingredients">
        <div className="container">
          <h2 className="sectionTitle">{lang === "de" ? "Inhaltsstoffe" : lang === "vi" ? "Thành phần" : "Ingredients"}</h2>

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

      {/* UNBOXING */}
      <section className="section" id="unboxing">
        <div className="container">
          <h2 className="sectionTitle">{lang === "de" ? "Unboxing" : lang === "vi" ? "Mở hộp" : "Unboxing"}</h2>

          <div className="card cardPad">
            <video className="video" src="/media/optimized/unboxing.mp4" controls playsInline preload="metadata" />
            <div className="muted" style={{ marginTop: 10 }}>
              {lang === "de"
                ? "Ein kurzer Eindruck vom Auspacken – Verpackung & Produktgefühl."
                : lang === "vi"
                ? "Cảm giác mở hộp – bao bì & trải nghiệm sản phẩm."
                : "A quick look at the unboxing – packaging & product feel."}
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
          <h2 className="sectionTitle">{lang === "de" ? "Kontakt" : lang === "vi" ? "Liên hệ" : "Contact"}</h2>

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
