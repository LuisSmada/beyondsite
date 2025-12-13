import { motion } from "motion/react";
import { BadgeSection } from "./BadgeSection";
import { SlideVertical } from "./SlideVertical";
import { Sparkles, Layers, Gauge, Handshake } from "lucide-react";

export const WHY_US = [
  {
    title: "Vision produit avant tout",
    desc: "Nous concevons des solutions utiles, alignées sur vos objectifs business — pas juste du code.",
    icon: Sparkles,
  },
  {
    title: "Architecture propre & scalable",
    desc: "Un socle technique solide, maintenable et prêt à évoluer sans dette inutile.",
    icon: Layers,
  },
  {
    title: "Performance & expérience",
    desc: "Des interfaces rapides, claires et élégantes, pensées pour l’utilisateur final.",
    icon: Gauge,
  },
  {
    title: "Partenaire, pas prestataire",
    desc: "Nous travaillons avec vous sur le long terme, comme une extension de votre équipe.",
    icon: Handshake,
  },
] as const;

export const ExpertiseSection = () => {
  return (
    <div className="w-screen h-screen bg-ui-bg flex flex-col pt-8 gap-3 items-center ">
      <BadgeSection>Nos atouts</BadgeSection>
      <SlideVertical>
        <div className="font-bold text-4xl mb-2">Pourquoi nous ?</div>
      </SlideVertical>

      <section className="bg-ui-bg py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-bold text-brand-900 mb-4">
            Pourquoi BEYOND ?
          </h2>
          <p className="text-ui-textMuted mb-14 max-w-2xl">
            Parce qu’un bon produit, ce n’est pas seulement du code qui
            fonctionne.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {WHY_US.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-accent-500/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-brand-900" />
                  </div>

                  <div>
                    <div className="text-lg font-bold text-brand-900">
                      {item.title}
                    </div>
                    <p className="mt-1 text-sm text-ui-textMuted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
