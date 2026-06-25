import Link from "next/link";

export default function CtaStrip() {
  return (
    <section className="bg-gradient-to-r from-[#7a003c] to-[#5a0028]">
      <div className="w-full max-w-[1120px] mx-auto px-4 min-h-[86px] flex items-center justify-between gap-5 py-6 flex-wrap">
        <div>
          <strong className="text-white font-extrabold text-lg block">Ready to start your citizenship application?</strong>
          <div className="mt-1.5 text-white/95 text-sm">
            Book a free consultation with our citizenship law team today.
          </div>
        </div>
        
        <Link
          href="/contact"
          className="inline-flex items-center min-h-[48px] px-7 py-3 bg-[#f4c400] text-[#7a003c] rounded-full font-extrabold shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:shadow-[0_20px_40px_rgba(244,196,0,0.5)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group active:scale-[0.98]
          animate-[float_3s_ease-in-out_infinite] hover:animate-none"
          style={{
            // Inline CSS animation definition directly to avoid styled-jsx constraints
            animation: 'float 3s ease-in-out infinite',
          } as React.CSSProperties}
        >
          {/* Shimmer / Glow Wave Effect */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          
          <span className="relative z-10 flex items-center gap-2">
            Book a free consultation
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </Link>
      </div>

      {/* Pure inline fallback for standard layout engine */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}} />
    </section>
  );
}