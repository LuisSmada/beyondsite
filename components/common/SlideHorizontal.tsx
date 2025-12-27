"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SlideHorizontal({
  children,
  from,
  delay = 0,
}: {
  children: ReactNode;
  from: "left" | "right";
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: from === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      //   viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
