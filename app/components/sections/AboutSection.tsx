import Link from "next/link";
import Reveal from "../ui/Reveal";
import ButtonLink from "../ui/ButtonLink";

const features = [
  {
    title: "Expert route guidance",
    text: "We identify the correct citizenship route for your circumstances — whether as a spouse, ILR holder, or EU settled status applicant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M20 6L9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Document preparation",
    text: "We help you gather, verify, and format all required evidence to strictly meet Home Office standards for citizenship applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Clear timeline management",
    text: "We outline realistic processing expectations and keep you informed at every critical stage of your citizenship journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            {/* Content */}
            <div>
              <p className="mb-3 text-[#7a003c] font-extrabold text-sm tracking-widest uppercase">
                Professional Expertise
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7a003c] leading-tight m-0 mb-5">
                About Our Citizenship Services
              </h2>
              <p className="text-[#7a003c] text-xl leading-relaxed mb-10">
                Personal, practical legal support for British Citizenship applications across all routes.
              </p>
              <div className="flex flex-col gap-6">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-5 p-6 bg-[#fff5f8] border border-[#d0dce8]/60 rounded-2xl hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(122,0,60,0.08)] hover:border-[#f4c400] transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 p-2 bg-[#f4c400] rounded-xl text-[#7a003c]">{f.icon}</div>
                    <div>
                      <strong className="block text-lg font-extrabold text-[#7a003c] mb-1.5">{f.title}</strong>
                      <span className="text-[#4a6480] text-base leading-relaxed">{f.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4 flex-wrap">
                <ButtonLink href="/contact">
                  Book a free consultation
                </ButtonLink>
                <ButtonLink href="/routes" variant="outline-light">
                  View citizenship routes
                </ButtonLink>
              </div>
            </div>

            {/* Visual */}
            <Reveal delay={120}>
              <div className="bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-[30px] p-8 text-white shadow-[0_30px_70px_rgba(122,0,60,0.15)]">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">🇬🇧</div>
                  <h3 className="text-2xl font-black">Why Choose MSD Solicitors?</h3>
                  <p className="text-white/80 text-sm mt-2">Trusted by thousands of successful applicants</p>
                </div>
                {[
                  { number: "99%", label: "Application success rate" },
                  { number: "5,000+", label: "Satisfied clients" },
                  { number: "3", label: "UK office locations" },
                  { number: "15+", label: "Years of experience" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/15 last:border-0">
                    <span className="text-white/80 text-sm font-medium">{stat.label}</span>
                    <span className="text-[#f4c400] font-black text-lg">{stat.number}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
