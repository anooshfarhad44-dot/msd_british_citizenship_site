// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
// import { contact, navItems, reviewsData } from "../../../data/site";
// import { colors } from "../../../data/colors";
// import WhatsAppIcon from "../../ui/WhatsAppIcon";
// import ReviewCard, { ReviewProps } from "./ReviewCard";

// const officeNumbers = [
//   { city: "Manchester", number: "0161 503 0553", href: "tel:+441615030553" },
//   { city: "London", number: "020 4537 5050", href: "tel:+442045375050" },
//   { city: "Birmingham", number: "0121 725 1550", href: "tel:+441217251550" },
// ];

// const topBtnBase =
//   "flex items-center justify-center gap-1.5 h-11 px-1.5 sm:px-2.5 rounded-xl text-white font-black text-[10px] sm:text-[11px] xl:text-xs tracking-tighter whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 relative overflow-hidden w-full text-center shadow-sm hover:shadow-lg cursor-pointer select-none group will-change-transform";

// function ReviewModal({ review, onClose }: { review: ReviewProps; onClose: () => void }) {
//   const getInitials = (name: string) =>
//     name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   return createPortal(
//     <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#7a003c]/75 via-[#5a0028]/65 to-[#7a003c]/75 backdrop-blur-md" onClick={onClose} />
//       <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-[0_32px_80px_rgba(122,0,60,0.5)] overflow-hidden flex flex-col">
//         <div className="h-1.5 bg-gradient-to-r from-[#7a003c] via-[#f4c400] to-[#f4c400]" />
//         <button onClick={onClose} aria-label="Close review"
//           className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#f4f7fb] border border-[#d0dce8] text-[#4a6480] hover:bg-[#d0dce8] hover:text-[#7a003c] flex items-center justify-center transition-all duration-200 shadow-sm">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//           </svg>
//         </button>
//         <div className="px-7 pt-6 pb-5 bg-gradient-to-br from-[#fff5f8] to-white border-b border-[#d0dce8]/60">
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white font-black text-base grid place-items-center shadow-[0_6px_20px_rgba(122,0,60,0.35)] shrink-0 select-none">
//               {getInitials(review.name)}
//             </div>
//             <div>
//               <h3 className="font-black text-[#7a003c] text-lg leading-tight">{review.name}</h3>
//               <div className="flex items-center gap-2 mt-1 flex-wrap">
//                 <div className="flex items-center gap-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className={`w-4 h-4 ${i < review.stars ? "fill-[#f4c400]" : "fill-[#d0dce8]"}`} viewBox="0 0 24 24">
//                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="w-1 h-1 rounded-full bg-[#4a6480]/40 inline-block" />
//                 <span className="text-xs font-bold text-[#4a6480]">{review.date}</span>
//                 <span className="inline-flex items-center gap-1 bg-[#00b67a]/10 text-[#00b67a] text-[10px] font-black px-2 py-0.5 rounded-full border border-[#00b67a]/20">
//                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
//                   Verified
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-7 py-6 max-h-[50vh] overflow-y-auto">
//           <div className="flex gap-3 mb-4">
//             <div className="w-1 rounded-full bg-gradient-to-b from-[#7a003c] to-[#f4c400] shrink-0" />
//             <h4 className="font-black text-[#7a003c] text-base leading-snug italic">"{review.reviewTitle}"</h4>
//           </div>
//           <p className="text-[#2d4a6b] text-sm leading-7 font-medium">{review.reviewBody}</p>
//         </div>
//         <div className="px-7 py-5 bg-[#fff5f8] border-t border-[#d0dce8]/60 flex items-center justify-between gap-3">
//           <p className="text-xs text-[#4a6480] font-semibold">★ Review via Google</p>
//           <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7a003c] to-[#5a0028] hover:from-[#5a0028] hover:to-[#7a003c] text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_14px_rgba(122,0,60,0.4)] active:scale-[0.97]">
//             Close
//           </button>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
//   const [selectedOffice, setSelectedOffice] = useState(officeNumbers[0]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeModalReview, setActiveModalReview] = useState<ReviewProps | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsPhoneDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <header className="sticky top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-[18px] shadow-[0_4px_20px_rgba(122,0,60,0.15)]">

