import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import p1 from "@/assets/goevent.png";
import p2 from "@/assets/wp1.png";
import p3 from "@/assets/sweetmelt.png";
import p4 from "@/assets/project-4.jpg";

export const projects = [
  {
    id: "goevent",
    img: p1,
    title: "Goevent Digital",
    category: "Events & Ticketing",
    subCategory: "QR Code Registration · Ticketing · Digital Invitations",
    year: "2026",
    url: "https://goeventdigital.com/",
    tags: ["Fullstack Web", "QR System", "Realtime Check-in", "Payment Gateway"],
    type: "web",
  },
  {
    id: "palembang",
    img: p2,
    title: "Wonderful Palembang",
    category: "Tourism & City Platform",
    subCategory: "City Branding · Tourism Portal · Experience Discovery",
    year: "2025",
    url: "https://wonderful-palembang-1.vercel.app/",
    tags: ["Interactive Map", "UI/UX Design", "Content Platform", "High Performance"],
    type: "web",
  },
  {
    id: "sweetmelt",
    img: p3,
    title: "Sweet Melt Cookies",
    category: "E-Commerce & Branding",
    subCategory: "D2C E-Commerce · Product Showcase · Brand Identity",
    year: "2025",
    url: "https://sweetmelt-cookies-alpha.vercel.app/",
    tags: ["E-Commerce", "Brand System", "Animation", "Cart & Checkout"],
    type: "ecommerce",
  },
  {
    id: "lumen",
    img: p4,
    title: "Lumen Identity & Architecture",
    category: "Branding & Strategy",
    subCategory: "Brand Architecture · Visual System · Digital Guidelines",
    year: "2024",
    url: "https://lumen.example.com",
    tags: ["Visual Identity", "Typography", "Guidelines", "Design System"],
    type: "branding",
  },
];

const filterCategories = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Apps" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "branding", label: "Branding" },
];

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.type === activeFilter;
  });

  const displayItems = limit ? projects.slice(0, limit) : filteredProjects;

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent projects crafted with precision."
            description="A curated look into our production work — spanning high-traffic web applications, brand systems, and e-commerce platforms."
          />
          {limit && (
            <Reveal delay={0.15}>
              <Link
                to="/work"
                className="group hidden items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent hover:shadow-card md:inline-flex"
              >
                <span>View all portfolio</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          )}
        </div>

        {/* Filter Pills (Shown when in full work view) */}
        {!limit && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat.key
                    ? "bg-ink text-ink-foreground shadow-sm"
                    : "border border-border/80 bg-background text-muted-foreground hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {displayItems.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-3xl border border-border/80 bg-background shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-elegant"
                >
                  {/* Image Container with Hover Scale & Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
                    <img
                      src={p.img}
                      alt={p.title}
                      width={1200}
                      height={750}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Live Website Badge Overlay */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                      <Globe className="h-3.5 w-3.5 text-accent" />
                      <span>Live Site</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/80" />
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md">
                      {p.year}
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {p.category}
                        </span>
                        <h3 className="mt-1.5 text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {p.subCategory}
                        </p>
                      </div>
                      
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-secondary/60 text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink-foreground">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-6 flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/50">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
