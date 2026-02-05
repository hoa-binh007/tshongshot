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

  // Prep video: should NOT autoplay (user controlled)
  const prepVideoRef = useRef<HTMLVideoElement | null>(null);

  // IMPORTANT: keep poster overlay until first play frame is ready
  const [prepReady, setPrepReady] = useState(false);

  // Reset poster overlay when language changes (safe default)
  useEffect(() => {
    setPrepReady(false);
    const el = prepVideoRef.current;
    if (el) {
      try {
        el.pause();
        el.currentTime = 0;
      } catch {}
    }
  }, [lang]);

  // Scrollspy for sections
  useEffect(() => {
    const ids = sections.map((s) => s.id);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];

        if (!visible?.target?.id) return;

        const id = visible.target.id as SectionId;
        if (ids.includes(id)) setActiveId(id);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  // ✅ NEW: user-click play helper (tiny + isolated)
  const startPrepVideo = async () => {
    const el = prepVideoRef.current;
    if (!el) return;
    try {
      await el.play();
      setPrepReady(true);
    } catch {
      // If autoplay/play is blocked (rare on click), keep poster
      setPrepReady(false);
    }
  };

  return (
    <>
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
                    ? "Hong Shot – 100% Pure Korea Red Ginseng Capsule"
                    : lang === "vi"
                    ? "Hong Shot – Viên nang Hồng Sâm Hàn Quốc 100% nguyên chất"
                    : "Hong Shot – 100% Pure Korean Red Ginseng Capsule"}
                </h1>

                <p className="heroLead">
                  {lang === "de"
                    ? "Kompatibel mit dem Nescafé Dolce Gusto® System. Warm oder iced – in Sekunden zubereitet."
                    : lang === "vi"
                    ? "Tương thích với máy Nescafé Dolce Gusto®. Uống nóng hoặc lạnh – pha nhanh trong vài giây."
                    : "Compatible with the Nescafé Dolce Gusto® system. Hot or iced – ready in seconds."}
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
                        ? "6-jähriger roter Ginseng"
                        : lang === "vi"
                        ? "Hồng sâm 6 năm tuổi"
                        : "6-year grown red ginseng"}
                    </div>
                    <div className="badge">
                      {lang === "de"
                        ? "10 Kapseln × 1,5 g (15 g)"
                        : lang === "vi"
                        ? "10 viên × 1,5 g (15 g)"
                        : "10 capsules × 1.5 g (15 g)"}
                    </div>
                    <div className="badge">
                      {lang === "de"
                        ? "HACCP-zertifiziert"
                        : lang === "vi"
                        ? "Chuẩn an toàn HACCP"
                        : "HACCP certified"}
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

            <div className="barsWrap">
              <div className="card barsCard">
                <div className="barsLine">
                  <div>
                    <div className="barsLabel">{lang === "de" ? "Heiß" : lang === "vi" ? "Nóng" : "Hot"}</div>
                    <div className="muted" style={{ marginTop: 4 }}>
                      {lang === "de" ? "Dolce Gusto: 4 Balken" : lang === "vi" ? "Dolce Gusto: 4 vạch" : "Dolce Gusto: 4 bars"}
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                    <div className="bars">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className={`barDot ${i < 4 ? "on" : ""}`} />
                      ))}
                    </div>
                    <div className="barsMl">{lang === "de" ? "ca. 140 ml" : lang === "vi" ? "khoảng 140 ml" : "approx. 140 ml"}</div>
                  </div>
                </div>
              </div>

              <div className="card barsCard">
                <div className="barsLine">
                  <div>
                    <div className="barsLabel">{lang === "de" ? "Kalt" : lang === "vi" ? "Lạnh" : "Cold"}</div>
                    <div className="muted" style={{ marginTop: 4 }}>
                      {lang === "de" ? "Dolce Gusto: 3 Balken + ⅔ Eis" : lang === "vi" ? "Dolce Gusto: 3 vạch + ⅔ đá" : "Dolce Gusto: 3 bars + ⅔ ice"}
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                    <div className="bars">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className={`barDot ${i < 3 ? "on" : ""}`} />
                      ))}
                    </div>
                    <div className="barsMl">{lang === "de" ? "ca. 100 ml" : lang === "vi" ? "khoảng 100 ml" : "approx. 100 ml"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="smallNote">
              {lang === "de"
                ? "Hinweis: Auch für kalte Getränke wird die Extraktion mit heißem Wasser empfohlen."
                : lang === "vi"
                ? "Gợi ý: Ngay cả khi uống lạnh, vẫn nên chiết xuất bằng nước nóng trước."
                : "Note: Even for cold drinks, extraction with hot water is recommended."}
            </div>

            <div style={{ marginTop: 16 }} className="card cardPad">
              <div className="videoFrame">
                <button
                  type="button"
                  className={`videoPosterBtn ${prepReady ? "videoPosterHidden" : ""}`}
                  onClick={startPrepVideo}
                  aria-label="Play preparation video"
                >
                  <img src="/media/poster-prep.jpg" alt="Preparation preview" loading="eager" />
                  <span className="videoPlayIcon" aria-hidden="true">▶</span>
                </button>

                <video
                  ref={prepVideoRef}
                  className="video"
                  src="/media/prep-extraction.mp4"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  onPlay={() => setPrepReady(true)}
                  onPlaying={() => setPrepReady(true)}
                  onPause={() => setPrepReady(false)}
                  onEnded={() => setPrepReady(false)}
                />
              </div>

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
            <h2 className="sectionTitle">
              {lang === "de" ? "Inhaltsstoffe" : lang === "vi" ? "Thành phần" : "Ingredients"}
            </h2>

            <div className="ingGrid">
              <div className="card cardPad ingCard">
                <div className="ingTitle">
                  {lang === "de" ? "Zutaten" : lang === "vi" ? "Thành phần" : "Ingredients"}
                </div>

                <ul className="ingList">
                  <li>
                    {lang === "de"
                      ? "100% Red Ginseng Pulver (Panax Ginseng C.A. Meyer)"
                      : lang === "vi"
                      ? "100% bột hồng sâm (Panax Ginseng C.A. Meyer)"
                      : "100% Red Ginseng powder (Panax Ginseng C.A. Meyer)"}
                  </li>
                  <li>
                    {lang === "de"
                      ? "Ginsenoside: 70 mg/g"
                      : lang === "vi"
                      ? "Hàm lượng ginsenoside: 70 mg/g"
                      : "Ginsenosides: 70 mg/g"}
                  </li>
                </ul>

                <div className="smallNote">
                  {lang === "de"
                    ? "Nahrungsergänzungsmittel / Getränk. Kein Arzneimittel. Kein Heilversprechen."
                    : lang === "vi"
                    ? "Sản phẩm dinh dưỡng / đồ uống. Không phải thuốc."
                    : "Food supplement / beverage product. Not a medicine."}
                </div>
              </div>

              <div className="card cardPad ingCard">
                <div className="ingTitle">
                  {lang === "de" ? "Produktdetails" : lang === "vi" ? "Thông tin sản phẩm" : "Product details"}
                </div>

                <ul className="ingList">
                  <li>{lang === "de" ? "6-jähriger roter Ginseng" : lang === "vi" ? "Hồng sâm 6 năm tuổi" : "6-year grown red ginseng"}</li>
                  <li>{lang === "de" ? "10 Kapseln × 1,5 g (15 g)" : lang === "vi" ? "10 viên × 1,5 g (15 g)" : "10 capsules × 1.5 g (15 g)"}</li>
                  <li>{lang === "de" ? "Kompatibel: Nescafé Dolce Gusto®" : lang === "vi" ? "Tương thích: Nescafé Dolce Gusto®" : "Compatible: Nescafé Dolce Gusto®"}</li>
                  <li>{lang === "de" ? "HACCP-zertifizierter Standard" : lang === "vi" ? "Tiêu chuẩn HACCP" : "HACCP certified standard"}</li>
                  <li>{lang === "de" ? "Mindestens haltbar bis: 23.11.2028" : lang === "vi" ? "Hạn sử dụng: 23.11.2028" : "Best before: 23 Nov 2028"}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UNBOXING */}
        <section className="section" id="unboxing">
          <div className="container">
            <h2 className="sectionTitle">{lang === "de" ? "Unboxing" : lang === "vi" ? "Mở hộp" : "Unboxing"}</h2>

            <div className="card ingCard">
              <div className="videoFrame">
                <video
                  className="video"
                  src="/media/optimized/unboxing.mp4"
                  poster="/media/poster-unboxing.jpg"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

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
              <div className="faqQ">{t("faq_q5")}</div>
              <div className="faqA">{t("faq_a5")}</div>
            </div>

            <div style={{ height: 12 }} />

            <div className="faqItem">
              <div className="faqQ">{t("faq_q6")}</div>
              <div className="faqA">{t("faq_a6")}</div>
            </div>

            <div style={{ height: 12 }} />

            <div className="faqItem">
              <div className="faqQ">{t("faq_q4")}</div>
              <div className="faqA">{t("faq_a4")}</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="sectionTitle">Kontakt</h2>
            <p className="sectionLead">
              Du willst am Pilotprojekt teilnehmen oder Feedback geben? Schreib mir kurz per E-Mail.
            </p>

            <a
              className="ctaButton"
              href="mailto:info@tshongshot.com?subject=Interesse%20an%20TS%20Hong%20Shot&body=Hallo%2C%0A%0Aich%20habe%20Interesse%20an%20TS%20Hong%20Shot.%0A%0AName%3A%0AOrt%3A%0AFragen%2FFeedback%3A%0A%0AViele%20Gr%C3%BC%C3%9Fe"
            >
              INTERESSE PER E-MAIL SENDEN
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            © {new Date().getFullYear()} TS Hong Shot
          </div>

          <div className="footerRight">
            <a className="footerLink" href="/legal/impressum.html">Impressum</a>
            <span className="footerDot">·</span>
            <a className="footerLink" href="/legal/datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </footer>
    </>
  );
}
