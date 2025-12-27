import { getRequestConfig } from "next-intl/server";
import { routing, TLocaleLanguage } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale: TLocaleLanguage = routing.locales.includes(
    locale as TLocaleLanguage
  )
    ? (locale as TLocaleLanguage)
    : routing.defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
