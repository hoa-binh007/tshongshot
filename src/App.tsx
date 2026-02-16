import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Lang = "de" | "vi" | "en";
type SectionId = "product" | "brew" | "ingredients" | "unboxing" | "trust" | "faq" | "contact";

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
        {
          id: "trust" as const,
          label: lang === "de" ? "Trust" : lang === "vi" ? "Niềm tin" : "Trust",
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
                  {/* ✅ ORDER CHANGED: VI → EN → DE */}
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
                  <button
                    className={`langBtn ${lang === "de" ? "langBtnActive" : ""}`}
                    onClick={() => setLang("de")}
                    type="button"
                  >
                    DE
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
                      {lang === "de"
                        ? "Dolce Gusto: 4 Balken"
                        : lang === "vi"
                        ? "Dolce Gusto: 4 vạch"
                        : "Dolce Gusto: 4 bars"}
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                    <div className="bars">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className={`barDot ${i < 4 ? "on" : ""}`} />
                      ))}
                    </div>
                    <div className="barsMl">
                      {lang === "de" ? "ca. 140 ml" : lang === "vi" ? "khoảng 140 ml" : "approx. 140 ml"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card barsCard">
                <div className="barsLine">
                  <div>
                    <div className="barsLabel">{lang === "de" ? "Kalt" : lang === "vi" ? "Lạnh" : "Cold"}</div>
                    <div className="muted" style={{ marginTop: 4 }}>
                      {lang === "de"
                        ? "Dolce Gusto: 3 Balken + ⅔ Eis"
                        : lang === "vi"
                        ? "Dolce Gusto: 3 vạch + ⅔ đá"
                        : "Dolce Gusto: 3 bars + ⅔ ice"}
                    </div>
                  </div>
                  <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
                    <div className="bars">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i} className={`barDot ${i < 3 ? "on" : ""}`} />
                      ))}
                    </div>
                    <div className="barsMl">
                      {lang === "de" ? "ca. 100 ml" : lang === "vi" ? "khoảng 100 ml" : "approx. 100 ml"}
                    </div>
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
                  <img
                    src="/media/poster-prep.jpg"
                    alt="Preparation preview"
                    loading="eager"
                  />
                  <span className="videoPlayIcon" aria-hidden="true">
                    ▶
                  </span>
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
                <div className="ingTitle">{lang === "de" ? "Zutaten" : lang === "vi" ? "Thành phần" : "Ingredients"}</div>

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
              <h2 className="sectionTitle">
                {lang === "de" ? "Unboxing" : lang === "vi" ? "Mở hộp" : "Unboxing"}
              </h2>

              <div className="card ingCard">

                <div className="videoFrame">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/dMJw2ix7vW0"
              title="Dolce Gusto Unboxing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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

        {/* TRUST */}
          <section id="trust" className="section trust">
            <div className="container">
              <h2 className="sectionTitle">
                {lang === "de"
                  ? "Roter Ginseng – weltweit geschätzt"
                  : lang === "vi"
                  ? "Hồng sâm – được tin dùng trên toàn cầu"
                  : "Red Ginseng – trusted worldwide"}
              </h2>

              <p className="sectionText">
                {lang === "de"
                  ? "Panax Ginseng wird seit Langem in hochwertigen Produkten eingesetzt – von Hautpflege bis zu Vital- und Konzentrationspräparaten. Hong Shot bringt diesen bewährten Wirkstoff als praktisches Kapsel-Getränk in den Alltag."
                  : lang === "vi"
                  ? "Panax ginseng từ lâu đã được ứng dụng trong nhiều sản phẩm chất lượng cao – từ chăm sóc da đến các sản phẩm hỗ trợ năng lượng & tập trung. Hong Shot đưa hoạt chất quen thuộc này vào dạng đồ uống viên nang – tiện và dễ định lượng."
                  : "Panax ginseng has long been used in high-quality products—from skincare to vitality and focus supplements. Hong Shot brings this proven ingredient into a practical capsule drink for daily routines."}
              </p>

              <img
                src="/media/trust-ginseng.png"
                alt={
                  lang === "de"
                    ? "Ginseng: Anwendungen und Zubereitung als Kapsel-Getränk"
                    : lang === "vi"
                    ? "Hồng sâm: ứng dụng và cách pha đồ uống viên nang"
                    : "Ginseng: applications and capsule drink preparation"
                }
                className="trustImage"
                loading="lazy"
              />


            

          {/* ✅ MORE INFO: 3 mini cards */}
            <div className="trustGrid">
              <div className="trustCard">
                <div className="trustIcon">✨</div>
                <h3>
                  {lang === "de" ? "Premium-Hautpflege" : lang === "vi" ? "Chăm sóc da cao cấp" : "Premium skincare"}
                </h3>
                <p>
                  {lang === "de"
                    ? "Ginseng ist in vielen Formeln als revitalisierender Wirkstoff bekannt."
                    : lang === "vi"
                    ? "Hồng sâm thường xuất hiện trong các công thức “tái tạo/sáng khỏe”."
                    : "Ginseng is widely known as a revitalizing ingredient in many formulas."}
                </p>
              </div>

              <div className="trustCard">
                <div className="trustIcon">🧠</div>
                <h3>
                  {lang === "de" ? "Fokus & Energie" : lang === "vi" ? "Tập trung & năng lượng" : "Focus & energy"}
                </h3>
                <p>
                  {lang === "de"
                    ? "Oft genutzt in Vital-Komplexen – z.B. kombiniert mit B-Vitaminen und Zink."
                    : lang === "vi"
                    ? "Thường dùng trong các sản phẩm bổ trợ – hay đi kèm vitamin nhóm B và kẽm."
                    : "Often used in vitality blends—commonly paired with B vitamins and zinc."}
                </p>
              </div>

              <div className="trustCard">
                <div className="trustIcon">☕</div>
                <h3>
                  {lang === "de" ? "Als Kapsel-Drink" : lang === "vi" ? "Dạng đồ uống viên nang" : "As a capsule drink"}
                </h3>
                <p>
                  {lang === "de"
                    ? "Praktisch im Alltag: klare Portionierung und schnelle Zubereitung."
                    : lang === "vi"
                    ? "Tiện hằng ngày: định lượng rõ ràng, pha nhanh."
                    : "Everyday-friendly: clear portioning and fast preparation."}
                </p>
              </div>
            </div>

            <p className="trustNote">
              {lang === "de"
                ? "Symbolische Darstellung zur Einordnung. Keine Verbindung oder Empfehlung durch Drittmarken."
                : lang === "vi"
                ? "Hình minh họa mang tính biểu tượng để tham khảo. Không có liên kết hay chứng thực từ bên thứ ba."
                : "Symbolic illustration for context. No affiliation or endorsement by third parties."}
            </p>
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
            <h2 className="sectionTitle">{t("contact_title")}</h2>
            <p className="sectionLead">{t("contact_lead")}</p>

            {(() => {
              const subject = encodeURIComponent(t("email_subject"));
              const body = encodeURIComponent(t("email_body"));
              const mailto = `mailto:info@tshongshot.com?subject=${subject}&body=${body}`;

              return (
                <a className="ctaButton" href={mailto}>
                  {t("contact_cta")}
                </a>
              );
            })()}

          {/* Optional: Button zum Pilot-Survey */}
            <div id="survey" style={{ marginTop: 12 }}>
            <a className="ctaButton" href="/pilot/index.html">
            {t("pilot_cta")}
            </a>
          </div>

          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">© {new Date().getFullYear()} TS Hong Shot</div>

          {(() => {
            const lang = (i18n.language || "de").slice(0, 2);

            const impressumHref =
              lang === "en"
                ? "/legal/impressum.en.html"
                : lang === "vi"
                ? "/legal/impressum.vi.html"
                : "/legal/impressum.de.html";

            const privacyHref =
              lang === "en"
                ? "/legal/privacy.en.html"
                : lang === "vi"
                ? "/legal/baomat.vi.html"
                : "/legal/datenschutz.de.html";

            return (
              <div className="footerRight">
                <a className="footerLink" href={impressumHref}>
                  {t("footer_impressum")}
                </a>
                <span className="footerDot">·</span>
                <a className="footerLink" href={privacyHref}>
                  {t("footer_privacy")}
                </a>
              </div>
            );
          })()}
        </div>
      </footer>
    </>
  );
}
