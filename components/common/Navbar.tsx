"use client";

import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/NavigationMenu";
import Image from "next/image";
import BeyondStrengthIcon from "../../public/icons/beyondstrength.svg";
import BeyondIcon from "../../public/icons/BEYOND.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { navbarPositionSelector } from "@/lib/features/application/applicationSelector";
import { ListItem } from "./ListItem";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/Button";
import { DrawerLanguageSwitcher } from "./LanguageSwitcher";

interface INavItems {
  title: string;
  href: string;
  description: string;
}

const SERVICE_ITEMS: INavItems[] = [
  {
    title: "Développement d’applications sur-mesure",
    href: "/services",
    description:
      "Interfaces modernes, API robustes, outils métiers adaptés à vos besoins internes",
  },
  {
    title: "Dashboards & reporting",
    href: "/about",
    description:
      "Visualisation avancée des données, statistiques, rapports automatisés.",
  },
  {
    title: "Refonte & optimisation d’applications",
    href: "/contact",
    description:
      "Modernisation, correction, optimisation de performances, sécurité.",
  },
  {
    title: "Accompagnement & conseil technique",
    href: "/contact",
    description:
      "Définition de MVP, cadrage fonctionnel, choix technologiques, coaching CTO.",
  },
];

interface INavbar {
  isDark?: boolean;
}

export const Navbar = (props: INavbar) => {
  const t = useTranslations("Navbar");

  const [scrollYValue, setScrollYValue] = useState(0);
  const pathname = usePathname();
  const navbarPosition = useAppSelector(navbarPositionSelector);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const isScrolled = scrollYValue > 50;
  const isHome = pathname === "/fr" || pathname === "/en";

  const bg =
    props.isDark || (isHome && !isScrolled)
      ? "bg-brand-900 text-ui-surface"
      : "bg-ui-surface text-brand-900 shadow-sm";

  const linkTextColor =
    isHome && !isScrolled ? "text-ui-surface" : "text-brand-900";

  useEffect(() => {
    const onScroll = () => {
      setScrollYValue(window.scrollY);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`z-20 w-full ${bg} ${navbarPosition}`}>
      <div className="mx-auto flex h-16 2xl:mx-70 items-center justify-between px-4 sm:px-6 lg:px-11 ">
        <Link href="/">
          <Image
            priority
            src={BeyondStrengthIcon}
            alt="BEYOND Icon"
            className="h-[50] w-min  cursor-pointer"
          />
        </Link>
        <NavigationMenu className="hidden md:flex items-center gap-10  ">
          <NavigationMenuList className="flex-wrap gap-[65px] xl:w-full">
            <NavigationMenuItem className={`${linkTextColor}`}>
              {/* <NavigationMenuTrigger>Nos services</NavigationMenuTrigger> */}
              <Link href="/services" className="text-[14px]">
                {t("#OurServices")}
              </Link>
              {/* <NavigationMenuContent className="bg-ui-bg w-auto max-w-[calc(100vw-2rem)]">
              <ul className="grid gap-2 p-4 w-[320px] sm:w-[420px] md:w-[520px] lg:w-[640px] md:grid-cols-2">
                {SERVICE_ITEMS.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent> */}
            </NavigationMenuItem>
            <NavigationMenuItem className={`${linkTextColor}`}>
              <Link href="/about" className="text-[14px]">
                {t("#AboutUs")}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {/* <Navigat?ionMenuLink > */}
              <Link href="/contact" className="text-[14px]">
                <div className="h-auto bg-accent-500 py-2.5 px-4 rounded-3xl text-ui-surface">
                  {t("#ContactUs")}
                </div>
              </Link>
              {/* </NavigationMenuLink> */}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          className="md:hidden rounded-xl p-2 hover:bg-ui-surface2/60 transition bg-accent-500"
          onClick={() => setOpenMobileMenu(true)}
          aria-label="Open menu"
        >
          <Menu className="h-8 w-8 text-ui-surface" />
        </button>
      </div>
      {openMobileMenu && (
        <div className="md:hidden">
          {/* overlay */}
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpenMobileMenu(false)}
          />

          {/* drawer */}
          <div className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm bg-ui-bg text-brand-900 shadow-2xl">
            <div className="flex items-center justify-between  p-4 border-b border-ui-border">
              <div className="font-bold">Menu</div>
              <div className="">
                <button
                  className="rounded-xl p-2 hover:bg-ui-surface2 transition "
                  onClick={() => setOpenMobileMenu(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-accent-500" />
                </button>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-4">
              <DrawerLanguageSwitcher />
              <Link
                href="/services"
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-semibold"
              >
                {t("#OurServices")}
              </Link>
              <Link
                href="/about"
                onClick={() => setOpenMobileMenu(false)}
                className="text-base font-semibold"
              >
                {t("#AboutUs")}
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpenMobileMenu(false)}
                className="mt-2"
              >
                <Button className="h-auto  bg-accent-500 py-2.5 px-4 rounded-3xl text-ui-surface">
                  {t("#ContactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
