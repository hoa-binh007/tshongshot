import "./App.css";
import { useTranslation } from "react-i18next";
import Preparation from "./components/Preparation";
import FAQ from "./components/FAQ";

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={() => i18n.changeLanguage("de")}>DE</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
      </div>

      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <p style={{ opacity: 0.6 }}>{t("longJaverty")}</p>

      <Preparation />
      <FAQ />
    </div>
  );
}
