import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      className="py-24 text-white relative overflow-hidden border-t border-white/5"
      style={{
        /* 
          UPDATED LINEAR GRADIENT & FADED EFFECT:
          - Opacity ko significantly drop kiya hai (0.92 -> 0.78 aur 0.65 -> 0.35) taake background image prominent ho.
          - Reddish maroon ko refined deep charcoal-wine tone se replace kiya hai taake text ki readability aur premium vibe dono maintain rahein.
        */
        backgroundImage:
          "linear-gradient(135deg, rgba(22, 2, 10, 0.78) 40%, rgba(92, 6, 38, 0.35) 100%), url('/images/heroImg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft ambient radial light background for an extra luxury layer */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-secondary,#e5b842)]/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[720px] mx-auto px-4 text-center relative z-10">
        {/* Flag icon with shadow */}
        <div className="text-4xl mb-5 opacity-90 drop-shadow-md">🇬🇧</div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight m-0 drop-shadow-sm">
          Speak to a solicitor about British Citizenship today.
        </h2>
        
        <p className="mt-4 mb-8 text-white/85 leading-relaxed text-base md:text-lg max-w-[620px] mx-auto antialiased">
          At MSD Solicitors, we are experts in immigration matters and have supported thousands of satisfied clients.
          We can guide you through a smooth citizenship application process.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* Premium Gold CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold bg-[var(--color-secondary,#e5b842)] text-[#1f1619] shadow-[0_10px_25px_rgba(229,184,66,0.2)] hover:shadow-[0_14px_30px_rgba(229,184,66,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Book Free Consultation
          </Link>
          
          {/* Glassmorphism Secondary Button */}
          <Link
            href="/routes"
            className="inline-flex items-center justify-center min-h-[52px] px-8 py-3 rounded-full font-extrabold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Explore Routes
          </Link>
        </div>
      </div>
    </section>
  );
}