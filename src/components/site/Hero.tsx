import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import heroImg from "@/assets/hero-visual.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <div className="relative mx-auto max-w-7xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Digital studio · est. 2019
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 text-5xl leading-[1.02] text-foreground text-balance md:text-7xl lg:text-[5.5rem]"
            >
              We design & build{" "}
              <span className="italic text-brand-gradient">
                digital products
              </span>{" "}
              that move the needle<span className="text-accent">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Codeva Studio partners with founders and brands to ship beautiful websites,
              mobile apps and identities — engineered for performance, designed to last.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ink-foreground shadow-elegant transition-all hover:bg-accent hover:text-ink-foreground hover:shadow-glow"
              >
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-accent"
              >
                View our work
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface shadow-elegant">
              <img
                src={heroImg}
                alt="Abstract digital craft visual"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-xs text-muted-foreground">Let's build yours</p>
                  <p className="text-sm font-medium text-foreground">Your idea, our craft</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-soft px-2.5 py-1 text-xs font-medium text-violet">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
                  We're open
                </span>
              </div>
            </div>
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-background p-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Code2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Crafted with</p>
                  <p className="text-sm font-semibold text-foreground">Code & Care</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
