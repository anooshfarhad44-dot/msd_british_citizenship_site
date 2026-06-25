// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Reveal from "../ui/Reveal";

// export default function HomeHero() {
//   // Words array for the typewriter animation
//   const words = ["Solicitors in Manchester", "Immigration Experts", "Legal Professionals"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   useEffect(() => {
//     const handleType = () => {
//       const fullWord = words[currentWordIndex];

//       if (!isDeleting) {
//         // Typing text
//         setCurrentText(fullWord.substring(0, currentText.length + 1));
//         setTypingSpeed(80); // Speed when typing

//         if (currentText === fullWord) {
//           // Pause at the end of the word before starting to delete
//           setTypingSpeed(2000); 
//           setIsDeleting(true);
//         }
//       } else {
//         // Deleting text
//         setCurrentText(fullWord.substring(0, currentText.length - 1));
//         setTypingSpeed(40); // Speed when deleting (faster)

//         if (currentText === "") {
//           setIsDeleting(false);
//           // Move to next word loop
//           setCurrentWordIndex((prev) => (prev + 1) % words.length);
//           setTypingSpeed(300); // Small pause before typing next word
//         }
//       }
//     };

//     const timer = setTimeout(handleType, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

//   return (
//     <section className="relative overflow-hidden min-h-[600px] lg:min-h-[660px] flex items-center bg-[#4a0025]">
//       <style>{`
//         @keyframes subtle-pulse {
//           0%, 100% { transform: scale(1); box-shadow: 0 14px 30px rgba(244,196,0,0.25); }
//           50% { transform: scale(1.02); box-shadow: 0 20px 40px rgba(244,196,0,0.45); }
//         }
//         @keyframes shimmer-sweep { 0% { left: -100%; } 100% { left: 200%; } }
//       `}</style>

//       {/* Background Image Layer - No Color Overlays */}
//       <div
//   className="absolute inset-0 bg-no-repeat bg-center bg-contain"
//   style={{
//     backgroundImage: "url('/images/heroTheImg.webp')",
//   }}
// />

//       <div className="relative z-10 w-full py-6 lg:py-10">
//         <div className="w-full max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

//           {/* Left Spacer - Keeps content aligned to the right panel */}
//           <div className="hidden lg:block lg:col-span-5 h-1" />

//           {/* Right panel: Text box with subtle backdrop card for high readability */}
//           <div className="col-span-12 lg:col-span-7 bg-black/40 lg:bg-black/35 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 ml-15">
//             <Reveal>
//               <div className="inline-flex items-center px-4 py-1.5 border border-[#f4c400]/40 rounded-full bg-[#4a0025]/60 text-[#f4c400] font-bold text-xs tracking-widest uppercase backdrop-blur-md mb-2">
//                 British Citizenship Solicitors
//               </div>

//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white leading-[1.2] tracking-tight min-h-[110px] sm:min-h-[auto]">
//                 Expert British Citizenship <br />
//                 <span className="text-[#f4c400] typewriter-cursor pr-1 inline-block">
//                   {currentText}
//                 </span>
//               </h1>

//               <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-[620px] font-normal">
//                 Navigating the path to British citizenship can be complex. MSD Solicitors guide you through every route — from spouse applications to ILR holders — with expert legal support and a proven track record.
//               </p>

//               <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4c400] opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f4c400]"></span>
//                 </span>
//                 <p className="text-[#f4c400] text-sm sm:text-base font-bold tracking-wide uppercase">
//                   Proudly Maintaining a 99% Success Ratio
//                 </p>
//               </div>

//               {/* Main Buttons */}
//               <div className="flex flex-wrap items-center gap-4 mt-8">
//                 <Link
//                   href="/contact"
//                   className="relative overflow-hidden inline-flex items-center justify-center min-h-[54px] px-8 py-3 rounded-full font-black bg-[#f4c400] text-[#7a003c] transition-all duration-300 text-sm animate-[subtle-pulse_3s_ease-in-out_infinite] hover:bg-[#ebd04b] shadow-xl"
//                 >
//                   <span className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2.5s_infinite]" style={{ animationTimingFunction: "linear" }} />
//                   <span className="relative z-10">Speak to a citizenship solicitor</span>
//                 </Link>
//                 <Link href="/routes" className="inline-flex items-center justify-center min-h-[54px] px-7 py-3 rounded-full font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200 text-sm">
//                   Explore Routes
//                 </Link>
//               </div>

//               {/* Eligibility Section Below */}
//               <div className="pt-6 mt-6 border-t border-white/10 max-w-[620px] space-y-4">
//                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-7 rounded overflow-hidden border border-white/20 shadow-sm shrink-0">
//                       <Image src="/images/service-1.svg" alt="UK Flag" width={40} height={28} className="object-cover h-full w-full" />
//                     </div>
//                     <div>
//                       <p className="text-white font-bold text-xs sm:text-sm tracking-wide">Ready to check your qualification status?</p>
//                       <p className="text-white/60 text-[11px]">Takes less than 2 minutes to evaluate your path.</p>
//                     </div>
//                   </div>

//                   <Link
//                     href="/eligibility/check"
//                     className="relative overflow-hidden inline-flex items-center justify-center h-11 px-5 text-xs font-black rounded-full bg-[#f4c400] text-[#7a003c] shadow-md transition-all duration-300 hover:scale-[1.02] shrink-0 w-full sm:w-auto"
//                   >
//                     <span className="relative z-10 flex items-center gap-1.5">
//                       Check Eligibility Now
//                       <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12h14M12 5l7 7-7 7" />
//                       </svg>
//                     </span>
//                   </Link>
//                 </div>

