import Image from "next/image";
import BeyondIcon from "../../public/icons/BEYOND.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HeroBanner = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full lg:h-screen min-h-svh flex items-center bg-brand-900 md:pt-15 ">
      <div className="w-full h-full flex items-center">
        <div className="absolute w-screen h-screen flex items-center justify-center pointer-events-none select-none">
          <Image
            priority
            src={BeyondIcon}
            alt="BEYOND Icon"
            className="h-[200] w-min blur-2xl"
          />
        </div>
        <div className="z-10 pt-0 px-8 md:px-11 flex flex-col gap-5 text-ui-bg 2xl:ml-70">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-500 font-bold text-2xl sm:text-3xl lg:text-4xl "
          >
            {t("#HeroMiniTitle")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className=" font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl"
          >
            {t("#HeroMainTitle")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-normal text-base sm:text-xl w-[70%]"
          >
            {t("#HeroDescription")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
            className="flex gap-4 mt-5"
          >
            <Link href="/contact">
              <Button className="bg-accent-500 hover:scale-[1.02] hover:-translate-y-1 hover:bg-accent-500 text-base flex justify-center items-center py-6 rounded-3xl">
                {t("#HeroCTA")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
