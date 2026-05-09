import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Codeva Studio" },
      { name: "description", content: "Web development, mobile apps, UI/UX design, branding and custom digital solutions." },
      { property: "og:title", content: "Services — Codeva Studio" },
      { property: "og:description", content: "End-to-end digital product services: web, mobile, design and brand." },
    ],
  }),
  component: ServicesPage,
});

const process = [
  { k: "01", t: "Discover", d: "We dig into your goals, users and constraints — then write a brief we both sign off on." },
  { k: "02", t: "Design", d: "Wireframes, prototypes and high-fidelity UI in Figma. Weekly demos, fast feedback loops." },
  { k: "03", t: "Build", d: "Production-grade engineering with modern stacks, clean code and continuous delivery." },
  { k: "04", t: "Launch & grow", d: "We ship, measure and iterate. Most engagements continue as ongoing partnerships." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need, under one roof."
            description="Strategy, design, engineering and brand — delivered by a single senior team. No subcontractors, no surprises."
          />
        </div>
      </section>

      <ServicesGrid compact />

      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading eyebrow="Process" title="A calm, predictable way to ship." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.k} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="font-display text-3xl text-accent">{p.k}</span>
                  <h3 className="mt-4 text-lg text-foreground">{p.t}</h3>
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
