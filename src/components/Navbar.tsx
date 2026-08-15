import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { useLanguage } from "../providers/LanguageProvider";
import { useScrolled, useScrollSpy } from "../hooks/useScroll";
import { NAV_IDS, useT } from "../content/site";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, dir } = useLanguage();
  const t = useT(lang);
  const scrolled = useScrolled(20);
  const active = useScrollSpy(NAV_IDS);
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border py-2.5"
          : "border-b border-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
          aria-label={t.hero.name}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-surface font-mono-x text-sm font-semibold text-accent transition-colors group-hover:border-accent">
            IA
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-text sm:block">
            {t.hero.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {t.nav[id]}
                {active === id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center rounded-lg border border-border bg-surface/60 p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-2 py-1 transition-colors ${
                lang === "en" ? "bg-accent text-accent-contrast" : "text-muted hover:text-text"
              }`}
              aria-pressed={lang === "en"}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("ar")}
              className={`rounded-md px-2 py-1 transition-colors ${
                lang === "ar" ? "bg-accent text-accent-contrast" : "text-muted hover:text-text"
              }`}
              aria-pressed={lang === "ar"}
              aria-label="التبديل إلى العربية"
            >
              AR
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/60 text-text transition-colors hover:border-accent hover:text-accent"
            aria-label={t.a11y.toggleTheme}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/60 text-text transition-colors hover:border-accent lg:hidden"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-b border-border lg:hidden"
          >
            <ul className="mx-auto flex w-full max-w-[88rem] flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_IDS.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: dir === "rtl" ? 16 : -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <button
                    onClick={() => go(id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-start text-base font-medium transition-colors ${
                      active === id
                        ? "bg-accent-soft text-accent"
                        : "text-text-soft hover:bg-surface-2"
                    }`}
                  >
                    <span>{t.nav[id]}</span>
                    <span className="font-mono-x text-xs text-muted">
                      0{NAV_IDS.indexOf(id) + 1}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
