import { Instagram, Facebook, Globe, Mail, ArrowUpRight, Users } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { TikTokIcon } from "../components/icons/TikTok";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, LINKS } from "../content/site";

export function Team() {
  const { lang } = useLanguage();
  const t = useT(lang);

  const links = [
    { icon: Globe, label: t.team.visit, value: "university-assistant.github.io", href: LINKS.team.website, primary: true },
    { icon: Instagram, label: "Instagram", value: LINKS.team.instagramHandle, href: LINKS.team.instagram },
    { icon: Facebook, label: "Facebook", value: "facebook.com", href: LINKS.team.facebook },
    { icon: TikTokIcon, label: "TikTok", value: LINKS.team.tiktokHandle, href: LINKS.team.tiktok },
    { icon: Mail, label: "Email", value: LINKS.team.email, href: `mailto:${LINKS.team.email}` },
  ];

  return (
    <Section id="team" className="bg-surface/30">
      <SectionHeading index="06" label={t.team.label} title={t.team.title} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
            <Users size={22} />
          </span>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-text-soft">
            {t.team.body}
          </p>
          <p className="mt-6 font-mono-x text-xs uppercase tracking-[0.2em] text-muted">
            {t.team.linksLabel}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <li key={l.label} className={l.primary ? "sm:col-span-2" : ""}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`group flex min-h-12 items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${
                      l.primary
                        ? "border-accent/30 bg-accent-soft hover:border-accent"
                        : "border-border bg-surface hover:border-accent/50 hover:-translate-y-0.5"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors ${
                        l.primary
                          ? "bg-accent text-accent-contrast"
                          : "border border-border bg-bg-elev text-text-soft group-hover:text-accent"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-text">{l.label}</p>
                      <p className="truncate text-xs text-muted">{l.value}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="flex-none text-muted transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
