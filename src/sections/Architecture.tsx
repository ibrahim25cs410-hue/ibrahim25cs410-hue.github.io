import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

export function Architecture() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const steps = t.project.steps;

  return (
    <div className="mt-16 sm:mt-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 font-mono-x text-xs uppercase tracking-[0.2em] text-accent">
            {t.project.archLabel}
          </p>
          <h3 className="text-2xl text-text sm:text-3xl">{t.project.archTitle}</h3>
        </div>
        <p className="font-mono-x text-xs text-muted">{t.project.archHint}</p>
      </div>

      <ol className="relative ms-3 space-y-2 sm:ms-4">
        {/* vertical spine */}
        <span
          className="absolute inset-y-2 start-0 w-px bg-gradient-to-b from-accent/60 via-border-strong to-transparent"
          aria-hidden
        />
        {steps.map((step, i) => {
          const isActive = active === i;
          const isLast = i === steps.length - 1;
          return (
            <li key={`arch-${i}`} className="relative ps-8 sm:ps-10">
              {/* node */}
              <motion.span
                className={`absolute -start-[7px] top-3 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  isActive || isLast
                    ? "border-accent bg-accent"
                    : "border-border-strong bg-surface"
                }`}
                initial={false}
                animate={{ scale: 1 }}
              />

              {/* traveling pulse */}
              {!reduced && !isLast && (
                <motion.span
                  className="absolute -start-[3px] top-3 z-0 h-1.5 w-1.5 rounded-full bg-accent"
                  animate={{ y: [0, 52], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                    ease: "easeIn",
                  }}
                  aria-hidden
                />
              )}

              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className={`group mb-2 block w-full rounded-xl border p-4 text-start transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface/50 hover:border-border-strong"
                }`}
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono-x text-xs transition-colors ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-text sm:text-lg">
                    {step.title}
                  </span>
                </div>
                <motion.p
                  className="overflow-hidden text-sm leading-relaxed text-muted"
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 8 : 0,
                  }}
                  transition={{ duration: reduced ? 0 : 0.28, ease: "easeInOut" }}
                >
                  {step.desc}
                </motion.p>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
