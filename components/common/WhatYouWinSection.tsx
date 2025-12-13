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

const BENEFITS = [
  {
    icon: Clock,
    title: "Gain de temps",
    description:
      "Des processus optimisés qui libèrent du temps pour l’essentiel.",
  },
  {
    icon: Settings,
    title: "Automatisation intelligente",
    description:
      "Les tâches répétitives sont automatisées pour une efficacité maximale.",
  },
  {
    icon: ShieldCheck,
    title: "Moins d’erreurs",
    description:
      "Des données centralisées et fiables pour réduire les risques.",
  },
  {
    icon: BarChart3,
    title: "Vision claire",
    description:
      "Des indicateurs lisibles pour piloter votre activité en temps réel.",
  },
  {
    icon: Repeat,
    title: "Processus fluides",
    description: "Des workflows simples qui accélèrent la collaboration.",
  },
  {
    icon: Users,
    title: "Adoption rapide",
    description: "Des outils intuitifs, utilisables sans formation complexe.",
  },
];

export const WhatYouWinSection = () => {
  return (
    <div className="w-screen min-h-dvh bg-ui-surface flex flex-col pt-8 gap-3 items-center">
      <BadgeSection>Benefices</BadgeSection>

      <SlideVertical>
        <div className="font-bold text-4xl mb-2">
          Qu est ce que vous gagnez ?
        </div>
        <div className="text-ui-textMuted">
          Ce que BEYOND apporte concrètement.
        </div>
      </SlideVertical>

      <div className="relative mt-10 w-full max-w-6xl px-6">
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
              grid grid-cols-1 md:grid-cols-3
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
                        hover:bg-ui-surface2
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
                    {b.title}
                  </div>
                  <p className="mt-2 text-sm text-ui-textMuted">
                    {b.description}
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
