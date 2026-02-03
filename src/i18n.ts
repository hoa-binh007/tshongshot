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
      faq_q1: "Wie viele Kapseln darf ich am Tag konsumieren?",
      faq_a1: "Wir empfehlen 1 Kapsel täglich. Laut Hersteller sind 1–2 Kapseln pro Tag vorgesehen. Bei ungewöhnlichen Symptomen bitte absetzen. Wenn du Medikamente (z. B. Blutverdünner) nimmst oder Vorerkrankungen (z. B. Diabetes) hast, sprich vorher mit deinem Arzt.",
      faq_q2: "Wann ist der beste Zeitpunkt für Hong Shot?",
      faq_a2: "Am besten morgens vor dem Frühstück oder am Vormittag. Da Ginseng als belebend wahrgenommen wird, empfehlen wir, es nicht spät am Abend zu konsumieren.",
      faq_q3: "Wie bereite ich das Getränk zu?",
      faq_a3: "Die Kapsel wird in eine kompatible Extraktionsmaschine eingesetzt. Heiß: ca. 140 ml. Kalt: ca. 100 ml und anschließend Eis hinzufügen.",
      faq_q4: "Sollte ich Pausen bei der Einnahme machen?",
      faq_a4: "Traditionell wird Ginseng auch kurweise verwendet. Viele machen nach etwa 3 Monaten eine Pause von 2–4 Wochen."

      }},
    en: { translation: {
      title: "TS Hong Shot",
      subtitle: "Ginseng capsules – pilot & feedback.",
      longJaverty: "Long Javerty",
      prep_title: "Preparation",
      prep_hot: "Hot (approx. 140 ml)",
      prep_cold: "Cold (approx. 100 ml + ice)",
      faq_title: "Frequently Asked Questions"
      faq_q1: "How many capsules can I consume per day?",
      faq_a1: "We recommend 1 capsule daily. The manufacturer indicates 1–2 capsules per day. Stop use if unusual symptoms occur. If you take medication (e.g., blood thinners) or have conditions (e.g., diabetes), consult your doctor first.",
      faq_q2: "When is the best time to take Hong Shot?",
      faq_a2: "Preferably in the morning before breakfast or during the forenoon. Since ginseng may feel invigorating, we recommend avoiding late evening intake.",
      faq_q3: "How do I prepare the drink?",
      faq_a3: "Insert the capsule into a compatible extraction machine. Hot: approx. 140 ml. Cold: approx. 100 ml, then add ice.",
      faq_q4: "Should I take breaks from consumption?",
      faq_a4: "Ginseng is often used in cycles. Many people take a 2–4 week break after about 3 months."

      }},
    vi: { translation: {
      title: "TS Hong Shot",
      subtitle: "Viên nang hồng sâm – thử nghiệm & phản hồi.",
      longJaverty: "Long Javerty",
      prep_title: "Cách pha chế",
      prep_hot: "Uống nóng (khoảng 140 ml)",
      prep_cold: "Uống lạnh (khoảng 100 ml + đá)",
      faq_title: "Câu hỏi thường gặp"
      faq_q1: "Tôi nên dùng bao nhiêu viên mỗi ngày?",
      faq_a1: "Khuyên dùng 1 viên mỗi ngày. Theo nhà sản xuất có thể dùng 1–2 viên/ngày. Nếu có triệu chứng bất thường, hãy ngừng dùng. Nếu bạn đang dùng thuốc (ví dụ thuốc chống đông) hoặc có bệnh nền (ví dụ tiểu đường), hãy hỏi ý kiến bác sĩ trước.",
      faq_q2: "Thời điểm nào tốt nhất để dùng Hong Shot?",
      faq_a2: "Tốt nhất vào buổi sáng trước bữa ăn hoặc trong buổi sáng. Vì có thể tạo cảm giác tỉnh táo, nên tránh dùng muộn vào buổi tối.",
      faq_q3: "Pha chế như thế nào?",
      faq_a3: "Cho viên nang vào máy chiết xuất tương thích. Nóng: khoảng 140 ml. Lạnh: khoảng 100 ml rồi thêm đá.",
      faq_q4: "Có nên tạm nghỉ theo đợt không?",
      faq_a4: "Hồng sâm thường được dùng theo liệu trình. Nhiều người nghỉ 2–4 tuần sau khoảng 3 tháng sử dụng."

      }}
  },
  lng: "de",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
