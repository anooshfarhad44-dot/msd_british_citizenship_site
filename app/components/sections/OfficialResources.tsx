"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";
import { officialResources } from "../../data/site";

export default function OfficialResources() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-white to-[#fff5f8] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#7a003c]/5 to-[#f4c400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <Reveal>
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7a003c]/5 border border-[#7a003c]/10 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7a003c] animate-pulse" />
              <p className="text-[#7a003c] font-black text-[10px] tracking-widest uppercase">
                Official Resources
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] mb-4 tracking-tight">
              Useful Government <span className="text-[#f4c400]">Links</span>
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-xl mx-auto font-medium">
              For official and direct government information regarding British citizenship guidelines, eligibility rules, and state updates.
            </p>
          </div>

          {/* Premium Centered Card */}
          <div className="max-w-2xl mx-auto">
            <Link
              href={officialResources.ukGovCitizenship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-6 md:p-8 bg-white rounded-3xl border border-[#d0dce8] shadow-[0_10px_35px_rgba(122,0,60,0.03)] hover:border-[#7a003c]/40 hover:shadow-[0_20px_50px_rgba(122,0,60,0.12)] hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 overflow-hidden"
            >
              {/* Premium Gradient Top Border Overlay */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7a003c] via-[#f4c400] to-[#7a003c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Inner Content Layout */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 relative z-10">
                
                {/* Enhanced Animated Icon Container */}
                {/* <div className="w-14 h-14 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(122,0,60,0.25)] group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  <span className="text-3xl select-none filter drop-shadow-sm">🇬🇧</span>
                </div> */}

                {/* Card Text Context */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="font-black text-[#7a003c] text-lg md:text-xl tracking-tight group-hover:text-[#5a0028] transition-colors">
                      {officialResources.ukGovCitizenship.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#00b67a]/10 text-[#00b67a] text-[10px] font-bold uppercase tracking-wider">
                      GOV.UK Official
                    </span>
                  </div>
                  <p className="text-[#4a6480] text-sm leading-relaxed font-medium">
                    {officialResources.ukGovCitizenship.description}
                  </p>
                </div>

                {/* Animated Interactive Arrow */}
                <div className="w-10 h-10 rounded-xl bg-[#f4f7fb] text-[#7a003c] group-hover:bg-[#7a003c] group-hover:text-white flex items-center justify-center shrink-0 self-end sm:self-center transition-all duration-300 shadow-sm border border-[#d0dce8]/40">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transform group-hover:translate-x-0.5 transition-transform duration-300"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}