"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import ProcessLeadForm from "./ui/ProcessLeadForm";

type AnswerValue = string | string[] | undefined;

function isAnswer(value: AnswerValue, expected: string) {
  return typeof value === "string" && value.toLowerCase() === expected.toLowerCase();
}

// ── progress map ──────────────────────────────────────────────
const STEPS: Record<string, number> = {
  q1: 1, q2: 2, q3: 3, q4: 4, q5: 5,
  q6: 6, q7: 7, q8: 8, q9: 9, q10: 10,
};
const TOTAL = 10;

// ── routing logic ─────────────────────────────────────────────
function nextFrom(qid: string, value?: AnswerValue, answers?: Record<string, AnswerValue>): string {
  switch (qid) {

    // Q1 — route to citizenship
    case "q1":
      if (value === "Married to / Civil partner of a British Citizen") return "q2_spouse";
      if (value === "ILR or EU Settled Status holder") return "q2_ilr";
      if (value === "EU/EEA/Swiss Permanent Residence holder") return "q2_pr";
      return "not-eligible";

    // Q2a — spouse route: 3 years in UK?
    case "q2_spouse":
      if (isAnswer(value, "No")) return "ineligible_residence";
      return "q3";

    // Q2b — ILR route: 5 years in UK?
    case "q2_ilr":
      if (isAnswer(value, "No")) return "ineligible_residence";
      return "q2b_ilr";

    // Q2b continued — ILR held 12 months?
    case "q2b_ilr":
      if (isAnswer(value, "No")) return "ineligible_ilr12";
      return "q3";

    // Q2c — permanent residence: have PR document?
    case "q2_pr":
      if (isAnswer(value, "No")) return "ineligible_pr";
      return "q2b_pr";

    // Q2c continued — also have settled status?
    case "q2b_pr":
      if (isAnswer(value, "Yes")) return "ineligible_pr_settled";
      return "q3";

    // Q3 — good character
    case "q3":
      if (isAnswer(value, "No")) return "ineligible_character";
      return "q4";

    // Q4 — criminal record / immigration breaches
    case "q4":
      if (isAnswer(value, "Yes")) return "ineligible_criminal";
      return "q5";

    // Q5 — English language exempt?
    case "q5":
      if (value === "Yes — I am exempt") return "q7";
      if (value === "Yes — I have passed a SELT test") return "q7";
      if (value === "Yes — I passed it as part of my visa application") return "q7";
      return "q6";

    // Q6 — need to sit SELT
    case "q6":
      if (isAnswer(value, "No")) return "ineligible_english";
      return "q7";

    // Q7 — Life in UK test
    case "q7":
      if (value === "Yes — I passed it for my ILR") return "q8";
      if (value === "Yes — I will sit it before applying") return "q8";
      if (isAnswer(value, "No")) return "ineligible_lifetest";
      return "q8";

    // Q8 — absences from UK
    case "q8":
      if (isAnswer(value, "No")) return "ineligible_absences";
      return "q9";

    // Q9 — HMRC / bankruptcy / NHS debt
    case "q9":
      if (isAnswer(value, "Yes")) return "ineligible_financial";
      return "q10";

    // Q10 — intend to live in UK
    case "q10":
      if (isAnswer(value, "No")) return "ineligible_intent";
      return "eligible";

    default:
      return "not-eligible";
  }
}