//                 <div className="flex gap-2 justify-start flex-wrap w-full opacity-80">
//                   {[{ icon: "⚡", label: "Takes 2 Mins" }, { icon: "⭐", label: "100% Free" }, { icon: "🛡️", label: "No Obligation" }].map((b) => (
//                     <div key={b.label} className="flex items-center gap-1 px-2.5 py-1 bg-[#7a003c] rounded-full text-white font-bold text-[9px] border border-[#f4c400]/30 shadow-sm">
//                       <span>{b.icon}</span>
//                       {b.label}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//             </Reveal>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function HomeHero() {
  // Words array for the typewriter animation
  const words = ["Solicitors in Manchester", "Immigration Experts", "Legal Professionals"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing text
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(80); // Speed when typing

        if (currentText === fullWord) {
          // Pause at the end of the word before starting to delete
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting text
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Speed when deleting (faster)

        if (currentText === "") {
          setIsDeleting(false);
          // Move to next word loop
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(300); // Small pause before typing next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    // Height adjustments to perfectly adapt elements without spilling empty backgrounds
    <section className="relative overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center bg-[#4a0025]">
      <style>{`
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 14px 30px rgba(244,196,0,0.25); }
          50% { transform: scale(1.02); box-shadow: 0 20px 40px rgba(244,196,0,0.45); }
        }
        @keyframes shimmer-sweep { 0% { left: -100%; } 100% { left: 200%; } }
      `}</style>

      {/* SEO Optimized Next.js Background Image with no-spill top/bottom logic */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroTheImg.webp"
          alt="British Citizenship Background"
          fill
          // object-cover handles seamless filling, object-[X-axis_Y-axis] centers the passport and top elements safely
          className="object-cover object-[28%_12%] lg:object-[78%_8%]"
          priority
        />
        {/* Subtle base blend mask */}
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />
      </div>

      <div className="relative z-10 w-full py-6 lg:py-8">
        <div className="w-full max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Spacer - Keeps content aligned to the right panel */}
          <div className="hidden lg:block lg:col-span-5 h-1" />

          {/* Right panel: Text box with subtle backdrop card for high readability */}
          <div className="col-span-12 lg:col-span-7 bg-black/40 lg:bg-black/35 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 ml-15">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 border border-[#f4c400]/40 rounded-full bg-[#4a0025]/60 text-[#f4c400] font-bold text-xs tracking-widest uppercase backdrop-blur-md mb-1">
                British Citizenship Solicitors
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-extrabold text-white leading-[1.2] tracking-tight min-h-[110px] sm:min-h-[auto]">
                Expert British Citizenship <br />
                <span className="text-[#f4c400] typewriter-cursor pr-1 inline-block">
                  {currentText}
                </span>
              </h1>

              <p className="mt-1 text-white/90 text-base sm:text-lg leading-relaxed max-w-[620px] font-normal">
                Helping individuals and families secure British citizenship with expert legal advice and a proven success record.
              </p>

              <div className="mt-3 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4c400] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f4c400]"></span>
                </span>
                <p className="text-[#f4c400] text-sm sm:text-base font-bold tracking-wide uppercase">
                  Proudly Maintaining a 99% Success Ratio
                </p>
              </div>

              {/* Main Buttons */}
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Link
                  href="/contact"
                  className="relative overflow-hidden inline-flex items-center justify-center min-h-[54px] px-8 py-3 rounded-full font-black bg-[#f4c400] text-[#7a003c] transition-all duration-300 text-sm animate-[subtle-pulse_3s_ease-in-out_infinite] hover:bg-[#ebd04b] shadow-xl"
                >
                  <span className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none animate-[shimmer-sweep_2.5s_infinite]" style={{ animationTimingFunction: "linear" }} />
                  <span className="relative z-10">Speak to a citizenship solicitor</span>
                </Link>
                <Link href="/routes" className="inline-flex items-center justify-center min-h-[54px] px-7 py-3 rounded-full font-bold text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200 text-sm">
                  Explore Routes
                </Link>
              </div>

              {/* Eligibility Section Below */}
              <div className="pt-5 mt-5 border-t border-white/10 max-w-[620px] space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-7 rounded overflow-hidden border border-white/20 shadow-sm shrink-0">
                      <Image src="/images/service-1.svg" alt="UK Flag" width={40} height={28} className="object-cover h-full w-full" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm tracking-wide">Ready to check your qualification status?</p>
                      <p className="text-white/60 text-[11px]">Takes less than 2 minutes to evaluate your path.</p>
                    </div>
                  </div>

                  <Link
                    href="/eligibility/check"
                    className="relative overflow-hidden inline-flex items-center justify-center h-11 px-5 text-xs font-black rounded-full bg-[#f4c400] text-[#7a003c] shadow-md transition-all duration-300 hover:scale-[1.02] shrink-0 w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      Check Eligibility Now
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>

                <div className="flex gap-2 justify-start flex-wrap w-full opacity-80">
                  {[{ icon: "⚡", label: "Takes 2 Mins" }, { icon: "⭐", label: "100% Free" }, { icon: "🛡️", label: "No Obligation" }].map((b) => (
                    <div key={b.label} className="flex items-center gap-1 px-2.5 py-1 bg-[#7a003c] rounded-full text-white font-bold text-[9px] border border-[#f4c400]/30 shadow-sm">
                      <span>{b.icon}</span>
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>

            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}