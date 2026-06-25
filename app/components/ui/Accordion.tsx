"use client";

import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

type Props = {
  items: Item[];
  singleOpen?: boolean;
};

export default function Accordion({ items, singleOpen = false }: Props) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  function toggle(i: number) {
    setOpen((s) => {
      const next = { ...s };
      const isOpen = !!next[i];
      if (singleOpen) return isOpen ? {} : { [i]: true };
      if (isOpen) delete next[i];
      else next[i] = true;
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-3 my-8 w-full">
      {items.map((it, i) => (
        <div
          key={i}
          className={`w-full bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
            open[i] ? "border-[#7a003c] shadow-[0_10px_30px_rgba(12,35,64,0.06)]" : "border-[#d0dce8]"
          }`}
        >
          <button
            type="button"
            aria-expanded={!!open[i]}
            onClick={() => toggle(i)}
            className="w-full flex items-center gap-4 px-6 py-5 bg-transparent border-0 cursor-pointer text-left hover:bg-[#7a003c]/[0.02] transition-colors"
          >
            <span
              className={`w-8 h-8 grid place-items-center bg-[#f4c400] text-[#7a003c] rounded-full shrink-0 transition-transform duration-300 ${
                open[i] ? "rotate-180" : ""
              }`}
              aria-hidden
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-base font-bold text-[#7a003c] text-left">{it.title}</span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${open[i] ? "max-h-[1000px] py-3" : "max-h-0"}`}
            aria-hidden={!open[i]}
          >
            <div className="pb-6 pl-[72px] pr-6 text-[#4a6480] leading-relaxed text-sm">
              {it.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
