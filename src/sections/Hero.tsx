import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";
import { HeroVisual } from "../components/HeroVisual";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

export function Hero() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item: Variants = reduced
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* background grid + radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-grid fade-mask-b opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, var(--accent-soft), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[88rem] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:px-12">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-text-soft backdrop-blur"
          >
            <Sparkles size={13} className="text-accent" />
            <span>{t.hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl leading-[1.05] text-text sm:text-6xl lg:text-7xl"
          >
            {t.hero.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-xl font-medium text-text sm:text-2xl"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2 font-mono-x text-sm tracking-wide text-accent"
          >
            {t.hero.positioning}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-medium text-accent-contrast shadow-[0_8px_28px_-10px_var(--accent)] transition-all duration-200 hover:bg-accent-hover active:scale-[0.98]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              />
            </button>
            <button
              onClick={() => scrollTo("research")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/70 px-6 py-3.5 text-base font-medium text-text transition-all duration-200 hover:border-accent hover:text-accent active:scale-[0.98]"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          className="flex items-center justify-center lg:justify-end"
          initial={reduced ? undefined : { opacity: 0, scale: 0.94 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* scroll cue */}
      {!reduced && (
        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="font-mono-x text-[10px] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <motion.span
            className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      )}
    </section>
  );
}
