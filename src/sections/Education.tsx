import { GraduationCap, MapPin } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { EDUCATION, useT } from "../content/site";
import { useLanguage } from "../providers/LanguageProvider";

export function Education() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const education = EDUCATION[lang];

  return (
    <Section id="education">
      <SectionHeading index="03" label={t.education.label} title={t.education.title} />
      <Reveal>
        <article className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-6 card-shadow sm:p-9 lg:p-11">
          <div className="pointer-events-none absolute -end-16 -top-20 h-64 w-64 rounded-full blur-3xl" style={{ background: "var(--accent-soft)" }} aria-hidden />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft text-accent">
              <GraduationCap size={27} />
            </span>
            <div className="min-w-0">
              <p className="font-mono-x text-xs uppercase tracking-[0.18em] text-accent">{education.department}</p>
              <h3 className="mt-3 text-2xl font-semibold text-text sm:text-3xl">{education.institution}</h3>
              <p className="mt-2 text-base leading-relaxed text-text-soft sm:text-lg">{education.college}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={15} className="text-accent" />
                {lang === "ar" ? "الموصل، العراق" : "Mosul, Iraq"}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
