import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center md:px-16 md:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklab,var(--brand)_50%,transparent),transparent_70%)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-4xl text-white text-balance md:text-6xl">
                Have a project in mind? <span className="italic text-accent">Let's talk.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
                Tell us about your goals and timeline. We'll respond within one business day with next steps.
              </p>
              <Link
                to="/contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:shadow-glow"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
