import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6282174464169";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Webora Studio! Saya tertarik untuk mendiskusikan project."
)}`;

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.17_152)] text-white shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.72_0.17_152)] opacity-20" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-elegant transition-opacity group-hover:opacity-100">
        Chat WhatsApp
      </span>
    </a>
  );
}
