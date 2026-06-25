import Link from "next/link";
import Image from "next/image";

export default function FinalCta() {
  return (
    <section
      className="py-16 md:py-24 text-white relative overflow-hidden border-t border-white/5"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(22, 2, 10, 0.78) 40%, rgba(92, 6, 38, 0.35) 100%), url('/images/heroImg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft ambient radial light background */}
      <div className="absolute top-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[var(--color-secondary,#e5b842)]/5 blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="w-full max-w-[720px] mx-auto px-4 text-center relative z-10">

        {/* CTA Image Icon Section */}
        <div className="relative w-full max-w-[240px] md:max-w-[320px] h-[160px] md:h-[220px] mx-auto mb-6">
          <Image
            src="/images/ctaImage.png"
            alt="Citizenship Consultation Icon"
            fill
            priority
            className="object-contain object-center"
          />
        </div>

        {/* Responsive Heading: Multi-line white text on Mobile, Auto-Type Gold on Desktop */}
        <div className="inline-block max-w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight m-0 drop-shadow-sm
                         md:text-[var(--color-secondary,#e5b842)] md:border-r-4 md:border-[var(--color-secondary,#e5b842)] md:pr-1 md:whitespace-nowrap md:overflow-hidden md:max-w-max mx-auto"
              style={{
                animation: 'var(--typing-anim, none)'
              }}
          >
            Speak to a solicitor about British Citizenship today.
          </h2>
        </div>

        <p className="mt-4 mb-8 text-white/85 leading-relaxed text-sm md:text-lg max-w-[620px] mx-auto antialiased px-2 md:px-0">
          At MSD Solicitors, we are experts in immigration matters and have supported thousands of satisfied clients.
          We can guide you through a smooth citizenship application process.
        </p>

        {/* Responsive buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto">
          {/* Premium Gold CTA Button with Shimmer & Float Animation */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[52px] w-full sm:w-auto px-8 py-3 rounded-full font-extrabold bg-[var(--color-secondary,#e5b842)] text-[#1f1619] shadow-[0_10px_25px_rgba(229,184,66,0.3)] hover:shadow-[0_20px_40px_rgba(229,184,66,0.6)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group active:scale-[0.98]"
            style={{
              animation: 'btnFloat 4s ease-in-out infinite'
            }}
          >
            {/* Shimmer Wave Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            <span className="relative z-10 flex items-center gap-2">
              Book Free Consultation
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

          {/* Glassmorphism Secondary Button */}
          <Link
            href="/routes"
            className="inline-flex items-center justify-center min-h-[52px] w-full sm:w-auto px-8 py-3 rounded-full font-extrabold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Explore Routes
          </Link>
        </div>
      </div>

      {/* Embedded style handling premium animations dynamically */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          :root {
            --typing-anim: typing 3.5s steps(40, end) infinite alternate, blink-caret 0.75s step-end infinite;
          }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #e5b842; }
        }
        @keyframes btnFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}} />
    </section>
  );
}