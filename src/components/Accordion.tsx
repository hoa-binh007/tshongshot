import { useState } from "react";

type Item = { title: string; content: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "grid", gap: 10 }}>
      {items.map((it, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpenIndex(open ? null : idx)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "12px 14px",
                background: "rgba(255,255,255,0.04)",
                color: "inherit",
                border: 0,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 14,
              }}
            >
              <span>{it.title}</span>
              <span style={{ opacity: 0.7 }}>{open ? "–" : "+"}</span>
            </button>

            {open && (
              <div style={{ padding: "12px 14px", opacity: 0.9, lineHeight: 1.45, fontSize: 14 }}>
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
