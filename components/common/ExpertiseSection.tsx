import { motion } from "motion/react";
import { BadgeSection } from "./BadgeSection";
import { SlideVertical } from "./SlideVertical";
import {
  Sparkles,
  Layers,
  Gauge,
  Handshake,
  MessageCircle,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { HomeServiceItem } from "./HomeServiceItem";
import { Fragment } from "react/jsx-runtime";
import { SlideHorizontal } from "./SlideHorizontal";
import { useTranslations } from "next-intl";

export const WHY_US = [
  {
    title: "#ThoughtsTools",
    description: "#ThoughtsToolsDesc",
    icon: Layers,
  },
  {
    title: "#HumanFollowing",
    description: "#HumanFollowingDesc",
    icon: MessageCircle,
  },
  {
    title: "#ClearSolutions",
    description: "#ClearSolutionsDesc",
    icon: Lightbulb,
  },
  {
    title: "#EasyScalable",
    description: "#EasyScalableDesc",
    icon: Rocket,
  },
] as const;

export const ExpertiseSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-screen min-h-svh 2xl:min-h-auto bg-ui-bg flex flex-col py-20 gap-3 items-center ">
      <BadgeSection>{t("#OurAssets")}</BadgeSection>
      <SlideVertical>
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
          {t("#WhyUs")}
        </div>
        <div className="text-ui-textMuted">{t("#WhatMakeDifference")}</div>
      </SlideVertical>
      <div className="w-full flex items-center justify-center  mt-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {WHY_US.map((item, idx) => {
            const Icon = item.icon;
            const from = idx < 2 ? "left" : "right";

            return (
              <SlideHorizontal key={idx} from={from} delay={idx * 0.08}>
                <HomeServiceItem
                  title={item.title}
                  description={item.description}
                  icon={Icon}
                  minHeight="100"
                />
              </SlideHorizontal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
