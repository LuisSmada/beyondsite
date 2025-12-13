"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Dir = "left" | "right" | "bottom";

export function SlideFromNearestEdge({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dir, setDir] = useState<Dir>("bottom");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const vw = window.innerWidth;

      // zones: gauche / centre / droite
      if (cx < vw * 0.35) setDir("left");
      else if (cx > vw * 0.65) setDir("right");
      else setDir("bottom");
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const initial = useMemo(() => {
    if (dir === "left") return { opacity: 0, x: -60, y: 0 };
    if (dir === "right") return { opacity: 0, x: 60, y: 0 };
    return { opacity: 0, x: 0, y: 40 };
  }, [dir]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
