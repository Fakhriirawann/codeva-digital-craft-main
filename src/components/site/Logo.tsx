import { Link } from "@tanstack/react-router";
import logo from "@/assets/webora-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-4 ${className}`} aria-label="Webora Studio">
      <img
        src={logo}
        alt="Webora Studio"
        width={80} // Diubah dari 56 agar ketajaman gambar terjaga
        height={80}
        // Diperbesar menjadi h-16 (64px) di mobile dan md:h-20 (80px) di desktop
        className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      {/* Ukuran teks disesuaikan sedikit agar seimbang dengan logonya */}
      <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
        Webora <span className="text-muted-foreground font-normal">Studio</span>
      </span>
    </Link>
  );
}
