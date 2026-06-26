import Link from "next/link";
import Reveal from "../components/ui/Reveal";
import NewLeadSection from "../components/sections/NewLeadSection";
import OfficialResources from "../components/sections/OfficialResources";
import { processSteps } from "../data/site";

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
              The Process
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              How We Handle Your Application
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We guide you through every step of the British Citizenship application process.
            </p>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context="Process page" />

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
                Our Process
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
                Step-by-Step <span className="text-[#f4c400]">Guide</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-[#d0dce8] shadow-[0_6px_20px_rgba(122,0,60,0.06)] hover:border-[#f4c400] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] rounded-xl flex items-center justify-center font-black text-[#7a003c] text-xl shadow-[0_6px_16px_rgba(244,196,0,0.3)]">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-extrabold text-[#7a003c] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#4a6480] text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="bg-gradient-to-br from-[#fff5f8] to-white rounded-2xl p-8 border border-[#d0dce8] mb-12">
              <h3 className="text-xl font-bold text-[#7a003c] mb-6 text-center">
                What to Expect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    icon: "⏱️",
                    title: "Processing Time",
                    desc: "Standard applications typically take around 6 months. We keep you updated.",
                  },
                  {
                    icon: "📋",
                    title: "Biometric Appointment",
                    desc: "You will need to attend a biometric enrolment appointment.",
                  },
                  {
                    icon: "🎉",
                    title: "Citizenship Ceremony",
                    desc: "Once approved, you will receive an invitation to a citizenship ceremony.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-6 border border-[#d0dce8] text-center hover:border-[#f4c400] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-black text-[#7a003c] text-base mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#4a6480] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Start your application today
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <OfficialResources />

      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-3">
                Ready to Begin Your Citizenship Journey?
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Our solicitors manage the entire process — from your initial case review to final submission.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Get a free consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