//         {/* Review Banner */}
//         <div className="bg-[#f4f7fb] border-b border-[#d0dce8] py-0 flex items-center overflow-hidden">
//           <div className="w-full max-w-[1120px] mx-auto px-3 flex items-center justify-between gap-3">
//             <div className="flex items-center gap-1.5 sm:gap-4 border-r border-[#d0dce8] pr-2 sm:pr-3 shrink-0">
//               <div className="relative w-16 h-14 sm:w-32 sm:h-24 mix-blend-multiply">
//                 <Image src="/images/HeaderImgs/google5Star.png" alt="Google 5 Star Review" fill priority className="object-contain" />
//               </div>
//               <div className="relative w-16 h-14 sm:w-32 sm:h-24 mix-blend-multiply">
//                 <Image src="/images/HeaderImgs/trustPilot5Star.png" alt="Trustpilot 5 Star Review" fill priority className="object-contain" />
//               </div>
//             </div>

//             <div className="flex-1 overflow-hidden relative">
//               <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {reviewsData.map((review, idx) => (
//                   <div key={idx} className="w-full min-w-full flex-shrink-0 flex justify-center items-center px-0.5">
//                     <ReviewCard review={review} onOpenModal={(rev) => setActiveModalReview(rev)} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex items-center gap-1 shrink-0">
//               <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1))}
//                 className="w-7 h-7 rounded-lg border border-[#d0dce8] bg-white text-[#4a6480] hover:text-[#7a003c] hover:shadow-sm flex items-center justify-center transition-all" aria-label="Previous review">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
//               </button>
//               <button onClick={() => setCurrentIndex((prev) => (prev + 1) % reviewsData.length)}
//                 className="w-7 h-7 rounded-lg border border-[#d0dce8] bg-white text-[#4a6480] hover:text-[#7a003c] hover:shadow-sm flex items-center justify-center transition-all" aria-label="Next review">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Top Action Bar */}
//         <div className="bg-gradient-to-r from-[#7a003c] to-[#5a0028]">
//           <div className="w-full max-w-[1120px] mx-auto px-3 py-2">
//             <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 items-stretch">

//               {/* Call Now */}
//               <div className="relative w-full col-span-2 lg:col-span-1" ref={dropdownRef}>
//                 <button type="button" onClick={() => setIsPhoneDropdownOpen((prev) => !prev)}
//                   className={`${topBtnBase} bg-gradient-to-br from-white/15 to-white/5 border border-white/20 hover:from-white/25 hover:to-white/10`}>
//                   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-[#f4c400]">
//                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" />
//                   </svg>
//                   <span className="truncate">Call Now: {selectedOffice.number}</span>
//                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
//                     className={`shrink-0 transition-transform duration-300 ${isPhoneDropdownOpen ? "rotate-180 text-[#f4c400]" : "text-white"}`}>
//                     <polyline points="6 9 12 15 18 9" />
//                   </svg>
//                 </button>
//                 {isPhoneDropdownOpen && (
//                   <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] z-[1000] min-w-[215px] overflow-hidden border border-[#d0dce8]">
//                     {officeNumbers.map((office) => (
//                       <a key={office.city} href={office.href}
//                         className="flex flex-col px-4 py-3 text-[#192c42] border-b border-[#d0dce8]/60 last:border-b-0 hover:bg-gradient-to-r hover:from-[#fff5f8] hover:to-white transition-all duration-150 group/item"
//                         onClick={() => { setSelectedOffice(office); setIsPhoneDropdownOpen(false); }}>
//                         <span className="font-black text-xs text-[#7a003c]">Office {office.city}</span>
//                         <span className="font-black text-sm mt-0.5 text-[#2d4a6b] flex items-center gap-1.5">
//                           <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#00b67a] animate-pulse">
//                             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" />
//                           </svg>
//                           {office.number}
//                         </span>
//                       </a>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Facebook */}
//               <a href="https://www.facebook.com/msdsolicitors" target="_blank" rel="noopener noreferrer"
//                 className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#1877F2] to-[#0e52a5] hover:from-[#2a84ff] hover:to-[#1154AB]`}>
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//                 <span>Facebook</span>
//               </a>

//               {/* WhatsApp */}
//               <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer"
//                 className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] border border-white/10 hover:from-[#2ef077] hover:to-[#0f7569] shadow-[0_0_10px_rgba(37,211,102,0.2)]`}>
//                 <WhatsAppIcon className="w-4 h-4 shrink-0" />
//                 <span>WhatsApp us</span>
//               </a>

