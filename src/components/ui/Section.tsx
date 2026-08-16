import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 ${className}`}
    >
      <div className="mx-auto w-full max-w-[min(96rem,calc(100%-1.5rem))] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:max-w-[110rem]">
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}

export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-4 sm:mb-16 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <div className="flex items-center gap-3 text-muted">
        <span className="font-mono-x text-xs tracking-widest text-accent">
          {index}
        </span>
        <span className="h-px w-8 bg-border-strong" />
        <span className="font-mono-x text-xs uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
      <h2 className="max-w-3xl text-[clamp(1.6rem,2.4vw+0.8rem,3.25rem)] text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted sm:text-lg">{subtitle}</p>
      )}
    </Reveal>
  );
}
