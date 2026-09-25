import { Reveal } from "./Reveal";
import { ShieldCheck, Rocket, HeartHandshake, Gauge, CheckCircle2, Zap, Terminal, Sparkles } from "lucide-react";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(50%_50%_at_80%_20%,color-mix(in_oklab,var(--brand)_50%,transparent),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(40%_50%_at_15%_85%,color-mix(in_oklab,var(--violet)_60%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl container-px">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Why Choose Webora Studio
          </span>
          <Reveal>
            <h2 className="mt-4 text-3xl font-semibold text-white text-balance sm:text-5xl md:text-6xl">
              High-end digital craft, zero agency fluff.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              We are a dedicated team of senior designers and software engineers. You collaborate directly with the creators building your product — delivering unmatched quality, agility, and transparency.
            </p>
          </Reveal>
        </div>

        {/* Modern Bento Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-12">
          {/* Bento 1: Senior In-House Team (Span 7) */}
          <Reveal delay={0.05} className="md:col-span-7">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Rocket className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Direct Access
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">100% Senior In-House Craft</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                No junior handoffs and no outsourcing to third parties. Every line of code, interaction detail, and design system token is executed by seasoned product specialists.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-display font-semibold text-white">0%</p>
                  <p className="text-xs text-white/60">Outsourcing or Hidden Layers</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-semibold text-accent">1-on-1</p>
                  <p className="text-xs text-white/60">Direct Engineer & Designer Sync</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bento 2: Performance Obsessed (Span 5) */}
          <Reveal delay={0.1} className="md:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-violet/40 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-soft/20 text-violet">
                  <Gauge className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Score 100/100
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Performance Obsessed</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Fast web applications convert higher. We optimize Core Web Vitals, server response times, and semantic SEO as an uncompromising default.
              </p>

              <div className="mt-6 space-y-2.5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Lighthouse Performance</span>
                  <span className="font-bold text-emerald-400">100%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full bg-emerald-400 rounded-full" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-white/50">
                  <span>Sub-second page load</span>
                  <span>Accessible & SEO ready</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bento 3: Transparent Workflow (Span 5) */}
          <Reveal delay={0.15} className="md:col-span-5">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.06]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Transparent Sprints</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Weekly video demos, staging preview URLs on every commit, and shared Figma workspace. You will always know exact progress in real time.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
                <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Weekly Demos
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Live Staging Link
                </span>
              </div>
            </div>
          </Reveal>

          {/* Bento 4: Long-Term Growth Partner (Span 7) */}
          <Reveal delay={0.2} className="md:col-span-7">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-violet/40 hover:bg-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-soft/20 text-violet">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                  Reliability
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Long-Term Product Partner</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We stay engaged past initial launch to handle feature iterations, security patches, conversion rate optimization, and infrastructure scaling as your business grows.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-3xl font-display font-semibold text-violet">95%+</p>
                  <p className="text-xs text-white/60">Client Retention & Retainer Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-semibold text-white">24/7</p>
                  <p className="text-xs text-white/60">Critical Uptime Support</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
