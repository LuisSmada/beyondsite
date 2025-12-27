"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import { TLocaleLanguage, usePathname, useRouter } from "@/i18n/routing";

export const DrawerLanguageSwitcher = () => {
  const locale = useLocale() as TLocaleLanguage;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = useMemo<TLocaleLanguage>(() => {
    return locale === "fr" ? "en" : "fr";
  }, [locale]);

  const onToggle = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="
          group flex items-center gap-2
          rounded-full border border-ui-border bg-ui-surface/90 backdrop-blur
          px-3 py-2 shadow-sm
          text-brand-900
          hover:shadow-md
          transition
        "
        aria-label="Switch language"
      >
        <span
          className={[
            "text-xs font-bold px-2 py-1 rounded-full",
            locale === "fr" ? "bg-accent-500 text-ui-bg" : "bg-transparent",
          ].join(" ")}
        >
          FR
        </span>

        <span className="text-xs text-ui-textSubtle">/</span>

        <span
          className={[
            "text-xs font-bold px-2 py-1 rounded-full",
            locale === "en" ? "bg-accent-500 text-ui-bg" : "bg-transparent",
          ].join(" ")}
        >
          EN
        </span>
      </button>
    </div>
  );
};

const LOCALES: TLocaleLanguage[] = ["fr", "en"];

export function LanguageSwitcher() {
  const locale = useLocale() as TLocaleLanguage;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = useMemo<TLocaleLanguage>(() => {
    return locale === "fr" ? "en" : "fr";
  }, [locale]);

  const onToggle = () => {
    // On garde la même route, on change juste la locale
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="fixed xl:right-4 top-1/2 -translate-y-1/2 z-50 lg:right-4 sm:right-6 hidden md:flex">
      <button
        type="button"
        onClick={onToggle}
        className="
          group flex items-center gap-2
          rounded-full border border-ui-border bg-ui-surface/90 backdrop-blur
          px-3 py-2 shadow-sm
          text-brand-900
          hover:shadow-md
          transition
        "
        aria-label="Switch language"
      >
        <span
          className={[
            "text-xs font-bold px-2 py-1 rounded-full",
            locale === "fr" ? "bg-accent-500 text-ui-bg" : "bg-transparent",
          ].join(" ")}
        >
          FR
        </span>

        <span className="text-xs text-ui-textSubtle">/</span>

        <span
          className={[
            "text-xs font-bold px-2 py-1 rounded-full",
            locale === "en" ? "bg-accent-500 text-ui-bg" : "bg-transparent",
          ].join(" ")}
        >
          EN
        </span>
      </button>
    </div>
  );
}
