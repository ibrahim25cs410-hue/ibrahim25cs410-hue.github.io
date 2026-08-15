import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

/**
 * Abstract retrieval-augmented-generation visualization:
 * scattered "knowledge" nodes feeding a central model core.
 * Deterministic layout, GPU-friendly, no heavy libraries.
 */

const OUTER = [
  { x: 42, y: 58 },
  { x: 78, y: 34 },
  { x: 118, y: 70 },
  { x: 62, y: 118 },
  { x: 150, y: 128 },
  { x: 40, y: 168 },
  { x: 96, y: 196 },
  { x: 168, y: 62 },
  { x: 210, y: 110 },
  { x: 176, y: 186 },
  { x: 250, y: 70 },
  { x: 246, y: 168 },
];

const CENTER = { x: 150, y: 120 };

export function HeroVisual() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* soft ambient glow */}
      <div
        className="absolute inset-[12%] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      <svg
        viewBox="0 0 300 240"
        className="relative h-full w-full"
        role="img"
        aria-label="Abstract visualization of a retrieval-augmented AI system"
      >
        <defs>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-hover)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </radialGradient>
          <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* concentric orbit rings */}
        {[46, 74, 104].map((r, i) => (
          <circle
            key={r}
            cx={CENTER.x}
            cy={CENTER.y}
            r={r}
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="0.6"
            strokeDasharray={i === 1 ? "2 5" : undefined}
            opacity={0.5}
          />
        ))}

        {/* edges */}
        {OUTER.map((n, i) => (
          <motion.line
            key={`e-${i}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="url(#edgeGrad)"
            strokeWidth="1"
            initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
            animate={reduced ? undefined : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 + i * 0.06 }}
          />
        ))}

        {/* traveling pulses along edges */}
        {!reduced &&
          OUTER.map((n, i) => (
            <motion.circle
              key={`p-${i}`}
              r="2"
              fill="var(--accent-hover)"
              initial={{ cx: n.x, cy: n.y, opacity: 0 }}
              animate={{
                cx: [n.x, CENTER.x],
                cy: [n.y, CENTER.y],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.6,
                delay: i * 0.35,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* outer nodes */}
        {OUTER.map((n, i) => (
          <motion.g
            key={`n-${i}`}
            initial={reduced ? undefined : { scale: 0, opacity: 0 }}
            animate={reduced ? undefined : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={i % 3 === 0 ? 5 : 3.4}
              fill="var(--surface)"
              stroke="var(--accent)"
              strokeWidth="1.2"
            />
          </motion.g>
        ))}

        {/* central model core */}
        <motion.g
          initial={reduced ? undefined : { scale: 0 }}
          animate={reduced ? undefined : { scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        >
          {!reduced && (
            <motion.circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="18"
              fill="var(--accent)"
              opacity="0.18"
              animate={{ r: [18, 26, 18], opacity: [0.22, 0.05, 0.22] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <circle cx={CENTER.x} cy={CENTER.y} r="13" fill="url(#coreGrad)" />
          <circle
            cx={CENTER.x}
            cy={CENTER.y}
            r="13"
            fill="none"
            stroke="var(--accent-hover)"
            strokeWidth="1"
            opacity="0.6"
          />
        </motion.g>
      </svg>

      {/* floating technical labels */}
      <FloatLabel className="left-[2%] top-[16%]" text="RAG" reduced={reduced} d={0} />
      <FloatLabel
        className="right-[0%] top-[40%]"
        text="Gemma 4 E2B"
        reduced={reduced}
        d={0.6}
      />
      <FloatLabel
        className="bottom-[10%] left-[8%]"
        text="FAISS"
        reduced={reduced}
        d={1.2}
      />
      <FloatLabel
        className="bottom-[20%] right-[6%]"
        text="LoRA"
        reduced={reduced}
        d={1.8}
      />
    </div>
  );
}

function FloatLabel({
  text,
  className,
  reduced,
  d,
}: {
  text: string;
  className: string;
  reduced: boolean;
  d: number;
}) {
  return (
    <motion.span
      className={`absolute rounded-full border border-border bg-surface/80 px-3 py-1 font-mono-x text-[10px] font-medium text-text-soft backdrop-blur ${className}`}
      initial={reduced ? undefined : { opacity: 0, y: 8 }}
      animate={
        reduced
          ? undefined
          : { opacity: 1, y: [0, -6, 0] }
      }
      transition={{
        opacity: { duration: 0.6, delay: 1 + d },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: d },
      }}
    >
      {text}
    </motion.span>
  );
}
