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
  const [scrollYValue, setScrollYValue] = useState(0);
  const pathname = usePathname();
  const navbarPosition = useAppSelector(navbarPositionSelector);

  useEffect(() => {
    const onScroll = () => {
      setScrollYValue(window.scrollY);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`h-[70] z-20 text-ui-bg  top-0 w-screen flex justify-between items-center pt-0 pl-[45] pr-[45] pb-0 
        ${navbarPosition}
        ${pathname === "/" ? "bg-brand-900" : "bg-ui-surface shadow-sm"}
        ${props.isDark && "bg-brand-900"} 
        ${scrollYValue > 50 && "bg-ui-surface shadow-sm"}
      `}
    >
      <Link href="/">
        <Image
          priority
          src={BeyondStrengthIcon}
          alt="BEYOND Icon"
          className="h-[50] w-min  cursor-pointer"
        />
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList className="flex-wrap gap-[65]">
          <NavigationMenuItem
            className={`${
              (scrollYValue > 50 || pathname !== "/") && "text-brand-900"
            }`}
          >
            {/* <NavigationMenuTrigger>Nos services</NavigationMenuTrigger> */}
            <Link href="/services" className="text-[14px]">
              Nos services
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
          <NavigationMenuItem
            className={`${
              (scrollYValue > 50 || pathname !== "/") && "text-brand-900"
            }`}
          >
            <Link href="/about" className="text-[14px]">
              Qui sommes nous ?
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Navigat?ionMenuLink > */}
            <Link href="/contact" className="text-[14px]">
              <div className="h-auto bg-accent-500 pt-[10] pb-[10] pl-[15] pr-[15] rounded-3xl text-ui-surface">
                Contactez-nous
              </div>
            </Link>
            {/* </NavigationMenuLink> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
