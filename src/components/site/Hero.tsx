import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Code2, CheckCircle2, Shield, Zap, Laptop, Globe, Cpu } from "lucide-react";
import heroImg from "@/assets/hero-visual.jpg";

const techStack = [
  { name: "React 19", icon: Cpu },
  { name: "Next.js / Start", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Cloudflare", icon: Zap },
  { name: "Figma UI/UX", icon: Laptop },
  { name: "Node.js & APIs", icon: Shield },
  { name: "Framer Motion", icon: Sparkles },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background grain and ambient glows */}
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-violet/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet" />
              </span>
              <span>Webora Studio · Digital Product Craft</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 text-4xl leading-[1.06] text-foreground text-balance sm:text-6xl lg:text-[5rem]"
            >
              We design & build{" "}
              <span className="italic text-brand-gradient">
                digital products
              </span>{" "}
              that elevate brands<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Webora Studio partners with ambitious founders and companies to ship modern websites,
              mobile apps, and design systems engineered for speed, conversion, and longevity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ink-foreground shadow-elegant transition-all duration-300 hover:bg-accent hover:shadow-glow"
              >
                <span>Start your project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-secondary"
              >
                Explore our work
              </Link>
            </motion.div>

            {/* Micro-trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>100% In-House Senior Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Lighthouse 100 Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>Predictable On-Time Delivery</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual & Floating Dynamic Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/60 bg-surface shadow-elegant">
              <img
                src={heroImg}
                alt="Digital Craft Visual"
                width={1280}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Glass Bottom Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/70 bg-background/85 px-4 py-3 shadow-lg backdrop-blur-md">
                <div>
                  <p className="text-xs text-muted-foreground">Ready for collaboration</p>
                  <p className="text-sm font-medium text-foreground">Transforming visions into reality</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-soft px-3 py-1 text-xs font-semibold text-violet">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
                  Booking 2026
                </span>
              </div>
            </div>

            {/* Floating Metric Card Top-Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-8 hidden rounded-2xl border border-border/80 bg-background/90 p-4 shadow-card backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Engineering Standard</p>
                  <p className="text-sm font-semibold text-foreground">Clean & Modern Code</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Metric Card Bottom-Right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 top-2/3 hidden rounded-2xl border border-border/80 bg-background/90 p-3.5 shadow-card backdrop-blur-md md:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-soft text-violet">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">Satisfaction Score</p>
                  <p className="text-xs font-bold text-foreground">99.8% Client Happiness</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee Section */}
        <div className="mt-20 border-t border-border/60 pt-10">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Built with modern, high-performance technology & tools
          </p>
          
          <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 py-2">
              {[...techStack, ...techStack].map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="flex items-center gap-2.5 rounded-full border border-border/60 bg-background/70 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/40"
                >
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
