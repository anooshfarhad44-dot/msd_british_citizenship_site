"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    q: "How long does a British Citizenship application take?",
    a: "Typically around 6 months. We prepare decision-ready applications to help avoid delays.",
  },
  {
    q: "Do I need to take the Life in the UK Test?",
    a: "Most applicants do, unless you're under 18, over 65, or have certain medical conditions.",
  },
  {
    q: "What's the difference between ILR and citizenship?",
    a: "ILR gives permanent residence. British Citizenship gives full rights including a passport and voting.",
  },
  {
    q: "Can I apply if I have a criminal record?",
    a: "It depends on the nature and timing. Speak to a solicitor for tailored advice.",
  },
  {
    q: "How much do your services cost?",
    a: "Our fees vary by case. Contact us for a free consultation and clear, tailored quote.",
  },
];

export default function NewFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-[#f9fbfc] to-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              FAQs
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              Got <span className="text-[#f4c400]">Questions?</span>
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              Answers to some of the most frequently asked questions about British Citizenship applications.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto flex flex-col gap-3 mb-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#f4c400] shadow-[0_10px_35px_rgba(244,196,0,0.2)]"
                    : "border-[#7a003c]/10 hover:border-[#7a003c]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center gap-4 px-6 py-4.5 text-left cursor-pointer hover:bg-[#fff5f8]/50 transition-colors"
                >
                  <span className="w-10 h-10 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-[0_5px_15px_rgba(122,0,60,0.25)]">
                    {index + 1}
                  </span>
                  <span className="flex-1 text-base font-black text-[#7a003c] leading-snug">
                    {faq.q}
                  </span>
                  <span className={`text-2xl text-[#7a003c] transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2 border-t border-[#d0dce8]/60">
                    <p className="text-[#4a6480] text-sm leading-relaxed pl-14">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl p-7 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-white/85 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Our expert solicitors are here to answer any questions and provide tailored advice.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-lg font-black rounded-full shadow-[0_12px_35px_rgba(244,196,0,0.4)] hover:-translate-y-2 transition-all duration-300"
            >
              Get in Touch Today
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}