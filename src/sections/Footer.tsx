import { ArrowUp, Moon, Sun } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { useTheme } from "../providers/ThemeProvider";
import { useT } from "../content/site";

export function Footer() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useT(lang);

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[88rem] px-5 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface font-mono-x text-sm font-semibold text-accent">
              IA
            </span>
            <div>
              <p className="text-sm font-semibold text-text">{t.hero.name}</p>
              <p className="text-xs text-muted">{t.footer.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg border border-border bg-surface p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLang("en")}
                className={`rounded-md px-2.5 py-1.5 transition-colors ${
                  lang === "en" ? "bg-accent text-accent-contrast" : "text-muted hover:text-text"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`rounded-md px-2.5 py-1.5 transition-colors ${
                  lang === "ar" ? "bg-accent text-accent-contrast" : "text-muted hover:text-text"
                }`}
              >
                AR
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent"
              aria-label={t.a11y.toggleTheme}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors hover:border-accent hover:text-accent"
              aria-label={t.a11y.toTop}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-muted">{t.footer.copyright}</p>
          <p className="font-mono-x text-xs text-muted/70">{t.footer.built}</p>
        </div>
      </div>
    </footer>
  );
}