// ── ineligible reasons map ────────────────────────────────────
const INELIGIBLE: Record<string, { title: string; body: string }> = {
  ineligible_residence: {
    title: "Residence requirement not yet met",
    body: "You have not yet lived in the UK for the required period. Spouse/civil partner applicants need at least 3 years; all other routes require at least 5 years. You may be able to apply once you have reached the required residency period.",
  },
  ineligible_ilr12: {
    title: "ILR / Settled Status not held long enough",
    body: "You must have held Indefinite Leave to Remain or EU Settled Status for at least 12 months before applying for British citizenship on the standard ILR route.",
  },
  ineligible_pr: {
    title: "No Permanent Residence document",
    body: "To apply for citizenship via the permanent residence route you must hold a permanent residence document. Note: no new permanent residence documents have been issued since 1 January 2021.",
  },
  ineligible_pr_settled: {
    title: "Settled Status must be used instead",
    body: "Since 1 January 2021, if you hold EU Settled Status you must apply for citizenship using that status — not your permanent residence document.",
  },
  ineligible_character: {
    title: "Good character requirement not met",
    body: "All citizenship applicants must be of good character. This includes having a clean criminal record and no serious breaches of immigration rules. Our solicitors can assess your specific circumstances confidentially.",
  },
  ineligible_criminal: {
    title: "Criminal record or immigration breach",
    body: "A criminal conviction, caution, immigration breach, or HMRC issue may result in a mandatory refusal. However, the impact depends on the nature and timing of the issue. Speak to our solicitors for a frank, confidential assessment.",
  },
  ineligible_english: {
    title: "English language requirement not met",
    body: "You must pass a Home Office-approved Secure English Language Test (SELT) at B1 level or above before applying. Our team can advise on approved test centres and preparation.",
  },
  ineligible_lifetest: {
    title: "Life in the UK Test not passed",
    body: "Most applicants must pass the Life in the UK Test before applying for citizenship. You can sit the test at an approved centre as many times as needed — the pass rate is 75%.",
  },
  ineligible_absences: {
    title: "Excessive absences from the UK",
    body: "You must not have spent more than 450 days outside the UK in the last 5 years (or 270 days if married to a British citizen), and no more than 90 days in the last 12 months. A solicitor may be able to request Home Office discretion in borderline cases.",
  },
  ineligible_financial: {
    title: "Financial stability concern",
    body: "The Home Office checks for bankruptcy, civil judgements, NHS debt, and outstanding HMRC matters. These may affect your application. Our solicitors can advise on how to address these issues before you apply.",
  },
  ineligible_intent: {
    title: "Intention to live in the UK required",
    body: "One of the eligibility criteria for British citizenship is an intention to live in the UK after naturalisation. If your circumstances change, please speak to our team.",
  },
};

