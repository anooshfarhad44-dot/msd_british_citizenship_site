import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="bg-gradient-to-r from-[#1b6fa8] to-[#0d3557]">
      <div className="w-full max-w-[1120px] mx-auto px-4 min-h-[86px] flex items-center justify-between gap-5 py-6 flex-wrap">
        <div>
          <strong className="text-white font-extrabold text-lg block">Ready to start your citizenship application?</strong>
          <div className="mt-1.5 text-white/95 text-sm">
            Book a free consultation with our citizenship law team today.
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center min-h-[48px] px-7 py-3 bg-[#f4c400] text-[#0c2340] rounded-full font-extrabold shadow-[0_14px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Book a free consultation
        </Link>
      </div>
    </section>
  );
}
