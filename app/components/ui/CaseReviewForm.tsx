"use client";

import React, { useState, useRef, useEffect } from "react";
import { countries, citizenshipServices } from "@/app/data/site";
import { toast } from "react-hot-toast";

interface SearchableDropdownProps {
  options: string[];
  placeholder: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  hasError?: boolean;
}

function SearchableDropdown({ options, placeholder, selectedValue, onSelect, hasError }: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => { setIsOpen(!isOpen); setSearchTerm(""); }}
        className={`w-full min-h-[52px] px-4 rounded-xl border flex items-center justify-between cursor-pointer bg-slate-50 transition-all text-sm font-medium ${
          isOpen
            ? "border-[#1b6fa8] ring-4 ring-[#1b6fa8]/5 bg-white shadow-sm"
            : hasError
            ? "border-red-500 ring-4 ring-red-500/5 text-[#0c2340]"
            : "border-slate-200 text-[#0c2340] hover:bg-white hover:border-slate-300"
        }`}
      >
        <span className={selectedValue ? "text-[#0c2340] font-semibold" : "text-gray-400 text-xs"}>
          {selectedValue || placeholder}
        </span>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className={`text-[#1b6fa8] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-slate-200 shadow-[0_12px_30px_rgba(12,35,64,0.12)] overflow-hidden origin-top">
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <input
              type="text"
              placeholder="Search option..."
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-9 px-3 text-xs font-medium rounded-lg border border-slate-200 bg-white text-[#0c2340] placeholder-gray-400 focus:outline-none focus:border-[#1b6fa8] focus:ring-2 focus:ring-[#1b6fa8]/10"
            />
          </div>
          <ul className="max-h-[220px] overflow-y-auto p-1 list-none m-0">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => { onSelect(option); setIsOpen(false); }}
                  className={`px-3 py-2.5 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
                    selectedValue === option
                      ? "bg-[#1b6fa8] text-white"
                      : "text-[#192c42] hover:bg-blue-50 hover:text-[#1b6fa8]"
                  }`}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-4 text-xs font-medium text-gray-400 text-center">No matching options found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryResidence: "",
  nationality: "",
  citizenshipService: "",
  concerns: [] as string[],
  tailoredAdvice: "",
  consent: false,
};

export default function CaseReviewForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email address is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.replace(/[^0-9]/g, "").length < 7) newErrors.phone = "Please enter a valid phone number";
    if (!formData.countryResidence) newErrors.countryResidence = "Please select country of residence";
    if (!formData.nationality) newErrors.nationality = "Please select your nationality";
    if (!formData.citizenshipService) newErrors.citizenshipService = "Please select a citizenship service";
    if (formData.concerns.length === 0) newErrors.concerns = "Please pick at least one concern";
    if (!formData.tailoredAdvice) newErrors.tailoredAdvice = "Please select if you want tailored advice";
    if (!formData.consent) newErrors.consent = "Consent is required to process your details";
    setErrors(newErrors);
  }, [formData]);

  const handleBlur = (field: string) => setTouched((prev) => ({ ...prev, [field]: true }));

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(e.key)) e.preventDefault();
  };

  const handleNameChange = (field: "firstName" | "lastName", value: string) => {
    const cleanValue = value.replace(/[0-9!@#$%^&*(),.?":{}|<>]/g, "");
    setFormData((prev) => ({ ...prev, [field]: cleanValue }));
  };

  const handlePhoneChange = (value: string) => {
    const cleanValue = value.replace(/[a-zA-Z]/g, "");
    setFormData((prev) => ({ ...prev, phone: cleanValue }));
  };

  const handleCheckboxChange = (concern: string) => {
    setFormData((prev) => {
      const updatedConcerns = prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern];
      return { ...prev, concerns: updatedConcerns };
    });
    setTouched((prev) => ({ ...prev, concerns: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      let userIp = "";
      try {
        const ipResponse = await fetch("https://api.ipify.org?format=json");
        if (ipResponse.ok) { const ipData = await ipResponse.json(); userIp = ipData.ip; }
      } catch {}

      const portalId = "8559434";
      const formId = "6a1f6e88-09d1-48af-9b40-3163b27ffd6a";
      const targetUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

      const formattedConcerns = formData.concerns.map((c, i) => `${i + 1}. ${c}`).join("; ");

      const requestBody = {
        fields: [
          { name: "firstname", value: formData.firstName },
          { name: "lastname", value: formData.lastName },
          { name: "email", value: formData.email },
          { name: "phone", value: formData.phone },
          { name: "country", value: formData.countryResidence },
          { name: "address", value: formData.nationality },
          { name: "what_services_do_you_need", value: formData.citizenshipService },
          { name: "what_type_of_visa_service_are_you_interested_in", value: formattedConcerns },
          { name: "company", value: formData.tailoredAdvice },
        ],
        context: {
          ipAddress: userIp,
          pageUri: typeof window !== "undefined" ? window.location.href : "",
          pageName: typeof window !== "undefined" ? document.title : "",
        },
      };

      try {
        const response = await fetch(targetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        if (response.ok) {
          toast.success("Case review submitted successfully! Our team will be in touch shortly.");
          setFormData(initialFormState);
          setTouched({});
        } else {
          toast.error("Submission failed. Please try again or call us directly.");
        }
      } catch {
        toast.error("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-[0_22px_60px_rgba(12,35,64,0.06)] relative before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-r before:from-[#1b6fa8] before:to-[#f4c400] before:rounded-t-2xl">
      <h2 className="text-2xl font-black text-[#0c2340] mb-2 tracking-tight">
        Request a Free Case Review
      </h2>
      <p className="text-xs font-semibold text-gray-400 mb-6">
        Fill out the secure form below for immediate citizenship support.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">First Name <span className="text-red-500">*</span></label>
            <input
              type="text" placeholder="First Name" required disabled={isSubmitting}
              value={formData.firstName} onKeyDown={handleNameKeyDown} onBlur={() => handleBlur("firstName")}
              onChange={(e) => handleNameChange("firstName", e.target.value)}
              className={`w-full h-[52px] px-4 rounded-xl border bg-slate-50 text-[#0c2340] placeholder-gray-400 placeholder:text-xs font-medium focus:outline-none focus:bg-white focus:ring-4 transition-all text-sm ${touched.firstName && errors.firstName ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" : "border-slate-200 focus:border-[#1b6fa8] focus:ring-[#1b6fa8]/5"}`}
            />
            {touched.firstName && errors.firstName && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.firstName}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text" placeholder="Last Name" required disabled={isSubmitting}
              value={formData.lastName} onKeyDown={handleNameKeyDown} onBlur={() => handleBlur("lastName")}
              onChange={(e) => handleNameChange("lastName", e.target.value)}
              className={`w-full h-[52px] px-4 rounded-xl border bg-slate-50 text-[#0c2340] placeholder-gray-400 placeholder:text-xs font-medium focus:outline-none focus:bg-white focus:ring-4 transition-all text-sm ${touched.lastName && errors.lastName ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" : "border-slate-200 focus:border-[#1b6fa8] focus:ring-[#1b6fa8]/5"}`}
            />
            {touched.lastName && errors.lastName && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.lastName}</p>}
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email" placeholder="Email Address" required disabled={isSubmitting}
              value={formData.email} onBlur={() => handleBlur("email")}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full h-[52px] px-4 rounded-xl border bg-slate-50 text-[#0c2340] placeholder-gray-400 placeholder:text-xs font-medium focus:outline-none focus:bg-white focus:ring-4 transition-all text-sm ${touched.email && errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" : "border-slate-200 focus:border-[#1b6fa8] focus:ring-[#1b6fa8]/5"}`}
            />
            {touched.email && errors.email && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel" placeholder="Phone Number" required disabled={isSubmitting}
              value={formData.phone} onBlur={() => handleBlur("phone")}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={`w-full h-[52px] px-4 rounded-xl border bg-slate-50 text-[#0c2340] placeholder-gray-400 placeholder:text-xs font-medium focus:outline-none focus:bg-white focus:ring-4 transition-all text-sm ${touched.phone && errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500/5" : "border-slate-200 focus:border-[#1b6fa8] focus:ring-[#1b6fa8]/5"}`}
            />
            {touched.phone && errors.phone && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.phone}</p>}
          </div>
        </div>

        {/* Dropdowns Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">Country of Residence <span className="text-red-500">*</span></label>
            <SearchableDropdown options={countries} placeholder="Country of Residence" selectedValue={formData.countryResidence}
              hasError={!!(touched.countryResidence && errors.countryResidence)}
              onSelect={(val) => { setFormData({ ...formData, countryResidence: val }); handleBlur("countryResidence"); }}
            />
            {touched.countryResidence && errors.countryResidence && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.countryResidence}</p>}
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-[#0c2340]">Nationality <span className="text-red-500">*</span></label>
            <SearchableDropdown options={countries} placeholder="Your Nationality" selectedValue={formData.nationality}
              hasError={!!(touched.nationality && errors.nationality)}
              onSelect={(val) => { setFormData({ ...formData, nationality: val }); handleBlur("nationality"); }}
            />
            {touched.nationality && errors.nationality && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.nationality}</p>}
          </div>
        </div>

        {/* Service Dropdown */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-[#0c2340]">Citizenship Service You Need <span className="text-red-500">*</span></label>
          <SearchableDropdown options={citizenshipServices} placeholder="Select Citizenship Service" selectedValue={formData.citizenshipService}
            hasError={!!(touched.citizenshipService && errors.citizenshipService)}
            onSelect={(val) => { setFormData({ ...formData, citizenshipService: val }); handleBlur("citizenshipService"); }}
          />
          {touched.citizenshipService && errors.citizenshipService && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.citizenshipService}</p>}
        </div>

        {/* Concerns */}
        <div className={`bg-slate-50 p-4 rounded-xl border transition-all ${touched.concerns && errors.concerns ? "border-red-500" : "border-slate-200"}`}>
          <label className="block text-xs font-bold text-[#0c2340] mb-3 uppercase tracking-wide">
            Main Concerns – select all that apply <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2.5 max-h-[160px] overflow-y-auto pr-1">
            {["Unsure which citizenship route applies to me", "Application refused or delayed", "Urgent deadline", "Complex case or unique circumstances", "Need help with Life in the UK Test preparation", "Other"].map((concern) => (
              <label key={concern} className="flex items-start gap-3 text-xs font-bold text-[#192c42] cursor-pointer select-none group">
                <input type="checkbox" disabled={isSubmitting} checked={formData.concerns.includes(concern)}
                  onChange={() => handleCheckboxChange(concern)}
                  className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#1b6fa8] focus:ring-[#1b6fa8] accent-[#1b6fa8] cursor-pointer"
                />
                <span className="group-hover:text-[#1b6fa8] transition-colors">{concern}</span>
              </label>
            ))}
          </div>
          {touched.concerns && errors.concerns && <p className="text-[10px] font-semibold text-red-500 mt-2 m-0">{errors.concerns}</p>}
        </div>

        {/* Tailored Advice Radio */}
        <div className={`bg-slate-50 p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${touched.tailoredAdvice && errors.tailoredAdvice ? "border-red-500" : "border-slate-200"}`}>
          <label className="text-xs font-bold text-[#0c2340] uppercase tracking-wide">
            Want tailored advice? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            {["Yes", "No"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-xs font-bold text-[#192c42] cursor-pointer group">
                <input type="radio" name="tailoredAdvice" required disabled={isSubmitting} value={option}
                  checked={formData.tailoredAdvice === option}
                  onChange={(e) => { setFormData({ ...formData, tailoredAdvice: e.target.value }); handleBlur("tailoredAdvice"); }}
                  className="w-4 h-4 text-[#1b6fa8] focus:ring-[#1b6fa8] accent-[#1b6fa8] cursor-pointer"
                />
                <span className="group-hover:text-[#1b6fa8] transition-colors">{option}</span>
              </label>
            ))}
          </div>
          {touched.tailoredAdvice && errors.tailoredAdvice && <p className="text-[10px] font-semibold text-red-500 m-0">{errors.tailoredAdvice}</p>}
        </div>

        {/* Consent */}
        <div className="pt-1">
          <label className="flex items-start gap-3 text-[11px] font-semibold text-gray-400 cursor-pointer select-none">
            <input type="checkbox" required disabled={isSubmitting} checked={formData.consent}
              onChange={(e) => { setFormData({ ...formData, consent: e.target.checked }); handleBlur("consent"); }}
              className={`mt-0.5 w-4 h-4 shrink-0 rounded border-gray-300 text-[#1b6fa8] focus:ring-[#1b6fa8] accent-[#1b6fa8] cursor-pointer ${touched.consent && errors.consent ? "outline outline-2 outline-red-500/50 rounded-sm" : ""}`}
            />
            <span className="leading-tight">
              I consent to my data being used by MSD Solicitors to process my enquiry and keep me informed. <span className="text-red-500">*</span>
            </span>
          </label>
          {touched.consent && errors.consent && <p className="text-[10px] font-semibold text-red-500 mt-1 m-0">{errors.consent}</p>}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit" disabled={isSubmitting}
            className="w-full h-[54px] flex items-center justify-center bg-[#1b6fa8] text-white font-black text-sm rounded-xl shadow-[0_10px_25px_-5px_rgba(27,111,168,0.3)] hover:bg-[#0b5156] hover:shadow-[0_12px_30px_-5px_rgba(27,111,168,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
          >
            {isSubmitting ? "Submitting..." : "Submit Case Review Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
