import { GraduationCap, FlaskConical, Award, Users } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";

const ICONS = [GraduationCap, FlaskConical, Award, Users];

export function Credibility() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <div className="relative border-y border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[min(96rem,calc(100%-1.5rem))] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:max-w-[110rem]">
        <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4">
          {t.credibility.items.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <li
                key={`cred-${i}`}
                className="group flex items-center gap-3 border-border p-4 transition-colors hover:bg-surface/70 min-[420px]:border-b min-[420px]:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:[&:not(:last-child)]:border-e sm:gap-4 sm:p-7"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors group-hover:border-accent sm:h-11 sm:w-11">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-text">
                    {c.label}
                  </p>
                  <p className="truncate text-xs text-muted">{c.value}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
