import Link from "next/link";
import Reveal from "../components/ui/Reveal";
import NewLeadSection from "../components/sections/NewLeadSection";
import { eligibilityRoutes, citizenshipRoutes } from "../data/site";

export default function EligibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
              Eligibility Check
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Am I Eligible for British Citizenship?
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              There are several routes to British citizenship. Our solicitors will assess your case for free.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/eligibility/check"
                className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-black text-[#7a003c] bg-gradient-to-r from-[#f4c400] to-[#d4ab00] shadow-[0_14px_30px_rgba(244,196,0,0.35)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(244,196,0,0.45)] transition-all duration-300 text-base relative overflow-hidden group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 relative z-10"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span className="relative z-10">Check My Eligibility Now</span>
              </Link>
              <div className="flex items-center gap-4 text-white/70 text-xs md:text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f4c400] animate-pulse" />
                  Takes 2 minutes
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span>100% Free</span>
                <span className="w-px h-4 bg-white/20" />
                <span>No obligation</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context="Eligibility page" />

      {/* Routes Overview */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
                Eligibility Routes
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
                Who Can Apply for <span className="text-[#f4c400]">British Citizenship?</span>
              </h2>
              <p className="text-[#4a6480] text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                You might be eligible if you are married to a British citizen, have ILR, settled status, or permanent residence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              {eligibilityRoutes.map((route, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-white border-[1.5px] border-[#d0dce8] rounded-2xl hover:border-[#f4c400] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(244,196,0,0.15)] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#f4c400] rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {route.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-[#7a003c] text-base mb-1">
                      {route.title}
                    </h3>
                    <p className="text-[#4a6480] text-sm leading-relaxed">
                      {route.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Requirements */}
            <div className="bg-gradient-to-br from-[#fff5f8] to-white rounded-2xl p-8 border border-[#d0dce8] mb-12">
              <h3 className="text-xl font-bold text-[#7a003c] mb-6 text-center">
                Common Requirements for All Routes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    icon: "✅",
                    title: "Good Character",
                    desc: "Clean criminal record and no breaches of UK immigration laws.",
                  },
                  {
                    icon: "📖",
                    title: "Life in the UK Test",
                    desc: "Pass the government-approved test.",
                  },
                  {
                    icon: "🗣️",
                    title: "English Language",
                    desc: "Pass an acceptable English language test.",
                  },
                ].map((req, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#d0dce8] text-center hover:border-[#f4c400] transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{req.icon}</div>
                    <h4 className="font-black text-[#7a003c] text-base mb-2">
                      {req.title}
                    </h4>
                    <p className="text-[#4a6480] text-sm leading-relaxed">
                      {req.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Route Cards */}
            <h2 className="text-2xl font-bold text-[#7a003c] mb-8 text-center">
              Detailed Route Requirements
            </h2>
            <div className="grid grid-cols-1 gap-6 mb-12">
              {citizenshipRoutes.map((route, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-[#d0dce8] shadow-[0_6px_20px_rgba(122,0,60,0.06)] hover:border-[#f4c400] transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center text-white font-black text-lg">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-black uppercase tracking-widest text-[#7a003c] mb-1">
                        {route.subtitle}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-[#7a003c] mb-3">
                        {route.title}
                      </h3>
                      <p className="text-[#4a6480] text-sm md:text-base leading-relaxed mb-5">
                        {route.description}
                      </p>
                      <div className="bg-[#fff5f8] rounded-xl p-5">
                        <div className="text-xs font-black uppercase tracking-widest text-[#7a003c] mb-3">
                          Requirements
                        </div>
                        <ul className="grid gap-2">
                          {route.requirements.map((req, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-sm text-[#4a6480]"
                            >
                              <span className="w-5 h-5 bg-[#f4c400] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-[#4a6480] text-sm md:text-base mb-5 max-w-2xl mx-auto">
                At MSD Solicitors, we can advise which route you will need to take and the documents needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/eligibility/check"
                  className="inline-flex items-center gap-2 justify-center px-10 py-4 rounded-full font-black bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  Check My Eligibility Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-black border border-[#7a003c]/30 text-[#7a003c] hover:bg-[#f4c400]/10 transition-all duration-200"
                >
                  Book a Free Case Review
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-3">
                Not Sure About Your Eligibility?
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Our citizenship solicitors will assess your exact situation and confirm which route applies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Get free expert advice
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
