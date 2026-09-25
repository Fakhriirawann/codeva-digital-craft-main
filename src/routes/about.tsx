import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { Sparkles, Target, Zap, HeartHandshake, Users, TrendingUp, Award, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Webora Studio" },
      { name: "description", content: "We're a senior team of designers and engineers building digital products with craft and care." },
      { property: "og:title", content: "About Webora Studio" },
      { property: "og:description", content: "Meet the studio behind the work — our story, values and approach." },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Sparkles,
    k: "01",
    t: "Craft over speed",
    d: "We'd rather ship one beautiful, robust platform than ten average ones. Exceptional quality compounds into lasting value.",
  },
  {
    icon: Target,
    k: "02",
    t: "Honest partnership",
    d: "No vanity decks or empty buzzwords. We provide direct feedback, challenge fragile assumptions, and adhere to realistic timelines.",
  },
  {
    icon: Zap,
    k: "03",
    t: "Outcomes, not deliverables",
    d: "We measure success by how well your product converts and scales in the market — not by the volume of raw Figma frames.",
  },
  {
    icon: HeartHandshake,
    k: "04",
    t: "Calm & predictable by design",
    d: "A dedicated senior team, structured weekly sprints, transparent staging previews, and zero late-night chaos.",
  },
];

const stats = [
  { value: "40+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
  { value: "100", label: "Lighthouse Score" },
  { value: "24h", label: "Response Time" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Webora Studio"
        title="A modern studio founded on"
        titleAccent="uncompromising craft."
        description="Webora Studio was created by designers and engineers passionate about building digital products that stand the test of time. We operate as a focused, senior-led product team delivering world-class digital solutions."
        badges={[
          { icon: Users, label: "Team", value: "100% Senior In-House", position: "top-right" },
          { icon: Globe, label: "Reach", value: "Remote · Worldwide", position: "bottom-right", tone: "violet" },
        ]}
      >
        {/* Stats Row */}
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 text-center backdrop-blur-sm shadow-sm">
              <p className="font-display text-2xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-[11px] font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">Our Philosophy</span>
                <h3 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
                  Digital products built with intent and care.
                </h3>
              </Reveal>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7 md:text-lg">
              <Reveal delay={0.05}>
                <p>
                  We founded Webora Studio on the belief that exceptional digital products do not require cumbersome agency hierarchies. They require deep technical rigor, refined aesthetic taste, and direct collaboration with the builders.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  From venture-backed startups and growing brands to bespoke enterprise platforms, our work bridges high aesthetics with sub-second performance. Most of our partnerships grow through organic referrals, and our clients stay with us through multiple growth cycles.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  If you are looking for a dedicated partner who will treat your product with the same obsession as their own, you have found the right team.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading eyebrow="Values" title="The principles that guide our work." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.k} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border/80 bg-background p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-ink-foreground">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-base font-bold text-accent">{v.k}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{v.t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
