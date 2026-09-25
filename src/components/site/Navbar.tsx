import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 shadow-sm backdrop-blur-xl py-3"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-px">
        <Logo />

        {/* Desktop Nav with Floating Glass Pill */}
        <nav className="hidden items-center rounded-full border border-border/60 bg-background/60 p-1.5 shadow-sm backdrop-blur-md md:flex">
          {links.map((l) => {
            const isActive = l.to === "/" ? currentPath === "/" : currentPath.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-secondary shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ink-foreground shadow-elegant transition-all duration-300 hover:bg-accent hover:shadow-glow"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 container-px py-4">
              {links.map((l) => {
                const isActive = l.to === "/" ? currentPath === "/" : currentPath.startsWith(l.to);
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-secondary text-foreground font-semibold" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-ink-foreground shadow-elegant"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
