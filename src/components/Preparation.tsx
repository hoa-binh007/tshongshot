import Accordion from "./Accordion";
import { useTranslation } from "react-i18next";

export default function Preparation() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("preparation.hot_title"),
      content: t("preparation.hot_text"),
    },
    {
      title: t("preparation.cold_title"),
      content: t("preparation.cold_text"),
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-6">
        {t("preparation.title", "Zubereitung")}
      </h2>
      <Accordion items={items} />
    </section>
  );
}
