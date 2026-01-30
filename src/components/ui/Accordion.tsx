import React from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-2xl border border-white/20 bg-slate-950 px-6 py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white sm:text-base">
            {item.question}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-indigo-950 text-white">
              +
            </span>
          </summary>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
