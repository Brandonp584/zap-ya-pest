"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faq: FAQItem[];
}

export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {faq.map((item, i) => (
        <div
          key={i}
          className="border border-gray-300 rounded-md overflow-hidden"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-serif font-semibold flex justify-between items-center"
          >
            {item.question}
            <span className="ml-2">{openIndex === i ? "-" : "+"}</span>
          </button>
          {openIndex === i && (
            <div className="px-4 py-3 bg-white text-black font-sans">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
