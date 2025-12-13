import { motion } from "motion/react";
import { ReactNode } from "react";

interface ISlideVertical {
  children: ReactNode;
}

export const SlideVertical = ({ children }: ISlideVertical) => {
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
      className="flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
};
