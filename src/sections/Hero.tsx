import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";
import { HeroVisual } from "../components/HeroVisual";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { usePaper } from "../providers/PaperProvider";

export function Hero() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();
  const { openPaper } = usePaper();
  const entered = useRef(false);

  useEffect(() => {
    entered.current = true;
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const playIntro = !entered.current && !reduced;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid fade-mask-b opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 20%, var(--accent-soft), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[min(96rem,calc(100%-1.5rem))] grid-cols-1 items-center gap-8 px-4 sm:gap-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:px-12 xl:px-16 2xl:max-w-[110rem]">
        <div>
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] font-medium text-text-soft backdrop-blur sm:mb-6 sm:px-3.5 sm:text-xs">
            <Sparkles size={13} className="shrink-0 text-accent" />
            <span className="truncate">{t.hero.eyebrow}</span>
          </div>

          <h1 className="text-balance text-[clamp(2.1rem,6vw+0.4rem,4.75rem)] leading-[1.08] text-text">
            {t.hero.name}
          </h1>

          <p className="mt-4 text-[clamp(1.05rem,1.4vw+0.7rem,1.65rem)] font-medium text-text sm:mt-5">
            {t.hero.title}
          </p>

          <p className="mt-2 font-mono-x text-xs tracking-wide text-accent sm:text-sm">
            {t.hero.positioning}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9">
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast shadow-[0_8px_28px_-10px_var(--accent)] transition-all duration-200 hover:bg-accent-hover active:scale-[0.98] sm:py-3.5 sm:text-base"
            >
              {t.hero.ctaPrimary}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              />
            </button>
            <button
              onClick={openPaper}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface/70 px-6 py-3 text-sm font-medium text-text transition-all duration-200 hover:border-accent hover:text-accent active:scale-[0.98] sm:py-3.5 sm:text-base"
            >
              {t.hero.ctaSecondary}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        <motion.div
          className="mx-auto flex w-full max-w-[420px] items-center justify-center sm:max-w-[520px] lg:max-w-none lg:justify-end"
          initial={playIntro ? { opacity: 0, scale: 0.94 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {!reduced && (
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted md:flex">
          <span className="font-mono-x text-[10px] uppercase tracking-[0.3em]">
            {t.hero.scroll}
          </span>
          <motion.span
            className="h-8 w-px bg-gradient-to-b from-accent to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      )}
    </section>
  );
}
