import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface FloatingBadge {
  icon: LucideIcon;
  label: string;
  value: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  tone?: "accent" | "violet";
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  badges?: FloatingBadge[];
  children?: ReactNode;
  align?: "left" | "center";
}

const positionClasses = {
  "top-left": "top-8 left-6 md:left-10",
  "top-right": "top-8 right-6 md:right-10",
  "bottom-left": "bottom-8 left-6 md:left-10",
  "bottom-right": "bottom-8 right-6 md:right-10",
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  badges = [],
  children,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Background textures */}
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-brand/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet/12 blur-3xl" />

      {/* Floating badges */}
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          className={`pointer-events-none absolute hidden md:flex items-center gap-2.5 rounded-2xl border border-border/70 bg-background/90 px-4 py-2.5 shadow-card backdrop-blur-md ${positionClasses[badge.position]}`}
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${
            badge.tone === "violet" ? "bg-violet-soft text-violet" : "bg-accent/15 text-accent"
          }`}>
            <badge.icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">{badge.label}</p>
            <p className="text-xs font-semibold text-foreground">{badge.value}</p>
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-7xl container-px">
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-foreground text-balance sm:text-5xl md:text-6xl">
              {title}
              {titleAccent && (
                <>
                  {" "}
                  <span className="italic text-brand-gradient">{titleAccent}</span>
                </>
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              {description}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
