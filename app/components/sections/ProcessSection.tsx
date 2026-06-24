import Link from "next/link";
import Reveal from "../ui/Reveal";
import { processSteps } from "@/app/data/site";

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#f9fbfc]">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-[#1b6fa8] font-extrabold text-sm tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c2340] m-0">
              Our <span className="text-[#f4c400]">Application</span> Process
            </h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-[#1b6fa8] to-[#f4c400] rounded-full mx-auto mt-4" />
            <p className="mt-5 text-lg text-[#4a6480] max-w-2xl mx-auto leading-relaxed">
              We guide you through every step of the British Citizenship application, from initial case review to receiving your decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 border border-[#d0dce8] shadow-[0_4px_20px_rgba(12,35,64,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(12,35,64,0.1)] hover:border-[#f4c400] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] rounded-xl flex items-center justify-center font-black text-[#0c2340] text-lg mb-4 shadow-[0_6px_16px_rgba(244,196,0,0.3)]">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[42px] left-[calc(100%-8px)] w-6 h-0.5 bg-gradient-to-r from-[#d0dce8] to-transparent z-10" />
                )}
                <h3 className="text-lg font-extrabold text-[#0c2340] mb-2">{step.title}</h3>
                <p className="text-[#4a6480] text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#0c2340] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Start your application today
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
