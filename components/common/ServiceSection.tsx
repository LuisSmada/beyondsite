import { Fragment } from "react/jsx-runtime";
import { HomeServiceItem } from "./HomeServiceItem";
import { SlideFromNearestEdge } from "./SlideFromNearestEdge";
import { SlideHorizontal } from "./SlideHorizontal";
import { motion } from "motion/react";
import { BadgeSection } from "./BadgeSection";
import { useTranslations } from "next-intl";
import {
  BarChart3,
  Code2,
  LifeBuoy,
  LucideProps,
  RefreshCcw,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface INavItems {
  title: string;
  href: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const SERVICE_ITEMS: INavItems[] = [
  {
    title: "#AppDev",
    href: "/services",
    description: "#AppDevDesc",
    icon: Code2,
  },
  {
    title: "#DashboardReporting",
    href: "/about",
    description: "#DashboardReportingDesc",
    icon: BarChart3,
  },
  {
    title: "#ReDesignOptimisation",
    href: "/contact",
    description: "#ReDesignOptimisationDesc",
    icon: RefreshCcw,
  },
  {
    title: "#TechnicalHelpAdvise",
    href: "/contact",
    description: "#TechnicalHelpAdviseDesc",
    icon: LifeBuoy,
  },
];

export const ServiceSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-screen min-h-svh 2xl:min-h-auto xl:h-screen 2xl:h-full bg-ui-bg flex flex-col py-20 gap-3 items-center px-8 md:px-11">
      <BadgeSection>{t("#Services")}</BadgeSection>
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
        <div className="font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-2 text-brand-900">
          {t("#WhatWePropose")}
        </div>
        <div className="text-base text-ui-textMuted">
          {t("#BeyondHasManyServices")}
        </div>
      </motion.div>
      <div className="w-full flex items-center justify-center gap-5 mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {SERVICE_ITEMS.map((service, idx) => {
            const from = idx < 2 ? "left" : "right";
            const Icon = service.icon;

            return (
              <SlideHorizontal
                key={service.title}
                from={from}
                delay={idx * 0.08}
              >
                <HomeServiceItem
                  title={service.title}
                  description={service.description}
                  icon={Icon}
                />
              </SlideHorizontal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
