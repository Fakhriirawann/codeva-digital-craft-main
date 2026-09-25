import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { BrandingBenefits } from "@/components/site/BrandingBenefits";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { PortfolioGrid } from "@/components/site/PortfolioGrid";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <BrandingBenefits />
      <ServicesGrid />
      <PortfolioGrid limit={2} />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
