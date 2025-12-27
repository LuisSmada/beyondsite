"use client";

import Image from "next/image";
import BeyondFull from "@/public/icons/beyondstrength.svg";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
// import { LEGAL_ROUTES } from "@/app/[locale]/(site)/(legal)/[slug]/paage";

// type Locale = keyof typeof LEGAL_ROUTES.privacy;

export const Footer = () => {
  const t = useTranslations("Footer");

  // const locale = useLocale() as Locale;

  return (
    <footer className="h-auto pt-5 md:pt-0 md:h-[300px] w-full bg-brand-900 text-ui-bg  flex flex-col 2xl:px-81">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <Image
            priority
            src={BeyondFull}
            alt="BEYOND Logo"
            className="h-12 md:h-14"
          />
          <div className="text-ui-surface mt-4 flex flex-col items-center gap-4">
            <div>Paris</div>
            <div className="font-bold">
              <Link href="mailto:ayoadams@outlook.fr">
                contact@groupebeyond.com
              </Link>
            </div>
            <div>+33 6 95 67 24 69</div>
            <div>{t("#HourWeek")}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-ui-surface font-bold text-base gap-4 mt-8 md:mt-0">
          <Link href={`/services`}>{t("#OurServices")}</Link>
          <Link href={`/about`}>{t("#AboutUs")}</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-ui-surface font-bold text-base gap-4 my-8 md:my-0">
          {/* <Link href={`/${LEGAL_ROUTES.privacy[locale]}`}>
            {t("#Confidentiality")}
          </Link>
          <Link href={`/${LEGAL_ROUTES.notices[locale]}`}>
            {t("#LegalMentions")}
          </Link> */}
          <Link href="/privacy-policy">{t("#Confidentiality")}</Link>
          <Link href="/legal-notices">{t("#LegalMentions")}</Link>
        </div>
      </div>
      <div className="w-full min-h-5 h-8 mt-auto flex items-center justify-center text-bg-surface text-xs">
        {t("#Copyright")}
      </div>
    </footer>
  );
};
