import { Instagram, Mail, Facebook, ArrowUpRight, Linkedin } from "lucide-react";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, LINKS } from "../content/site";

export function Contact() {
  const { lang } = useLanguage();
  const t = useT(lang);

  const socials = [
    { icon: Instagram, label: LINKS.personal.instagramHandle, href: LINKS.personal.instagram },
    { icon: Facebook, label: "Facebook", href: LINKS.personal.facebook },
    { icon: Linkedin, label: t.contact.linkedin, href: LINKS.personal.linkedin },
    { icon: Mail, label: LINKS.personal.email, href: `mailto:${LINKS.personal.email}` },
  ];

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 px-5 py-12 text-center card-shadow sm:rounded-3xl sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40"
            style={{ background: "radial-gradient(60% 100% at 50% 0%, var(--accent-soft), transparent 70%)" }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="mb-4 font-mono-x text-xs uppercase tracking-[0.2em] text-accent">
              {t.contact.label}
            </p>
            <h2 className="text-balance text-[clamp(1.6rem,3vw+0.6rem,3.1rem)] text-text">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted sm:text-lg">
              {t.contact.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={LINKS.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-contrast shadow-[0_8px_28px_-10px_var(--accent)] transition-all hover:bg-accent-hover active:scale-[0.98]"
              >
                <Instagram size={17} />
                {t.contact.instagram}
              </a>
              <a
                href={`mailto:${LINKS.personal.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-medium text-text transition-all hover:border-accent hover:text-accent active:scale-[0.98]"
              >
                <Mail size={17} />
                {t.contact.email}
              </a>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="mb-4 font-mono-x text-xs uppercase tracking-[0.2em] text-muted">
                {t.contact.socialTitle}
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-elev px-4 py-2.5 text-sm text-text-soft transition-colors hover:border-accent hover:text-accent"
                      >
                        <Icon size={15} />
                        <span className="max-w-[12rem] truncate">{s.label}</span>
                        <ArrowUpRight size={13} className="text-muted transition-colors group-hover:text-accent" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
