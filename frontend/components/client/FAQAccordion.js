"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <div key={item.question} className="panel-soft rounded-[24px] px-5 py-5 sm:px-6">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="text-lg font-semibold text-white">{item.question}</span>
              <ChevronDown
                size={18}
                className={`mt-1 shrink-0 text-white/65 transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--color-text-secondary)]">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
