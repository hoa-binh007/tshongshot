import { useTranslation } from "react-i18next";

export default function Preparation() {
  const { t } = useTranslation();

  return (
    <section style={{ marginTop: 32 }}>
      <h2>{t("prep_title")}</h2>

      <ul>
        <li>{t("prep_hot")}</li>
        <li>{t("prep_cold")}</li>
      </ul>
    </section>
  );
}
