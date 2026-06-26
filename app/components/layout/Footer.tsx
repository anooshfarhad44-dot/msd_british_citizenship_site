"use client";

import Link from "next/link";
import { useState } from "react";
import { contact, parentSite } from "../../data/site";

const footerLinks = [
  { href: "/eligibility", label: "Eligibility" },
  { href: "/routes", label: "Routes" },
  { href: "/process", label: "Process" },
  { href: "/fees", label: "Fees" },
  { href: "/contact", label: "Contact" },
];

const officeBranches = [
  {
    city: "Manchester",
    number: "0161 503 0553",
    href: "tel:+441615030553",
    address: "Suite 2, First Floor, 6, Oldham Road, Manchester, England, M4 5DB",
    mapQuery: "MSD Solicitors, Suite 2, First Floor, 6, Oldham Road, Manchester, M4 5DB",
  },
  {
    city: "London",
    number: "020 4537 5050",
    href: "tel:+442045375050",
    address: "Berkeley Square House, Berkeley Square, London, W1J 6BD",
    mapQuery: "MSD Solicitors, Berkeley Square House, Berkeley Square, London, W1J 6BD",
  },
  {
    city: "Birmingham",
    number: "0121 725 1550",
    href: "tel:+441217251550",
    address: "Two Snowhill, Snow Hill Queensway, Birmingham, B4 6GA",
    mapQuery: "MSD Solicitors, Two Snowhill, Snow Hill Queensway, Birmingham, B4 6GA",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/msdsolicitors",
    label: "Instagram",
    brandClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-[0_4px_14px_rgba(238,42,123,0.3)]",
    animationDelay: "0s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/msdsolicitors",
    label: "Facebook",
    brandClass: "bg-[#1877F2] text-white shadow-[0_4px_14px_rgba(24,119,242,0.3)]",
    animationDelay: "0.2s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/msdsolicitors",
    label: "X (Twitter)",
    brandClass: "bg-[#000000] text-white border border-white/20 shadow-[0_4px_14px_rgba(0,0,0,0.5)]",
    animationDelay: "0.4s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l16 16M4 20L20 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/msdsolicitors",
    label: "LinkedIn",
    brandClass: "bg-[#0077B5] text-white shadow-[0_4px_14px_rgba(0,119,181,0.3)]",
    animationDelay: "0.6s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@msdsolicitors",
    label: "YouTube",
    brandClass: "bg-[#FF0000] text-white shadow-[0_4px_14px_rgba(255,0,0,0.3)]",
    animationDelay: "0.8s",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [activeBranch, setActiveBranch] = useState(officeBranches[0]);

  return (
    <footer className="pt-16 pb-10 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white relative overflow-hidden border-t border-[#7a003c]/30">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-link {
          animation: subtleFloat 3s ease-in-out infinite;
        }
      `}} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f4c400]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#7a003c]/10 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-[1120px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 pb-12 border-b border-white/10">

          {/* Map */}
          <div className="w-full h-[300px] sm:h-[340px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative group bg-[#7a003c]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeBranch.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full transition-all duration-700 ease-out"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-4">
            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#f4c400] mb-5">Useful Links</h3>
              <ul className="space-y-3.5 p-0 m-0 list-none">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-flex items-center text-sm text-white/80 hover:text-[#f4c400] transition-all duration-200 hover:translate-x-1.5 transform">
                      <span className="text-[#f4c400]/60 mr-2.5 text-[10px]">➔</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-white/55 leading-relaxed max-w-xs">
                This is our specialised British Citizenship hub. Visit our primary platform at{" "}
                <a href={parentSite.url} target="_blank" rel="noopener noreferrer"
                  className="text-[#f4c400] font-bold underline underline-offset-4 hover:text-white transition-colors">
                  {parentSite.name}
                </a>.
              </p>
            </div>

            {/* Offices */}
            <div className="flex flex-col justify-between gap-8 sm:gap-0 w-full">
              <div className="w-full">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/90 mb-5">Our Offices</h3>
                <div className="flex items-center gap-2 border-b border-white/10 mb-6 pb-px overflow-x-auto">
                  {officeBranches.map((branch) => (
                    <button key={branch.city} onClick={() => setActiveBranch(branch)}
                      className={`pb-2.5 px-1 text-xs font-bold transition-all duration-200 cursor-pointer relative whitespace-nowrap ${activeBranch.city === branch.city ? "text-[#f4c400]" : "text-white/60 hover:text-white"}`}>
                      {branch.city}
                      {activeBranch.city === branch.city && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f4c400] rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

                <address className="not-italic text-sm text-white/80 space-y-4 min-h-[140px]">
                  <div className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#f4c400] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="leading-relaxed text-xs sm:text-sm">{activeBranch.address}</span>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <svg className="w-4 h-4 text-[#f4c400] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href={activeBranch.href} className="hover:text-[#f4c400] transition-colors font-extrabold text-sm tracking-wide text-[#f4c400]">
                      {activeBranch.number}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-[#f4c400] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={contact.emailHref} className="hover:text-[#f4c400] transition-colors truncate font-medium text-xs sm:text-sm">{contact.email}</a>
                  </div>
                </address>
              </div>

              <div className="flex items-center gap-3 pt-4">
                {socialLinks.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                    aria-label={link.label} title={link.label}
                    style={{ animationDelay: link.animationDelay }}
                    className={`animate-float-link w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 active:scale-95 ${link.brandClass}`}>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-4 text-center border-b border-white/5">
          <p className="text-[11px] sm:text-xs text-white/45 leading-relaxed max-w-4xl mx-auto font-normal antialiased tracking-wide">
            Masaud Solicitors Limited T/A MSD Solicitors is authorised and regulated by the Solicitors Regulation Authority (SRA No: 666682).
            Masaud Solicitors Limited is registered in England and Wales with registration number 12303416.
            VAT Registration No. 396387633. The registered office address is  Suite 2, First Floor, 6 Oldham Road, Manchester, M4 5DB.
            <span className="font-bold text-[#f4c400] block sm:inline sm:ml-1.5 whitespace-nowrap">We do not accept service by email or fax.</span>
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/35 font-bold uppercase tracking-widest">
          <div>© {new Date().getFullYear()} British Citizenship. All Rights Reserved.</div>
          <div className="text-center sm:text-right normal-case tracking-normal text-white/30 font-normal max-w-md">
            Information provided is for guidance only and does not substitute direct legal advisory services.
          </div>
        </div>
      </div>
    </footer>
  );
}
