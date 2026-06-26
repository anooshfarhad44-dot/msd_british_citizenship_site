import Link from "next/link";
import Reveal from "../ui/Reveal";

const eligibilityRoutes = [
  {
    icon: "❤️",
    title: "Spouse / Civil Partner",
    description: "Apply after 3 years in the UK with a British citizen partner.",
    badge: "3 Years",
  },
  {
    icon: "📋",
    title: "ILR / Settled Status",
    description: "Apply after 5 years in the UK plus 12 months with settled status.",
    badge: "5 Years",
  },
  {
    icon: "🌍",
    title: "EU/EEA Nationals",
    description: "Use EU Settlement Scheme to apply for citizenship.",
    badge: "Post-Brexit",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Routes",
    description: "Other family-based applications with varying requirements.",
    badge: "Varies",
  },
];

export default function NewEligibilitySection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              Available Routes
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              Which <span className="text-[#f4c400]">Route</span> is Right for You?
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              There are several routes to British Citizenship. Let's explore the most common options.
            </p>
          </div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {eligibilityRoutes.map((route, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-white to-[#fff5f8] rounded-2xl p-5 border-2 border-[#7a003c]/10 shadow-[0_6px_25px_rgba(122,0,60,0.06)] hover:border-[#f4c400] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f4c400]/20 to-[#7a003c]/10 rounded-full -mr-8 -mt-8" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center text-3xl shadow-[0_4px_15px_rgba(122,0,60,0.25)]">
                      {route.icon}
                    </div>
                    <span className="px-3 py-1.5 bg-[#f4c400] text-[#7a003c] font-black text-xs rounded-full">
                      {route.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#7a003c] mb-2">{route.title}</h3>
                  <p className="text-[#4a6480] text-sm leading-relaxed mb-4">{route.description}</p>
                  <Link
                    href="/routes"
                    className="inline-flex items-center gap-1.5 text-[#7a003c] font-black text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Eligibility Checker CTA */}
          <div className="bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl p-7 text-center">
            <h3 className="text-2xl font-black text-white mb-3">
              Not Sure Which Route Applies?
            </h3>
            <p className="text-white/85 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Take our quick eligibility check to find out which citizenship route is right for you — it only takes 2 minutes!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/eligibility/check"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_12px_35px_rgba(244,196,0,0.4)] hover:-translate-y-1.5 transition-all duration-300"
              >
                Check Your Eligibility
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white/15 text-white border-2 border-white/30 text-base font-black rounded-full hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
              >
                Speak to a Solicitor
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}