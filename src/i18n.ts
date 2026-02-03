import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        "prep_title": "Zubereitung",
        "prep_hot": "Heißgetränk",
        "prep_cold": "Kaltgetränk",
        "faq_title": "Häufig gestellte Fragen"
      }
    },
    en: {
      translation: {
        "prep_title": "Preparation",
        "prep_hot": "Hot Drink",
        "prep_cold": "Cold Drink",
        "faq_title": "Frequently Asked Questions"
      }
    },
    vi: {
      translation: {
        "prep_title": "Cách pha chế",
        "prep_hot": "Uống nóng",
        "prep_cold": "Uống lạnh",
        "faq_title": "Câu hỏi thường gặp"
      }
    }
  },
  lng: "de", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;