import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Webora rebuilt our marketing site and digital onboarding flow in under 8 weeks. Conversion jumped 42% in the first month. They operate like an elite in-house engineering team.",
    name: "Maya Okafor",
    role: "Head of Growth",
    company: "Northwind Tech",
    rating: 5,
    initials: "MO",
    tone: "bg-accent/15 text-accent",
  },
  {
    quote:
      "Easily the most thoughtful digital studio we have partnered with. They challenge weak assumptions, propose smarter architectures, and ship work we are genuinely proud of.",
    name: "Daniel Reyes",
    role: "Co-founder & CEO",
    company: "Helix Cloud",
    rating: 5,
    initials: "DR",
    tone: "bg-violet-soft text-violet",
  },
  {
    quote:
      "Pixel-perfect implementation, on time, and the code architecture remains robust and clean two years later. We keep choosing Webora for every new product milestone.",
    name: "Sara Lindqvist",
    role: "VP of Product",
    company: "Parallel Labs",
    rating: 5,
    initials: "SL",
    tone: "bg-accent/15 text-foreground",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Client Stories"
          title="Endorsed by ambitious product leaders."
          description="Hear directly from founders and engineering leaders who trusted Webora Studio to build their core digital products."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="group relative flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant">
                <div>
                  {/* Top Bar: Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors group-hover:text-accent">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Quote content */}
                  <blockquote className="mt-6 text-base leading-relaxed text-foreground/90 font-normal">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-border/60 pt-5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold ${t.tone}`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-foreground truncate">{t.name}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {t.role} · <span className="text-foreground/80">{t.company}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
