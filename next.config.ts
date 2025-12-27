import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// const nextConfig: NextConfig = {
//   /* config options here */
//   i18n: {
//     locales: ["default", "en-US", "fr"],
//     defaultLocale: "default",
//     localeDetection: false,
//     domains: [
//       {
//         domain: "groupebeyond.com",
//         defaultLocale: "fr",
//         http: true,
//       },
//     ],
//   },
// };

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
