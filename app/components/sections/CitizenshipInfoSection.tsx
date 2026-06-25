import Link from "next/link";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";
import { citizenshipRoutes } from "@/app/data/site";

export default function CitizenshipInfoSection() {
  return (
    <section className="py-5 bg-white overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            {/* Left Column */}
            <div className="min-w-0">
              <p className="mb-3 text-[#7a003c] font-extrabold text-sm tracking-widest uppercase">
                Detailed Guidance
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#7a003c] leading-tight m-0">
                Routes to British Citizenship
              </h2>
              <p className="text-[#4a6480] text-lg mt-1 mb-6">Expert guidance on every available pathway</p>

              <p className="text-[#556b6e] text-lg leading-relaxed">
                There are several routes to apply for British Citizenship. It is important to speak to an experienced
                solicitor to determine which route is right for you, as each has different eligibility requirements
                and documentation needs.
              </p>

              <div className="p-6 bg-[#f4c400]/5 border-l-[5px] border-[#f4c400] rounded-xl mt-8 mb-2">
                <strong className="block text-[#7a003c] text-lg font-extrabold mb-2">
                  Professional Legal Assistance
                </strong>
                <p className="text-[#556b6e] m-0">
                  At MSD Solicitors, we advise which route you need to take and identify the documents
                  required to support your application from our offices in Manchester, Birmingham and London.
                </p>
              </div>

              <Accordion
                items={[
                  {
                    title: "Applying as a Spouse or Civil Partner of a British Citizen",
                    content:
                      "If you are married to or in a civil partnership with a British Citizen, you may apply for citizenship after at least 3 years in the UK. You must hold ILR, settled status, indefinite leave to enter, or a permanent residence document. You must also pass the Life in the UK Test, prove English language proficiency, and be of good character.",
                  },
                  {
                    title: "Applying with Indefinite Leave to Remain (ILR) or Settled Status",
                    content:
                      "Once you have obtained ILR or settled status under the EU Settlement Scheme, you may apply for citizenship after living in the UK for 5 years with at least 12 months holding one of those statuses. Since 1st January 2021, some rules regarding settled status have changed — if you had permanent residence before settled status, you can count that time towards the 12 months.",
                  },
                  {
                    title: "Applying with Permanent Residence Status (EU/EEA/Swiss Nationals)",
                    content:
                      "EU, EEA, or Swiss nationals who automatically obtained permanent residence after 5 years in the UK may apply using this status, provided they have not also obtained EU settled status. Note: No new permanent residence documents have been issued since 1st January 2021. If you have settled status, you must apply using that status instead.",
                  },
                  {
                    title: "Good Character and Language Requirements",
                    content:
                      "All citizenship applicants must demonstrate good character — meaning a clean criminal record and no breaches of UK Immigration Laws. You must also pass the Life in the UK Test and an accepted English Language Test. Our solicitors can advise on which tests are acceptable and help you prepare.",
                  },
                ]}
              />

              <div className="mt-10 flex gap-4 items-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#7a003c] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Book a free consultation
                </Link>
                <Link
                  href="/routes"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 rounded-full font-extrabold text-[#7a003c] border border-[#7a003c]/30 bg-white/80 hover:-translate-y-0.5 transition-all duration-200"
                >
                  View all routes
                </Link>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:sticky lg:top-[140px] p-8 bg-white border-[1.5px] border-[#d0dce8]/80 rounded-3xl shadow-[0_20px_50px_rgba(12,35,64,0.08)]">
              <h3 className="text-2xl font-bold text-[#7a003c] m-0">Quick Summary</h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#7a003c] to-[#f4c400] rounded-full my-3" />
              <p className="text-[#556b6e] text-sm leading-relaxed">
                Citizenship processing typically takes 6 months. We focus on preparing complete,
                &quot;decision-ready&quot; applications to minimise delays and maximise success.
              </p>

              <div className="flex flex-col gap-5 my-6">
                {[
                  { title: "All routes covered", text: "Spouse, ILR, settled status, and permanent residence routes handled." },
                  { title: "Post-Brexit expertise", text: "Fully up to date with EU Settlement Scheme and changed rules since January 2021." },
                  { title: "Local offices", text: "Manchester, Birmingham & London branches for in-person support." },
                ].map((stat) => (
                  <div key={stat.title} className="p-4 bg-[#f5f8fd] rounded-2xl border border-[#d0dce8]/50">
                    <strong className="block text-[#7a003c] font-extrabold text-base">{stat.title}</strong>
                    <p className="text-[#4a6480] text-sm mt-1 leading-relaxed m-0">{stat.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-[#d0dce8]/50">
                <Link href="/contact" className="flex items-center gap-2 font-extrabold text-[#7a003c] hover:text-[#7a003c] transition-colors">
                  Get a free case review <span>→</span>
                </Link>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
