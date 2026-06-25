"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/app/data/site";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f9fbfc]">
      <div className="w-full max-w-[1120px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#7a003c] font-extrabold text-sm tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#7a003c] m-0">
            Frequently Asked <span className="text-[#f4c400]">Questions</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#7a003c] to-[#f4c400] rounded-full mx-auto mt-4" />
          <p className="mt-5 text-lg text-[#4a6480] max-w-2xl mx-auto leading-relaxed">
            Answers to the most common questions about British Citizenship applications. If your question isn&apos;t here, our solicitors are happy to help.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-[860px] mx-auto flex flex-col gap-3 mb-14">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-[#7a003c] shadow-[0_10px_30px_rgba(12,35,64,0.08)]"
                  : "border-[#d0dce8] hover:border-[#7a003c]/40 hover:shadow-[0_6px_20px_rgba(12,35,64,0.05)]"
              }`}
            >
              <button
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 px-6 py-5 bg-transparent border-0 cursor-pointer text-left hover:bg-[#7a003c]/[0.015] transition-colors"
              >
                {/* Number badge */}
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#7a003c] text-white"
                    : "bg-[#f4c400] text-[#7a003c]"
                }`}>
                  {index + 1}
                </span>

                <span className="flex-1 text-base font-bold text-[#7a003c] text-left leading-snug">
                  {faq.q}
                </span>

                {/* Chevron */}
                <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#7a003c] bg-[#7a003c]/5 text-[#7a003c] rotate-180"
                    : "border-[#d0dce8] text-[#4a6480]"
                }`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {/* Answer panel */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-[600px]" : "max-h-0"
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-6 pb-6 pt-1 pl-[72px]">
                  <div className="w-full h-px bg-[#d0dce8]/60 mb-4" />
                  <p className="text-[#4a6480] leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-[860px] mx-auto bg-gradient-to-r from-[#7a003c] to-[#7a003c] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <strong className="block text-lg font-black mb-1">Still have questions?</strong>
            <p className="text-white/80 text-sm m-0">Our citizenship solicitors are available to answer any queries and provide expert legal advice tailored to your situation.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#7a003c] shadow-[0_10px_25px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(244,196,0,0.35)] transition-all duration-200 whitespace-nowrap"
          >
            Speak to a solicitor
          </Link>
        </div>

      </div>
    </section>
  );
}
