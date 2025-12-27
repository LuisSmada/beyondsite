"use client";

import { setNavbarPosition } from "@/lib/features/application/applicationSlice";
import { useAppDispatch } from "@/lib/hooks";
import { ReactNode, useEffect } from "react";
import { HeroAbout } from "./HeroAbout";
import { SlideHorizontal } from "@/components/common/SlideHorizontal";
import { HomeServiceItem } from "@/components/common/HomeServiceItem";
import { AboutItems } from "./AboutItems";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import beyondfulllgo from "@/public/icons/beyondstrength.svg";
import { SlideVertical } from "@/components/common/SlideVertical";
import { MiniCard } from "@/components/common/MiniCard";
import { HomeContactCTASection } from "@/components/common/HomeContactCTASection";
import { useTranslations } from "next-intl";

const ABOUT_ITEMS = [
  {
    title: "#Transparency",
    description: "#TransparencyDesc",
  },
  {
    title: "#Efficiency",
    description: "#EfficiencyDesc",
  },
  {
    title: "#OnFit",
    description: "#OnFitDesc",
  },
  {
    title: "#Commitment",
    description: "#CommitmentDesc",
  },
];

const MISSIONS = [
  {
    title: "#Simple",
    desc: "#SimpleDesc",
  },
  {
    title: "#Concrete",
    desc: "#ConcreteDesc",
  },
  {
    title: "#Impact",
    desc: "#ImpactDesc",
  },
];

export default function AboutClientPage() {
  const dispatch = useAppDispatch();
  const t = useTranslations("AboutPage");

  useEffect(() => {
    dispatch(setNavbarPosition("fixed"));
  }, [dispatch]);

  return (
    <>
      <div className="w-full min-h-svh flex flex-col items-center pt-[100px]  text-brand-900 md:px-11 2xl:px-81">
        <SlideVertical>
          <Image
            priority
            src={beyondfulllgo}
            alt=""
            className="h-14 md:h-[60px] xl:h-[70px] w-min cursor-pointer"
          />
        </SlideVertical>
        <div className="h-5"></div>
        <HeroAbout />
        {/* ===== AFTER HEROABOUT ===== */}
        <div className="w-full mt-20 space-y-24">
          {/* ===== MISSION ===== */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className=" md:col-span-4">
              <div className="text-2xl flex justify-center md:justify-start md:text-3xl font-bold text-brand-900">
                {t("#OurMissions")}
              </div>
              <p className="mt-3 text-ui-textMuted text-base text-center md:text-start px-8 md:px-0">
                {t("#OurMissionDesc")}
              </p>
            </div>

            <div className="md:col-span-8 px-8 md:px-0">
              <div className="relative rounded-2xl bg-ui-surface p-8 shadow-md overflow-hidden ">
                {/* glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-75 w-72 rounded-full bg-[radial-gradient(circle,rgba(249,191,75,0.22),transparent_60%)] blur-2xl" />

                <div className="relative grid gap-6 md:grid-cols-3">
                  {MISSIONS.map((item, idx) => (
                    <div key={idx}>
                      <div className="h-0.5 w-10 bg-accent-500/70 rounded-full mb-3" />
                      <div className="text-lg font-bold text-brand-900">
                        {t(item.title)}
                      </div>
                      <p className="mt-2 text-sm text-ui-textMuted text-justify">
                        {t(item.desc)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== VISION ===== */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center  px-8 md:px-0">
            <div className="md:col-span-4 md:hidden">
              <div className="text-xl md:text-3xl font-bold text-brand-900 md:text-right text-center">
                {t("#LongTermVision")}
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="relative rounded-2xl bg-brand-900 text-ui-bg p-10 shadow-md overflow-hidden">
                <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(249,191,75,0.25),transparent_55%)]" />

                <div className="relative">
                  <div className="text-2xl font-bold">{t("#OurVision")}</div>
                  <p className="mt-4 text-ui-bg/80 max-w-xl">
                    {t("#OurVisionDesc")}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent-500" />
                    <span className="text-sm text-ui-bg/70">BEYOND</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 hidden md:flex md:justify-end">
              <div className="text-xl md:text-3xl font-bold text-brand-900 md:text-right xl:text-right text-center">
                {t("#LongTermVision")}
              </div>
            </div>
          </section>

          {/* ===== VALEURS ===== */}
          <section className="w-full max-w-6xl px-8 md:px-6 lg:px-0 mx-auto mt-20">
            <div className="text-xl md:text-3xl  font-bold text-center mb-12 text-brand-900">
              {t("#OurValues")}
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-0 lg:px-0  2xl:grid-cols-4 gap-6 md:px-4">
              {ABOUT_ITEMS.map((item, idx) => (
                <SlideHorizontal
                  key={item.title}
                  from={idx % 2 === 0 ? "left" : "right"}
                  delay={idx * 0.08}
                >
                  {/* si tu veux une hauteur uniforme */}
                  <div className="h-full min-h-40">
                    <MiniCard
                      title={t(item.title)}
                      description={t(item.description)}
                    />
                  </div>
                </SlideHorizontal>
              ))}
            </div>
          </section>
        </div>
      </div>
      <HomeContactCTASection
        title={t("#ProjectOnYourMind")}
        desc={t("#ProjectOnYourMindDesc")}
      />
    </>
  );
}
