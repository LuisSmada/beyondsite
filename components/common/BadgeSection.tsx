import { motion } from "motion/react";
import { ReactNode } from "react";

interface IBadgeSection {
  children: ReactNode;
}

export const BadgeSection = ({ children }: IBadgeSection) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="text-accent-500 text-[14px] font-bold  px-5 py-3 bg-accent-100/70  rounded-3xl"
    >
      {children}
    </motion.div>
  );
};
