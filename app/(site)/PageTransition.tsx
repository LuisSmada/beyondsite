"use client";

import { AnimatePresence, motion, Variants } from "motion/react";
import { usePathname } from "next/navigation";

const variants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.22, ease: "easeIn" },
  }),
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const direction = 1;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute inset-0"
      >
        {children}
      </motion.div>
      <div className="invisible">{children}</div>
    </AnimatePresence>
  );
}
