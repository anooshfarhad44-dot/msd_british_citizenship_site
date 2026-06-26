"use client";

import React from "react";
import Reveal from "../ui/Reveal";
import Link from "next/link";

export default function NewTrustSection() {
  const stats = [
    { icon: "🏆", number: "99%", label: "Success Rate" },
    { icon: "👥", number: "5,000+", label: "Happy Clients" },
    { icon: "📍", number: "3", label: "UK Offices" },
    { icon: "⏰", number: "15+", label: "Years Experience" },
  ];

  const benefits = [
    {
      icon: "✅",
      title: "SRA-Regulated Solicitors",
      description: "Fully authorised and regulated by the Solicitors Regulation Authority.",
    },
    {
      icon: "📋",
      title: "Decision-Ready Applications",
      description: "Every application is prepared to Home Office standards to avoid delays.",
    },
    {
      icon: "💬",
      title: "Personal Legal Support",
      description: "Dedicated solicitor for your case, available in person or remotely.",
    },
    {
      icon: "🔒",
      title: "100% Confidential",
      description: "Your data is protected and never shared with any third parties.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-[#fff5f8] overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[#7a003c] font-extrabold text-xs tracking-widest uppercase mb-2">
              Trust & Experience
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7a003c] leading-tight mb-3">
              Why Choose <span className="text-[#f4c400]">MSD Solicitors</span>?
            </h2>
            <p className="text-[#4a6480] text-sm md:text-base max-w-2xl mx-auto">
              We've helped thousands of people successfully apply for British Citizenship.
              Our experienced team is here to guide you every step of the way.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border-2 border-[#f4c400]/30 shadow-[0_8px_30px_rgba(122,0,60,0.08)] text-center hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-[#7a003c] mb-1">{stat.number}</div>
                <div className="text-[#4a6480] font-bold text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#fff5f8] rounded-2xl p-5 border-2 border-[#7a003c]/10 shadow-[0_6px_25px_rgba(122,0,60,0.06)] flex items-start gap-4 hover:border-[#f4c400] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-[0_4px_15px_rgba(122,0,60,0.25)]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base font-black text-[#7a003c] mb-2">{benefit.title}</h3>
                  <p className="text-[#4a6480] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-lg font-black rounded-full shadow-[0_12px_35px_rgba(244,196,0,0.4)] hover:-translate-y-2 transition-all duration-300"
            >
              Get a Free Consultation
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}