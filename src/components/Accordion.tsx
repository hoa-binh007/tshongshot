import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

export default function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl bg-[var(--cream)] border border-black/10"
        >
          <button
            className="w-full flex justify-between items-center px-5 py-4 text-left font-medium"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <span>{item.title}</span>
            <span>{openIndex === index ? "–" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="px-5 pb-4 text-sm leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
