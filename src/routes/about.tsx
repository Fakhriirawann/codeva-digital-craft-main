import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Codeva Studio" },
      { name: "description", content: "We're a senior team of designers and engineers building digital products with craft and care." },
      { property: "og:title", content: "About Codeva Studio" },
      { property: "og:description", content: "Meet the studio behind the work — our story, values and approach." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { k: "01", t: "Craft over speed", d: "We'd rather ship one beautiful thing than ten average ones. Quality compounds." },
  { k: "02", t: "Honest partnership", d: "No vanity decks. We say what we think, push back when needed, and keep timelines real." },
  { k: "03", t: "Outcomes, not deliverables", d: "We measure success by what your product does in market — not by Figma file count." },
  { k: "04", t: "Calm by design", d: "A small senior team, predictable process, no late-night fire drills." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="About"
            title="A small studio with serious craft."
            description="Codeva Studio was founded in 2019 by a designer and an engineer who were tired of bloated agencies. Today we're a tight team of nine, working remotely across four time zones, with one shared standard: ship work we'd put our own name on."
          />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <h3 className="text-2xl text-foreground md:text-3xl">Our story</h3>
              </Reveal>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7 md:text-lg">
              <Reveal delay={0.05}>
                <p>
                  We started Codeva because we believed great digital work didn't require a hundred-person org chart. It required taste, technical depth and the discipline to keep saying no to scope creep.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Six years later, we've shipped products for venture-backed startups, public companies and independent founders. Most of our work comes from referrals — and most clients stay with us long past the first launch.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  We're not for everyone. If you're looking for the cheapest bid, we're not it. If you want a team that will treat your product like it's our own, you're in the right place.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading eyebrow="Values" title="What we believe in." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.k} delay={i * 0.05}>
                <div className="h-full bg-background p-8">
                  <span className="font-display text-sm text-accent">{v.k}</span>
                  <h3 className="mt-3 text-xl text-foreground">{v.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
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
