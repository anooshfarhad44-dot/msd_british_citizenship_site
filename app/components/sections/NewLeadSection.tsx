"use client";

import React, { useState, useRef, useEffect } from "react";
import { countries } from "@/app/data/site";
import { toast } from "react-hot-toast";
import Reveal from "../ui/Reveal";

interface Props {
  context?: string;
}

export default function NewLeadSection({ context = "" }: Props) {
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
      .then((r) => r.json())
      .then((d) => setUserIp(d.ip))
      .catch(() => {});

    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
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
              { name: "firstname", value: firstName },
              { name: "lastname", value: lastName },
              { name: "email", value: fields.email.trim() },
              { name: "mobilephone", value: fields.phone.trim() },
              { name: "country", value: fields.country },
              { name: "message", value: `Quick enquiry — ${context || "website"}` },
            ],
            context: {
              ipAddress: userIp || "127.0.0.1",
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: typeof document !== "undefined" ? document.title : "",
            },
          }),
        }
      );
      if (res.ok) {
        setDone(true);
        toast.success("Thanks! We'll be in touch shortly.");
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("Network error. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const filtered = countries.filter((c) => c.toLowerCase().includes(search.toLowerCase()));

  const inputCls = (f: keyof typeof errors) =>
    `w-full h-11 px-4 rounded-xl border text-sm font-medium focus:outline-none transition-all duration-300 bg-white ${
      touched[f] && errors[f]
        ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
        : "border-[#d0dce8] text-[#7a003c] placeholder-[#9aafbf] focus:border-[#7a003c] focus:ring-2 focus:ring-[#7a003c]/10"
    }`;

  if (done) {
    return (
      <section className="py-20 bg-gradient-to-r from-[#0c7a4a] to-[#065c35]">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="font-black text-2xl mb-2">Request received successfully!</p>
              <p className="text-white/80 text-lg">One of our citizenship solicitors will contact you shortly.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028]">
      <div className="w-full max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4c400]/15 border border-[#f4c400]/30 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f4c400] animate-pulse" />
                <span className="text-[#f4c400] font-extrabold text-xs uppercase tracking-wider">
                  Free Consultation - No Obligation
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
                Get Expert Advice on Your British Citizenship Application
              </h2>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Fill in the form and one of our specialist citizenship solicitors will call you back to discuss your options.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: "⚖️", text: "SRA-Regulated" },
                  { icon: "✅", text: "99% Success Rate" },
                  { icon: "📍", text: "3 UK Offices" },
                  { icon: "🔒", text: "100% Confidential" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/10 rounded-xl p-3 border border-white/15">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-bold text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-[#7a003c] mb-1">Request a Free Callback</h3>
                <p className="text-[#4a6480] text-sm">
                  Complete the form below and we'll be in touch shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#7a003c] mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={fields.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      disabled={loading}
                      className={inputCls("name")}
                    />
                    {touched.name && errors.name && (
                      <p className="text-rose-500 text-[10px] font-semibold mt-1.5">⚠ {errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#7a003c] mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="+44 7123 456789"
                      value={fields.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      disabled={loading}
                      className={inputCls("phone")}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-rose-500 text-[10px] font-semibold mt-1.5">⚠ {errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#7a003c] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@email.com"
                      value={fields.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      disabled={loading}
                      className={inputCls("email")}
                    />
                    {touched.email && errors.email && (
                      <p className="text-rose-500 text-[10px] font-semibold mt-1.5">⚠ {errors.email}</p>
                    )}
                  </div>

                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-[10px] font-black uppercase tracking-wider text-[#7a003c] mb-1.5">
                      Your Country <span className="text-rose-500">*</span>
                    </label>
                    <div
                      onClick={() => !loading && setIsOpen(!isOpen)}
                      className={`${inputCls("country")} flex items-center justify-between cursor-pointer`}
                    >
                      <span className={fields.country ? "text-[#7a003c]" : "text-[#9aafbf]"}>
                        {fields.country || "Select your country"}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#4a6480] transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {touched.country && errors.country && (
                      <p className="text-rose-500 text-[10px] font-semibold mt-1.5">⚠ {errors.country}</p>
                    )}

                    {isOpen && (
                      <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-[#d0dce8] shadow-[0_15px_40px_rgba(122,0,60,0.15)] flex flex-col max-h-52 overflow-hidden">
                        <div className="p-2.5 border-b border-slate-100 bg-slate-50">
                          <input
                            type="text"
                            placeholder="Search countries..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                            className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#7a003c] bg-white"
                          />
                        </div>
                        <ul className="overflow-y-auto flex-1 max-h-36 divide-y divide-slate-50">
                          {filtered.length > 0 ? (
                            filtered.map((c) => (
                              <li
                                key={c}
                                onClick={() => {
                                  setFields((p) => ({ ...p, country: c }));
                                  setErrors((p) => ({ ...p, country: "" }));
                                  setIsOpen(false);
                                  setSearch("");
                                }}
                                className="px-4 py-2.5 text-sm text-slate-700 hover:bg-[#7a003c]/5 hover:text-[#7a003c] cursor-pointer font-medium transition-colors"
                              >
                                {c}
                              </li>
                            ))
                          ) : (
                            <li className="px-4 py-3 text-xs text-slate-400 text-center">No countries found</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl font-black text-base bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] shadow-[0_8px_25px_rgba(244,196,0,0.4)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(244,196,0,0.5)] active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 2L11 13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Get My Free Consultation
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#9aafbf] leading-relaxed">
                  🔒 Your data is completely confidential and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
