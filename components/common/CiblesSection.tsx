import { useTranslations } from "next-intl";
import { BadgeSection } from "./BadgeSection";
import { HomeServiceItem } from "./HomeServiceItem";
import { MiniCard } from "./MiniCard";
import { SlideHorizontal } from "./SlideHorizontal";
import { SlideVertical } from "./SlideVertical";

const CIBLES = [
  {
    title: "#PME&ETI",
    description: "#PME&ETIDesc",
  },
  {
    title: "#Startups",
    description: "#StartupsDesc",
  },
  {
    title: "#Freelances",
    description: "#FreelanceDesc",
  },
  {
    title: "#Team",
    description: "#TeamDesc",
  },
];

export const CiblesSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-screen h-auto bg-ui-surface flex flex-col pt-8 pb-20 gap-3 items-center md:px-11 xl:px-0 ">
      <BadgeSection>{t("#OurTargets")}</BadgeSection>
      <SlideVertical>
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
          {t("#WhoBEYONDIsFor")}
        </div>
        <div className="text-ui-textMuted">{t("#WhoBEYONDIsForDesc")}</div>
      </SlideVertical>
      <div className="w-full flex justify-center items-center px-8 md:px-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between xl:grid-cols-4 gap-6 mt-8">
          {CIBLES.map((item, idx) => {
            const from = idx < 2 ? "left" : "right";

            return (
              <SlideHorizontal key={idx} from={from} delay={idx * 0.08}>
                <MiniCard
                  title={t(item.title)}
                  description={t(item.description)}
                />
              </SlideHorizontal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
