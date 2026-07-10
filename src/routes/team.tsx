import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { Linkedin, Instagram } from "lucide-react"; // <-- Instagram sudah diimpor

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Webora Studio" },
      { name: "description", content: "Meet the designers and engineers behind Webora Studio." },
      { property: "og:title", content: "Team — Webora Studio" }, // <-- Diubah ke Webora
      { property: "og:description", content: "A small, senior team building digital products with craft." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Fakhri Irawan", role: "CEO | Founder, Engineering", initials: "FI", tone: "bg-accent/10 text-accent", instagram: "https://www.instagram.com/fkhrwnn?igsh=N2R6N2ZpdHU4cGlu" },
  { name: "M. Lutfi Kurniawan", role: "Co-Founder, Engineering", initials: "LK", tone: "bg-violet-soft text-violet", instagram: "https://www.instagram.com/lulutfii?igsh=MXdsdjFzeDUxM2RkaA==" },
  { name: "Anandari Pramadhanty", role: "Lead Product Designer", initials: "AP", tone: "bg-accent/10 text-foreground", instagram: "https://www.instagram.com/anandrp_?igsh=emt6ODA2cGdrMXpq" },
];

function TeamPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Team"
            title="The people behind the work."
            description="Nine senior designers and engineers, working remotely across four time zones with one shared standard."
          />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <article className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/20 hover:shadow-card">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl font-display text-2xl ${m.tone}`}>
                    {m.initials}
                  </div>
                  <h3 className="mt-6 text-lg text-foreground">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <a href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:bg-ink hover:text-ink-foreground">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    {/* 👇 Bagian ini sudah diubah dari Twitter menjadi Instagram 👇 */}
                    <a href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:bg-ink hover:text-ink-foreground">
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}