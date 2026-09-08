import { useState } from "react";
import { PROFILE, SERVICES } from "../data";
import { WHATSAPP } from "../nav";
import { useCopy } from "../hooks";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Mail, Whatsapp, Pin, Send, Github, Linkedin, Copy, Check, Clock } from "./icons";

const DETAILS = [
  { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: Whatsapp, label: "WhatsApp", value: PROFILE.phone, href: WHATSAPP, external: true },
  { Icon: Pin, label: "Location", value: PROFILE.location },
  { Icon: Clock, label: "Timezone", value: PROFILE.timezone },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { copied, copy } = useCopy(PROFILE.email);

  const field =
    "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

  // No backend here — this hands the message to the visitor's mail client.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="05"
            label="Contact"
            title="Let's build something together"
            description="Have a project in mind or a role to discuss? Send a message and I'll get back to you."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <Reveal delay={60}>
              <div className="rounded-3xl border border-border bg-card p-7">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  What I can help with
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {SERVICES.map((service) => (
                    <li key={service} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-accent text-white">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {DETAILS.map(({ Icon, label, value, href, external }) => {
                  const Wrapper = href ? "a" : "div";
                  return (
                    <Wrapper
                      key={label}
                      {...(href ? { href } : {})}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                          {label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-semibold text-ink">{value}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent hover:text-accent-ink"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy email"}
                </button>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                >
                  <Github className="h-4 w-4" />
                </a>

                {PROFILE.linkedin && (
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-ink"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={140}
            as="form"
            onSubmit={submit}
            /* self-start stops the grid stretching the card past its content. */
            className="self-start rounded-3xl border border-border bg-card p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Name
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className={field}
                />
              </label>
              <label className="flex flex-col gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className={field}
                />
              </label>
            </div>

            <label className="mt-5 flex flex-col gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
              Message
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                className={`${field} resize-none`}
              />
            </label>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-2"
              >
                Send message
                <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs leading-relaxed text-muted">
                Opens in your email app — or{" "}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent-ink underline underline-offset-2"
                >
                  message me on WhatsApp
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
