import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const WHATSAPP_NUMBER = "6282174464169";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Webora Studio! Saya ingin mendiskusikan rencana project baru."
)}`;

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center md:px-16 md:py-24 shadow-elegant border border-white/10">
            {/* Ambient Animated Gradient Orbs */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(70%_90%_at_50%_0%,color-mix(in_oklab,var(--brand)_60%,transparent),transparent_70%)]" />
            <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-violet/20 blur-3xl" />

            <div className="relative z-10">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>Let's collaborate on your next milestone</span>
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold text-white text-balance sm:text-5xl md:text-6xl">
                Have an ambitious project in mind?{" "}
                <span className="italic text-brand-gradient">Let's talk.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg">
                Tell us about your objectives, timeline, and vision. We'll reply within one business day with clear recommendations and a roadmap.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:bg-accent hover:text-ink-foreground hover:shadow-glow"
                >
                  <span>Start a conversation</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[oklch(0.72_0.17_152)] hover:bg-[oklch(0.72_0.17_152)]/20"
                >
                  <MessageCircle className="h-4 w-4 text-[oklch(0.72_0.17_152)]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
