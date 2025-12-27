import { useTranslations } from "next-intl";
import { BadgeSection } from "./BadgeSection";
import { SlideVertical } from "./SlideVertical";

const STEPS = [
  { title: "#Discussion", desc: "#DiscussionDesc" },
  { title: "#Conception", desc: "#ConceptionDesc" },
  { title: "#Dev", desc: "#DevDesc" },
  { title: "#Follow", desc: "#FollowDesc" },
];

export const ProcessSection = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="w-screen h-auto  bg-ui-surface flex flex-col py-20 gap-3 items-center  lg:px-11 xl:px-0 pb">
      <BadgeSection>{t("#OurProcess")}</BadgeSection>
      <SlideVertical>
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2">
          {t("#WhatsTheProcess")}
        </div>
        <div className="text-ui-textMuted text-center px-3 sm:px-0">
          {t("#Only4Steps")}
        </div>
      </SlideVertical>
      <div className=" w-full h-auto mt-8 flex  justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="
                  relative rounded-2xl bg-ui-surface p-6 border border-ui-border
                  shadow-sm transition-all duration-200
                  hover:-translate-y-1 hover:border-accent-500/40
                  hover:shadow-[0_18px_55px_rgba(12,52,61,.14)]
                  hover:ring-1 hover:ring-accent-500/20
                "
            >
              {/* Node */}
              <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="h-8 w-8 rounded-full bg-ui-bg border border-ui-border flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-accent-500" />
                </div>
              </div>

              <div className="text-xs font-bold text-ui-textMuted">
                {t("#StepWithNumber", { number: i + 1 })}
              </div>
              <div className="mt-2 text-lg font-bold text-brand-900">
                {t(s.title)}
              </div>
              <p className="mt-2 text-sm text-ui-textMuted">{t(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProcesSection = () => {
  return (
    <section className="w-full bg-ui-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-accent-500 font-bold">Processus</div>
          <h2 className="mt-2 text-4xl font-bold text-brand-900">
            Comment on travaille
          </h2>
          <p className="mt-3 text-ui-textMuted">
            4 étapes simples, transparentes, sans complexité inutile.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Chemin (derrière) */}
          <svg
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-full h-40 hidden md:block"
            viewBox="0 0 1200 160"
            fill="none"
          >
            <path
              d="M40 90 C 260 10, 420 150, 600 80 S 940 10, 1160 80"
              stroke="rgba(12,52,61,0.18)"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
          </svg>

          {/* Étapes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="
                  relative rounded-2xl bg-ui-surface p-6 border border-ui-border
                  shadow-sm transition-all duration-200
                  hover:-translate-y-1 hover:border-accent-500/40
                  hover:shadow-[0_18px_55px_rgba(12,52,61,.14)]
                  hover:ring-1 hover:ring-accent-500/20
                "
              >
                {/* Node */}
                <div className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="h-8 w-8 rounded-full bg-ui-bg border border-ui-border flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent-500" />
                  </div>
                </div>

                <div className="text-xs font-bold text-ui-textMuted">
                  Étape {i + 1}
                </div>
                <div className="mt-2 text-lg font-bold text-brand-900">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-ui-textMuted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
