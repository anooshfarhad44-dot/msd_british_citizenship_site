"use client";

import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import Link from "next/link";
import { features, logos } from "@/app/data/site";
import CaseReviewForm from "../ui/CaseReviewForm";

export default function TrustSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.333% - 13.33px)); }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 30px -10px rgba(122,0,60,0.15); }
          50% { transform: scale(1.02); box-shadow: 0 20px 35px -8px rgba(122,0,60,0.25), 0 0 15px 2px rgba(244,196,0,0.2); }
        }
      `}} />

      <div className="w-full max-w-[1140px] mx-auto px-4 flex flex-col lg:flex-row gap-16 items-start">

        {/* Left panel */}
        <div className="flex-1 max-w-[620px]">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-[#7a003c] m-0 mb-3 leading-[1.15] tracking-tight">
              Apply For British Citizenship with{" "}
              <Link href="https://www.msdsolicitors.co.uk/" target="_blank" className="text-[#f4c400] underline underline-offset-4 decoration-2 font-black hover:opacity-90 transition-opacity">
                MSD Solicitors
              </Link>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-[#7a003c] mb-10 mt-0 tracking-wide">
              We Specialise in British Citizenship Applications
            </h3>

            {/* 99% Success Box */}
            <div
              className="flex items-center gap-6 mb-10 bg-white p-6 rounded-2xl border border-slate-100 max-w-sm relative overflow-hidden group select-none"
              style={{ animation: "subtle-pulse 4s ease-in-out infinite" }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#f4c400] to-[#7a003c]" />
              <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-[#7a003c]/5 rounded-full blur-xl" />
              <div className="relative flex items-baseline">
                <span className="text-6xl font-black text-[#7a003c] leading-none tracking-tighter bg-gradient-to-br from-[#7a003c] to-[#7a003c] bg-clip-text text-transparent">99</span>
                <span className="text-3xl font-extrabold text-[#7a003c] ml-0.5">%</span>
              </div>
              <div className="flex flex-col leading-tight relative z-10">
                <strong className="text-lg font-black text-[#7a003c] flex items-center gap-1.5">
                  Success Rate For
                  <span className="inline-block w-2 h-2 rounded-full bg-[#7a003c] animate-ping" />
                </strong>
                <span className="text-sm font-semibold text-[#7a003c] mt-0.5 tracking-wide uppercase text-[11px]">
                  Citizenship Applications
                </span>
              </div>
            </div>

            {/* Feature list */}
            <ul className="list-none p-0 m-0 grid gap-4 mb-14">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    openIndex === index
                      ? "border-[#7a003c] bg-white shadow-[0_10px_25px_-5px_rgba(27,111,168,0.1)]"
                      : "border-slate-200 bg-white hover:border-[#7a003c]/60 hover:shadow-[0_8px_20px_rgba(12,35,64,0.05)] hover:-translate-y-0.5"
                  }`}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl text-white shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center gap-3">
                      <strong className="text-base font-bold text-[#7a003c]">{feature.title}</strong>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-[#7a003c]" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {openIndex === index && (
                      <span className="block text-sm text-slate-500 leading-relaxed mt-2.5">{feature.description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Logo scroll */}
            <div className="w-full overflow-hidden mt-12 relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
              <div
                className="flex items-center gap-6 hover:[animation-play-state:paused] cursor-pointer py-4"
                style={{ width: "max-content", animation: "smooth-scroll 32s linear infinite" }}
              >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div key={index} className="w-44 h-26 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-5 shrink-0 shadow-[0_8px_20px_rgba(12,35,64,0.04)] hover:shadow-[0_12px_25px_rgba(12,35,64,0.08)] hover:-translate-y-0.5 transition-all duration-300 select-none">
                    <img src={logo.src} alt={logo.alt} className="max-w-[85%] max-h-[80%] object-contain pointer-events-none mix-blend-multiply contrast-[1.9] brightness-[1.02]" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Form */}
        <div>
          <CaseReviewForm />
        </div>

      </div>
    </section>
  );
}
