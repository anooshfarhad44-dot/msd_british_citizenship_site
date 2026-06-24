import CaseReviewForm from "../components/ui/CaseReviewForm";
import { contact } from "../data/site";

const officeInfo = [
  {
    city: "Manchester",
    address: "Suite 2, First Floor, 6, Oldham Road, Manchester, M4 5DB",
    phone: "0161 503 0553",
    href: "tel:+441615030553",
  },
  {
    city: "London",
    address: "Berkeley Square House, Berkeley Square, London, W1J 6BD",
    phone: "020 4537 5050",
    href: "tel:+442045375050",
  },
  {
    city: "Birmingham",
    address: "Two Snowhill, Snow Hill Queensway, Birmingham, B4 6GA",
    phone: "0121 725 1550",
    href: "tel:+441217251550",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#0c2340] to-[#1b6fa8] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            Free Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            Contact Our Citizenship Solicitors
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to start your British Citizenship journey? Our expert solicitors are here to help.
            Book a free consultation or submit a case review request below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f8fd]">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">

            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#0c2340] mb-6">Get in Touch</h2>

              <div className="flex flex-col gap-4 mb-8">
                <a href={contact.phoneHref} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#1b6fa8] hover:-translate-y-0.5 transition-all duration-200 group">
                  <div className="w-12 h-12 bg-[#f4c400] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#0c2340]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#1b6fa8] mb-0.5">Call Us</div>
                    <div className="font-extrabold text-[#0c2340] group-hover:text-[#1b6fa8] transition-colors">{contact.phone}</div>
                  </div>
                </a>

                <a href={contact.emailHref} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#1b6fa8] hover:-translate-y-0.5 transition-all duration-200 group">
                  <div className="w-12 h-12 bg-[#1b6fa8] rounded-xl flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#1b6fa8] mb-0.5">Email Us</div>
                    <div className="font-extrabold text-[#0c2340] group-hover:text-[#1b6fa8] transition-colors">{contact.email}</div>
                  </div>
                </a>

                <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#d0dce8] hover:border-[#25D366] hover:-translate-y-0.5 transition-all duration-200 group">
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16.02 3.2A12.78 12.78 0 0 0 5.05 22.55L3.2 28.8l6.42-1.74a12.73 12.73 0 0 0 6.4 1.72h.01A12.79 12.79 0 0 0 16.02 3.2Zm0 23.4h-.01a10.58 10.58 0 0 1-5.39-1.47l-.39-.23-3.8 1.03 1.08-3.68-.25-.38a10.61 10.61 0 1 1 8.76 4.73Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#25D366] mb-0.5">WhatsApp</div>
                    <div className="font-extrabold text-[#0c2340]">Chat with us now</div>
                  </div>
                </a>
              </div>

              <h3 className="text-lg font-bold text-[#0c2340] mb-4">Our Offices</h3>
              <div className="flex flex-col gap-3">
                {officeInfo.map((office) => (
                  <div key={office.city} className="p-4 bg-white rounded-2xl border border-[#d0dce8]">
                    <div className="font-black text-[#1b6fa8] text-sm mb-1">{office.city}</div>
                    <div className="text-xs text-[#4a6480] mb-1.5">{office.address}</div>
                    <a href={office.href} className="text-xs font-bold text-[#f4c400] hover:text-[#0c2340] transition-colors">{office.phone}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <CaseReviewForm />
          </div>
        </div>
      </section>
    </div>
  );
}
