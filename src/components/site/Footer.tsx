import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Webora Studio is a digital agency crafting websites, mobile apps and brands for ambitious teams worldwide.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.instagram.com/Weboraa.studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:bg-ink hover:text-ink-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Studio</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
                <li><Link to="/work" className="hover:text-foreground">Work</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Services</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-foreground">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-foreground">Mobile Apps</Link></li>
                <li><Link to="/services" className="hover:text-foreground">UI/UX Design</Link></li>
                <li><Link to="/services" className="hover:text-foreground">Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Weboraa.studio@gmail.com</li>
                <li>+(62) 821 7446 4169</li>
                <li>Remote · Worldwide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Webora Studio. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet animate-pulse" />
            Available for new projects
          </p>
        </div>
      </div>
    </footer>
  );
}
