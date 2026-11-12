import { Cpu, FileText } from "lucide-react";
import { Section } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, TECH_GROUPS } from "../content/site";
import { Architecture } from "./Architecture";
import { usePaper } from "../providers/PaperProvider";

export function FeaturedProject() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const { openPaper } = usePaper();

  return (
    <Section id="isa-details">
      {/* header */}
      <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14">
        <div className="flex items-center gap-3 text-muted">
          <span className="font-mono-x text-xs tracking-widest text-accent">05</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono-x text-xs uppercase tracking-[0.2em]">
            {t.project.label}
          </span>
        </div>
      </Reveal>

      {/* Project hero card */}
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-5 card-shadow sm:rounded-3xl sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" aria-hidden />
          <div
            className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
            aria-hidden
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono-x text-xs font-medium text-accent">
                <Cpu size={12} />
                {t.project.tag}
              </span>
              <h2 className="mt-5 text-[clamp(1.6rem,2.5vw+0.7rem,3rem)] text-text">
                {t.project.title}
              </h2>
              <div className="mt-6 space-y-4 text-text-soft">
                <p className="leading-relaxed">{t.project.p1}</p>
                <p className="leading-relaxed text-muted">{t.project.p2}</p>
                <p className="leading-relaxed text-muted">{t.project.p3}</p>
              </div>

              <button
                onClick={openPaper}
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <FileText size={16} />
                {t.research.cta}
              </button>
            </div>

            {/* Tech stack */}
            <div className="lg:border-s lg:border-border lg:ps-8">
              <p className="mb-5 font-mono-x text-xs uppercase tracking-[0.2em] text-muted">
                {t.project.techTitle}
              </p>
              <div className="space-y-5">
                {TECH_GROUPS.map((group) => (
                  <div key={group.key}>
                    <p className="mb-2.5 text-xs font-semibold text-text-soft">
                      {t.project.techGroups[group.key]}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border bg-bg-elev px-2.5 py-1.5 font-mono-x text-xs text-text-soft transition-colors hover:border-accent hover:text-accent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Architecture */}
      <Architecture />
    </Section>
  );
}
