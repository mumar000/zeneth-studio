"use client";

import { useState } from "react";

const display = { fontFamily: "var(--font-display)" };

// One answer open at a time. Height animates through grid rows (0fr → 1fr),
// so answers of any length open smoothly without measuring.
export default function Faq({ items }) {
  const [open, setOpen] = useState(-1);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <div key={item.q} className="border-t border-[#dcd5e8] last:border-b">
            <h3>
              <button
                type="button"
                id={`${id}-q`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex min-h-11 w-full items-center justify-between gap-5 py-5 text-left text-[18px] font-[700] leading-snug tracking-[-0.01em] text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 md:py-6 md:text-[20px]"
                style={display}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`grid size-8 flex-none place-items-center rounded-full border-2 border-black transition-[rotate,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-45 bg-primary text-white" : "bg-white group-hover:bg-[#efe6ff]"
                  }`}
                >
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-3.5">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${id}-a`}
              role="region"
              aria-labelledby={`${id}-q`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-6 text-[17px] leading-[1.6] text-[#4a4752] transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:pr-14 ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                  }`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
