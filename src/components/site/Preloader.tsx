import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/Webora-logo.png";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-70" />
          <div className="pointer-events-none absolute inset-0 grain opacity-30" />

            <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Efek kilau/glow di belakang logo diperlebar mengikuti ukuran logo baru */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-accent/30 blur-3xl"
              />
              <img
                src={logo}
                alt="Webora Studio"
                width={160} // Diubah dari 72
                height={160}
                // Diperbesar menjadi h-28 di mobile dan md:h-40 di desktop
                className="relative h-28 w-28 md:h-40 md:w-40 object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-2"
            >
              {/* Teks dinaikkan menjadi text-3xl di mobile dan md:text-4xl di desktop */}
              <span className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
                Webora <span className="text-muted-foreground font-normal">Studio</span>
              </span>
            </motion.div>

            {/* Garis loading bar diperlebar sedikit agar serasi dengan teks yang membesar */}
            <div className="relative h-px w-52 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
