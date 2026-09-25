import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, ArrowRight, Check, MessageCircle, Clock, Sparkles, Send, CalendarCheck } from "lucide-react";

const WHATSAPP_NUMBER = "6282174464169";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Halo Webora Studio! Saya tertarik untuk mendiskusikan project."
)}`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Webora Studio" },
      { name: "description", content: "Tell us about your project. We respond within one business day." },
      { property: "og:title", content: "Contact Webora Studio" },
      { property: "og:description", content: "Start a conversation about your next digital product." },
    ],
  }),
  component: ContactPage,
});

const services = ["Website Development", "Mobile App", "UI/UX Design", "Branding & Identity", "Custom Solution"];
const budgets = ["< $5k (IDR 5-25jt)", "$5k – $15k", "$15k – $35k", "$35k+ / Custom"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[0]);

  return (
    <>
      <PageHero
        eyebrow="Start a Conversation"
        title="Let's build something"
        titleAccent="extraordinary."
        description="Share a few details about your project goals and timeline. We'll reply within one business day with clear next steps and a preliminary roadmap."
        badges={[
          { icon: Send, label: "Response", value: "< 24 Hour Reply", position: "top-right" },
          { icon: CalendarCheck, label: "Status", value: "Booking Q4 2026", position: "bottom-right", tone: "violet" },
        ]}
      />

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 container-px lg:grid-cols-12">
          {/* Contact Details Card */}
          <Reveal className="lg:col-span-4">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border/80 bg-card p-7 shadow-card">
                <h3 className="text-lg font-semibold text-foreground">Direct Contact</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Weboraa.studio@gmail.com</p>
                      <p className="text-xs text-muted-foreground">For new projects & partnerships</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">+(62) 821 7446 4169</p>
                      <p className="text-xs text-muted-foreground">Direct call & WhatsApp support</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Remote · Worldwide</p>
                      <p className="text-xs text-muted-foreground">Indonesia & Global Collaboration</p>
                    </div>
                  </li>
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 flex items-center justify-between gap-3 rounded-2xl border border-[oklch(0.72_0.17_152)]/30 bg-[oklch(0.72_0.17_152)]/10 px-4 py-3.5 transition-all duration-300 hover:bg-[oklch(0.72_0.17_152)]/20 hover:shadow-elegant"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.72_0.17_152)] text-white shadow-sm">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">Chat via WhatsApp</span>
                      <span className="block text-xs text-muted-foreground">Fast response · Online</span>
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="rounded-3xl border border-white/10 bg-ink p-7 text-ink-foreground shadow-elegant">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                  <span className="h-2 w-2 rounded-full bg-violet animate-pulse" /> Available for Q4
                </p>
                <p className="mt-3 font-display text-2xl font-semibold text-white">Booking 2026</p>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  We accept a selective number of clients per quarter to preserve uncompromising craftsmanship.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border/80 bg-card p-7 shadow-card md:p-10"
            >
              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-soft text-violet shadow-sm">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">Message Received!</h3>
                  <p className="mt-2.5 max-w-md text-sm text-muted-foreground leading-relaxed">
                    Thank you for reaching out. Our team will review your project brief and get in touch within one business day.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Your Name" name="name" placeholder="John Doe / Nama Lengkap" />
                  <Field label="Work Email" type="email" name="email" placeholder="youremail@company.com" />
                  <Field label="Company / Brand" name="company" placeholder="Company or Project Name" />
                  <Field label="Existing Website (Optional)" name="website" placeholder="https://yourwebsite.com" />

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">What capability are you looking for?</label>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setService(s)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                            service === s
                              ? "border-accent bg-ink text-ink-foreground shadow-sm"
                              : "border-border/80 bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">Estimated Budget Range</label>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${
                            budget === b
                              ? "border-accent bg-accent/15 text-accent font-semibold"
                              : "border-border/80 bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium text-foreground" htmlFor="message">
                      Project Brief & Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about what you want to build, specific goals, target timeline, etc..."
                      className="mt-2.5 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      <span>Average response time: &lt; 24 hours</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-[oklch(0.72_0.17_152)] hover:text-[oklch(0.72_0.17_152)]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-ink-foreground shadow-elegant transition-all duration-300 hover:bg-accent hover:shadow-glow"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
      <label className="text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={type !== "url"}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
      />
    </div>
  );
}
