import AboutClientPage from "./AboutClientPage";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "Seo" });

  return {
    title: t("#HeroTitle"),
    description: t("#HeroFirstDesc"),
    alternates: {
      languages: {
        fr: "/fr/about",
        en: "/en/about",
      },
    },
    openGraph: {
      title: t("#HeroTitle"),
      description: t("#HeroFirstDesc"),
      url: `/${params.locale}/about`,
      siteName: "BEYOND",
      locale: params.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("#HeroTitle"),
      description: t("#HeroFirstDesc"),
    },
  };
}

export default function AboutPage() {
  return <AboutClientPage />;
}
