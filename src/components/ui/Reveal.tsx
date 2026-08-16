import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../../hooks/useMediaQuery";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/**
 * Scroll reveal that stays visible after the first appearance.
 * Switching language or theme must not hide the content again.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
}: RevealProps) {
  const reduced = usePrefersReducedMotion();
  const nodeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (visible) return;
    const el = nodeRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <motion.div
      ref={nodeRef}
      className={className}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : y }}
      transition={{
        duration: reduced ? 0 : 0.55,
        delay: visible ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
