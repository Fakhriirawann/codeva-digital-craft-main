import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { FolderOpen, Star } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Webora Studio" },
      { name: "description", content: "Selected projects from Webora Studio: e-commerce, fintech, SaaS and brand identity work." },
      { property: "og:title", content: "Selected work — Webora Studio" },
      { property: "og:description", content: "A glimpse of what we've shipped across web, mobile and brand." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio & Case Studies"
        title="Crafted with precision,"
        titleAccent="built to perform."
        description="A curated selection of projects spanning e-commerce platforms, tourism experiences, SaaS products, and brand identity systems — each delivered with obsessive attention to detail."
        badges={[
          { icon: FolderOpen, label: "Projects", value: "40+ Shipped", position: "top-right" },
          { icon: Star, label: "Satisfaction", value: "99.8% Happy Clients", position: "bottom-right", tone: "violet" },
        ]}
      />
      <PortfolioGrid />
      <Testimonials />
      <CTA />
    </>
  );
}