// ── question definitions ──────────────────────────────────────
const QUESTIONS: Record<string, { step?: number; title: string; subtitle?: string; answerKey: string; options?: string[]; multi?: boolean }> = {
  q1: {
    step: 1,
    title: "What is your route to British Citizenship?",
    subtitle: "Select the option that best describes your current immigration status.",
    answerKey: "route",
    options: [
      "Married to / Civil partner of a British Citizen",
      "ILR or EU Settled Status holder",
      "EU/EEA/Swiss Permanent Residence holder",
    ],
  },
  q2_spouse: {
    step: 2,
    title: "Have you lived in the UK for at least 3 years?",
    subtitle: "As a spouse/civil partner of a British Citizen, you must have been in the UK for at least 3 years immediately prior to your application.",
    answerKey: "residency3",
    options: ["Yes", "No"],
  },
  q2_ilr: {
    step: 2,
    title: "Have you lived in the UK for at least 5 years?",
    subtitle: "The standard residence requirement for ILR/Settled Status applicants is five years before applying for citizenship.",
    answerKey: "residency5",
    options: ["Yes", "No"],
  },
  q2b_ilr: {
    step: 3,
    title: "Have you held ILR or EU Settled Status for at least 12 months?",
    subtitle: "Most ILR/Settled Status applicants must hold that status for 12 months before applying to naturalise.",
    answerKey: "ilr12months",
    options: ["Yes", "No"],
  },
  q2_pr: {
    step: 2,
    title: "Do you hold a valid Permanent Residence document?",
    subtitle: "Note: No new permanent residence documents have been issued since 1 January 2021.",
    answerKey: "hasPRdoc",
    options: ["Yes", "No"],
  },
  q2b_pr: {
    step: 3,
    title: "Do you also hold EU Settled Status?",
    subtitle: "Since 1 January 2021, if you have settled status you must use that to apply for citizenship — not your permanent residence document.",
    answerKey: "hasSettledStatus",
    options: ["Yes", "No"],
  },
  q3: {
    step: 4,
    title: "Are you of good character?",
    subtitle: "This means a clean criminal record, no serious immigration breaches, no HMRC irregularities, and no undischarged bankruptcy.",
    answerKey: "goodCharacter",
    options: ["Yes", "No — I have concerns about this"],
  },
  q4: {
    step: 5,
    title: "Do you have any criminal convictions, cautions, or immigration breaches?",
    subtitle: "Include road traffic offences, civil judgements, fixed penalty notices, and any outstanding HMRC enquiries.",
    answerKey: "criminalRecord",
    options: ["No — none of the above apply to me", "Yes — one or more apply"],
  },
  q5: {
    step: 6,
    title: "Have you met the English language requirement?",
    subtitle: "Most applicants must pass a SELT test at B1 level or above, unless exempt.",
    answerKey: "englishMet",
    options: [
      "Yes — I have passed a SELT test",
      "Yes — I passed it as part of my visa application",
      "Yes — I am exempt (age, disability, nationality, or qualification)",
      "No — I still need to sit the test",
    ],
  },
  q6: {
    step: 7,
    title: "Are you willing to sit and pass the SELT English test before applying?",
    subtitle: "You must pass the test before submitting your citizenship application.",
    answerKey: "willSitEnglish",
    options: ["Yes", "No"],
  },
  q7: {
    step: 8,
    title: "Have you passed (or will you pass) the Life in the UK Test?",
    subtitle: "Most applicants must pass this computer-based test. The pass rate is 75%. You may sit it as many times as needed.",
    answerKey: "lifeTest",
    options: [
      "Yes — I passed it for my ILR",
      "Yes — I will sit it before applying",
      "No — I am exempt (under 18 or over 65)",
    ],
  },
  q8: {
    step: 9,
    title: "Have you stayed within the UK absence limits?",
    subtitle: "No more than 450 days outside the UK in the last 5 years (270 days if married to a British citizen), and no more than 90 days in the last 12 months.",
    answerKey: "absences",
    options: ["Yes — I am within the limits", "No — I have exceeded the limits"],
  },
  q9: {
    step: 9,
    title: "Do you have any outstanding bankruptcy, NHS debt, or HMRC matters?",
    subtitle: "The Home Office checks financial records as part of the naturalisation process.",
    answerKey: "financialIssues",
    options: ["No — none apply to me", "Yes — one or more apply"],
  },
  q10: {
    step: 10,
    title: "Do you intend to continue living in the UK after receiving citizenship?",
    subtitle: "An intention to live in the UK is one of the eligibility criteria for British citizenship by naturalisation.",
    answerKey: "intentToLive",
    options: ["Yes", "No"],
  },
};

