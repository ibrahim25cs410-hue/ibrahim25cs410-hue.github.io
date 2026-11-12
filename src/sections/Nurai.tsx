import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Hash, Maximize2, Trophy, ImageOff } from "lucide-react";
import { Section, SectionHeading } from "../components/ui/Section";
import { Reveal } from "../components/ui/Reveal";
import { Lightbox } from "../components/ui/Lightbox";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, ASSETS, CERTIFICATE } from "../content/site";

function CertificateImage({ alt, missing }: { alt: string; missing: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="flex aspect-[1.414/1] w-full flex-col items-center justify-center gap-3 bg-surface-2 p-8 text-center">
        <ImageOff size={28} className="text-muted" />
        <p className="max-w-xs text-sm text-muted">{missing}</p>
        <p className="font-mono-x text-[11px] text-muted/70">
          /public{ASSETS.certificate}
        </p>
      </div>
    );
  }
  return (
    <img
      src={ASSETS.certificate}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className="block h-auto w-full"
    />
  );
}

export function Nurai() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const [open, setOpen] = useState(false);

  const details = [
    { icon: Trophy, label: t.nurai.trackLabel, value: t.nurai.track },
    { icon: Award, label: t.nurai.projectLabel, value: t.nurai.project },
    { icon: Calendar, label: t.nurai.dateLabel, value: CERTIFICATE.date },
    { icon: Hash, label: t.nurai.idLabel, value: CERTIFICATE.id, mono: true },
  ];

  return (
    <Section id="nurai-achievement">
      <SectionHeading
        index="07"
        label={t.nurai.label}
        title={t.nurai.title}
        subtitle={t.nurai.subtitle}
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* Info */}
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent">
              <Trophy size={14} />
              {t.nurai.recognition}
            </span>
            <span className="font-mono-x text-xs text-muted">
              {t.nurai.recognitionLabel}
            </span>
          </div>

          <p className="mt-6 text-lg font-medium text-text">{t.nurai.team}</p>
          <p className="mt-4 leading-relaxed text-muted">{t.nurai.body}</p>

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4"
              >
                <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-border bg-surface text-accent">
                  <d.icon size={15} />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs text-muted">{d.label}</dt>
                  <dd
                    className={`truncate text-sm font-medium text-text ${
                      d.mono ? "font-mono-x text-xs" : ""
                    }`}
                    title={d.value}
                  >
                    {d.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Certificate card */}
        <Reveal delay={0.1}>
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface card-shadow"
            aria-label={t.nurai.view}
          >
            <div className="relative overflow-hidden">
              <CertificateImage alt={t.nurai.certAlt} missing={t.nurai.certMissing} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-border p-4">
              <span className="text-sm font-medium text-text">{t.nurai.title}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
                <Maximize2 size={13} />
                {t.nurai.view}
              </span>
            </div>
          </motion.button>
        </Reveal>
      </div>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        label={t.nurai.certAlt}
        closeLabel={t.nurai.close}
      >
        <CertificateImage alt={t.nurai.certAlt} missing={t.nurai.certMissing} />
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border p-4 text-sm">
          <span className="font-medium text-text">{t.nurai.title}</span>
          <span className="font-mono-x text-xs text-muted">
            {t.nurai.idLabel}: {CERTIFICATE.id}
          </span>
        </div>
      </Lightbox>
    </Section>
  );
}
