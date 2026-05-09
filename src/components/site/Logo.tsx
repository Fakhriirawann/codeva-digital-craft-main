import { Link } from "@tanstack/react-router";
import logo from "@/assets/codeva-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Codeva Studio">
      <img
        src={logo}
        alt="Codeva Studio"
        width={56}
        height={56}
        className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
        Codeva <span className="text-muted-foreground font-normal">Studio</span>
      </span>
    </Link>
  );
}
