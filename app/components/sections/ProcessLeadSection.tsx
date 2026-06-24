import ProcessLeadForm from "@/app/components/ui/ProcessLeadForm";

interface Props {
  heading?: string;
  description?: string;
  context?: string;
  bg?: "white" | "slate";
}

export default function ProcessLeadSection({
  heading,
  description,
  context,
  bg = "slate",
}: Props) {
  return (
    <section className={`py-20 ${bg === "slate" ? "bg-[#f5f8fd]" : "bg-white"}`}>
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

          {/* Left — copy */}
          <div>
            <p className="text-[#1b6fa8] font-extrabold text-sm tracking-widest uppercase mb-3">
              Free Consultation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] leading-tight mb-4">
              Get Expert Legal Advice on British Citizenship
            </h2>
            <p className="text-[#4a6480] text-lg leading-relaxed mb-8">
              Our specialist citizenship solicitors are here to guide you through every step — from choosing the right route to preparing a winning application.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: "🇬🇧", title: "All citizenship routes covered", desc: "Spouse, ILR, settled status, permanent residence — we handle them all." },
                { icon: "⚖️", title: "SRA-regulated solicitors", desc: "Authorised and regulated by the Solicitors Regulation Authority (SRA No: 666682)." },
                { icon: "✅", title: "99% success rate", desc: "Thousands of successful citizenship applications and satisfied clients." },
                { icon: "📍", title: "3 UK offices", desc: "Manchester, London and Birmingham — available in person or remotely." },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f4c400] rounded-xl flex items-center justify-center text-xl shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-extrabold text-[#0c2340] text-sm">{f.title}</div>
                    <div className="text-[#4a6480] text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="relative">
            <ProcessLeadForm heading={heading} description={description} context={context} />
          </div>
        </div>
      </div>
    </section>
  );
}
