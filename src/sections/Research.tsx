import { FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { StatCounter } from "../components/ui/StatCounter";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, RESEARCH_STATS, ASSETS } from "../content/site";

export function Research() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <Section id="research" className="bg-surface/30">
      <SectionHeading
        index="03"
        label={t.research.label}
        title={t.research.title}
        subtitle={t.research.subtitle}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-soft">
            <ShieldCheck size={13} className="text-accent" />
            {t.research.subtitle}
          </div>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-text-soft">
            {t.research.body}
          </p>
          <a
            href={ASSETS.researchPaper}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-contrast shadow-[0_8px_28px_-10px_var(--accent)] transition-all hover:bg-accent-hover active:scale-[0.98]"
          >
            <FileText size={16} />
            {t.research.cta}
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {RESEARCH_STATS.map((s) => (
              <div
                key={s.key}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 card-shadow"
              >
                <div
                  className="pointer-events-none absolute -end-8 -top-8 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  style={{ background: "var(--accent-soft)" }}
                  aria-hidden
                />
                <p className="font-mono-x text-3xl font-semibold text-text sm:text-4xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted">
                  {t.research.stats[s.key]}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
