import {
  BarChart3,
  Clock,
  Repeat,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";
import { BadgeSection } from "./BadgeSection";
import { SlideVertical } from "./SlideVertical";
import { useTranslations } from "next-intl";

const BENEFITS = [
  {
    icon: Clock,
    title: "#TimeEarned",
    description: "#TimeEarnedDesc",
  },
  {
    icon: Settings,
    title: "#SmartAutomatisation",
    description: "#SmartAutomatisationDesc",
  },
  {
    icon: ShieldCheck,
    title: "#LessErrors",
    description: "#LessErrorsDesc",
  },
  {
    icon: BarChart3,
    title: "#ClearVision",
    description: "#ClearVisionDesc",
  },
  {
    icon: Repeat,
    title: "#SmoothProcess",
    description: "#SmoothProcessDesc",
  },
  {
    icon: Users,
    title: "#QuickAdoption",
    description: "#QuickAdoptionDesc",
  },
];

export const WhatYouWinSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-screen 2xl:min-h-auto  min-h-dvh bg-ui-surface flex flex-col py-20 gap-3 items-center px-8 md:px-11">
      <BadgeSection>{t("#Benefits")}</BadgeSection>

      <SlideVertical>
        <div className="font-bold  text-2xl px-2 sm:px-0 text-center sm:text-3xl md:text-4xl mb-2 text-brand-900">
          {t("#WhatYouWin")}
        </div>
        <div className="text-ui-textMuted text-base  text-center">
          {t("#BEYONDValue")}
        </div>
      </SlideVertical>

      <div className="relative mt-10 w-full max-w-6xl">
        {/* glow */}
        <div
          className="
            pointer-events-none absolute -inset-6
            rounded-3xl
            bg-[radial-gradient(circle_at_30%_20%,rgba(249,191,75,0.18),transparent_55%)]
            blur-2xl
          "
        />

        {/* grid container */}
        <div className="relative rounded-2xl bg-ui-surface overflow-hidden shadow-sm">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
              divide-y divide-ui-border
              md:divide-y-0 md:divide-x md:divide-ui-border
            "
          >
            {BENEFITS.map((b) => {
              const Icon = b.icon;

              return (
                <div
                  key={b.title}
                  className="
                        h-[180px] p-6
                        transition-colors duration-200
                        md:nth-[n+4]:border-t
                        md:nth-[n+4]:border-ui-border
                    "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-9 w-9 rounded-xl bg-accent-500/15 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent-500" />
                    </div>

                    <div className="h-0.5 w-10 bg-accent-500/70 rounded-full" />
                  </div>

                  <div className="text-lg font-bold text-brand-900">
                    {t(b.title)}
                  </div>
                  <p className="mt-2 text-sm text-ui-textMuted">
                    {t(b.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
