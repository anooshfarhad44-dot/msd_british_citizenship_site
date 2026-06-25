import { contact } from "../../data/site";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 min-h-[58px] px-5 py-3 rounded-full bg-[#25d366] text-white font-black shadow-[0_18px_42px_rgba(12,35,64,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_rgba(12,35,64,0.34)] transition-all duration-200 md:flex"
    >
      <WhatsAppIcon className="w-8 h-8 shrink-0 text-white fill-current" />
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}