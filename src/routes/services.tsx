import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Search, Figma, Code2, Rocket, Layers, Gauge } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Webora Studio" },
      { name: "description", content: "Web development, mobile apps, UI/UX design, branding and custom digital solutions." },
      { property: "og:title", content: "Services — Webora Studio" },
      { property: "og:description", content: "End-to-end digital product services: web, mobile, design and brand." },
    ],
  }),
  component: ServicesPage,
});

const process = [
  {
    icon: Search,
    k: "01",
    t: "Discovery & Strategy",
    d: "We analyze your target users, brand goals, and technical requirements to define an actionable product brief and roadmap.",
  },
  {
    icon: Figma,
    k: "02",
    t: "UX & Visual Architecture",
    d: "High-fidelity UI screens, design tokens, and interactive Figma prototypes with rapid iterative feedback loops.",
  },
  {
    icon: Code2,
    k: "03",
    t: "Engineering & QA",
    d: "Production-grade engineering using modern frameworks, sub-second performance optimization, clean APIs, and rigorous testing.",
  },
  {
    icon: Rocket,
    k: "04",
    t: "Deployment & Scaling",
    d: "Zero-downtime deployment, continuous monitoring, and ongoing feature iterations to support your long-term expansion.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Capabilities"
        title="Complete product capabilities"
        titleAccent="under one roof."
        description="From digital strategy and brand identity to custom engineering and cloud deployment — delivered by senior specialists with zero handoff drama."
        badges={[
          { icon: Layers, label: "Scope", value: "End-to-End Delivery", position: "top-right" },
          { icon: Gauge, label: "Quality", value: "Lighthouse Score 100", position: "bottom-right", tone: "violet" },
        ]}
      />

      <ServicesGrid compact />

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Our Process"
            title="A calm, structured roadmap from idea to launch."
            description="Our predictable four-step workflow ensures transparency, speed, and exceptional execution."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-border/80 bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-accent">{p.k}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors group-hover:bg-accent/15 group-hover:text-accent">
                      <p.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <CTA />
    </>
  );
}
