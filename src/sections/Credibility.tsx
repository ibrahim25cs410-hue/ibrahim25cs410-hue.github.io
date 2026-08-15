import { GraduationCap, FlaskConical, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";
import { staggerContainer, staggerItem } from "../components/ui/Reveal";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

const ICONS = [GraduationCap, FlaskConical, Award, Users];

export function Credibility() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative border-y border-border bg-surface/40">
      <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <motion.ul
          className="grid grid-cols-2 divide-border lg:grid-cols-4"
          variants={reduced ? undefined : staggerContainer}
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-40px" }}
        >
          {t.credibility.items.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <motion.li
                key={c.label}
                variants={reduced ? undefined : staggerItem}
                className="group flex items-center gap-4 border-border p-6 transition-colors hover:bg-surface/70 sm:p-7 lg:[&:not(:last-child)]:border-e"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors group-hover:border-accent">
                  <Icon size={19} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-text">
                    {c.label}
                  </p>
                  <p className="truncate text-xs text-muted">{c.value}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}
