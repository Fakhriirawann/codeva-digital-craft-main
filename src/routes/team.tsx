import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { Instagram, Linkedin, ArrowUpRight, Users, HeartHandshake, User } from "lucide-react";

// Import foto anggota tim dari folder src/assets/
import fakhriImg from "@/assets/team-fakhri.jpg";
import lutfiImg from "@/assets/team-lutfi.jpg";
import anandariImg from "@/assets/team-anandari.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Webora Studio" },
      { name: "description", content: "Meet the designers and engineers behind Webora Studio." },
      { property: "og:title", content: "Team — Webora Studio" },
      { property: "og:description", content: "A small, senior team building digital products with craft." },
    ],
  }),
  component: TeamPage,
});

/**
 * Tipe Data Anggota Tim
 */
export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  photo?: string; // Import gambar lokal dari "@/assets/..." atau URL gambar langsung
  tone?: string;
  instagram?: string;
  linkedin?: string;
  bio: string;
}

/**
 * PANDUAN MENAMBAHKAN ANGGOTA TIM BARU & FOTO:
 * 1. Simpan file foto di folder `src/assets/` (rekomendasi rasio vertikal 4:5 atau foto potret).
 * 2. Import fotonya di baris atas file ini, contoh:
 *    import namaImg from "@/assets/team-nama.jpg";
 * 3. Tambahkan objek anggota tim ke dalam array `team` di bawah ini dengan field `photo: namaImg`.
 * 4. Jika foto belum ada, cukup abaikan / hapus baris `photo`, maka kartu otomatis menampilkan inisial yang elegan.
 */
const team: TeamMember[] = [
  {
    name: "Fakhri Irawan",
    role: "CEO | Founder, Engineering",
    initials: "FI",
    photo: fakhriImg,
    tone: "bg-accent/15 text-accent",
    instagram: "https://www.instagram.com/fkhrwnn?igsh=N2R6N2ZpdHU4cGlu",
    bio: "Software architect specializing in fullstack web performance, distributed systems, and modern digital craft.",
  },
  {
    name: "M. Lutfi Kurniawan",
    role: "Co-Founder, Engineering",
    initials: "LK",
    photo: lutfiImg,
    tone: "bg-violet-soft text-violet",
    instagram: "https://www.instagram.com/lulutfii?igsh=MXdsdjFzeDUxM2RkaA==",
    bio: "Fullstack engineer focused on resilient cloud infrastructure, reactive frontends, and API ecosystem design.",
  },
  {
    name: "Anandari Pramadhanty",
    role: "Lead Product Designer",
    initials: "AP",
    photo: anandariImg,
    tone: "bg-accent/15 text-foreground",
    instagram: "https://www.instagram.com/anandrp_?igsh=emt6ODA2cGdrMXpq",
    bio: "Product designer crafting intuitive user experiences, scalable design systems, and distinctive visual identities.",
  },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership & Creators"
        title="The minds behind"
        titleAccent="the craft."
        description="Our senior engineers and product designers, collaborating closely to deliver world-standard digital platforms. No layers. No outsourcing. Just direct access to the people doing the work."
        badges={[
          { icon: Users, label: "Team", value: "Senior & In-House", position: "top-right" },
          { icon: HeartHandshake, label: "Partnership", value: "95% Client Retention", position: "bottom-right", tone: "violet" },
        ]}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant">
                  {/* Photo or Fallback Initial Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted/30">
                    {m.photo ? (
                      <img
                        src={m.photo}
                        alt={m.name}
                        width={600}
                        height={750}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className={`flex h-full w-full flex-col items-center justify-center p-6 text-center font-display ${m.tone || "bg-secondary text-foreground"}`}>
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background/60 shadow-sm">
                          <User className="h-10 w-10 opacity-70" />
                        </div>
                        <span className="mt-4 text-4xl font-bold tracking-tight">
                          {m.initials}
                        </span>
                        <span className="mt-1 text-xs text-muted-foreground font-sans">
                          Photo coming soon
                        </span>
                      </div>
                    )}

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Name & Role overlay on bottom of photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                        {m.role}
                      </p>
                    </div>

                    {/* Social links overlay on top-right */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      {m.instagram && (
                        <a
                          href={m.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} Instagram`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-ink-foreground hover:border-accent hover:scale-105"
                        >
                          <Instagram className="h-4 w-4" />
                        </a>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} LinkedIn`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/90 backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-ink-foreground hover:border-accent hover:scale-105"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {m.bio}
                    </p>

                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                      <span>Webora Core Team</span>
                      {m.instagram ? (
                        <a
                          href={m.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-medium text-foreground group-hover:text-accent transition-colors"
                        >
                          Connect <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 font-medium text-foreground">
                          In-House <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
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