import React from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const processSteps = [
  {
    icon: "📞",
    title: "Free Consultation",
    description: "We discuss your situation and assess the best route for you.",
  },
  {
    icon: "📋",
    title: "Case Assessment",
    description: "Our solicitors review your documents and eligibility.",
  },
  {
    icon: "✍️",
    title: "Application Prep",
    description: "We prepare a decision-ready application for Home Office.",
  },
  {
    icon: "📤",
    title: "Submit & Monitor",
    description: "We submit and keep you updated on your application.",
  },
  {
    icon: "🎉",
    title: "Success!",
    description: "We guide you to your citizenship outcome!",
  },
];

export default function NewProcessSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#fff5f8] to-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              Your Citizenship Journey
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              From First Step to <span className="text-[#f4c400]">British Citizen</span>
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-3xl mx-auto">
              A simple, step-by-step roadmap to guide you every step of the way.
            </p>
          </div>

          {/* Journey Roadmap */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Card */}
                <div className="flex-1 z-10">
                  <div className="bg-white rounded-2xl p-5 border-2 border-[#7a003c]/10 shadow-[0_8px_30px_rgba(122,0,60,0.08)] hover:border-[#f4c400] hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(122,0,60,0.15)] transition-all duration-400 text-center">
                    {/* Step Number Badge */}
                    <div className="relative mb-4 inline-block">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] rounded-full flex items-center justify-center text-3xl shadow-[0_8px_25px_rgba(244,196,0,0.4)]">
                        {step.icon}
                      </div>
                      <div className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-full flex items-center justify-center text-white font-black text-sm shadow-[0_4px_12px_rgba(122,0,60,0.3)]">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-[#7a003c] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[#4a6480] text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector (except last one) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <svg width="70" height="45" viewBox="0 0 70 45" fill="none">
                      <circle cx="35" cy="22.5" r="5.5" fill="#f4c400" />
                      <path
                        d="M7 22.5H63M63 22.5L47 7M63 22.5L47 38"
                        stroke="#7a003c"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-[#7a003c] to-[#5a0028] text-white text-lg font-black rounded-full shadow-[0_14px_45px_rgba(122,0,60,0.45)] hover:-translate-y-2 transition-all duration-300"
            >
              Start Your Journey Today
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}