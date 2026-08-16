import { Check } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";

export function About() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <Section id="about">
      <SectionHeading index="01" label={t.about.label} title={t.about.title} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-pretty text-base leading-relaxed text-text-soft sm:text-lg lg:text-xl">
            {t.about.body}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono-x text-xs uppercase tracking-[0.2em] text-muted">
              {t.hero.positioning}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-5 font-mono-x text-xs uppercase tracking-[0.2em] text-muted">
            {t.about.focusTitle}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {t.about.focus.map((f, i) => (
              <li
                key={`focus-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm text-text-soft transition-colors hover:border-accent hover:text-text"
              >
                <Check size={13} className="text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
