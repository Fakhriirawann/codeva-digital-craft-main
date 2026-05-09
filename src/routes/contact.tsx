import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, ArrowRight, Check, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6282174464169"; // Format internasional tanpa '+'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Codeva Studio! Saya tertarik untuk mendiskusikan project."
)}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Codeva Studio" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact Codeva Studio" },
      { property: "og:description", content: "Start a conversation about your next digital product." },
    ],
  }),
  component: ContactPage,
});

const services = ["Website", "Mobile App", "UI/UX Design", "Branding", "Other"];
const budgets = ["< $10k", "$10k – $25k", "$25k – $75k", "$75k+"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <>
      <section className="bg-hero-gradient pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something great."
            description="Share a few details about your project and we'll get back to you within one business day."
          />
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 container-px lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-medium text-foreground">Get in touch</h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">codevaa.studio@gmail.com</p>
                      <p className="text-muted-foreground">For new projects & general questions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">+(62) 821 7446 4169</p>
                      <p className="text-muted-foreground">Mon–Fri · 9am–6pm PT</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Remote · Worldwide</p>
                      <p className="text-muted-foreground">Team across SF · NYC · Lisbon · Singapore</p>
                    </div>
                  </li>
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-all hover:border-[oklch(0.72_0.17_152)] hover:shadow-elegant"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.72_0.17_152)] text-white">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-foreground">Chat on WhatsApp</span>
                      <span className="block text-xs text-muted-foreground">Balasan cepat · 24/7</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-ink p-6 text-ink-foreground">
                <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet animate-pulse" /> Currently booking
                </p>
                <p className="mt-2 font-display text-2xl"> 2026</p>
                <p className="mt-2 text-sm text-white/70">Ready for your orders.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10"
            >
              {sent ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-soft text-violet">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl text-foreground">Message received.</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Thanks — we'll be in touch within one business day. In the meantime, feel free to browse our recent work.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Nama Lengkap" />
                  <Field label="Email" type="email" name="email" placeholder="youremail@gmail.com" />
                  <Field label="Company" name="company" placeholder="Nama Perusahaan / Instansi" />
                  <Field label="Website" name="website" placeholder="Nama Website" />

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">What do you need?</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setService(s)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            service === s
                              ? "border-accent bg-ink text-ink-foreground"
                              : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">Budget</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            budget === b
                              ? "border-accent bg-accent/10 text-accent"
                              : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="message">Tell us about your project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Goals, timeline, anything we should know…"
                      className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none ring-0 transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-muted-foreground">We respond within 1 business day.</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-[oklch(0.72_0.17_152)] hover:text-[oklch(0.55_0.17_152)]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground shadow-elegant transition-all hover:bg-accent hover:text-ink-foreground hover:shadow-glow"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={type !== "url"}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
      />
    </div>
  );
}
