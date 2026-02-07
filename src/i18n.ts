import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Ginseng Kapseln – Pilot & Feedback.",

        /* Preparation */
        prep_title: "Zubereitung",
        prep_hot: "Heiß (ca. 140 ml)",
        prep_cold: "Kalt (ca. 100 ml + Eis)",

        /* FAQ */
        faq_title: "Häufig gestellte Fragen",
        faq_q1: "Wie viele Kapseln darf ich am Tag konsumieren?",
        faq_a1:
          "Orientiere dich an den Angaben auf der Verpackung. Viele starten mit 1 Kapsel pro Tag. Bei Unsicherheit oder Unverträglichkeit bitte pausieren und ggf. ärztlich abklären.",
        faq_q2: "Wann ist der beste Zeitpunkt für Hong Shot?",
        faq_a2: "Viele trinken es morgens vor dem Frühstück oder am Vormittag.",
        faq_q3: "Wie bereite ich das Getränk zu?",
        faq_a3:
          "Die Kapsel wird in eine kompatible Maschine eingesetzt. Heiß: 140 ml, Kalt: 100 ml + Eis.",
        faq_q4: "Sollte ich Pausen bei der Einnahme machen?",
        faq_a4:
          "Einige machen nach einer längeren Phase (z. B. mehreren Wochen) eine Pause. Wenn du unsicher bist, halte dich an die Herstellerangaben.",
        faq_q5: "Warum entsteht Schaum bei der Extraktion?",
        faq_a5:
          "Der feine Schaum entsteht durch natürliche Saponine (Ginsenoside), die im roten Ginseng enthalten sind. Er kann ein sichtbares Zeichen dafür sein, dass sich Inhaltsstoffe gut lösen – besonders bei der Extraktion mit heißem Wasser.",
        faq_q6: "Warum wird auch für kalte Getränke heiß extrahiert?",
        faq_a6:
          "Für ein kaltes Getränk wird zuerst heiß extrahiert, weil sich die Inhaltsstoffe so zuverlässig lösen. Danach wird das Getränk über Eis abgekühlt.",

        /* Contact */
        contact_title: "Kontakt",
        contact_lead:
          "Du willst am Pilotprojekt teilnehmen oder Feedback geben? Schreib mir kurz per E-Mail.",
        contact_cta: "INTERESSE PER E-MAIL SENDEN",
        email_subject: "Interesse an TS Hong Shot",
        email_body:
          "Hallo,\n\nich habe Interesse an TS Hong Shot.\n\nName:\nOrt:\nFragen/Feedback:\n\nViele Grüße",

        /* Pilot Survey Button */
        pilot_cta: "Zum Pilotprojekt (Fragen)",

        /* Footer */
        footer_impressum: "Impressum",
        footer_privacy: "Datenschutz"
      }
    },

    en: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Ginseng capsules – pilot & feedback.",

        /* Preparation */
        prep_title: "Preparation",
        prep_hot: "Hot (approx. 140 ml)",
        prep_cold: "Cold (approx. 100 ml + ice)",

        /* FAQ */
        faq_title: "Frequently Asked Questions",
        faq_q1: "How many capsules per day?",
        faq_a1:
          "Please follow the instructions on the packaging. Many people start with 1 capsule per day. If you feel unwell or are unsure, pause and consult a professional.",
        faq_q2: "Best time for Hong Shot?",
        faq_a2:
          "Many drink it in the morning before breakfast or during the forenoon.",
        faq_q3: "How to prepare?",
        faq_a3: "Use a compatible machine. Hot: 140 ml, Cold: 100 ml + ice.",
        faq_q4: "Should I take breaks?",
        faq_a4:
          "Some people take breaks after a longer period (e.g., several weeks). If unsure, follow the manufacturer’s guidance.",
        faq_q5: "Why does foam appear during extraction?",
        faq_a5:
          "The fine foam can come from natural saponins (ginsenosides) found in red ginseng. It can be a visible sign that ingredients dissolve well—especially when extracting with hot water.",
        faq_q6: "Why extract hot even for iced drinks?",
        faq_a6:
          "For an iced drink, it’s extracted hot first so the ingredients dissolve reliably. Then it’s cooled down over ice.",

        /* Contact */
        contact_title: "Contact",
        contact_lead:
          "Want to join the pilot project or share feedback? Send me a quick email.",
        contact_cta: "SEND EMAIL TO JOIN",
        email_subject: "Interest in TS Hong Shot",
        email_body:
          "Hello,\n\nI am interested in TS Hong Shot.\n\nName:\nLocation:\nQuestions / Feedback:\n\nBest regards",

        /* Pilot Survey Button */
        pilot_cta: "Join the pilot survey",

        /* Footer */
        footer_impressum: "Imprint",
        footer_privacy: "Privacy Policy"
      }
    },

    vi: {
      translation: {
        title: "TS Hong Shot",
        subtitle: "Viên nang hồng sâm – thử nghiệm & phản hồi.",

        /* Preparation */
        prep_title: "Cách pha chế",
        prep_hot: "Uống nóng (khoảng 140 ml)",
        prep_cold: "Uống lạnh (khoảng 100 ml + đá)",

        /* FAQ */
        faq_title: "Câu hỏi thường gặp",
        faq_q1: "Dùng bao nhiêu viên mỗi ngày?",
        faq_a1:
          "Vui lòng làm theo hướng dẫn trên bao bì. Nhiều người bắt đầu với 1 viên mỗi ngày. Nếu không chắc chắn hoặc có dấu hiệu khó chịu, nên tạm dừng và hỏi ý kiến chuyên môn.",
        faq_q2: "Thời điểm tốt nhất?",
        faq_a2: "Nhiều người dùng vào buổi sáng trước khi ăn hoặc trong buổi sáng.",
        faq_q3: "Pha chế thế nào?",
        faq_a3:
          "Dùng máy chiết xuất tương thích. Nóng: 140 ml, Lạnh: 100 ml + đá.",
        faq_q4: "Có nên tạm nghỉ không?",
        faq_a4:
          "Một số người tạm nghỉ sau khi dùng một thời gian (ví dụ vài tuần). Nếu không chắc, hãy theo hướng dẫn của nhà sản xuất.",
        faq_q5: "Vì sao có lớp bọt khi chiết xuất?",
        faq_a5:
          "Lớp bọt mịn có thể đến từ saponin tự nhiên (ginsenoside) trong hồng sâm. Đây có thể là dấu hiệu nhìn thấy được cho việc các thành phần hòa tan tốt—đặc biệt khi chiết xuất bằng nước nóng.",
        faq_q6: "Vì sao pha lạnh vẫn nên chiết xuất nóng trước?",
        faq_a6:
          "Để pha lạnh, nên chiết xuất nóng trước để các thành phần hòa tan ổn định. Sau đó làm lạnh bằng đá.",

        /* Contact */
        contact_title: "Liên hệ",
        contact_lead:
          "Bạn muốn tham gia dự án thử nghiệm (pilot) hoặc gửi góp ý? Hãy gửi cho tôi một email ngắn.",
        contact_cta: "GỬI EMAIL ĐỂ THAM GIA",
        email_subject: "Quan tâm đến TS Hong Shot",
        email_body:
          "Xin chào,\n\nTôi quan tâm đến TS Hong Shot.\n\nHọ tên:\nKhu vực / Thành phố:\nCâu hỏi / Góp ý:\n\nTrân trọng",

        /* Pilot Survey Button */
        pilot_cta: "Tham gia khảo sát (pilot)",

        /* Footer */
        footer_impressum: "Thông tin pháp lý",
        footer_privacy: "Chính sách bảo mật"
      }
    }
  },

  lng: "de",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
