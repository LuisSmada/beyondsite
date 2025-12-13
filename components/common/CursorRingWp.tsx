"use client";

import { useEffect, useState } from "react";

type Pos = { x: number; y: number };

export function CursorRingWp() {
  const [pos, setPos] = useState<Pos>({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia?.("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      return !!el.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );
    };

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
      setActive(isInteractive(e.target as Element));
    };

    const onOver = (e: MouseEvent) => {
      setActive(isInteractive(e.target as Element));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOver);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Ring + glow */}
      <div
        className={[
          "-translate-x-1/2 -translate-y-1/2 rounded-full",
          "transition-transform duration-150 ease-out",
          active ? "h-14 w-14 scale-110" : "h-10 w-10 scale-100",
          // ring
          "border border-accent-500/70",
          // glow (double: outer + inner)
          "shadow-[0_0_0_6px_rgba(249,191,75,0.10),0_18px_60px_rgba(249,191,75,0.22)]",
          // petit fond très léger pour faire “premium”
          "bg-accent-500/5",
          // optionnel: blur très subtil (si tu veux plus “glassy”)
          "backdrop-blur-[2px]",
        ].join(" ")}
      />
    </div>
  );
}