// ── main component ────────────────────────────────────────────
export default function EligibilityChecker() {
  const [current, setCurrent] = useState("q1");
  const [history, setHistory] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});

  function updateAnswer(key: string, value: AnswerValue) {
    setAnswers((s) => ({ ...s, [key]: value }));
  }

  function navigateTo(next: string) {
    setHistory((h) => [...h, current]);
    setCurrent(next);
  }

  function handleContinue(answerKey: string, value?: AnswerValue) {
    if (answerKey) updateAnswer(answerKey, value);
    const next = nextFrom(current, value ?? answers[answerKey], answers);
    navigateTo(next);
  }

  function goBack() {
    setHistory((h) => {
      if (!h.length) return h;
      const prev = h[h.length - 1];
      setCurrent(prev);
      return h.slice(0, -1);
    });
  }

  function reset() {
    setCurrent("q1");
    setHistory([]);
    setAnswers({});
  }

  // ── helpers ──
  function renderBack() {
    return (
      <button
        onClick={goBack}
        disabled={!history.length}
        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#d0dce8] bg-white text-[#4a6480] font-bold text-sm hover:bg-[#f4f7fb] transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Back
      </button>
    );
  }

  function renderContinue(answerKey: string, label = "Continue") {
    const val = answers[answerKey];
    const disabled = !val || (Array.isArray(val) && !val.length);
    return (
      <button
        onClick={() => handleContinue(answerKey, val)}
        disabled={disabled}
        className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl bg-gradient-to-r from-[#1b6fa8] to-[#0c2340] text-white font-black text-sm shadow-[0_6px_20px_rgba(27,111,168,0.3)] hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(27,111,168,0.4)] transition disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    );
  }

  function renderOptions(answerKey: string, options: string[]) {
    return (
      <div className="grid grid-cols-1 gap-3 mt-5">
        {options.map((opt) => {
          const checked = answers[answerKey] === opt;
          return (
            <label key={opt} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group ${checked ? "border-[#1b6fa8] bg-[#e6f0f8]/50 shadow-[0_4px_14px_rgba(27,111,168,0.12)]" : "border-[#d0dce8] bg-white hover:border-[#1b6fa8]/40 hover:bg-[#f9fbfc]"}`}>
              <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${checked ? "border-[#1b6fa8] bg-[#1b6fa8]" : "border-[#d0dce8] group-hover:border-[#1b6fa8]/60"}`}>
                {checked && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
              <input type="radio" name={answerKey} checked={checked} onChange={() => updateAnswer(answerKey, opt)} className="sr-only" />
              <span className={`text-sm font-semibold leading-snug ${checked ? "text-[#0c2340]" : "text-[#4a6480]"}`}>{opt}</span>
            </label>
          );
        })}
      </div>
    );
  }

  function renderProgressBar(step: number) {
    const pct = Math.round((step / TOTAL) * 100);
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#1b6fa8]">Step {step} of {TOTAL}</span>
          <span className="text-xs font-bold text-[#4a6480]">{pct}% complete</span>
        </div>
        <div className="h-2 bg-[#e6f0f8] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#1b6fa8] to-[#f4c400] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
      </div>
    );
  }

  // ── question renderer ──
  function renderQuestion(qid: string) {
    const q = QUESTIONS[qid];
    if (!q) return null;
    return (
      <>
        {renderProgressBar(q.step ?? 1)}
        <h2 className="text-xl md:text-2xl font-black text-[#0c2340] leading-snug">{q.title}</h2>
        {q.subtitle && <p className="text-[#4a6480] text-sm leading-relaxed mt-2">{q.subtitle}</p>}
        {q.options && renderOptions(q.answerKey, q.options)}
        <div className="flex items-center justify-between gap-4 mt-8 pt-5 border-t border-[#d0dce8]/60">
          {renderBack()}
          {renderContinue(q.answerKey)}
        </div>
      </>
    );
  }

  // ── result screens ──
  const isQuestion = !!QUESTIONS[current];
  const isIneligible = current in INELIGIBLE;
  const isEligible = current === "eligible";

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-[#f4f7fb] to-white min-h-[640px] flex items-center">
      <div className="w-full max-w-2xl mx-auto px-4">

        {/* Header */}
        {isQuestion && (
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b6fa8]/10 text-[#1b6fa8] font-extrabold text-xs tracking-widest uppercase mb-3">
              🇬🇧 British Citizenship Eligibility Checker
            </div>
            <p className="text-[#4a6480] text-sm max-w-lg mx-auto">
              Answer a few questions to find out which citizenship route applies to you. Takes about 2 minutes.
            </p>
          </div>
        )}

        {/* Card */}
        <div className="bg-white rounded-3xl border border-[#d0dce8] shadow-[0_12px_40px_rgba(12,35,64,0.08)] p-7 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0c2340] via-[#1b6fa8] to-[#f4c400]" />

          {/* Question */}
          {isQuestion && renderQuestion(current)}

          {/* Eligible */}
          {isEligible && (
            <div className="py-2">
              {/* Success badge */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0c7a4a] to-[#065c35] rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_10px_30px_rgba(12,122,74,0.3)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#0c7a4a] font-black text-xs uppercase tracking-widest mb-3">
                  ✓ Likely Eligible
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#0c2340] mb-3">You appear to meet the eligibility criteria</h2>
                <p className="text-[#4a6480] leading-relaxed max-w-md mx-auto text-sm">
                  Based on your answers, you are likely eligible to apply for British Citizenship. Complete the form below to book your free consultation with one of our solicitors.
                </p>
              </div>

              {/* Lead form */}
              <div className="relative">
                <ProcessLeadForm
                  heading="Book Your Free Citizenship Consultation"
                  description="You appear to be eligible. Let our solicitors confirm your route and prepare a winning application — get in touch now."
                  context="Eligibility Checker — ELIGIBLE result"
                />
              </div>

              <div className="flex justify-center mt-6">
                <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4a6480] hover:text-[#1b6fa8] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
                  Start the checker again
                </button>
              </div>
            </div>
          )}

          {/* Not eligible — specific reason */}
          {isIneligible && (
            <div className="py-2">
              {/* Rejection badge */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c2410c] to-[#9a3412] rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_10px_30px_rgba(194,65,12,0.25)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff4f0] text-[#c2410c] font-black text-xs uppercase tracking-widest mb-3">
                  Not Currently Eligible
                </div>
                <h2 className="text-xl md:text-2xl font-black text-[#0c2340] mb-3">
                  {INELIGIBLE[current]?.title}
                </h2>
                <p className="text-[#4a6480] leading-relaxed max-w-md mx-auto text-sm mb-4">
                  {INELIGIBLE[current]?.body}
                </p>
                <div className="inline-flex items-start gap-2 px-4 py-3 bg-[#f5f8fd] rounded-xl border border-[#d0dce8] text-left max-w-md mx-auto">
                  <span className="text-lg shrink-0">💬</span>
                  <p className="text-xs text-[#4a6480] leading-relaxed">
                    Many situations can be resolved with the right legal advice. Our solicitors can assess your case, advise on timing, and find the best route forward.
                  </p>
                </div>
              </div>

              {/* Lead form */}
              <div className="relative">
                <ProcessLeadForm
                  heading="Don't Give Up — Talk to a Solicitor"
                  description="Many barriers to citizenship can be overcome with expert legal advice. Tell us about your situation and we will advise on the best path forward."
                  context={`Eligibility Checker — NOT ELIGIBLE: ${INELIGIBLE[current]?.title}`}
                />
              </div>

              <div className="flex justify-center mt-6">
                <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4a6480] hover:text-[#1b6fa8] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
                  Start the checker again
                </button>
              </div>
            </div>
          )}

          {/* Fallback not-eligible */}
          {current === "not-eligible" && (
            <div className="py-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#c2410c] to-[#9a3412] rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <h2 className="text-2xl font-black text-[#0c2340] mb-3">You may not be eligible yet</h2>
                <p className="text-[#4a6480] max-w-md mx-auto text-sm leading-relaxed">
                  Based on your answers, you do not currently meet all the requirements. Our solicitors can review your full circumstances and advise on your options and next steps.
                </p>
              </div>
              <ProcessLeadForm
                heading="Speak to a Citizenship Solicitor"
                description="Our team can review your full situation and identify alternative routes or advise on the right timing for your application."
                context="Eligibility Checker — NOT ELIGIBLE (generic)"
              />
              <div className="flex justify-center mt-6">
                <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4a6480] hover:text-[#1b6fa8] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
                  Start the checker again
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Trust badges */}
        {isQuestion && (
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[{ icon: "⚡", t: "Takes 2 minutes" }, { icon: "🔒", t: "100% confidential" }, { icon: "⭐", t: "Free to use" }].map((b) => (
              <div key={b.t} className="flex items-center gap-1.5 text-xs font-bold text-[#4a6480]">
                <span>{b.icon}</span>{b.t}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
