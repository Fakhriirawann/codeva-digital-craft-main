import { Code2, Smartphone, Palette, Sparkles, Layers, Zap, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Marketing sites, web apps and digital platforms engineered with modern frameworks, high security, and sub-second load times.",
    tags: ["React / Next.js", "SEO Optimized", "Custom CMS", "Sub-second Speed"],
    tone: "brand",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform and native iOS & Android applications with fluid animations, intuitive navigation, and robust backend integrations.",
    tags: ["iOS & Android", "Fluid Gestures", "Offline Support", "API Integration"],
    tone: "violet",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Data-informed product design that solves complex user journeys with elegant interfaces, high visual taste, and accessible components.",
    tags: ["Figma Systems", "Interactive Prototypes", "User Testing", "Micro-interactions"],
    tone: "brand",
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    desc: "Visual identity systems, typography, color architecture, and brand guidelines that resonate with your audience and create distinction.",
    tags: ["Logo Systems", "Brand Guidelines", "Typography Rules", "Asset Libraries"],
    tone: "violet",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Scalable UI component libraries and design tokens that bridge design and engineering teams for rapid, consistent feature shipping.",
    tags: ["Component Library", "Design Tokens", "Documentation", "Figma to Code"],
    tone: "brand",
  },
  {
    icon: Zap,
    title: "Custom Digital Solutions",
    desc: "Tailored internal dashboards, automation workflows, ERP integrations, and payment gateways built for specific enterprise needs.",
    tags: ["Admin Dashboards", "Workflow Automations", "API Gateways", "High Scale"],
    tone: "violet",
  },
];

const toneStyles = {
  brand: {
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-ink-foreground",
    badgeBg: "bg-secondary text-foreground/80",
    glow: "group-hover:border-accent/30",
    gradientLine: "from-transparent via-accent to-transparent",
  },
  violet: {
    iconBg: "bg-violet-soft text-violet group-hover:bg-violet group-hover:text-white",
    badgeBg: "bg-secondary text-foreground/80",
    glow: "group-hover:border-violet/30",
    gradientLine: "from-transparent via-violet to-transparent",
  },
};

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Capabilities"
            title="A full-spectrum studio for digital craft."
            description="From initial strategy and UX wireframing to high-performance engineering and cloud deployment — we cover every layer seamlessly."
          />
          {!compact && (
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="group hidden items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent hover:shadow-card md:inline-flex"
              >
                <span>Explore all services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          )}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const style = toneStyles[s.tone as keyof typeof toneStyles];
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <article className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant ${style.glow}`}>
                  <div>
                    {/* Icon */}
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${style.iconBg}`}>
                      <s.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Title & Desc */}
                    <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                        >
                          <Check className="h-3 w-3 text-accent" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn more link footer */}
                  <div className="mt-8 pt-4 border-t border-border/50">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-accent"
                    >
                      <span>Discuss this capability</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Gradient border indicator bottom */}
                  <div className={`absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r ${style.gradientLine} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
