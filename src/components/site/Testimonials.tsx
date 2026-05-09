import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Codeva rebuilt our marketing site and product onboarding in 8 weeks. Conversion jumped 42%. They feel like an extension of our team.",
    name: "Maya Okafor",
    role: "Head of Growth, Northwind",
  },
  {
    quote:
      "Easily the most thoughtful design partner we've worked with. They challenge assumptions and ship work we're genuinely proud of.",
    name: "Daniel Reyes",
    role: "Co-founder & CEO, Helix",
  },
  {
    quote:
      "Pixel-perfect, on time and the engineering quality holds up two years later. We keep coming back for every new product line.",
    name: "Sara Lindqvist",
    role: "VP Product, Parallel",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="What partners say about us."
          align="center"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-accent/20">
                <Quote className="h-7 w-7 text-accent" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
