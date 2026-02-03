import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: {
      title: "TS Hong Shot",
      subtitle: "Ginseng Kapseln – Pilot & Feedback.",
      longJaverty: "Long Javerty",
      prep_title: "Zubereitung",
      prep_hot: "Heiß (ca. 140 ml)",
      prep_cold: "Kalt (ca. 100 ml + Eis)",
      faq_title: "Häufig gestellte Fragen"
    }},
    en: { translation: {
      title: "TS Hong Shot",
      subtitle: "Ginseng capsules – pilot & feedback.",
      longJaverty: "Long Javerty",
      prep_title: "Preparation",
      prep_hot: "Hot (approx. 140 ml)",
      prep_cold: "Cold (approx. 100 ml + ice)",
      faq_title: "Frequently Asked Questions"
    }},
    vi: { translation: {
      title: "TS Hong Shot",
      subtitle: "Viên nang hồng sâm – thử nghiệm & phản hồi.",
      longJaverty: "Long Javerty",
      prep_title: "Cách pha chế",
      prep_hot: "Uống nóng (khoảng 140 ml)",
      prep_cold: "Uống lạnh (khoảng 100 ml + đá)",
      faq_title: "Câu hỏi thường gặp"
    }}
  },
  lng: "de",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
