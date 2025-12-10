import Image from "next/image";
import BeyondIcon from "../../public/icons/BEYOND.svg";

export const HeroBanner = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-brand-900">
      <div className="absolute w-screen h-screen flex items-center justify-center pointer-events-none select-none">
        <Image
          priority
          src={BeyondIcon}
          alt="BEYOND Icon"
          className="h-[200] w-min blur-2xl"
        />
      </div>
      <div className="z-10 pt-0 px-11 flex flex-col gap-[20]">
        <div className="text-accent-500 font-black text-4xl">
          BY Engineers, BY You, BY Us
        </div>
        <div className=" text-5xl font-bold w-[70%]">
          Nous vous accompagnons dans votre processus de digitalisation
        </div>
        <div className="font-medium text-xl w-[70%]">
          Beyond vous aide dans votre processus de digitalisation de vos
          processus internes sous une approche totalement adaptée à vos besoins.
          Nous augmentons votre productivité, nous réduisons votre temps en
          créant des outils adaptés.
        </div>
        <div className="flex text-base flex-row gap-3 italic font-bold">
          <div>#WeAreBeyondStrength</div>
          <div>#NousSommesUneForceAuDela</div>
        </div>
      </div>
    </div>
  );
};
