import { SlideVertical } from "@/components/common/SlideVertical";

export const HeroAbouta = () => {
  return (
    <SlideVertical>
      <div className="font-bold text-4xl mb-5">
        Notre objectif, nos missions, nos valeurs.
      </div>
      <div className="px-[20%]">
        <div className="text-center mb-3">
          <span className="font-bold">BEYOND</span> est une société de
          développement spécialisée dans la création d’applications web sur
          mesure pour les entreprises qui veulent moderniser leurs processus.
        </div>
        <div className="text-center px-[10%] font-bold">
          Nous aidons les PME et startups à gagner en efficacité grâce à des
          solutions digitales simples, personnalisées et évolutives.
        </div>
      </div>
    </SlideVertical>
  );
};

export const HeroAbout = () => {
  return (
    <SlideVertical>
      <div className="text-center">
        <h1 className="font-bold text-4xl md:text-5xl text-brand-900 mb-4">
          Une approche simple, utile, et durable.
        </h1>

        <p className="mx-auto max-w-3xl text-ui-textMuted text-base md:text-lg">
          <span className="font-bold text-brand-900">BEYOND</span> conçoit des
          applications web sur mesure pour moderniser les processus internes et
          améliorer l’efficacité opérationnelle.
        </p>

        <p className="mx-auto mt-4 max-w-2xl font-bold text-brand-900">
          Nous aidons les PME et startups à gagner en efficacité grâce à des
          solutions digitales simples, personnalisées et évolutives.
        </p>
      </div>
    </SlideVertical>
  );
};
