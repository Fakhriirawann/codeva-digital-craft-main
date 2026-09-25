import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "6282174464169";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Webora Studio! Saya tertarik untuk mendiskusikan project."
)}`;

export function WhatsAppFab() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show prompt bubble after 3.5 seconds
    const timer = setTimeout(() => {
      if (!dismissed) setShowBubble(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Interactive Micro Bubble */}
      <AnimatePresence>
        {showBubble && !dismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mr-3 hidden items-center gap-2 rounded-2xl border border-border/80 bg-background/95 p-3 shadow-elegant backdrop-blur-xl sm:flex max-w-xs"
          >
            <div className="text-xs">
              <p className="font-semibold text-foreground">Butuh konsultasi cepat?</p>
              <p className="text-muted-foreground text-[11px]">Chat langsung dengan tim kami di WhatsApp</p>
            </div>
            <button
              onClick={() => {
                setShowBubble(false);
                setDismissed(true);
              }}
              aria-label="Tutup pesan"
              className="ml-1 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.17_152)] text-white shadow-elegant transition-all duration-300 hover:scale-110 hover:shadow-glow"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.72_0.17_152)] opacity-25" />
        <MessageCircle className="relative h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-elegant transition-opacity group-hover:opacity-100 sm:hidden">
          Chat WhatsApp
        </span>
      </a>
    </div>
  );
}
