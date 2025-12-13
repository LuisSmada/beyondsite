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

const ABOUT_ITEMS = [
  {
    title: "Transparence",
    description: "Communication simple, sans jargon inutile.",
  },
  {
    title: "Efficacité",
    description: "Des outils concrets, pas de complexité superflue.",
  },
  {
    title: "Sur mesure",
    description: "Chaque entreprise est unique, ses outils aussi.",
  },
  {
    title: "Engagement",
    description: "Accompagner le client de l'idée à la livraison.",
  },
];

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[300px] w-full flex items-center justify-between mb-8">
      {children}
    </div>
  );
};

export default function AboutPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavbarPosition("fixed"));
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-[100px]  text-brand-900">
      {/* <div className="text-3xl font-bold text-accent-500">
        We are BEYOND strength
      </div> */}
      <SlideVertical>
        <Image
          priority
          src={beyondfulllgo}
          alt=""
          className="h-[80] w-min cursor-pointer"
        />
      </SlideVertical>
      <div className="h-5"></div>
      <HeroAbout />
      {/* ===== AFTER HEROABOUT ===== */}
      <div className="w-full mt-20 space-y-24">
        {/* ===== MISSION ===== */}
        <section className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl font-bold text-brand-900">
              Nos missions
            </div>
            <p className="mt-3 text-ui-textMuted">
              Ce qui guide nos décisions et notre manière de construire.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="relative rounded-2xl bg-ui-surface p-8 shadow-md overflow-hidden">
              {/* glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full
          bg-[radial-gradient(circle,rgba(249,191,75,0.22),transparent_60%)] blur-2xl"
              />

              <div className="relative grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Simple",
                    desc: "Des outils adaptés aux besoins réels, sans complexité inutile.",
                  },
                  {
                    title: "Concret",
                    desc: "Transformer idées et process internes en solutions utiles.",
                  },
                  {
                    title: "Impact",
                    desc: "Gagner du temps, réduire les erreurs, fluidifier l’activité.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="h-0.5 w-10 bg-accent-500/70 rounded-full mb-3" />
                    <div className="text-lg font-bold text-brand-900">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm text-ui-textMuted">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 md:col-span-8">
            <div className="relative rounded-2xl bg-brand-900 text-ui-bg p-10 shadow-md overflow-hidden">
              <div
                className="absolute inset-0 opacity-60
          bg-[radial-gradient(circle_at_20%_20%,rgba(249,191,75,0.25),transparent_55%)]"
              />

              <div className="relative">
                <div className="text-2xl font-bold">Notre vision</div>
                <p className="mt-4 text-ui-bg/80 max-w-xl">
                  Construire des produits digitaux durables, élégants et utiles,
                  pensés pour accompagner la croissance réelle des entreprises.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent-500" />
                  <span className="text-sm text-ui-bg/70">BEYOND</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl font-bold text-brand-900 md:text-right">
              Une vision long terme
            </div>
          </div>
        </section>

        {/* ===== VALEURS ===== */}
        <section className="w-full max-w-6xl px-6 mx-auto mt-20">
          <div className="text-3xl font-bold text-center mb-12 text-brand-900">
            Nos valeurs
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_ITEMS.map((item, idx) => (
              <SlideHorizontal
                key={item.title}
                from={idx % 2 === 0 ? "left" : "right"}
                delay={idx * 0.08}
              >
                {/* si tu veux une hauteur uniforme */}
                <div className="h-full min-h-[160px]">
                  <AboutItems
                    title={item.title}
                    description={item.description}
                  />
                </div>
              </SlideHorizontal>
            ))}
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="pb-20">
          <div
            className="rounded-2xl bg-ui-surface p-8 shadow-md
      flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <div className="text-xl font-bold text-brand-900">
                Vous avez un projet en tête ?
              </div>
              <p className="text-ui-textMuted mt-1">
                Parlons-en et voyons comment BEYOND peut vous aider
                concrètement.
              </p>
            </div>

            <Button
              className="rounded-2xl px-6 py-3 font-bold text-brand-900
        bg-gradient-to-br from-accent-500 to-[#FFD777]
        shadow-[0_14px_35px_rgba(249,191,75,.30)]
        hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(249,191,75,.38)]
        transition"
            >
              Contactez-nous
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
