import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

/** Persistent floating WhatsApp button shown on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-[90] flex items-center gap-2.5 rounded-full bg-[#25D366] p-3 text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)] sm:py-2.5 sm:pl-2.5 sm:pr-4 md:bottom-7 md:right-7"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center sm:h-7 sm:w-7">
        <WhatsAppIcon className="h-6 w-6 sm:h-5 sm:w-5" />
      </span>
      <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] sm:block">
        WhatsApp Us
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/35 [animation-duration:2.5s] motion-reduce:hidden" />
    </a>
  );
}
