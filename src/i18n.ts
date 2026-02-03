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
      faq_title: "Häufig gestellte Fragen",
      faq_q1: "Wie viele Kapseln darf ich am Tag konsumieren?",
      faq_a1: "Wir empfehlen 1 Kapsel täglich. Laut Hersteller sind 1–2 Kapseln pro Tag vorgesehen. Bei ungewöhnlichen Symptomen bitte absetzen.",
      faq_q2: "Wann ist der beste Zeitpunkt für Hong Shot?",
      faq_a2: "Am besten morgens vor dem Frühstück oder am Vormittag.",
      faq_q3: "Wie bereite ich das Getränk zu?",
      faq_a3: "Die Kapsel wird in eine kompatible Maschine eingesetzt. Heiß: 140ml, Kalt: 100ml + Eis.",
      faq_q4: "Sollte ich Pausen bei der Einnahme machen?",
      faq_a4: "Viele machen nach etwa 3 Monaten eine Pause von 2–4 Wochen."
    }},
    en: { translation: {
      title: "TS Hong Shot",
      subtitle: "Ginseng capsules – pilot & feedback.",
      longJaverty: "Long Javerty",
      prep_title: "Preparation",
      prep_hot: "Hot (approx. 140 ml)",
      prep_cold: "Cold (approx. 100 ml + ice)",
      faq_title: "Frequently Asked Questions",
      faq_q1: "How many capsules per day?",
      faq_a1: "We recommend 1 capsule daily. Manufacturer suggests 1–2.",
      faq_q2: "Best time for Hong Shot?",
      faq_a2: "In the morning before breakfast or during the forenoon.",
      faq_q3: "How to prepare?",
      faq_a3: "Use a compatible machine. Hot: 140ml, Cold: 100ml + ice.",
      faq_q4: "Should I take breaks?",
      faq_a4: "A 2–4 week break after 3 months is common."
    }},
    vi: { translation: {
      title: "TS Hong Shot",
      subtitle: "Viên nang hồng sâm – thử nghiệm & phản hồi.",
      longJaverty: "Long Javerty",
      prep_title: "Cách pha chế",
      prep_hot: "Uống nóng (khoảng 140 ml)",
      prep_cold: "Uống lạnh (khoảng 100 ml + đá)",
      faq_title: "Câu hỏi thường gặp",
      faq_q1: "Dùng bao nhiêu viên mỗi ngày?",
      faq_a1: "Khuyên dùng 1 viên mỗi ngày. Nhà sản xuất gợi ý 1–2 viên.",
      faq_q2: "Thời điểm tốt nhất?",
      faq_a2: "Buổi sáng trước khi ăn hoặc trong buổi sáng.",
      faq_q3: "Pha chế thế nào?",
      faq_a3: "Dùng máy chiết xuất tương thích. Nóng: 140ml, Lạnh: 100ml + đá.",
      faq_q4: "Có nên tạm nghỉ không?",
      faq_a4: "Nên nghỉ 2–4 tuần sau mỗi 3 tháng sử dụng."
    }}
  },
  lng: "de",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;