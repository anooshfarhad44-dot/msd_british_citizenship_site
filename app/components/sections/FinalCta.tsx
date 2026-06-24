import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      className="py-24 text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(12,35,64,0.92), rgba(12,35,64,0.65)), url('/images/heroImg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[680px] mx-auto px-4 text-center">
        <div className="text-5xl mb-4">🇬🇧</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug m-0">
          Speak to a solicitor about British Citizenship today.
        </h2>
        <p className="mt-4 mb-7 text-white/90 leading-relaxed text-lg">
          At MSD Solicitors, we are experts in immigration matters and have supported thousands of satisfied clients.
          We can guide you through a smooth citizenship application process.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#0c2340] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/routes"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold text-white border border-white/50 bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Routes
          </Link>
        </div>
      </div>
    </section>
  );
}
