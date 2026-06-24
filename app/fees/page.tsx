import Link from "next/link";
import ProcessLeadSection from "../components/sections/ProcessLeadSection";
import QuickLeadStrip from "../components/sections/QuickLeadStrip";

const solicitorFees = [
  { label: "British Citizenship Application (Spouse Route)", price: "£600 – £1,000", isMain: true },
  { label: "British Citizenship Application (ILR/Settled Status)", price: "£600 – £1,000", isMain: false },
  { label: "British Citizenship with Permanent Residence", price: "£600 – £1,000", isMain: false },
  { label: "Citizenship Application Review & Advice", price: "£300 – £500", isMain: false },
  { label: "Document Checking Service", price: "£250 – £400", isMain: false },
  { label: "Refusal Review & Next Steps", price: "Contact us for a quote", isMain: false },
];

const homeOfficeFees = [
  { label: "British Citizenship (Naturalisation)", price: "£1,500", note: "Home Office fee" },
  { label: "British Citizenship (Registration)", price: "£1,214", note: "Home Office fee" },
  { label: "Citizenship Ceremony", price: "£80", note: "Local authority fee" },
  { label: "Life in the UK Test", price: "£50", note: "Per sitting" },
];

export default function FeesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#0c2340] to-[#1b6fa8] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            British Citizenship Application Fees
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            We believe in transparent pricing with no hidden costs. Below is a guide to our solicitor fees
            and the Home Office fees you will need to pay.
          </p>
        </div>
      </section>

      <QuickLeadStrip context="Fees page" />

      <section className="py-20 bg-white">
        <div className="w-full max-w-[1120px] mx-auto px-4">

          {/* Our Fees */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0c2340] mb-3">Our Solicitor Fees</h2>
            <p className="text-[#4a6480] mb-8 leading-relaxed">
              Our fees are fixed and transparent. The exact fee depends on the complexity of your case. We provide a clear fee quote after reviewing your circumstances.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {solicitorFees.map((fee, i) => (
                <div key={i} className={`flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all ${fee.isMain ? "border-[#f4c400] bg-[#f4c400]/5 shadow-[0_4px_20px_rgba(244,196,0,0.15)]" : "border-[#d0dce8] bg-white hover:border-[#1b6fa8]/40"}`}>
                  <div className="flex items-center gap-3">
                    {fee.isMain && <span className="px-2 py-0.5 bg-[#f4c400] text-[#0c2340] text-[10px] font-black rounded-full uppercase tracking-wide">Most Common</span>}
                    <span className="font-bold text-[#0c2340]">{fee.label}</span>
                  </div>
                  <span className={`font-black shrink-0 ${fee.isMain ? "text-[#0c2340] text-lg" : "text-[#1b6fa8]"}`}>{fee.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home Office Fees */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#0c2340] mb-3">Home Office & Government Fees</h2>
            <p className="text-[#4a6480] mb-8 leading-relaxed">
              These fees are paid directly to the Home Office or relevant authority and are separate from our solicitor fees.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homeOfficeFees.map((fee, i) => (
                <div key={i} className="p-6 bg-[#f5f8fd] rounded-2xl border border-[#d0dce8]">
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <span className="font-bold text-[#0c2340]">{fee.label}</span>
                    <span className="font-black text-[#1b6fa8] text-lg shrink-0">{fee.price}</span>
                  </div>
                  <span className="text-xs text-[#4a6480]">{fee.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-6 bg-[#f4c400]/5 border-l-4 border-[#f4c400] rounded-xl mb-12">
            <strong className="block text-[#0c2340] font-extrabold mb-1">Please Note</strong>
            <p className="text-[#556b6e] text-sm m-0">
              Fees quoted are indicative. Home Office fees are subject to change. Our solicitor fees will be confirmed after an initial case review. We are transparent about all costs from the outset.
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#0c2340] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
              Get a personalised quote
            </Link>
          </div>
        </div>
      </section>

      <ProcessLeadSection
        heading="Get a Transparent Fee Quote"
        description="Every case is different. Get in touch and our solicitors will provide a clear, fixed-fee quote based on your specific citizenship route and circumstances."
        context="Fees page enquiry"
        bg="white"
      />
    </div>
  );
}
