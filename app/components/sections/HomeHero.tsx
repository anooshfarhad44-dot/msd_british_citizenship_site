"use client";

import Link from "next/link";
import Reveal from "../ui/Reveal";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] flex items-center bg-cover bg-center bg-[radial-gradient(circle_at_70%_20%,rgba(244,196,0,0.2),transparent_20rem),linear-gradient(90deg,rgba(12,35,64,0.94),rgba(12,35,64,0.56)),url('/images/heroImg.png')]">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 14px 30px rgba(244,196,0,0.25); }
          50% { transform: scale(1.02); box-shadow: 0 20px 40px rgba(244,196,0,0.45); }
        }
        @keyframes shimmer-sweep { 0% { left: -100%; } 100% { left: 200%; } }
      `}</style>

      <div className="absolute left-0 right-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white/96 pointer-events-none" />

      <div className="relative z-10 w-full py-0">
        <div className="w-full max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-[minmax(0,600px)_minmax(300px,400px)] gap-8 items-start">

          {/* Left panel */}
          <div>
            <Reveal>
              <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-3">
                British Citizenship Solicitors
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[clamp(2rem,4.5vw,3.4rem)] font-bold text-white leading-tight tracking-tight">
                Expert British Citizenship Solicitors in Manchester
              </h1>

              <p className="mt-3 text-white/90 text-base md:text-lg leading-relaxed max-w-[560px] font-medium">
                Navigating the path to British citizenship can be complex. MSD Solicitors guide you through every route — from spouse applications to ILR holders — with expert legal support and a proven track record.
              </p>

              <p className="mt-2.5 text-[#f4c400] text-lg font-black leading-relaxed max-w-[560px] flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#f4c400] animate-ping" />
                Proudly Maintaining a 99% Success Ratio
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-5">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center min-h-[52px] px-7 py-3 rounded-full font-black bg-[#f4c400] text-[#0c2340] transition-all duration-300 text-sm animate-[subtle-pulse_3s_ease-in-out_infinite] hover:bg-[#ebd04b]"
                >
                  <span className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2.5s_infinite]" style={{ animationTimingFunction: "linear" }} />
                  <span className="relative z-10">Speak to a citizenship solicitor</span>
                </Link>
                <Link href="/routes" className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-white border border-white/50 bg-white/12 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 text-sm">
                  Explore Routes
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right panel */}
          <div className="mt-0 w-full flex justify-center lg:justify-end">
            <Reveal delay={120}>
              <div className="w-full max-w-[360px] bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">

                {/* Info cards */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[
                    { icon: "🇬🇧", title: "British Passport", desc: "Full rights as a British citizen" },
                    { icon: "🗳️", title: "Right to Vote", desc: "Participate in UK elections" },
                    { icon: "✈️", title: "Travel Freedom", desc: "Visa-free access to 180+ countries" },
                    { icon: "🛡️", title: "Security", desc: "Permanent residence in the UK" },
                  ].map((card) => (
                    <div key={card.title} className="bg-white/10 rounded-xl p-3 border border-white/15">
                      <div className="text-2xl mb-1">{card.icon}</div>
                      <div className="text-white font-black text-xs">{card.title}</div>
                      <div className="text-white/70 text-[10px] mt-0.5 leading-tight">{card.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="relative w-full group animate-[float_4s_ease-in-out_infinite]">
                  <Link
                    href="/eligibility/check"
                    className="relative z-10 flex items-center justify-center w-full min-h-[50px] px-5 text-sm md:text-base font-black rounded-full overflow-hidden bg-[#f4c400] text-[#0c2340] shadow-[0_10px_20px_rgba(244,196,0,0.25)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <span aria-hidden="true" className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2s_infinite]" />
                    <span className="relative z-10 flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      Check Your Eligibility Now
                    </span>
                  </Link>
                </div>

                <div className="flex gap-1.5 justify-center mt-2 flex-wrap w-full">
                  {[{ icon: "⚡", label: "Takes 2 Minutes" }, { icon: "⭐", label: "100% Free" }, { icon: "🛡️", label: "No Obligation" }].map((b) => (
                    <div key={b.label} className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-[#0c2340] font-black text-[10px] border-2 border-[#1b6fa8] shadow-[0_2px_8px_rgba(12,35,64,0.1)] shrink-0">
                      <span>{b.icon}</span>
                      {b.label}
                    </div>
                  ))}
                </div>

                <p className="mt-1.5 text-center text-white/90 font-medium text-[11px] tracking-wide max-w-xs leading-relaxed">
                  Find out which citizenship route applies to your circumstances.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
