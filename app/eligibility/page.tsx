import Link from "next/link";
import { eligibilityRoutes, citizenshipRoutes } from "../data/site";
import EligibilityCriteria from "../components/sections/EligibilityCriteria";
import ProcessLeadSection from "../components/sections/ProcessLeadSection";
import QuickLeadStrip from "../components/sections/QuickLeadStrip";

export default function EligibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#0c2340] to-[#1b6fa8] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            Eligibility Check
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            Am I Eligible for British Citizenship?
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            There are several routes to British Citizenship. Understanding which applies to your circumstances
            is the first step. Our solicitors will assess your case for free.
          </p>

          {/* Checker CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/eligibility/check"
              className="inline-flex items-center gap-2.5 min-h-[54px] px-8 py-3 rounded-full font-black text-[#0c2340] bg-[#f4c400] shadow-[0_10px_30px_rgba(244,196,0,0.35)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(244,196,0,0.45)] transition-all duration-300 text-base relative overflow-hidden group"
            >
              {/* shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 relative z-10">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
              <span className="relative z-10">Check My Eligibility Now</span>
            </Link>
            <div className="flex items-center gap-3 text-white/70 text-sm font-medium">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#f4c400] animate-pulse" />Takes 2 minutes</span>
              <span className="w-px h-4 bg-white/20" />
              <span>100% Free</span>
              <span className="w-px h-4 bg-white/20" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <QuickLeadStrip context="Eligibility page" />

      {/* Routes overview */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] text-center mb-4">
            Who Can Apply for <span className="text-[#f4c400]">British Citizenship?</span>
          </h2>
          <p className="text-center text-[#4a6480] text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            You might be able to apply for British Citizenship if you are married to or in a civil partnership
            with a British citizen, you have indefinite leave to remain (ILR), you have &apos;settled status&apos; under
            the EU Settlement Scheme, or you have &apos;permanent residence&apos; status.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {eligibilityRoutes.map((route, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border-[1.5px] border-[#d0dce8] rounded-2xl hover:border-[#1b6fa8] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(12,35,64,0.08)] transition-all duration-300">
                <div className="w-12 h-12 bg-[#f4c400] rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {route.icon}
                </div>
                <div>
                  <h3 className="font-black text-[#0c2340] text-base mb-1">{route.title}</h3>
                  <p className="text-[#4a6480] text-sm leading-relaxed">{route.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Common requirements */}
          <div className="bg-[#f5f8fd] rounded-3xl p-10 border border-[#d0dce8] mb-14">
            <h3 className="text-2xl font-bold text-[#0c2340] mb-6 text-center">
              Common Requirements for All Routes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "✅", title: "Good Character", desc: "Clean criminal record and no breaches of UK Immigration Laws." },
                { icon: "📖", title: "Life in the UK Test", desc: "Pass the government-approved test covering British history, values, and culture." },
                { icon: "🗣️", title: "English Language", desc: "Pass an acceptable English language test or hold a recognised qualification." },
              ].map((req) => (
                <div key={req.title} className="bg-white rounded-2xl p-6 border border-[#d0dce8] text-center">
                  <div className="text-4xl mb-3">{req.icon}</div>
                  <h4 className="font-black text-[#0c2340] text-base mb-2">{req.title}</h4>
                  <p className="text-[#4a6480] text-sm leading-relaxed">{req.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed route cards */}
          <h2 className="text-3xl font-bold text-[#0c2340] mb-8 text-center">Detailed Route Requirements</h2>
          <div className="grid grid-cols-1 gap-8">
            {citizenshipRoutes.map((route, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-[#d0dce8] shadow-[0_4px_20px_rgba(12,35,64,0.05)]">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#1b6fa8] to-[#0c2340] rounded-xl flex items-center justify-center text-white font-black text-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-black uppercase tracking-widest text-[#1b6fa8] mb-1">{route.subtitle}</div>
                    <h3 className="text-xl font-bold text-[#0c2340] mb-3">{route.title}</h3>
                    <p className="text-[#4a6480] leading-relaxed mb-5">{route.description}</p>
                    <div className="bg-[#f5f8fd] rounded-xl p-5">
                      <div className="text-xs font-black uppercase tracking-widest text-[#0c2340] mb-3">Requirements</div>
                      <ul className="grid gap-2">
                        {route.requirements.map((req, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-[#4a6480]">
                            <span className="w-5 h-5 bg-[#f4c400] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
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

          <div className="text-center mt-14">
            <p className="text-[#4a6480] text-lg mb-4 max-w-2xl mx-auto">
              At MSD Solicitors, we can advise which route you will need to take and the documents needed to support your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/eligibility/check"
                className="inline-flex items-center gap-2 justify-center min-h-[52px] px-10 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#0c2340] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Check My Eligibility Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold border border-[#1b6fa8]/30 text-[#1b6fa8] hover:bg-[#f4f7fb] transition-all duration-200"
              >
                Book a free case review
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EligibilityCriteria />
      <ProcessLeadSection
        heading="Not Sure About Your Eligibility?"
        description="Our citizenship solicitors will assess your exact situation, confirm which route applies to you, and advise on the best timing for your application."
        context="Eligibility page enquiry"
        bg="white"
      />
    </div>
  );
}
