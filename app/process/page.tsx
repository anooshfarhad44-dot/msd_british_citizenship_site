import Link from "next/link";
import { processSteps } from "../data/site";
import ProcessLeadSection from "../components/sections/ProcessLeadSection";
import QuickLeadStrip from "../components/sections/QuickLeadStrip";

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#7a003c] to-[#7a003c] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            The Process
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            How We Handle Your Application
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            We guide you through every stage of the British Citizenship application process, ensuring nothing is missed and your application is strong.
          </p>
        </div>
      </section>

      <QuickLeadStrip context="Process page" />

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7a003c] text-center mb-14">
            Our <span className="text-[#f4c400]">Step-by-Step</span> Process
          </h2>

          <div className="grid grid-cols-1 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] rounded-2xl flex items-center justify-center font-black text-[#7a003c] text-xl shadow-[0_6px_16px_rgba(244,196,0,0.3)]">
                  {index + 1}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-extrabold text-[#7a003c] mb-2">{step.title}</h3>
                  <p className="text-[#4a6480] leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What to expect */}
          <div className="bg-[#f5f8fd] rounded-3xl p-10 border border-[#d0dce8] mb-14">
            <h3 className="text-2xl font-bold text-[#7a003c] mb-8 text-center">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "⏱️", title: "Processing Time", desc: "Standard citizenship applications typically take around 6 months. We keep you updated throughout." },
                { icon: "📋", title: "Biometric Appointment", desc: "You will need to attend a biometric enrolment appointment at a UK Visa and Citizenship Application Centre." },
                { icon: "🎉", title: "Citizenship Ceremony", desc: "Once approved, you will receive an invitation to a citizenship ceremony where you take an oath of allegiance." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#d0dce8] text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-black text-[#7a003c] mb-2">{item.title}</h4>
                  <p className="text-[#4a6480] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#7a003c] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
              Start your application today
            </Link>
          </div>
        </div>
      </section>

      <ProcessLeadSection
        heading="Ready to Begin Your Citizenship Journey?"
        description="Our solicitors manage the entire process — from your initial case review to final submission. Get in touch for a free, no-obligation consultation."
        context="Process page enquiry"
        bg="slate"
      />
    </div>
  );
}
