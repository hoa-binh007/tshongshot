import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        "preparation.hot_title": "Heißgetränk Zubereitung",
        "preparation.cold_title": "Kaltgetränk Zubereitung",
        "Zubereitung": "Zubereitung",
        "faq_title": "Häufig gestellte Fragen"
      }
    },
    en: {
      translation: {
        "preparation.hot_title": "Hot Drink Preparation",
        "preparation.cold_title": "Cold Drink Preparation",
        "Zubereitung": "Preparation",
        "faq_title": "Frequently Asked Questions"
      }
    },
    vi: {
      translation: {
        "preparation.hot_title": "Cách pha chế nóng",
        "preparation.cold_title": "Cách pha chế lạnh",
        "Zubereitung": "Cách pha chế",
        "faq_title": "Câu hỏi thường gặp"
      }
    }
  },
  lng: "de", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;