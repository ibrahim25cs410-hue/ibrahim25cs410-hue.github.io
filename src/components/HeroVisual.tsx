import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";

/** A layered, animated AI constellation built with SVG and Framer Motion. */
const NODES = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  const radius = 78 + (i % 3) * 17;
  return {
    x: 150 + Math.cos(angle) * radius,
    y: 120 + Math.sin(angle) * radius * 0.72,
    r: i % 5 === 0 ? 4.2 : i % 2 === 0 ? 2.8 : 1.8,
  };
});
const CORE = { x: 150, y: 120 };

export function HeroVisual() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="hero-visual relative isolate aspect-square w-full max-w-[560px]" aria-label="Animated abstract AI network visualization">
      <div className="hero-visual-glow absolute inset-[9%] rounded-full" aria-hidden />
      <div className="hero-visual-grid absolute inset-[7%] rounded-full opacity-40" aria-hidden />
      <motion.div
        className="absolute inset-[13%] rounded-full border border-accent/20"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_5px_rgba(59,130,246,.65)]" />
      </motion.div>
      <motion.div
        className="absolute inset-[22%] rounded-full border border-dashed border-blue-400/25"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      <svg viewBox="0 0 300 240" className="relative z-10 h-full w-full overflow-visible" role="img" aria-label="AI neural network with connected data nodes">
        <defs>
          <radialGradient id="aiCore" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="38%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          <linearGradient id="aiLink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity=".04" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity=".58" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity=".12" />
          </linearGradient>
          <filter id="aiGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {[34, 53, 75, 103].map((r, i) => (
          <circle key={r} cx={CORE.x} cy={CORE.y} r={r} fill="none" stroke="#60a5fa" strokeOpacity={0.12 + i * 0.035} strokeWidth=".7" strokeDasharray={i % 2 ? "2 5" : undefined} />
        ))}

        {NODES.map((node, i) => (
          <g key={`link-${i}`}>
            <motion.line x1={CORE.x} y1={CORE.y} x2={node.x} y2={node.y} stroke="url(#aiLink)" strokeWidth={i % 4 === 0 ? 1.35 : 0.8} initial={reduced ? false : { pathLength: 0, opacity: 0 }} animate={reduced ? undefined : { pathLength: 1, opacity: 1 }} transition={{ duration: 1.25, delay: i * 0.035 }} />
            {!reduced && i % 2 === 0 && (
              <motion.circle r="1.8" fill="#bfdbfe" filter="url(#aiGlow)" initial={{ cx: node.x, cy: node.y, opacity: 0 }} animate={{ cx: [node.x, CORE.x, node.x], cy: [node.y, CORE.y, node.y], opacity: [0, 1, 0] }} transition={{ duration: 3.8 + (i % 4) * 0.45, repeat: Infinity, delay: i * 0.22, ease: "easeInOut" }} />
            )}
          </g>
        ))}

        {NODES.map((node, i) => (
          <motion.g key={`node-${i}`} style={{ transformOrigin: `${node.x}px ${node.y}px` }} animate={reduced ? undefined : { scale: [1, i % 3 === 0 ? 1.35 : 1.12, 1], opacity: [0.62, 1, 0.62] }} transition={{ duration: 2.8 + (i % 5) * 0.4, repeat: Infinity, delay: i * 0.11, ease: "easeInOut" }}>
            <circle cx={node.x} cy={node.y} r={node.r + 3} fill="#2563eb" opacity=".09" />
            <circle cx={node.x} cy={node.y} r={node.r} fill={i % 4 === 0 ? "#bfdbfe" : "#60a5fa"} stroke="#1d4ed8" strokeWidth=".8" />
          </motion.g>
        ))}

        <motion.g style={{ transformOrigin: `${CORE.x}px ${CORE.y}px` }} animate={reduced ? undefined : { scale: [1, 1.055, 1] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
          <circle cx={CORE.x} cy={CORE.y} r="28" fill="#2563eb" opacity=".12" />
          <circle cx={CORE.x} cy={CORE.y} r="21" fill="#3b82f6" opacity=".16" />
          <circle cx={CORE.x} cy={CORE.y} r="14" fill="url(#aiCore)" filter="url(#aiGlow)" />
          <circle cx={CORE.x} cy={CORE.y} r="5" fill="#eff6ff" opacity=".95" />
        </motion.g>
      </svg>

      <FloatChip className="left-[0%] top-[19%]" label="NEURAL NETWORK" delay={0} reduced={reduced} />
      <FloatChip className="right-[-1%] top-[35%]" label="GEMMA · AI" delay={0.8} reduced={reduced} />
      <FloatChip className="bottom-[13%] left-[5%]" label="RAG SYSTEMS" delay={1.4} reduced={reduced} />
      <FloatChip className="bottom-[18%] right-[1%]" label="DATA · LOGIC" delay={2} reduced={reduced} />
      <motion.div className="absolute right-[17%] top-[9%] h-1.5 w-1.5 rounded-full bg-blue-200 shadow-[0_0_16px_5px_rgba(96,165,250,.6)]" animate={reduced ? undefined : { y: [0, 14, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />
    </div>
  );
}

function FloatChip({ label, className, delay, reduced }: { label: string; className: string; delay: number; reduced: boolean }) {
  return (
    <motion.div className={`absolute z-20 rounded-full border border-blue-400/20 bg-[#0b1628]/85 px-3 py-2 font-mono-x text-[8px] tracking-[.16em] text-blue-100 shadow-[0_8px_30px_rgba(2,8,23,.28)] backdrop-blur-xl sm:px-4 sm:text-[9px] ${className}`} initial={reduced ? false : { opacity: 0, y: 12 }} animate={reduced ? undefined : { opacity: [0.72, 1, 0.72], y: [0, -8, 0] }} transition={{ duration: 4.5, delay, repeat: Infinity, ease: "easeInOut" }}>
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_9px_2px_rgba(59,130,246,.65)]" />{label}
    </motion.div>
  );
}
