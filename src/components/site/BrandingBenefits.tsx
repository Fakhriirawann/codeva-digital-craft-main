import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Search,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Otoritas & Kredibilitas Instan",
    desc: "Domain profesional dan website resmi membangun rasa percaya tak terbantahkan. Lebih dari 75% konsumen menilai reputasi bisnis dari kualitas websitenya.",
    tags: ["Custom Domain", "Enterprise Trust", "Official Presence"],
    tone: "brand",
  },
  {
    icon: Sparkles,
    title: "Diferensiasi & Identitas Eksklusif",
    desc: "Bebas dari batasan template media sosial yang seragam. Desain kustom mencerminkan keunikan, kelas, dan karakter visual brand Anda secara maksimal.",
    tags: ["Tailored UI/UX", "Visual Distinction", "Brand Identity"],
    tone: "violet",
  },
  {
    icon: TrendingUp,
    title: "Mesin Konversi 24/7 Tanpa Henti",
    desc: "Website bekerja sebagai tenaga pemasar otomatis siang dan malam. Mengarahkan calon klien langsung ke WhatsApp, formulir penawaran, atau sistem booking.",
    tags: ["Lead Generation", "Direct WhatsApp", "Automated Flow"],
    tone: "brand",
  },
  {
    icon: Search,
    title: "Ditemukan di Google (High-Intent SEO)",
    desc: "Calon klien berdaya beli tinggi secara aktif mencari solusi di Google. Dengan struktur SEO modern, brand Anda siap ditemukan saat mereka ingin bertransaksi.",
    tags: ["Organic Search", "SEO Architecture", "High-Intent Leads"],
    tone: "violet",
  },
  {
    icon: Award,
    title: "Portofolio & Bukti Kualitas Tanpa Batas",
    desc: "Tampilkan studi kasus mendalam, visual resolusi tinggi, testimoni terverifikasi, dan sertifikasi bisnis Anda tanpa kompresi platform pihak ketiga.",
    tags: ["Case Studies", "Social Proof", "Interactive Gallery"],
    tone: "brand",
  },
  {
    icon: BarChart3,
    title: "100% Kepemilikan Aset & Data Pengunjung",
    desc: "Algoritma medsos bisa berubah dan akun rentan terkena suspend. Website adalah aset permanen milik Anda seutuhnya dengan data analitik akurat untuk retargeting.",
    tags: ["First-Party Data", "Permanent Asset", "Growth Tracking"],
    tone: "violet",
  },
];

const toneStyles = {
  brand: {
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-ink-foreground",
    glow: "group-hover:border-accent/40",
    gradientLine: "from-transparent via-accent to-transparent",
  },
  violet: {
    iconBg: "bg-violet-soft text-violet group-hover:bg-violet group-hover:text-white",
    glow: "group-hover:border-violet/40",
    gradientLine: "from-transparent via-violet to-transparent",
  },
};

export function BrandingBenefits() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-violet/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl container-px">
        {/* Section Heading */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Digital Branding Strategy"
            title="Mengapa Website Sangat Krusial untuk Branding Bisnis Anda?"
            description="Media sosial adalah etalase sementara yang bergantung pada algoritma pihak ketiga. Website adalah markas permanen yang membangun otoritas, prestise, dan konversi jangka panjang."
          />
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent hover:shadow-card md:inline-flex"
            >
              <span>Bangun Website Brand Anda</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Quick Highlights / Metric Pills */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <span className="font-display text-3xl font-bold text-accent">75%+</span>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                Konsumen menilai reputasi brand dari desain website
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <span className="font-display text-3xl font-bold text-violet">100%</span>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                Kontrol penuh tanpa risiko perubahan algoritma pihak ketiga
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <span className="font-display text-3xl font-bold text-accent">24/7</span>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                Sistem konversi & penangkap prospek bekerja otomatis
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <span className="font-display text-3xl font-bold text-violet">3.8x</span>
              <p className="mt-1.5 text-xs text-muted-foreground leading-snug">
                Peningkatan peluang closing dibanding hanya akun media sosial
              </p>
            </div>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const style = toneStyles[b.tone as keyof typeof toneStyles];
            return (
              <Reveal key={b.title} delay={i * 0.05}>
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant ${style.glow}`}
                >
                  <div>
                    {/* Icon */}
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${style.iconBg}`}
                    >
                      <b.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Title & Desc */}
                    <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.desc}
                    </p>

                    {/* Tag badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {b.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                        >
                          <Zap className="h-3 w-3 text-accent" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gradient line indicator on hover */}
                  <div
                    className={`absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r ${style.gradientLine} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Comparison Showcase Banner: Website vs Hanya Media Sosial */}
        <Reveal delay={0.25} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-surface to-secondary/40 p-8 shadow-card md:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Perbandingan Realistis
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
                Website Profesional vs Hanya Bergantung Pada Media Sosial
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Media sosial sangat bagus untuk menjaring atensi awal, namun website profesional adalah instrumen penutup transaksi yang sesungguhnya.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Box Media Sosial */}
              <div className="rounded-2xl border border-border/70 bg-background/60 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">Hanya Mengandalkan Media Sosial</h4>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground md:text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Jangkauan dibatasi dan terus dipangkas oleh algoritma platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Format visual seragam dan terbatas, sulit menampilkan kesan prestisius</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Chat calon klien rawan tertimbun dan respons lambat berujung batal beli</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Risiko akun dibekukan atau di-hack tanpa ganti rugi aset</span>
                  </li>
                </ul>
              </div>

              {/* Box Website Sendiri */}
              <div className="rounded-2xl border border-accent/40 bg-accent/5 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground">Memiliki Website Sendiri (Webora Studio)</h4>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs text-foreground/80 md:text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>100% Milik Anda</strong> — bebas dari algoritma dan kebijakan sepihak pihak ketiga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Desain Custom & Berkelas</strong> — menciptakan reputasi bisnis premium & kredibel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>Konversi Otomatis</strong> — terhubung langsung ke WhatsApp, booking & analitik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span><strong>SEO Organik di Google</strong> — menarik calon pembeli tepat saat mereka mencari</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom CTA within comparison */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-6">
              <p className="text-xs text-muted-foreground md:text-sm">
                Siap meningkatkan nilai branding dan penjualan bisnis Anda ke level berikutnya?
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold text-ink-foreground shadow-elegant transition-all duration-300 hover:bg-accent hover:shadow-glow md:text-sm"
              >
                <span>Konsultasikan Branding Anda</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
