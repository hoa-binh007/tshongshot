import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section style={{ marginTop: 32 }}>
      <h2>{t("faq_title")}</h2>
      <p>—</p>
    </section>
  );
}
