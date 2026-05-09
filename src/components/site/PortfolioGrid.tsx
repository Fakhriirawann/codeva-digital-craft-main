import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";
import p1 from "@/assets/goevent.png";
import p2 from "@/assets/wp1.png";
import p3 from "@/assets/sweetmelt.png";
import p4 from "@/assets/project-4.jpg";

export const projects = [
  { img: p1, title: "Goevent Digital", category: "Digital QR Code-Registration · Ticketing · Events · Digital Invitations", year: "2026", url: "https://goeventdigital.com/" },
  { img: p2, title: "Wonderful Palembang", category: "City Branding · Tourism · Experience Platform", year: "2025", url: "https://wonderful-palembang-1.vercel.app/" },
  { img: p3, title: "Sweet Melt Cookies", category: "E-Commerce · Digital Branding", year: "2025", url: "https://sweetmelt-cookies-alpha.vercel.app/" },
  { img: p4, title: "Lumen Identity", category: "Branding · Strategy", year: "2024", url: "https://lumen.example.com" },
];

export function PortfolioGrid({ limit }: { limit?: number }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent projects we're proud of."
            description="A glimpse of what we've shipped — from venture-backed startups to global brands."
          />
          {limit && (
            <Reveal delay={0.15}>
              <Link
                to="/work"
                className="group hidden items-center gap-2 text-sm font-medium text-foreground md:inline-flex"
              >
                View full portfolio
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          )}
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer overflow-hidden rounded-3xl border border-border bg-background transition-all hover:border-accent hover:shadow-elegant"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.category}</p>
                    <h3 className="mt-1 text-lg text-foreground transition-colors group-hover:text-accent">{p.title}</h3>
                  </div>
                  <span className="font-display text-sm text-muted-foreground transition-transform group-hover:translate-x-1">↗</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
