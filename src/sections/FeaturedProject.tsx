import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Cpu } from "lucide-react";
import { Section } from "../components/ui/Section";
import { Reveal, staggerContainer, staggerItem } from "../components/ui/Reveal";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, TECH_GROUPS, ASSETS } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { Architecture } from "./Architecture";

export function FeaturedProject() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();

  const openPaper = () => window.open(ASSETS.researchPaper, "_blank", "noopener,noreferrer");

  return (
    <Section id="projects">
      {/* header */}
      <Reveal className="mb-10 flex flex-col gap-4 sm:mb-14">
        <div className="flex items-center gap-3 text-muted">
          <span className="font-mono-x text-xs tracking-widest text-accent">02</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="font-mono-x text-xs uppercase tracking-[0.2em]">
            {t.project.label}
          </span>
        </div>
      </Reveal>

      {/* Project hero card */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-6 card-shadow sm:p-10 lg:p-14">
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
              <h2 className="mt-5 text-3xl text-text sm:text-4xl lg:text-5xl">
                {t.project.title}
              </h2>
              <div className="mt-6 space-y-4 text-text-soft">
                <p className="leading-relaxed">{t.project.p1}</p>
                <p className="leading-relaxed text-muted">{t.project.p2}</p>
                <p className="leading-relaxed text-muted">{t.project.p3}</p>
              </div>

              <button
                onClick={openPaper}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <FileText size={16} />
                {t.research.cta}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
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
                    <motion.ul
                      className="flex flex-wrap gap-2"
                      variants={reduced ? undefined : staggerContainer}
                      initial={reduced ? undefined : "hidden"}
                      whileInView={reduced ? undefined : "show"}
                      viewport={{ once: true }}
                    >
                      {group.items.map((item) => (
                        <motion.li
                          key={item}
                          variants={reduced ? undefined : staggerItem}
                          className="rounded-lg border border-border bg-bg-elev px-2.5 py-1.5 font-mono-x text-xs text-text-soft transition-colors hover:border-accent hover:text-accent"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
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
