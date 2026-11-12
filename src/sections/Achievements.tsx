import { useState } from "react";
import { Award, Maximize2 } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Lightbox } from "../components/ui/Lightbox";
import { ASSETS } from "../content/site";
import { useLanguage } from "../providers/LanguageProvider";
import { useT } from "../content/site";

export function Achievements() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const [ijazahOpen, setIjazahOpen] = useState(false);

  return (
    <Section id="achievements">
      <SectionHeading
        index="08"
        label={t.achievements.label}
        title={t.achievements.title}
      />

      <ol className="relative ms-2">
        <span
          className="absolute inset-y-0 start-0 w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent"
          aria-hidden
        />
        {t.achievements.items.map((item, i) => (
          <li
            key={`ach-${i}`}
            className="relative ps-8 pb-10 last:pb-0 sm:ps-12"
          >
            <span className="absolute -start-[6px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-accent bg-surface">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <div className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-border-strong">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono-x text-xs font-medium text-accent">
                  {item.date}
                </span>
                <span className="rounded-full border border-border bg-bg-elev px-2.5 py-0.5 font-mono-x text-[11px] text-muted">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl text-text">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent-soft text-accent"><Award size={19} /></span>
          <div>
            <p className="font-mono-x text-[11px] uppercase tracking-[0.18em] text-accent">{lang === "ar" ? "إجازة قرآنية" : "Qur'an Ijazah"}</p>
            <h3 className="mt-1 text-xl font-semibold text-text">{lang === "ar" ? "إجازة في التجويد والقراءات — قراءة عاصم" : "Qur'an Ijazah — Reading of Asim"}</h3>
            <p className="mt-1 text-sm text-muted">{lang === "ar" ? "بروايتي حفص وشعبة عن عاصم" : "Hafs and Shu'bah narrations from Asim"}</p>
          </div>
        </div>
        <button onClick={() => setIjazahOpen(true)} className="group block w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface text-start card-shadow transition-all duration-300 hover:-translate-y-1 hover:border-accent/50" aria-label={lang === "ar" ? "عرض إجازة القرآن الكريم" : "View Qur'an Ijazah"}>
          <img src={ASSETS.ijazah} alt={lang === "ar" ? "إجازة في التجويد والقراءات بقراءة عاصم" : "Qur'an Ijazah in Tajweed and Qira'at, reading of Asim"} loading="lazy" decoding="async" className="block h-auto w-full" />
          <span className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-sm font-medium text-text">
            {lang === "ar" ? "عرض الشهادة" : "View certificate"}<Maximize2 size={15} className="text-accent" />
          </span>
        </button>
      </div>
      <Lightbox open={ijazahOpen} onClose={() => setIjazahOpen(false)} label={lang === "ar" ? "إجازة القرآن الكريم بقراءة عاصم" : "Qur'an Ijazah — Reading of Asim"} closeLabel={t.nurai.close}>
        <img src={ASSETS.ijazah} alt={lang === "ar" ? "إجازة في التجويد والقراءات" : "Ijazah in Tajweed and Qira'at"} className="block h-auto w-full" />
      </Lightbox>
    </Section>
  );
}
