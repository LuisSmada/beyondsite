"use client";

import { useEffect, useState } from "react";

type Pos = { x: number; y: number };

export function CursorRing() {
  const [pos, setPos] = useState<Pos>({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia?.("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouch) return;

    const isInteractive = (el: Element | null) =>
      !!el?.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]'
      );

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
      setActive(isInteractive(e.target as Element));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
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
      <div
        className={[
          "-translate-x-1/2 -translate-y-1/2 rounded-full",
          "transition-transform duration-150 ease-out",
          active ? "h-9 w-9 scale-110" : "h-7 w-7 scale-100",
          // ring fin
          "border border-accent-500/55",
          // glow très léger
          "shadow-[0_0_0_3px_rgba(249,191,75,0.06),0_10px_35px_rgba(249,191,75,0.10)]",
          // optionnel: quasi invisible
          "bg-transparent",
        ].join(" ")}
      />
    </div>
  );
}
