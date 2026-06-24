"use client";

import React, { useState, useRef, useEffect } from "react";
import { countries } from "@/app/data/site";
import { toast } from "react-hot-toast";

interface QuickLeadStripProps {
  context?: string;
}

export default function QuickLeadStrip({ context = "" }: QuickLeadStripProps) {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", country: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "", country: "" });
  const [touched, setTouched] = useState({ name: false, phone: false, email: false, country: false });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [userIp, setUserIp] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json()).then((d) => setUserIp(d.ip)).catch(() => {});
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const validate = (name: string, value: string) => {
    let msg = "";
    if (!value.trim()) msg = "This field is required";
    else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = "Enter a valid email";
    else if (name === "phone" && value.replace(/\D/g, "").length < 7) msg = "Enter a valid phone number";
    setErrors((p) => ({ ...p, [name]: msg }));
    return msg;
  };

  const handleChange = (name: string, value: string) => {
    if (name === "phone" && value !== "" && !/^\+?[\d\s]*$/.test(value)) return;
    setFields((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof typeof touched]) validate(name, value);
  };

  const handleBlur = (name: string) => {
    setTouched((p) => ({ ...p, [name]: true }));
    validate(name, fields[name as keyof typeof fields]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const keys = Object.keys(fields) as (keyof typeof fields)[];
    setTouched(keys.reduce((a, k) => ({ ...a, [k]: true }), {} as typeof touched));
    const hasErr = keys.some((k) => validate(k, fields[k]));
    if (hasErr) return;
    setLoading(true);
    const [firstName, ...rest] = fields.name.trim().split(" ");
    const lastName = rest.join(" ") || "-";
    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/8559434/cadbe688-4a2d-459d-926f-1921add1690a",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: [
              { name: "firstname",   value: firstName },
              { name: "lastname",    value: lastName  },
              { name: "email",       value: fields.email.trim() },
              { name: "mobilephone", value: fields.phone.trim() },
              { name: "country",     value: fields.country },
              { name: "message",     value: `Quick enquiry — ${context || "website"}` },
            ],
            context: {
              ipAddress: userIp || "127.0.0.1",
              pageUri:  typeof window   !== "undefined" ? window.location.href : "",
              pageName: typeof document !== "undefined" ? document.title : "",
            },
          }),
        }
      );
      if (res.ok) { setDone(true); toast.success("Thanks! We'll be in touch shortly."); }
      else toast.error("Submission failed. Please try again.");
    } catch { toast.error("Network error. Please retry."); }
    finally { setLoading(false); }
  };

  const filtered = countries.filter((c) => c.toLowerCase().includes(search.toLowerCase()));

  const inputCls = (f: keyof typeof errors) =>
    `w-full h-11 px-4 rounded-xl border text-sm font-medium focus:outline-none transition-all duration-200 bg-white ${
      touched[f] && errors[f]
        ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
        : "border-[#d0dce8] text-[#0c2340] placeholder-[#9aafbf] focus:border-[#1b6fa8] focus:ring-2 focus:ring-[#1b6fa8]/10"
    }`;

  // ── Success ────────────────────────────────────────────────
  if (done) {
    return (
      <section className="bg-gradient-to-r from-[#0c7a4a] to-[#065c35] py-10">
        <div className="w-full max-w-[1120px] mx-auto px-4 flex items-center justify-center gap-4 text-white">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <p className="font-black text-lg">Request received successfully!</p>
            <p className="text-white/80 text-sm">One of our citizenship solicitors will contact you shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  // ── Main section ───────────────────────────────────────────
  return (
    <section className="bg-gradient-to-br from-[#0c2340] via-[#0d3557] to-[#1b4a7a] py-12 md:py-14">
      <div className="w-full max-w-[1120px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Info ──────────────────────────────────── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4c400]/15 border border-[#f4c400]/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#f4c400] animate-pulse" />
              <span className="text-[#f4c400] font-extrabold text-xs uppercase tracking-widest">Free Callback — No Obligation</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
              Speak to a British Citizenship Solicitor Today
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-7">
              Fill in your details and one of our expert solicitors will call you back at a time that suits you — completely free with no obligation.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "⚖️", text: "SRA-regulated solicitors (No: 666682)" },
                { icon: "🇬🇧", text: "All citizenship routes covered — spouse, ILR, settled status" },
                { icon: "✅", text: "99% success rate across thousands of applications" },
                { icon: "📍", text: "Offices in Manchester, London & Birmingham" },
                { icon: "🔒", text: "Your details are 100% confidential — no spam, ever" },
              ].map((p) => (
                <div key={p.text} className="flex items-center gap-3">
                  <span className="text-lg shrink-0">{p.icon}</span>
                  <span className="text-white/80 text-sm font-medium">{p.text}</span>
                </div>
              ))}
            </div>

            {/* Office numbers */}
            <div className="flex flex-wrap gap-3 mt-7">
              {[
                { city: "Manchester", num: "0161 503 0553", href: "tel:+441615030553" },
                { city: "London",     num: "020 4537 5050", href: "tel:+442045375050" },
              ].map((o) => (
                <a key={o.city} href={o.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 transition-all duration-200 group">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#f4c400] shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <div>
                    <div className="text-[10px] text-white/50 font-bold uppercase tracking-wide leading-none">{o.city}</div>
                    <div className="text-white font-black text-xs group-hover:text-[#f4c400] transition-colors">{o.num}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form card ────────────────────────────── */}
          <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Top bar */}
            <div className="bg-gradient-to-r from-[#0c2340] via-[#1b6fa8] to-[#f4c400] h-1.5" />

            <div className="p-7">
              {/* Form header */}
              <div className="mb-5">
                <h3 className="text-lg font-black text-[#0c2340]">Request a Free Callback</h3>
                <p className="text-[#4a6480] text-xs mt-1 leading-relaxed">
                  Complete the form below and a solicitor will call you back — usually within 1 business hour.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#0c2340] mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input type="text" placeholder="e.g. John Smith" value={fields.name}
                      onChange={(e) => handleChange("name", e.target.value)} onBlur={() => handleBlur("name")}
                      disabled={loading} className={inputCls("name")} />
                    {touched.name && errors.name && <p className="text-rose-500 text-[10px] font-semibold mt-0.5">⚠ {errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#0c2340] mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input type="text" placeholder="e.g. +44 7123 456789" value={fields.phone}
                      onChange={(e) => handleChange("phone", e.target.value)} onBlur={() => handleBlur("phone")}
                      disabled={loading} className={inputCls("phone")} />
                    {touched.phone && errors.phone && <p className="text-rose-500 text-[10px] font-semibold mt-0.5">⚠ {errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#0c2340] mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input type="email" placeholder="e.g. john@email.com" value={fields.email}
                      onChange={(e) => handleChange("email", e.target.value)} onBlur={() => handleBlur("email")}
                      disabled={loading} className={inputCls("email")} />
                    {touched.email && errors.email && <p className="text-rose-500 text-[10px] font-semibold mt-0.5">⚠ {errors.email}</p>}
                  </div>

                  {/* Country dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#0c2340] mb-1">
                      Your Country <span className="text-rose-500">*</span>
                    </label>
                    <div onClick={() => !loading && setIsOpen(!isOpen)}
                      className={`w-full h-11 px-4 rounded-xl border text-sm font-medium flex items-center justify-between cursor-pointer bg-white transition-all duration-200 ${
                        touched.country && errors.country
                          ? "border-rose-400"
                          : "border-[#d0dce8] hover:border-[#1b6fa8]"
                      } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
                      <span className={fields.country ? "text-[#0c2340]" : "text-[#9aafbf]"}>
                        {fields.country || "Select country"}
                      </span>
                      <svg className={`w-4 h-4 text-[#4a6480] transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                    {touched.country && errors.country && <p className="text-rose-500 text-[10px] font-semibold mt-0.5">⚠ {errors.country}</p>}

                    {isOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white rounded-xl border border-[#d0dce8] shadow-[0_12px_30px_rgba(12,35,64,0.12)] flex flex-col max-h-52 overflow-hidden">
                        <div className="p-2 border-b border-slate-100 bg-slate-50">
                          <input type="text" placeholder="Search country..." value={search}
                            onChange={(e) => setSearch(e.target.value)} autoFocus
                            className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#1b6fa8] bg-white" />
                        </div>
                        <ul className="overflow-y-auto flex-1 max-h-36 divide-y divide-slate-50">
                          {filtered.length > 0 ? filtered.map((c) => (
                            <li key={c} onClick={() => { setFields((p) => ({ ...p, country: c })); setErrors((p) => ({ ...p, country: "" })); setIsOpen(false); setSearch(""); }}
                              className="px-4 py-2.5 text-sm text-slate-700 hover:bg-[#1b6fa8]/5 hover:text-[#1b6fa8] cursor-pointer font-medium">{c}</li>
                          )) : <li className="px-4 py-3 text-xs text-slate-400 text-center">No countries found</li>}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading}
                  className="w-full h-12 rounded-xl font-black text-sm bg-[#f4c400] text-[#0c2340] hover:bg-[#0c2340] hover:text-white shadow-[0_6px_20px_rgba(244,196,0,0.35)] hover:shadow-[0_8px_26px_rgba(12,35,64,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1">
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      Request Free Callback
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-[#9aafbf] leading-relaxed">
                  🔒 Your data is confidential and will never be shared with third parties.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
