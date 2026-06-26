import Link from "next/link";
import Reveal from "../components/ui/Reveal";
import NewLeadSection from "../components/sections/NewLeadSection";

const citizenshipRoutes = [
  {
    icon: "❤️",
    title: "Applying as a Spouse / Civil Partner",
    subtitle: "If married to or in a civil partnership with a British Citizen",
    description: "To be eligible, you must have been in the UK for at least 3 years prior to your application, and have ILR, settled status, or permanent residence.",
    requirements: [
      "Indefinite leave to remain (ILR) in the UK",
      "'Settled status' under the EU Settlement Scheme",
      "Indefinite leave to enter the UK",
      "Permanent residence document",
    ],
  },
  {
    icon: "📋",
    title: "Applying with ILR or Settled Status",
    subtitle: "Once you have held ILR or settled status for at least 12 months",
    description: "You must have lived in the UK for 5 years and have had ILR, settled status, or indefinite leave to enter for at least 12 months.",
    requirements: [
      "Indefinite leave to remain in the UK",
      "'Settled status' under the EU Settlement Scheme",
      "Indefinite leave to enter the UK",
    ],
    note: "Post-Brexit Change: If you had permanent residence before settled status, you can count that time towards the required 12 months.",
  },
  {
    icon: "🌍",
    title: "Applying with Permanent Residence Status",
    subtitle: "For EU, EEA, and Swiss nationals",
    description: "If you have permanent residence status, you must prove you have lived in the UK for 12 months after receiving it.",
    requirements: [
      "You already have a permanent residence document",
      "You do not also have settled status under the EU Settlement Scheme",
    ],
    note: "Important Note: You can no longer apply for a permanent residence document. If you have settled status, you must apply using that instead.",
  },
];

export default function RoutesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
              Citizenship Routes
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Routes to British Citizenship
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Understanding your pathway to British citizenship is essential. Each route has different
              requirements — our solicitors will identify the correct one for you.
            </p>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context="Routes page" />

      {/* Routes */}
      <section className="py-16 bg-gradient-to-br from-white to-[#fff5f8]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
                Available Routes
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
                Which <span className="text-[#f4c400]">Route</span> is Right for You?
              </h2>
            </div>

            {citizenshipRoutes.map((route, index) => (
              <div
                key={index}
                className="mb-8 bg-white rounded-2xl border border-[#d0dce8] shadow-[0_8px_30px_rgba(122,0,60,0.08)] overflow-hidden"
              >
                <div className="bg-gradient-to-br from-[#7a003c] to-[#5a0028] p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#f4c400]/20 rounded-xl flex items-center justify-center text-4xl">
                      {route.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-black uppercase tracking-widest text-[#f4c400] mb-1">
                        Route {index + 1}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {route.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">{route.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#4a6480] text-sm md:text-base leading-relaxed mb-6">
                    {route.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {route.requirements.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-[#fff5f8] rounded-xl border border-[#d0dce8]"
                      >
                        <span className="w-5 h-5 bg-[#f4c400] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-sm text-[#4a6480]">{item}</span>
                      </div>
                    ))}
                  </div>
                  {route.note && (
                    <div className="p-5 bg-[#f4c400]/10 border-l-4 border-[#f4c400] rounded-xl">
                      <strong className="block text-[#7a003c] font-extrabold mb-1 text-sm">
                        Important
                      </strong>
                      <p className="text-[#556b6e] text-xs m-0">{route.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Strip */}
            <div className="bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Speak to a Legal Expert About British Citizenship
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                Our dedicated team is fully up to date with recent changes to immigration laws.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Book a free consultation
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
                Which Citizenship Route Applies to You?
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Tell our solicitors about your situation and we will identify the correct route.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Get free expert advice
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
