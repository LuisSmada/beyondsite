import { Fragment } from "react/jsx-runtime";
import { HomeServiceItem } from "./HomeServiceItem";
import { SlideFromNearestEdge } from "./SlideFromNearestEdge";
import { SlideHorizontal } from "./SlideHorizontal";
import { motion } from "motion/react";
import { BadgeSection } from "./BadgeSection";

interface INavItems {
  title: string;
  href: string;
  description: string;
}

const SERVICE_ITEMS: INavItems[] = [
  {
    title: "Développement d’applications sur-mesure",
    href: "/services",
    description:
      "Interfaces modernes, API robustes, outils métiers adaptés à vos besoins internes",
  },
  {
    title: "Dashboards & reporting",
    href: "/about",
    description:
      "Visualisation avancée des données, statistiques, rapports automatisés.",
  },
  {
    title: "Refonte & optimisation d’applications",
    href: "/contact",
    description:
      "Modernisation, correction, optimisation de performances, sécurité.",
  },
  {
    title: "Accompagnement & conseil technique",
    href: "/contact",
    description:
      "Définition de MVP, cadrage fonctionnel, choix technologiques, coaching CTO.",
  },
];

export const ServiceSection = () => {
  return (
    <div className="w-screen h-screen bg-ui-bg flex flex-col pt-8 gap-3 items-center">
      <BadgeSection>Services</BadgeSection>
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
        <div className="font-bold text-4xl mb-2">
          Qu est ce que vous propose ?
        </div>
        <div className="text-base text-ui-textMuted">
          BEYOND vous propose plusieurs services.
        </div>
      </motion.div>
      <div className="flex flex-row justify-center px-[45px] mt-5 gap-5">
        {SERVICE_ITEMS.map((service, idx) => {
          const from = idx < 2 ? "left" : "right";

          return (
            <SlideHorizontal key={service.title} from={from} delay={idx * 0.08}>
              <HomeServiceItem
                title={service.title}
                description={service.description}
                href="/"
              />
            </SlideHorizontal>
          );
        })}
      </div>
    </div>
  );
};
