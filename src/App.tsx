cd ~/Desktop/tshongshot
cat > src/App.tsx <<'EOF'
import "./App.css";
import Preparation from "./components/Preparation";
import FAQ from "./components/FAQ";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button onClick={() => i18n.changeLanguage("de")}>DE</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
      </div>

      <h1 style={{ marginTop: 12 }}>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <p style={{ opacity: 0.8, fontSize: 14 }}>
        SEO/Keyword: <strong>{t("longJaverty")}</strong>
      </p>

      <Preparation />
      <FAQ />
    </div>
  );
}
EOF
