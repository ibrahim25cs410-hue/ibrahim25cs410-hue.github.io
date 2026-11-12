import { Braces, Code2, Database, GitBranch, Layers3, Terminal } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { CORE_SKILLS, useT } from "../content/site";
import { useLanguage } from "../providers/LanguageProvider";

const ICONS = [Terminal, Code2, Braces, Layers3, GitBranch, Database, Database];

export function Skills() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <Section id="skills" className="bg-surface/30">
      <SectionHeading index="02" label={t.skills.label} title={t.skills.title} subtitle={t.skills.subtitle} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {CORE_SKILLS.map((skill, index) => {
          const Icon = ICONS[index] ?? Code2;
          return (
            <Reveal key={skill} delay={index * 0.045}>
              <div className="group flex min-h-24 items-center gap-3 rounded-2xl border border-border bg-surface/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:card-shadow sm:min-h-28 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-elev text-accent transition-colors group-hover:border-accent/50">
                  <Icon size={19} />
                </span>
                <span className="text-sm font-semibold text-text sm:text-base">{skill}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
