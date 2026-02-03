import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  const items = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
  ];

  return (
    <section style={{ marginTop: 34 }}>
      <h2 style={{ marginBottom: 14 }}>{t("faq_title")}</h2>

      <div style={{ display: "grid", gap: 12, textAlign: "left", maxWidth: 760, margin: "0 auto" }}>
        {items.map((it, idx) => (
          <details
            key={idx}
            style={{
              background: "rgba(255,255,255,0.04)",
              borderRadius: 10,
              padding: "10px 14px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>{it.q}</summary>
            <div style={{ marginTop: 10, opacity: 0.9, lineHeight: 1.6 }}>{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
