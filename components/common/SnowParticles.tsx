/* eslint-disable react-hooks/purity */
"use client";

import { useEffect, useMemo, useState } from "react";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export const SnowParticles = ({
  count = 28,
  className = "",
}: {
  count?: number;
  className?: string;
}) => {
  const [isCoarse, setIsCoarse] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const coarse =
      window.matchMedia?.("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setIsCoarse(coarse);
    setReduceMotion(reduced);
  }, []);

  // Sur mobile: moins de particules / drift plus faible
  const actualCount = reduceMotion ? 0 : isCoarse ? Math.min(14, count) : count;

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: actualCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: (isCoarse ? 2 : 2) + Math.random() * (isCoarse ? 3 : 4), // mobile un peu plus petit
      duration: (isCoarse ? 8 : 6) + Math.random() * (isCoarse ? 8 : 7), // plus lent sur mobile
      delay: -Math.random() * 10,
      drift: (Math.random() * 2 - 1) * (isCoarse ? 40 : 90), // drift réduit mobile
      opacity: 0.25 + Math.random() * 0.55,
    }));
  }, [actualCount, isCoarse]);

  if (actualCount === 0) return null;

  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none fixed inset-0 overflow-hidden",
        // z-10 est plus safe que z-5 (et z-5 n’existe pas par défaut en Tailwind)
        "z-10",
        className,
      ].join(" ")}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="snow-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            // @ts-expect-error CSS vars
            ["--dur"]: `${p.duration}s`,
            ["--delay"]: `${p.delay}s`,
            ["--drift"]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};
