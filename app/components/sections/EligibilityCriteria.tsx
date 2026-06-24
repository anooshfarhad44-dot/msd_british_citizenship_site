"use client";

import { useState } from "react";
import Link from "next/link";

const criteria = [
  { id: "residence",  icon: "🏠", label: "Residence",           color: "from-[#1b6fa8] to-[#0c2340]" },
  { id: "character",  icon: "✅", label: "Good Character",      color: "from-[#0c7a4a] to-[#065c35]" },
  { id: "language",   icon: "🗣️", label: "English Language",    color: "from-[#7c3aed] to-[#5b21b6]" },
  { id: "settlement", icon: "📋", label: "Settlement Status",   color: "from-[#c2410c] to-[#9a3412]" },
  { id: "test",       icon: "📖", label: "Life in the UK Test", color: "from-[#0c2340] to-[#1b6fa8]" },
];

const panels: Record<string, React.ReactNode> = {

  /* ── 1. RESIDENCE ─────────────────────────────────────────── */
  residence: (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-[#e6f0f8] rounded-2xl border border-[#1b6fa8]/20">
        <div className="w-10 h-10 bg-[#1b6fa8] rounded-xl flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
        <div>
          <h3 className="font-black text-[#0c2340] text-lg mb-1">Residency Requirements</h3>
          <p className="text-[#2d4a6b] leading-relaxed text-sm">
            The residence requirement for a naturalisation application is usually <strong>five years</strong>, but each visa route that leads to settlement and citizenship has specific rules.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-[#d0dce8] shadow-sm">
          <div className="text-xs font-black uppercase tracking-widest text-[#1b6fa8] mb-2">Skilled Worker Visa Route</div>
          <p className="text-sm text-[#4a6480] leading-relaxed">Must have resided in the UK for at least <strong className="text-[#0c2340]">5 years</strong> and held ILR or permanent residence for at least <strong className="text-[#0c2340]">12 months</strong> before applying.</p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-[#d0dce8] shadow-sm">
          <div className="text-xs font-black uppercase tracking-widest text-[#1b6fa8] mb-2">Spouse Visa Route</div>
          <p className="text-sm text-[#4a6480] leading-relaxed">Must have lived in the UK for at least <strong className="text-[#0c2340]">3 years</strong>. Must hold ILR or permanent residence but does <strong className="text-[#0c2340]">not</strong> need to have held it for 12 months prior.</p>
        </div>
      </div>

      <div className="p-6 bg-[#fff8e1] border border-[#f4c400]/40 rounded-2xl">
        <h4 className="font-black text-[#0c2340] mb-4 flex items-center gap-2">
          <span className="text-xl">⏱️</span> Absence Thresholds
        </h4>
        <p className="text-sm text-[#4a6480] mb-4 leading-relaxed">The maximum time applicants can spend outside the UK while still meeting the residence requirement:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { limit: "450 days", period: "in the last 5 years", note: "Standard applicants" },
            { limit: "270 days", period: "in the last 5 years", note: "Married to a British citizen" },
            { limit: "90 days",  period: "in the last 12 months", note: "All applicants" },
          ].map((t) => (
            <div key={t.limit} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#f4c400]/40">
              <div className="w-12 h-12 bg-[#f4c400] rounded-xl flex items-center justify-center shrink-0">
                <span className="font-black text-[#0c2340] text-xs text-center leading-tight">{t.limit}</span>
              </div>
              <div>
                <div className="font-bold text-[#0c2340] text-xs">{t.period}</div>
                <div className="text-[10px] text-[#4a6480]">{t.note}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#556b6e] mt-4 leading-relaxed">Home Office guidance explains when a citizenship lawyer can request that discretion be exercised in relation to these thresholds.</p>
      </div>
    </div>
  ),

  /* ── 2. GOOD CHARACTER ────────────────────────────────────── */
  character: (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-[#ecfdf5] rounded-2xl border border-[#0c7a4a]/20">
        <div className="w-10 h-10 bg-[#0c7a4a] rounded-xl flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
          <h3 className="font-black text-[#0c2340] text-lg mb-1">The Good Character Requirement</h3>
          <p className="text-[#2d4a6b] leading-relaxed text-sm">Any applicant who is over ten years of age must satisfy the Home Office that they are of good character as part of the naturalisation application process.</p>
        </div>
      </div>

      <div>
        <h4 className="font-black text-[#0c2340] mb-3">Factors that may lead to refusal:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "⚖️", text: "Criminal convictions" },
            { icon: "🚫", text: "Immigration rule breaches" },
            { icon: "🛂", text: "Illegal entry into the UK" },
            { icon: "💷", text: "HMRC irregularities" },
            { icon: "📉", text: "Bankruptcy proceedings" },
            { icon: "🚦", text: "Road traffic offences" },
          ].map((f) => (
            <div key={f.text} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#d0dce8]">
              <span className="text-xl shrink-0">{f.icon}</span>
              <span className="text-sm font-semibold text-[#0c2340]">{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-black text-[#0c2340] mb-3">Information applicants must disclose:</h4>
        <div className="flex flex-col gap-2">
          {["Cautions and fixed penalty notices", "Criminal offences and sentences", "Civil judgments and civil penalty notices", "Bankruptcy proceedings"].map((item) => (
            <div key={item} className="flex items-center gap-3 px-4 py-3 bg-[#f5f8fd] rounded-xl border border-[#d0dce8]">
              <span className="w-5 h-5 bg-[#0c7a4a] rounded-full flex items-center justify-center shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span className="text-sm text-[#4a6480]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 bg-[#fff3cd] border-l-4 border-[#f4c400] rounded-xl">
        <p className="text-sm text-[#0c2340] leading-relaxed font-medium">
          <strong>Important:</strong> Refusal of a citizenship application on the grounds of a lack of good character <strong>cannot be appealed</strong>. It is vital to have a frank conversation with your solicitor so they can assess the prospects of success, advise on timing, and ensure any concerns are thoroughly addressed in the application.
        </p>
      </div>
    </div>
  ),

  /* ── 3. ENGLISH LANGUAGE ──────────────────────────────────── */
  language: (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-[#f3f0ff] rounded-2xl border border-[#7c3aed]/20">
        <div className="w-10 h-10 bg-[#7c3aed] rounded-xl flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div>
          <h3 className="font-black text-[#0c2340] text-lg mb-1">The English Language Requirement</h3>
          <p className="text-[#2d4a6b] leading-relaxed text-sm">Applicants must pass a Home Office-approved Secure English Language Test (SELT) at <strong>B1, B2, C1, or C2</strong> level — unless exempt.</p>
        </div>
      </div>

      <div>
        <h4 className="font-black text-[#0c2340] mb-3">Exemptions from the English language test:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: "👶", title: "Age", desc: "Under 18 or over 65 years of age." },
            { icon: "♿", title: "Disability", desc: "Medical evidence shows the disability prevents sitting the test even with reasonable adjustments." },
            { icon: "🎓", title: "Qualifications", desc: "Applicant holds a qualification on the Home Office exempt qualifications list." },
            { icon: "🌍", title: "Nationality", desc: "Citizens of predominantly English-speaking countries (e.g. Australia, Canada, New Zealand, USA, Barbados and other Caribbean islands)." },
            { icon: "📄", title: "Prior Test", desc: "Applicant previously passed an English language test to the required standard as part of an earlier visa application." },
          ].map((ex) => (
            <div key={ex.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#d0dce8]">
              <span className="text-xl shrink-0">{ex.icon}</span>
              <div>
                <div className="font-black text-[#0c2340] text-sm mb-0.5">{ex.title}</div>
                <div className="text-xs text-[#4a6480] leading-relaxed">{ex.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-[#f5f8fd] rounded-2xl border border-[#d0dce8]">
        <h4 className="font-black text-[#0c2340] mb-3 flex items-center gap-2"><span>💷</span> Financial Stability Check</h4>
        <p className="text-sm text-[#4a6480] leading-relaxed">Applicants are not required to meet a financial requirement. However, as part of the naturalisation process, the Home Office will check for financial stability — including bankruptcy, civil judgements, penalty notices, NHS debt, and any outstanding HMRC enquiries or investigations.</p>
      </div>
    </div>
  ),

  /* ── 4. SETTLEMENT STATUS ─────────────────────────────────── */
  settlement: (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-[#fff4f0] rounded-2xl border border-[#c2410c]/20">
        <div className="w-10 h-10 bg-[#c2410c] rounded-xl flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div>
          <h3 className="font-black text-[#0c2340] text-lg mb-1">Settlement Status Requirement</h3>
          <p className="text-[#2d4a6b] leading-relaxed text-sm">Before applying for British citizenship, you must hold one of the recognised settlement statuses. The route you entered the UK on determines which status you will apply for first.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { title: "Indefinite Leave to Remain (ILR)", desc: "The most common form of settlement for those who entered on work or family visas. Most routes require 5 years in the UK before applying for ILR, followed by 12 months holding ILR before applying for citizenship.", badge: "Standard Route" },
          { title: "EU Settled Status", desc: "Granted under the EU Settlement Scheme to EU, EEA, and Swiss nationals who were resident in the UK before 31 December 2020. Settled status is equivalent to ILR and can be used to apply for citizenship.", badge: "EU/EEA/Swiss Nationals" },
          { title: "Permanent Residence Document", desc: "Applicable to EU, EEA, and Swiss nationals who obtained permanent residence before the EU Settlement Scheme. Note: no new permanent residence documents have been issued since 1 January 2021.", badge: "Pre-Brexit" },
          { title: "Indefinite Leave to Enter", desc: "Permission granted to move to the UK permanently from abroad, typically associated with spouse and family visa routes.", badge: "Family Routes" },
        ].map((s) => (
          <div key={s.title} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#c2410c]/30 transition-colors">
            <div className="shrink-0 w-2 rounded-full bg-gradient-to-b from-[#c2410c] to-[#f4c400]" />
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h4 className="font-black text-[#0c2340] text-sm">{s.title}</h4>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#fff4f0] text-[#c2410c] border border-[#c2410c]/20">{s.badge}</span>
              </div>
              <p className="text-xs text-[#4a6480] leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),

  /* ── 5. LIFE IN THE UK TEST ───────────────────────────────── */
  test: (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-6 bg-[#e6f0f8] rounded-2xl border border-[#1b6fa8]/20">
        <div className="w-10 h-10 bg-[#0c2340] rounded-xl flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        </div>
        <div>
          <h3 className="font-black text-[#0c2340] text-lg mb-1">The British Citizenship Test</h3>
          <p className="text-[#2d4a6b] leading-relaxed text-sm">Most citizenship applicants are required to pass the <strong>Life in the UK Test</strong> to demonstrate their knowledge of British life and values.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: "💻", label: "Format", value: "Computer-based multiple choice" },
          { icon: "📊", label: "Pass Rate", value: "75% correct answers required" },
          { icon: "🔄", label: "Attempts", value: "Unlimited sittings allowed" },
          { icon: "📍", label: "Venue", value: "Approved test centres UK-wide" },
        ].map((s) => (
          <div key={s.label} className="p-4 bg-white rounded-2xl border border-[#d0dce8] text-center">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#1b6fa8] mb-1">{s.label}</div>
            <div className="text-xs font-bold text-[#0c2340] leading-tight">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="font-black text-[#0c2340]">Key points to know:</h4>
        {[
          "The test covers British history, culture, laws, and values.",
          "ILR applicants sit the Life in the UK test as part of the settlement application process.",
          "If you passed the Life in the UK test when applying for ILR, you do not need to retake it when applying for citizenship — unless unusual circumstances apply.",
          "Example: An ILR applicant who was under 18 at settlement (exempt from the test) but over 18 at citizenship application would need to sit the test.",
        ].map((point, i) => (
          <div key={i} className="flex items-start gap-3 px-4 py-3 bg-[#f5f8fd] rounded-xl border border-[#d0dce8]">
            <span className="w-5 h-5 bg-[#0c2340] rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span className="text-sm text-[#4a6480] leading-relaxed">{point}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export default function EligibilityCriteria() {
  const [active, setActive] = useState("residence");

  return (
    <section className="py-24 bg-white overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#1b6fa8] font-extrabold text-sm tracking-widest uppercase mb-3">Full Requirements</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c2340] m-0">
            Eligibility Criteria for <span className="text-[#f4c400]">British Citizenship</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#1b6fa8] to-[#f4c400] rounded-full mx-auto mt-4" />
          <p className="mt-5 text-lg text-[#4a6480] max-w-2xl mx-auto leading-relaxed">
            There are five requirements for British citizenship. Select each one below to explore the full guidance.
          </p>
        </div>

        {/* Five pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {criteria.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 font-extrabold text-sm transition-all duration-300 cursor-pointer ${
                active === c.id
                  ? `border-[#f4c400] bg-gradient-to-br ${c.color} text-white shadow-[0_12px_30px_rgba(12,35,64,0.18)] -translate-y-1`
                  : "border-[#d0dce8] bg-white text-[#0c2340] hover:border-[#1b6fa8]/40 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(12,35,64,0.06)]"
              }`}
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-center text-xs leading-tight">{c.label}</span>
              {active === c.id && <span className="w-1.5 h-1.5 rounded-full bg-[#f4c400] animate-pulse" />}
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="bg-[#f9fbfc] rounded-3xl border border-[#d0dce8] p-6 md:p-10 shadow-[0_8px_30px_rgba(12,35,64,0.06)] transition-all duration-300 min-h-[300px]">
          {panels[active]}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#0c2340] to-[#1b6fa8] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <strong className="block text-lg font-black mb-1">Not sure which criteria apply to you?</strong>
            <p className="text-white/80 text-sm m-0">Our citizenship solicitors will assess your situation and advise on the best route and timing for your application.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center justify-center min-h-[48px] px-7 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#0c2340] shadow-[0_10px_25px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            Get a free assessment
          </Link>
        </div>

      </div>
    </section>
  );
}
