import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Berapa lama estimasi waktu pengerjaan project?",
    a: "Durasi pengerjaan bergantung pada kompleksitas project. Untuk landing page / company profile berkisar 2-3 minggu. Untuk platform web apps, e-commerce kustom, atau aplikasi mobile terintegrasi umumnya memerlukan 4-8 minggu dengan sprint transparan dan demo berkala setiap minggunya.",
  },
  {
    q: "Bagaimana sistem pembayaran dan kontrak kerja sama?",
    a: "Kami menerapkan sistem pembayaran berbasis milestone transparan (misal 50% down payment, 25% setelah persetujuan UI/UX & staging build, dan 25% saat deployment final), atau model dedicated retainer bulanan untuk kolaborasi jangka panjang.",
  },
  {
    q: "Teknologi dan stack apa yang digunakan Webora Studio?",
    a: "Kami menggunakan teknologi modern standar industri terkini seperti React 19, Next.js / TanStack Start, TypeScript, Tailwind CSS, Node.js, PostgreSQL, dan arsitektur serverless Cloudflare/Vercel. Desain produk dikerjakan secara sistematis di Figma.",
  },
  {
    q: "Apakah disediakan garansi dan maintenance setelah website live?",
    a: "Tentu. Setiap project yang kami rilis mencakup garansi bug fix gratis selama 30-60 hari pasca-launch. Kami juga menyediakan paket maintenance bulanan untuk pembaruan fitur, optimasi performa, security update, dan backup berkala.",
  },
  {
    q: "Bagaimana alur komunikasi selama proses pengerjaan?",
    a: "Anda akan terhubung langsung dengan lead engineer dan designer kami melalui grup WhatsApp/Slack khusus, serta mendapatkan akses live staging link untuk menguji setiap perkembangan fitur secara real-time.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-4xl container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Pertanyaan yang sering diajukan seputar alur kerja, estimasi waktu, dan komitmen kualitas kami."
          align="center"
        />

        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={faq.q} delay={idx * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-accent/40 bg-card shadow-card"
                      : "border-border/80 bg-card/60 hover:border-border hover:bg-card"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground md:text-lg pr-4">
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-accent/15 text-accent"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground md:text-base border-t border-border/40 mt-1">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
