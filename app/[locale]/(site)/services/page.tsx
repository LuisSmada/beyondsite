"use client";

import { SlideHorizontal } from "@/components/common/SlideHorizontal";
import { SlideVertical } from "@/components/common/SlideVertical";
import { ServicePageItem } from "./ServicePageItem";
import { MiniCard } from "@/components/common/MiniCard";
import { HomeContactCTASection } from "@/components/common/HomeContactCTASection";
import { useTranslations } from "next-intl";

const SERVICES = [
  {
    title: "#AppWorkBased",
    description: "#AppWorkBasedDesc",
    spots: "#AppWorkBasedSpots",
  },
  {
    title: "#AutoAndOpt",
    description: "#AutoAndOptDesc",
    spots: "#AutoAndOptSpots",
  },
  {
    title: "#ModernisationTools",
    description: "#ModernisationToolsDesc",
    spots: "#ModernisationToolsSpots",
  },
  {
    title: "#TechAdvices",
    description: "#TechAdvicesDesc",
    spots: "#TechAdvicesSpots",
  },
];

const WHY_IMPORTANTS = [
  {
    title: "#Smoothness",
    desc: "#SmoothnessDesc",
  },
  {
    title: "#Efficiency",
    desc: "#EfficiencyDesc",
  },
  {
    title: "#Fiability",
    desc: "#FiabilityDesc",
  },
  {
    title: "#Clarity",
    desc: "#ClarityDesc",
  },
];

const ENGAGEMENTS = [
  {
    title: "#Transparency",
    desc: "#TransparencyDesc",
  },
  {
    title: "#Quickness",
    desc: "#QuicknessDesc",
  },
  {
    title: "#Flexibility",
    desc: "#FlexibilityDesc",
  },
  {
    title: "#Proximity",
    desc: "#ProximityDesc",
  },
];

export default function ServicePage() {
  const t = useTranslations("ServicePage");

  return (
    <>
      <div className="w-full min-h-svh flex flex-col items-center pt-[100px]  text-brand-900 2xl:px-71 px-8 ">
        <SlideVertical>
          <div className="mb-10">
            <div className="text-xl flex justify-center md:text-3xl lg:text-4xl font-bold text-brand-900 mt-2.5 text-center md:px-11">
              {t("#ServiceHeroTitle")}
            </div>
            <div className="mt-3 text-ui-textMuted sm:text-lg text-base text-center ">
              {t("#ServiceHeroDesc")}
            </div>
          </div>
        </SlideVertical>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 mb-10  sm:px-0 md:px-11 lg:px-8 ">
          {SERVICES.map((item, idx) => {
            // const Icon = item.icon;
            const from = idx < 2 ? "left" : "right";

            return (
              <SlideHorizontal key={idx} from={from} delay={idx * 0.08}>
                <ServicePageItem
                  title={t(item.title)}
                  description={t(item.description)}
                  spots={t(item.spots)}
                />
              </SlideHorizontal>
            );
          })}
        </div>
        <div className="mb-10">
          <SlideVertical>
            <div className="text-xl flex justify-center md:text-3xl lg:text-4xl font-bold text-brand-900 mt-10">
              {t("#WhyIsImportant")}
            </div>
            <div className="mt-3 text-brand-900 text-base sm:text-xl sm:px-11 font-semibold text-center ">
              {t("#WhyIsImportantDesc")}
            </div>
            <div className="mt-3 text-ui-textMuted text-base text-center ">
              {t("#WithBeyond")}
            </div>
          </SlideVertical>
          <div className="w-full flex justify-center items-center px-0 md:px-11">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:flex lg:justify-between">
              {WHY_IMPORTANTS.map((item, idx) => {
                const from = idx < 2 ? "left" : "right";

                return (
                  <SlideHorizontal key={idx} from={from} delay={idx * 0.08}>
                    <MiniCard
                      title={t(item.title)}
                      description={t(item.desc)}
                    />
                  </SlideHorizontal>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <SlideVertical>
            <div className="text-xl flex justify-center md:text-3xl font-bold text-brand-900">
              {t("#OurCommitments")}
            </div>
          </SlideVertical>
          <div className="w-full flex justify-center items-center px-0 md:px-11">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8  lg:flex lg:justify-between">
              {ENGAGEMENTS.map((item, idx) => {
                const from = idx < 2 ? "left" : "right";

                return (
                  <SlideHorizontal key={idx} from={from} delay={idx * 0.08}>
                    <MiniCard
                      title={t(item.title)}
                      description={t(item.desc)}
                    />
                  </SlideHorizontal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <HomeContactCTASection
        title={t("#BuildYourToolTogether")}
        desc={t("#BuildYourToolTogetherDesc")}
      />
    </>
  );
}
