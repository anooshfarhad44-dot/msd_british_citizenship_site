"use client";

import React, { useState, useEffect, useRef } from "react";
import { countries } from "@/app/data/site";
import { toast } from "react-hot-toast";

interface ProcessLeadFormProps {
  heading?: string;
  description?: string;
  context?: string; // eligible | ineligible | page name — sent with message
}

export default function ProcessLeadForm({
  heading = "Speak to a Citizenship Solicitor",
  description = "Leave your details and one of our expert solicitors will be in touch to discuss your British Citizenship application.",
  context = "",
}: ProcessLeadFormProps) {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", country: "", message: "" });
  const [errors, setErrors]   = useState({ firstName: "", lastName: "", phone: "", email: "", country: "", message: "" });
  const [touched, setTouched] = useState({ firstName: false, lastName: false, phone: false, email: false, country: false, message: false });
  const [loading, setLoading] = useState(false);
  const [userIp, setUserIp]   = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen]   = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json()).then((d) => setUserIp(d.ip))
      .catch(() => setUserIp("127.0.0.1"));
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const getHubspotCookie = () => {
    if (typeof document === "undefined") return undefined;
    const m = document.cookie.match(/hubspotutk=([^;]+)/);
    return m ? m[1] : undefined;
  };

  const validateField = (name: string, value: string) => {
    let msg = "";
    if (!value.trim()) { msg = "This field is required"; }
    else if ((name === "firstName" || name === "lastName") && /[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) { msg = "Invalid characters"; }
    else if (name === "phone" && !/^\+?[0-9]{7,}$/.test(value.replace(/\s/g,""))) { msg = "Enter a valid phone number"; }
    else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) { msg = "Enter a valid email address"; }
    else if (name === "message" && value.trim().length < 10) { msg = "Please write at least 10 characters"; }
    setErrors((p) => ({ ...p, [name]: msg }));
    return msg;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if ((name === "firstName" || name === "lastName") && /[0-9]/.test(value)) return;
    if (name === "phone" && value !== "" && !/^\+?[0-9\s]*$/.test(value)) return;
    setFormData((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof typeof touched]) validateField(name, value);
  };

  const handleBlur = (name: string) => {
    setTouched((p) => ({ ...p, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fields = Object.keys(formData) as (keyof typeof formData)[];
    setTouched(fields.reduce((a, k) => ({ ...a, [k]: true }), {} as typeof touched));
    const hasErr = fields.some((k) => validateField(k, formData[k]));
    if (hasErr) { toast.error("Please fix the highlighted fields."); return; }

    setLoading(true);
    const fullMessage = context ? `[${context}]\n\n${formData.message}` : formData.message;

    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/8559434/cadbe688-4a2d-459d-926f-1921add1690a",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: [
              { name: "firstname", value: formData.firstName.trim() },
              { name: "lastname",  value: formData.lastName.trim()  },
              { name: "email",     value: formData.email.trim()     },
              { name: "mobilephone", value: formData.phone.trim()   },
              { name: "country",   value: formData.country          },
              { name: "message",   value: fullMessage.trim()        },
            ],
            context: {
              hutk: getHubspotCookie(),
              ipAddress: userIp || "127.0.0.1",
              pageUri:  typeof window   !== "undefined" ? window.location.href : "",
              pageName: typeof document !== "undefined" ? document.title       : "",
            },
          }),
        }
      );

      if (res.ok) {
        toast.success("Request received! Our team will be in touch shortly.");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", country: "", message: "" });
        setTouched(fields.reduce((a, k) => ({ ...a, [k]: false }), {} as typeof touched));
      } else {
        toast.error("Submission failed. Please try again or call us directly.");
      }
    } catch {
      toast.error("Network error. Please check your connection and retry.");
    } finally {
      setLoading(false);
    }
  };

  const filtered = countries.filter((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

  const inputCls = (field: keyof typeof errors) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none transition-all duration-200 ${
      touched[field] && errors[field]
        ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/10"
        : "border-slate-200 bg-slate-50/50 focus:border-[#1b6fa8] focus:bg-white focus:ring-2 focus:ring-[#1b6fa8]/10"
    }`;

  return (
    <div className={`w-full rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_15px_40px_rgba(27,111,168,0.07)] transition-all duration-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0c2340] via-[#1b6fa8] to-[#f4c400] rounded-t-2xl" />

      <div className="mb-6">
        <h3 className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0c2340] via-[#1b6fa8] to-[#0c2340]">
          {heading}
        </h3>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(["firstName", "lastName"] as const).map((f) => (
            <div key={f}>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-1.5">
                {f === "firstName" ? "First Name" : "Last Name"} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text" name={f} disabled={loading} value={formData[f]}
                onChange={handleChange} onBlur={() => handleBlur(f)}
                placeholder={f === "firstName" ? "John" : "Doe"}
                className={inputCls(f)}
              />
              {touched[f] && errors[f] && <p className="text-xs font-semibold text-rose-500 mt-1">⚠ {errors[f]}</p>}
            </div>
          ))}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(["email", "phone"] as const).map((f) => (
            <div key={f}>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-1.5">
                {f === "email" ? "Email Address" : "Phone Number"} <span className="text-rose-500">*</span>
              </label>
              <input
                type={f === "email" ? "email" : "text"} name={f} disabled={loading} value={formData[f]}
                onChange={handleChange} onBlur={() => handleBlur(f)}
                placeholder={f === "email" ? "john@example.com" : "+44 7123 456789"}
                className={inputCls(f)}
              />
              {touched[f] && errors[f] && <p className="text-xs font-semibold text-rose-500 mt-1">⚠ {errors[f]}</p>}
            </div>
          ))}
        </div>

        {/* Country */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-1.5">
            Your Country <span className="text-rose-500">*</span>
          </label>
          <div
            onClick={() => !loading && setIsOpen(!isOpen)}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm flex items-center justify-between cursor-pointer transition-all duration-200 ${
              touched.country && errors.country ? "border-rose-400 bg-rose-50/30" : "border-slate-200 bg-slate-50/50"
            } ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            <span className={formData.country ? "text-slate-900 font-medium" : "text-slate-400"}>
              {formData.country || "Select your country"}
            </span>
            <svg className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-xl max-h-60 flex flex-col overflow-hidden">
              <div className="p-2 border-b border-slate-100 bg-slate-50">
                <input type="text" placeholder="Search country..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-[#1b6fa8] bg-white" autoFocus />
              </div>
              <ul className="overflow-y-auto flex-1 max-h-44 divide-y divide-slate-50">
                {filtered.length > 0 ? filtered.map((c, i) => (
                  <li key={i} onClick={() => { setFormData((p) => ({ ...p, country: c })); setErrors((p) => ({ ...p, country: "" })); setIsOpen(false); setSearchQuery(""); }}
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-[#1b6fa8]/5 hover:text-[#1b6fa8] cursor-pointer font-medium">{c}</li>
                )) : (
                  <li className="px-4 py-3 text-xs text-slate-400 text-center">No countries found</li>
                )}
              </ul>
            </div>
          )}
          {touched.country && errors.country && <p className="text-xs font-semibold text-rose-500 mt-1">⚠ {errors.country}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-1.5">
            Your Message <span className="text-rose-500">*</span>
          </label>
          <textarea name="message" rows={4} disabled={loading} value={formData.message}
            onChange={handleChange} onBlur={() => handleBlur("message")}
            placeholder="Tell us about your citizenship situation or any questions you have..."
            className={`${inputCls("message")} resize-none`}
          />
          {touched.message && errors.message && <p className="text-xs font-semibold text-rose-500 mt-1">⚠ {errors.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading}
          className="w-full mt-2 bg-[#f4c400] hover:bg-[#0c2340] text-[#0c2340] hover:text-white font-black text-sm py-3 px-6 rounded-2xl shadow-[0_10px_25px_-5px_rgba(244,196,0,0.35)] hover:shadow-[0_12px_30px_-5px_rgba(27,111,168,0.4)] hover:-translate-y-0.5 active:translate-y-0 tracking-wide uppercase flex items-center justify-center min-h-[46px] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-[#0c2340] group-hover:border-white border-t-transparent rounded-full animate-spin" />
          ) : "Get Expert Advice"}
        </button>

        <p className="text-center text-[10px] text-slate-400 leading-relaxed">
          🔒 Your data is safe and confidential. We will never share your details with third parties.
        </p>
      </form>
    </div>
  );
}
