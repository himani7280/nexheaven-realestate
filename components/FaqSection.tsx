"use client";

import { useState } from "react";
import { HOME } from "@/data/data";
import { ChevronUpIcon, PlusIcon } from "@/lib/icons";

const { items } = HOME.faqs;

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <h3 className="font-['Cormorant_Garamond',Georgia,serif]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`group flex min-h-[48px] w-full items-center justify-between gap-4 rounded-lg border px-5 py-2.5 text-left text-[18px] font-bold transition-colors duration-300 sm:px-6 sm:text-[19.5px] ${
                  isOpen
                    ? "border-[#6b1b35] bg-[#6b1b35] text-white"
                    : "border-[#dcd0c9] bg-white text-[#6b1b35] hover:border-[#c0925f]"
                }`}
              >
                <span>{item.q}</span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                    isOpen
                      ? "bg-white/15 text-white"
                      : "bg-[#faf2ee] text-[#c0925f] group-hover:scale-105 group-hover:bg-[#6b1b35] group-hover:text-white [@media(hover:none)]:bg-[#6b1b35] [@media(hover:none)]:text-white"
                  }`}
                >
                  {isOpen ? (
                    <ChevronUpIcon size={18} strokeWidth={2.4} />
                  ) : (
                    <PlusIcon size={18} strokeWidth={2.4} className="transition-transform duration-300 group-hover:rotate-90" />
                  )}
                </span>
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-400 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="min-h-0 overflow-hidden">
                <p className="mt-1 rounded-lg border border-transparent bg-[#f9f1ee] px-5 py-3 text-[14.5px] leading-[1.55] text-[#3f4654] sm:px-6 sm:text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
