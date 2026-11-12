import { ArrowUpRight, BarChart3, GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { PROJECT_CARDS } from "../content/site";
import { useLanguage } from "../providers/LanguageProvider";

export function Projects() {
  const { lang } = useLanguage();
  const content = PROJECT_CARDS[lang];
  const projects = [
    { ...content.aura, href: "https://gold-5mm4.onrender.com/", icon: BarChart3, number: "01", statusTone: "border-accent/30 bg-accent-soft text-accent" },
    { ...content.assistant, href: "https://university-assistant.github.io/uniesiy-ass/", icon: GraduationCap, number: "02", statusTone: "border-border bg-bg-elev text-text-soft" },
  ];

  return (
    <Section id="projects" className="bg-surface/30">
      <SectionHeading index="04" label={content.label} title={content.title} />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.number} delay={index * 0.08}>
              <article className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 card-shadow sm:p-8">
                <div className="pointer-events-none absolute -end-20 -top-20 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--accent-soft)" }} aria-hidden />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent-soft text-accent"><Icon size={22} /></span>
                  <span className="font-mono-x text-xs tracking-widest text-muted">{project.number}</span>
                </div>
                <div className="relative mt-7 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium ${project.statusTone}`}>{project.status}</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">{project.role}</span>
                </div>
                <h3 className="relative mt-4 text-2xl font-semibold text-text sm:text-3xl">{project.name}</h3>
                <p className="relative mt-3 max-w-xl leading-relaxed text-muted">{project.description}</p>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="relative mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-accent transition-colors hover:text-accent-hover">
                  {project.action}<ArrowUpRight size={16} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
      <a href="#isa-details" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover">
        {lang === "ar" ? "استكشف المعمارية التقنية للمساعد الجامعي" : "Explore the assistant's technical architecture"}
        <ArrowUpRight size={15} />
      </a>
    </Section>
  );
}
