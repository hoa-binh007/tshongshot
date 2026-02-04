import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Ginseng Kapseln – Pilot & Feedback.",
        prep_title: "Zubereitung",
        prep_hot: "Heiß (ca. 140 ml)",
        prep_cold: "Kalt (ca. 100 ml + Eis)",
        faq_title: "Häufig gestellte Fragen",
        faq_q1: "Wie viele Kapseln darf ich am Tag konsumieren?",
        faq_a1:
          "Orientiere dich an den Angaben auf der Verpackung. Viele starten mit 1 Kapsel pro Tag. Bei Unsicherheit oder Unverträglichkeit bitte pausieren und ggf. ärztlich abklären.",
        faq_q2: "Wann ist der beste Zeitpunkt für Hong Shot?",
        faq_a2: "Viele trinken es morgens vor dem Frühstück oder am Vormittag.",
        faq_q3: "Wie bereite ich das Getränk zu?",
        faq_a3: "Die Kapsel wird in eine kompatible Maschine eingesetzt. Heiß: 140 ml, Kalt: 100 ml + Eis.",
        faq_q4: "Sollte ich Pausen bei der Einnahme machen?",
        faq_a4:
          "Einige machen nach einer längeren Phase (z. B. mehreren Wochen) eine Pause. Wenn du unsicher bist, halte dich an die Herstellerangaben."
      }
    },
    en: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Ginseng capsules – pilot & feedback.",
        prep_title: "Preparation",
        prep_hot: "Hot (approx. 140 ml)",
        prep_cold: "Cold (approx. 100 ml + ice)",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How many capsules per day?",
        faq_a1:
          "Please follow the instructions on the packaging. Many people start with 1 capsule per day. If you feel unwell or are unsure, pause and consult a professional.",
        faq_q2: "Best time for Hong Shot?",
        faq_a2: "Many drink it in the morning before breakfast or during the forenoon.",
        faq_q3: "How to prepare?",
        faq_a3: "Use a compatible machine. Hot: 140 ml, Cold: 100 ml + ice.",
        faq_q4: "Should I take breaks?",
        faq_a4:
          "Some people take breaks after a longer period (e.g., several weeks). If unsure, follow the manufacturer’s guidance."
      }
    },
    vi: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Viên nang hồng sâm – thử nghiệm & phản hồi.",
        prep_title: "Cách pha chế",
        prep_hot: "Uống nóng (khoảng 140 ml)",
        prep_cold: "Uống lạnh (khoảng 100 ml + đá)",
        faq_title: "Câu hỏi thường gặp",
        faq_q1: "Dùng bao nhiêu viên mỗi ngày?",
        faq_a1:
          "Vui lòng làm theo hướng dẫn trên bao bì. Nhiều người bắt đầu với 1 viên mỗi ngày. Nếu không chắc chắn hoặc có dấu hiệu khó chịu, nên tạm dừng và hỏi ý kiến chuyên môn.",
        faq_q2: "Thời điểm tốt nhất?",
        faq_a2: "Nhiều người dùng vào buổi sáng trước khi ăn hoặc trong buổi sáng.",
        faq_q3: "Pha chế thế nào?",
        faq_a3: "Dùng máy chiết xuất tương thích. Nóng: 140 ml, Lạnh: 100 ml + đá.",
        faq_q4: "Có nên tạm nghỉ không?",
        faq_a4:
          "Một số người tạm nghỉ sau khi dùng một thời gian (ví dụ vài tuần). Nếu không chắc, hãy theo hướng dẫn của nhà sản xuất."
      }
    }
  },
  lng: "de",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
