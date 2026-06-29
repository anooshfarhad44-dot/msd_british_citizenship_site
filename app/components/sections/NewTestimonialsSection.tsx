"use client";

import React from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
// 🔥 Reviews data ko aapki central data file se import kar liya
import { reviewsData } from "../../data/site"; 

// Infinite loop ke liye double array generate karte hain
// Agar reviewsData me badge nahi hai, to hum default "Verified Review" de dete hain
const duplicatedTestimonials = [...reviewsData, ...reviewsData];

export default function NewTestimonialsSection() {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  return (
    <section className="py-16 bg-white overflow-hidden">
      {/* Infinite Carousel ke liye Tailwind Global Styles Inject Kar Rahe Hain */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused; /* Hover karne par slider ruk jayega */
        }
      `}</style>

      <div className="w-full mx-auto">
        <Reveal>
          <div className="text-center mb-12 px-4">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              What Our Clients Say
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              Success Stories from <span className="text-[#f4c400]">Happy Clients</span>
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              Real stories from people we've helped successfully apply for British Citizenship & Visas.
            </p>
          </div>

          {/* Infinite Marquee Wrapper */}
          <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            <div className="flex gap-6 animate-marquee py-4 whitespace-normal">
              {duplicatedTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-[350px] md:w-[420px] shrink-0 flex flex-col justify-between bg-gradient-to-br from-[#fff5f8] to-white rounded-2xl p-6 md:p-8 border border-[#d0dce8] shadow-[0_10px_30px_rgba(122,0,60,0.05)] hover:border-[#7a003c]/40 transition-all duration-300"
                >
                  <div>
                    {/* Stars & Badge Row */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-[2px]">
                        {[...Array(item.stars)].map((_, i) => (
                          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f4c400">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                      <span className="px-3 py-1 bg-[#f4c400] text-[#7a003c] font-black text-[10px] uppercase tracking-wider rounded-full shrink-0">
                        {/* Agar central data me specific badge na ho to default Verified dega */}
                        {(item as any).badge || "Verified Route"}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h4 className="font-black text-[#7a003c] text-base mb-2 leading-snug">
                      "{item.reviewTitle}"
                    </h4>

                    {/* Review Body */}
                    <p className="text-[#2d4a6b] text-xs md:text-sm leading-relaxed font-medium mb-6 line-clamp-4">
                      {item.reviewBody}
                    </p>
                  </div>

                  {/* Profile Info Section */}
                  <div className="flex items-center gap-3 border-t border-[#d0dce8]/60 pt-4 mt-auto">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        getInitials(item.name)
                      )}
                    </div>
                    <div className="min-w-0">
                      <h5 className="font-black text-[#7a003c] text-sm truncate">{item.name}</h5>
                      <p className="text-[#4a6480] text-[11px] font-semibold flex items-center gap-1.5 mt-0.5">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#4a6480]/40" />
                        <span className="text-[#00b67a]">✓ Verified</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}