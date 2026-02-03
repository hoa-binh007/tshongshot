import { useTranslation } from "react-i18next";

export default function Preparation() {
  const { t } = useTranslation();

  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ marginBottom: 12 }}>{t("prep_title")}</h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
        <li>• {t("prep_hot")}</li>
        <li>• {t("prep_cold")}</li>
      </ul>
    </section>
  );
}