//               {/* Check Eligibility */}
//               <Link href="/eligibility/check"
//                 className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] text-[#7a003c] hover:from-[#ffd214] hover:to-[#c29d00] font-black hover:shadow-[0_0_25px_rgba(244,196,0,0.45)]`}>
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="shrink-0 text-[#7a003c]">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                 </svg>
//                 <span className="text-[#7a003c]">Check Eligibility</span>
//               </Link>

//               {/* Free Consultation */}
//               <div className="col-span-1 lg:col-span-1 w-full relative overflow-hidden rounded-xl">
//                 <Link href="/contact"
//                   className={`${topBtnBase} bg-gradient-to-br from-[#7a003c] to-[#5a0028] border-2 border-[#f4c400] hover:from-[#5a0028] hover:to-[#7a003c] animate-pulse hover:animate-none`}>
//                   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-[#f4c400]">
//                     <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
//                   </svg>
//                   <span>Free Consultation</span>
//                 </Link>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* Brand Navigation Row */}
//         <div className="w-full max-w-[1120px] mx-auto px-4 flex items-center justify-between gap-6 py-0 border-b border-[#d0dce8]/60">
//           <Link href="/" className="inline-flex items-center gap-4" aria-label="British Citizenship home">
//             <div className="relative w-16 h-16 shrink-0">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-xl flex items-center justify-center">
//                   <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
//                     <rect width="40" height="40" rx="8" fill="white" fillOpacity="0.1"/>
//                     <path d="M20 5L35 12V20C35 28 20 35 20 35C20 35 5 28 5 20V12L20 5Z" fill="#f4c400" fillOpacity="0.9"/>
//                     <path d="M15 20L18 23L25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//               </div>
//             <span>
//               <strong className="block text-lg sm:text-xl text-[#7a003c]">British Citizenship Solicitors</strong>
//               <small className="block text-[#4a6480] mt-0.5 text-xs sm:text-sm">Expert Legal Guidance for Your Journey</small>
//             </span>
//           </Link>

//           <nav className="hidden lg:flex items-center gap-2 px-2 py-0 border border-[#d0dce8] rounded-full bg-[#f4f7fb]/80" aria-label="Primary navigation">
//             {navItems.map((item) => (
//               <Link key={item.href} href={item.href}
//                 className="px-4 py-2.5 rounded-full text-[#192c42] font-extrabold text-sm transition-all duration-200 hover:bg-white hover:text-[#7a003c] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(122,0,60,0.08)]">
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           <button className="lg:hidden p-2.5 border border-[#d0dce8] rounded-lg text-[#192c42] hover:bg-[#f4f7fb] transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               {isMenuOpen
//                 ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>)
//                 : (<><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>)
//               }
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-[#d0dce8] shadow-[0_8px_20px_rgba(122,0,60,0.1)]">
//             <nav className="w-full max-w-[1120px] mx-auto px-4 py-4 grid gap-2">
//               {navItems.map((item) => (
//                 <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}
//                   className="px-4 py-3 rounded-xl font-bold text-[#192c42] hover:bg-[#fff5f8] transition-colors">
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}
//       </header>

//       {activeModalReview && (
//         <ReviewModal review={activeModalReview} onClose={() => setActiveModalReview(null)} />
//       )}
//     </>
//   );
// }













"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { contact, navItems, reviewsData } from "../../../data/site";
import { colors } from "../../../data/colors";
import WhatsAppIcon from "../../ui/WhatsAppIcon";
import ReviewCard, { ReviewProps } from "./ReviewCard";

const officeNumbers = [
  { city: "Manchester", number: "0161 503 0553", href: "tel:+441615030553" },
  { city: "London", number: "020 4537 5050", href: "tel:+442045375050" },
  { city: "Birmingham", number: "0121 725 1550", href: "tel:+441217251550" },
];

const topBtnBase =
  "flex items-center justify-center gap-1.5 h-11 px-1.5 sm:px-2.5 rounded-xl text-white font-black text-[10px] sm:text-[11px] xl:text-xs tracking-tighter whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 relative overflow-hidden w-full text-center shadow-sm hover:shadow-lg cursor-pointer select-none group will-change-transform";

