"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";
import { officialResources } from "../../data/site";

export default function OfficialResources() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-[#fff5f8]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-8">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              Official Resources
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#7a003c] mb-4">
              Useful Government Links
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              For official government information about British citizenship, visit the UK government website.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href={officialResources.ukGovCitizenship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#f4c400] hover:shadow-[0_10px_40px_rgba(244,196,0,0.15)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center shrink-0">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <div className="flex-1">
                <h3 className="font-extrabold text-[#7a003c] mb-1">
                  {officialResources.ukGovCitizenship.name}
                </h3>
                <p className="text-[#4a6480] text-sm leading-relaxed">
                  {officialResources.ukGovCitizenship.description}
                </p>
              </div>
              <div className="text-[#f4c400] text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
