import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Codeva Studio" },
      { name: "description", content: "Selected projects from Codeva Studio: e-commerce, fintech, SaaS and brand identity work." },
      { property: "og:title", content: "Selected work — Codeva Studio" },
      { property: "og:description", content: "A glimpse of what we've shipped across web, mobile and brand." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Portfolio"
            title="Work we've shipped."
            description="A selection of projects across e-commerce, fintech, SaaS and brand identity."
          />
        </div>
      </section>
      <PortfolioGrid />
      <Testimonials />
      <CTA />
    </>
  );
}