function ReviewModal({ review, onClose }: { review: ReviewProps; onClose: () => void }) {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7a003c]/75 via-[#5a0028]/65 to-[#7a003c]/75 backdrop-blur-md" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl shadow-[0_32px_80px_rgba(122,0,60,0.5)] overflow-hidden flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-[#7a003c] via-[#f4c400] to-[#f4c400]" />
        <button onClick={onClose} aria-label="Close review"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#f4f7fb] border border-[#d0dce8] text-[#4a6480] hover:bg-[#d0dce8] hover:text-[#7a003c] flex items-center justify-center transition-all duration-200 shadow-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="px-7 pt-6 pb-5 bg-gradient-to-br from-[#fff5f8] to-white border-b border-[#d0dce8]/60">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white font-black text-base grid place-items-center shadow-[0_6px_20px_rgba(122,0,60,0.35)] shrink-0 select-none">
              {getInitials(review.name)}
            </div>
            <div>
              <h3 className="font-black text-[#7a003c] text-lg leading-tight">{review.name}</h3>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.stars ? "fill-[#f4c400]" : "fill-[#d0dce8]"}`} viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="w-1 h-1 rounded-full bg-[#4a6480]/40 inline-block" />
                <span className="text-xs font-bold text-[#4a6480]">{review.date}</span>
                <span className="inline-flex items-center gap-1 bg-[#00b67a]/10 text-[#00b67a] text-[10px] font-black px-2 py-0.5 rounded-full border border-[#00b67a]/20">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 py-6 max-h-[50vh] overflow-y-auto">
          <div className="flex gap-3 mb-4">
            <div className="w-1 rounded-full bg-gradient-to-b from-[#7a003c] to-[#f4c400] shrink-0" />
            <h4 className="font-black text-[#7a003c] text-base leading-snug italic">"{review.reviewTitle}"</h4>
          </div>
          <p className="text-[#2d4a6b] text-sm leading-7 font-medium">{review.reviewBody}</p>
        </div>
        <div className="px-7 py-5 bg-[#fff5f8] border-t border-[#d0dce8]/60 flex items-center justify-between gap-3">
          <p className="text-xs text-[#4a6480] font-semibold">★ Review via Google</p>
          <button onClick={onClose} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7a003c] to-[#5a0028] hover:from-[#5a0028] hover:to-[#7a003c] text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_14px_rgba(122,0,60,0.4)] active:scale-[0.97]">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneDropdownOpen, setIsPhoneDropdownOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(officeNumbers[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalReview, setActiveModalReview] = useState<ReviewProps | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPhoneDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-[18px] shadow-[0_4px_20px_rgba(122,0,60,0.15)]">

        {/* Review Banner */}
        <div className="bg-[#f4f7fb] border-b border-[#d0dce8] py-0 flex items-center overflow-hidden">
          <div className="w-full max-w-[1120px] mx-auto px-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 sm:gap-4 border-r border-[#d0dce8] pr-2 sm:pr-3 shrink-0">
              <div className="relative w-16 h-14 sm:w-32 sm:h-24 mix-blend-multiply">
                <Image src="/images/HeaderImgs/google5Star.png" alt="Google 5 Star Review" fill priority className="object-contain" />
              </div>
              <div className="relative w-16 h-14 sm:w-32 sm:h-24 mix-blend-multiply">
                <Image src="/images/HeaderImgs/trustPilot5Star.png" alt="Trustpilot 5 Star Review" fill priority className="object-contain" />
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {reviewsData.map((review, idx) => (
                  <div key={idx} className="w-full min-w-full flex-shrink-0 flex justify-center items-center px-0.5">
                    <ReviewCard review={review} onOpenModal={(rev) => setActiveModalReview(rev)} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button onClick={() => setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1))}
                className="w-7 h-7 rounded-lg border border-[#d0dce8] bg-white text-[#4a6480] hover:text-[#7a003c] hover:shadow-sm flex items-center justify-center transition-all" aria-label="Previous review">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button onClick={() => setCurrentIndex((prev) => (prev + 1) % reviewsData.length)}
                className="w-7 h-7 rounded-lg border border-[#d0dce8] bg-white text-[#4a6480] hover:text-[#7a003c] hover:shadow-sm flex items-center justify-center transition-all" aria-label="Next review">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Top Action Bar */}
        <div className="bg-gradient-to-r from-[#7a003c] to-[#5a0028]">
          <div className="w-full max-w-[1120px] mx-auto px-3 py-2">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 items-stretch">

              {/* Call Now */}
              <div className="relative w-full col-span-2 lg:col-span-1" ref={dropdownRef}>
                <button type="button" onClick={() => setIsPhoneDropdownOpen((prev) => !prev)}
                  className={`${topBtnBase} bg-gradient-to-br from-white/15 to-white/5 border border-white/20 hover:from-white/25 hover:to-white/10`}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-[#f4c400]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="truncate">Call Now: {selectedOffice.number}</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"
                    className={`shrink-0 transition-transform duration-300 ${isPhoneDropdownOpen ? "rotate-180 text-[#f4c400]" : "text-white"}`}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isPhoneDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] z-[1000] min-w-[215px] overflow-hidden border border-[#d0dce8]">
                    {officeNumbers.map((office) => (
                      <a key={office.city} href={office.href}
                        className="flex flex-col px-4 py-3 text-[#192c42] border-b border-[#d0dce8]/60 last:border-b-0 hover:bg-gradient-to-r hover:from-[#fff5f8] hover:to-white transition-all duration-150 group/item"
                        onClick={() => { setSelectedOffice(office); setIsPhoneDropdownOpen(false); }}>
                        <span className="font-black text-xs text-[#7a003c]">Office {office.city}</span>
                        <span className="font-black text-sm mt-0.5 text-[#2d4a6b] flex items-center gap-1.5">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-[#00b67a] animate-pulse">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" />
                          </svg>
                          {office.number}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Facebook */}
              <a href="https://www.facebook.com/msdsolicitors" target="_blank" rel="noopener noreferrer"
                className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#1877F2] to-[#0e52a5] hover:from-[#2a84ff] hover:to-[#1154AB]`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              {/* WhatsApp */}
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer"
                className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] border border-white/10 hover:from-[#2ef077] hover:to-[#0f7569] shadow-[0_0_10px_rgba(37,211,102,0.2)]`}>
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp us</span>
              </a>

              {/* Check Eligibility */}
              <Link href="/eligibility/check"
                className={`${topBtnBase} col-span-1 lg:col-span-1 bg-gradient-to-br from-[#f4c400] to-[#d4ab00] text-[#7a003c] hover:from-[#ffd214] hover:to-[#c29d00] font-black hover:shadow-[0_0_25px_rgba(244,196,0,0.45)]`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="shrink-0 text-[#7a003c]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <span className="text-[#7a003c]">Check Eligibility</span>
              </Link>

              {/* Free Consultation */}
              <div className="col-span-1 lg:col-span-1 w-full relative overflow-hidden rounded-xl">
                <Link href="/contact"
                  className={`${topBtnBase} bg-gradient-to-br from-[#7a003c] to-[#5a0028] border-2 border-[#f4c400] hover:from-[#5a0028] hover:to-[#7a003c] animate-pulse hover:animate-none`}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0 text-[#f4c400]">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                  </svg>
                  <span>Free Consultation</span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Brand Navigation Row */}
        <div className="w-full max-w-[1120px] mx-auto px-4 flex items-center justify-between gap-6 py-0 border-b border-[#d0dce8]/60">
          <Link href="/" className="inline-flex items-center gap-4" aria-label="British Citizenship home">
            {/* Replaced old custom SVG block with your optimized image asset directly */}
            <div className="relative w-35 h-35 shrink-0 flex items-center justify-center">
              <Image
                src="/images/citizenLogo.webp"
                alt="British Citizenship Logo"
                width={140}
                height={140}
                priority
                className="object-contain rounded-xl"
              />
            </div>
            <span>
              <strong className="block text-lg sm:text-xl text-[#7a003c]">British Citizenship Solicitors</strong>
              <small className="block text-[#4a6480] mt-0.5 text-xs sm:text-sm">Expert Legal Guidance for Your Journey</small>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2 px-2 py-0 border border-[#d0dce8] rounded-full bg-[#f4f7fb]/80" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className="px-4 py-2.5 rounded-full text-[#192c42] font-extrabold text-sm transition-all duration-200 hover:bg-white hover:text-[#7a003c] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(122,0,60,0.08)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="lg:hidden p-2.5 border border-[#d0dce8] rounded-lg text-[#192c42] hover:bg-[#f4f7fb] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen
                ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>)
                : (<><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>)
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#d0dce8] shadow-[0_8px_20px_rgba(122,0,60,0.1)]">
            <nav className="w-full max-w-[1120px] mx-auto px-4 py-4 grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-bold text-[#192c42] hover:bg-[#fff5f8] transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {activeModalReview && (
        <ReviewModal review={activeModalReview} onClose={() => setActiveModalReview(null)} />
      )}
    </>
  );
}