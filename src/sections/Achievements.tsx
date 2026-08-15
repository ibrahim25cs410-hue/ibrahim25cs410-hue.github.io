import { motion } from "framer-motion";
import { Section, SectionHeading } from "../components/ui/Section";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

export function Achievements() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();

  return (
    <Section id="achievements">
      <SectionHeading
        index="05"
        label={t.achievements.label}
        title={t.achievements.title}
      />

      <ol className="relative ms-2">
        <span
          className="absolute inset-y-0 start-0 w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent"
          aria-hidden
        />
        {t.achievements.items.map((item, i) => (
          <motion.li
            key={item.title}
            className="relative ps-8 pb-10 last:pb-0 sm:ps-12"
            initial={reduced ? undefined : { opacity: 0, x: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute -start-[6px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-border-strong">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-x text-xs font-medium text-accent">
                  {item.date}
                </span>
                <span className="rounded-full border border-border bg-bg-elev px-2.5 py-0.5 font-mono-x text-[11px] text-muted">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl text-text">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
