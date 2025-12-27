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

    const selector =
      'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]';

    const isInteractive = (target: EventTarget | null) => {
      // target peut être Text, Comment, etc.
      if (!target) return false;

      // si c'est un Text node, on remonte au parent element
      const el =
        target instanceof Element
          ? target
          : target instanceof Node
            ? target.parentElement
            : null;

      return !!el?.closest(selector);
    };

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      setActive(isInteractive(e.target));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, []); // ✅ pas de dépendance -> listeners attachés 1 fois

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden md:block"
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
          "border border-accent-500/55",
          "shadow-[0_0_0_3px_rgba(249,191,75,0.06),0_10px_35px_rgba(249,191,75,0.10)]",
          "bg-transparent",
        ].join(" ")}
      />
    </div>
  );
}
