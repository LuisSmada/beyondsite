import { createNavigation } from "next-intl/navigation";

export const routing = {
  locales: ["fr", "en"] as const,
  defaultLocale: "fr" as const,
};

export type TLocaleLanguage = (typeof routing.locales)[number];

export const { Link, usePathname, useRouter } = createNavigation(routing);
