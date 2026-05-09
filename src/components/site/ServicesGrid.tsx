import { Code2, Smartphone, Palette, Sparkles, Layers, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Marketing sites, e-commerce and complex web platforms built with modern stacks and obsessive performance.",
    tone: "navy",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that feel fast, fluid and delightful on every device.",
    tone: "orange",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Research-led product design — interfaces that are clear, accessible and visually distinctive.",
    tone: "green",
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    desc: "Strategy, visual systems and brand guidelines that build trust and stand out in the market.",
    tone: "navy",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Scalable component libraries and design tokens that align design and engineering teams.",
    tone: "orange",
  },
  {
    icon: Zap,
    title: "Custom Digital Solutions",
    desc: "Internal tools, dashboards, integrations and automations tailored to your workflow.",
    tone: "green",
  },
];

const tones: Record<string, string> = {
  navy: "bg-accent/10 text-foreground",
  orange: "bg-accent/10 text-accent",
  green: "bg-violet-soft text-violet",
};

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="A full studio, end to end."
            description="From first sketch to launch day, we cover every layer of the product. One team, one vision, no handoff drama."
          />
          {!compact && (
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="group hidden items-center gap-2 text-sm font-medium text-foreground md:inline-flex"
              >
                Explore all capabilities
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          )}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-card">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${tones[s.tone]}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-accent">
                  Learn more
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
