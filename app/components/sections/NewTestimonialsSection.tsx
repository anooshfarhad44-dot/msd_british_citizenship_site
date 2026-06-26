"use client";

import React, { useState } from "react";
import Reveal from "../ui/Reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Manchester",
    rating: 5,
    text: "MSD Solicitors made the citizenship application process so much easier. My application was approved on the first try!",
    badge: "Spouse Route",
  },
  {
    name: "Ahmed Hassan",
    location: "London",
    rating: 5,
    text: "Professional, responsive, and incredibly knowledgeable about post-Brexit citizenship rules. Couldn't recommend more!",
    badge: "ILR Route",
  },
  {
    name: "Maria Garcia",
    location: "Birmingham",
    rating: 5,
    text: "From start to finish, the team was amazing. They answered all my questions and guided me every step!",
    badge: "EU Settled",
  },
];

export default function NewTestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              What Our Clients Say
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              Success Stories from <span className="text-[#f4c400]">Happy Clients</span>
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              Real stories from people we've helped successfully apply for British Citizenship.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-gradient-to-br from-[#fff5f8] to-white rounded-2xl p-7 md:p-10 border-2 border-[#f4c400]/30 shadow-[0_15px_50px_rgba(122,0,60,0.12)]">
              <div className="flex items-center gap-2.5 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#f4c400"
                    className="drop-shadow-sm"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="text-lg md:text-xl text-[#7a003c] font-bold leading-relaxed mb-5 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between gap-5 flex-wrap">
                <div>
                  <h4 className="text-lg font-black text-[#7a003c]">{testimonials[current].name}</h4>
                  <p className="text-[#4a6480] font-medium text-sm">{testimonials[current].location}</p>
                </div>
                <span className="px-4 py-1.5 bg-[#f4c400] text-[#7a003c] font-black text-xs rounded-full">
                  {testimonials[current].badge}
                </span>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    current === index ? "bg-[#7a003c] w-9" : "bg-[#7a003c]/30 hover:bg-[#7a003c]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}