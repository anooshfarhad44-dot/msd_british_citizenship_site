import Link from "next/link";
import { eligibilityRoutes } from "@/app/data/site";

export default function EligibilityOverview() {
  return (
    <section className="py-20 bg-[#f9fbfc] overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7a003c] m-0">
            British <span className="text-[#f4c400]">Citizenship</span> Eligibility
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#7a003c] to-[#f4c400] rounded-full mx-auto mt-4" />
        </div>

        <p className="text-center text-lg text-[#7a003c] max-w-[900px] mx-auto mb-12 leading-relaxed">
          There are several routes to apply for British Citizenship. For each application, you must meet
          different eligibility requirements. Below are the main routes and what you will need to demonstrate.
        </p>

        {/* Routes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 max-w-[1200px] mx-auto">
          {eligibilityRoutes.map((route, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 md:p-5 bg-white border-[1.5px] border-[#7a003c] rounded-2xl font-bold text-[#7a003c] shadow-[0_4px_12px_rgba(12,35,64,0.04)] hover:-translate-y-1 hover:border-[#f4c400] hover:shadow-[0_12px_32px_rgba(12,35,64,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 grid place-items-center bg-[#f4c400] rounded-xl shrink-0">
                <span className="text-2xl">{route.icon}</span>
              </div>
              <div>
                <div className="font-black text-[#7a003c] text-sm mb-1">{route.title}</div>
                <span className="text-xs font-medium text-[#4a6480] leading-relaxed">{route.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col items-center gap-5 mb-14">
          <div className="flex gap-3 flex-wrap justify-center">
            {["⚡ Takes 2 Minutes", "💎 100% Free", "🛡️ No Obligation"].map((b) => (
              <span key={b} className="text-sm font-bold text-[#7a003c] bg-[#f4c400]/10 px-4 py-1.5 rounded-full border border-[#f4c400]/30">{b}</span>
            ))}
          </div>
          <Link
            href="/eligibility/check"
            className="inline-flex items-center justify-center px-12 py-4 bg-gradient-to-br from-[#f4c400] to-[#f6a700] text-[#7a003c] text-xl font-extrabold rounded-full shadow-[0_12px_36px_rgba(244,196,0,0.3)] hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(244,196,0,0.4)] transition-all duration-300"
          >
            Check Your Eligibility Now
          </Link>
          <p className="text-sm text-[#556b6e] font-semibold">
            Find out instantly which citizenship route applies to your circumstances.
          </p>
        </div>

        {/* Info card */}
        <div className="max-w-[1100px] mx-auto p-10 bg-white rounded-2xl border border-[#d0dce8] shadow-[0_12px_48px_rgba(12,35,64,0.08)] text-lg leading-[1.8] text-[#2a2a2a]">
          <p>
            Applying for British Citizenship can be a complex process, and having the right legal support significantly improves your chances of success.{" "}
            <a href="https://www.msdsolicitors.co.uk/" target="_blank" rel="noopener noreferrer" className="font-extrabold text-[#f4c400] underline underline-offset-4">
              MSD Solicitors
            </a>{" "}
            is a highly regarded UK law firm with extensive experience in immigration matters, helping individuals and families navigate the British Citizenship process with confidence and clarity.
          </p>
          <p className="mt-5">
            Our dedicated team of immigration solicitors provides tailored legal guidance throughout every stage — from determining your route and document preparation to submission and ongoing support. We are fully up to date with recent changes to immigration laws, including post-Brexit changes to EU settled status and permanent residence rules.
          </p>
        </div>
      </div>
    </section>
  );
}
