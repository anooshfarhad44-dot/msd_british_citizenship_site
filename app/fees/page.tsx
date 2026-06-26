import Link from "next/link";
import Reveal from "../components/ui/Reveal";
import NewLeadSection from "../components/sections/NewLeadSection";

// Data arrays imported safely from your main mock / configuration data file
import { solicitorFees, homeOfficeFees } from "../data/site"; 

export default function FeesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
              Transparent Pricing
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              British Citizenship Application Fees
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We believe in transparent pricing with no hidden costs. Below is a guide to our solicitor fees
              and the Home Office fees you will need to pay.
            </p>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context="Fees page" />

      <section className="py-16 bg-gradient-to-br from-white to-[#fff5f8]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            {/* Our Fees */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
                  Our Fees
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#7a003c] mb-2">
                  Solicitor Fees
                </h2>
                <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
                  Our fees are fixed and transparent. Exact fee depends on the complexity of your case.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {solicitorFees.map((fee, i) => (
                  <div
                    key={i}
                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                      fee.isMain
                        ? "border-[#f4c400] bg-[#f4c400]/5 shadow-[0_6px_20px_rgba(244,196,0,0.15)]"
                        : "border-[#d0dce8] bg-white hover:border-[#7a003c]/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {fee.isMain && (
                        <span className="px-2 py-1 bg-[#f4c400] text-[#7a003c] text-[10px] font-black rounded-full uppercase tracking-wide">
                          Most Common
                        </span>
                      )}
                      <span className="font-bold text-[#7a003c] text-sm md:text-base">
                        {fee.label}
                      </span>
                    </div>
                    <span
                      className={`font-black shrink-0 ${
                        fee.isMain ? "text-[#7a003c] text-lg" : "text-[#7a003c] text-base"
                      }`}
                    >
                      {fee.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Office Fees */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
                  Government Fees
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#7a003c] mb-2">
                  Home Office & Third-Party Fees
                </h2>
                <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
                  These fees are paid directly to the Home Office or relevant authority. All prices reflect current statutory rates.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {homeOfficeFees.map((fee, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#f4c400] transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-3 mb-1">
                      <span className="font-bold text-[#7a003c] text-sm md:text-base">
                        {fee.label}
                      </span>
                      <span className="font-black text-[#7a003c] text-lg shrink-0">
                        {fee.price}
                      </span>
                    </div>
                    <span className="text-xs text-[#4a6480]">{fee.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-6 bg-[#f4c400]/10 border-l-4 border-[#f4c400] rounded-xl mb-10">
              <strong className="block text-[#7a003c] font-extrabold mb-1 text-sm">
                Please Note
              </strong>
              <p className="text-[#556b6e] text-xs m-0">
                Fees quoted are indicative statutory application costs dictated by the Home Office. Our solicitor fees will be confirmed following an initial assessment. We remain entirely transparent about all potential costs from day one.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Get a personalised quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-3">
                Get a Transparent Fee Quote
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Every case is different. Contact us for a fixed-fee quote tailored to your specific situation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Contact us today
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}