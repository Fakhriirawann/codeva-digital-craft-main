import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ShieldCheck, Rocket, HeartHandshake, Gauge } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Senior, in-house team", desc: "No outsourcing. Every pixel and line of code is crafted by senior people who care." },
  { icon: Gauge, title: "Performance obsessed", desc: "We ship fast, accessible, lighthouse-100 experiences as the default — not as an upsell." },
  { icon: ShieldCheck, title: "Transparent process", desc: "Weekly demos, shared Figma & Linear access. You always know exactly where your project stands." },
  { icon: HeartHandshake, title: "Long-term partner", desc: "We don't disappear at launch. Most of our clients stay with us for years of iteration and growth." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(50%_50%_at_80%_20%,color-mix(in_oklab,var(--brand)_45%,transparent),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(40%_50%_at_15%_85%,color-mix(in_oklab,var(--green)_60%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Why Codeva
          </span>
          <Reveal>
            <h2 className="mt-4 text-3xl text-white text-balance md:text-5xl">
              Premium craft, without the agency overhead.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              We're a tight team of designers and engineers focused on outcomes. No layers of account managers — just direct access to the people doing the work.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <div className="group h-full bg-ink p-8 transition-colors hover:bg-white/[0.04]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
