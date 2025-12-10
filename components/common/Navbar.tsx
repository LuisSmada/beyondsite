"use client";

import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
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

interface INavItems {
  title: string;
  href: string;
  description: string;
}

const NAV_ITEMS: INavItems[] = [
  {
    title: "Nos services",
    href: "/services",
    description: "Service page",
  },
  {
    title: "Qui sommes-nous ?",
    href: "/about",
    description: "About us page",
  },
  {
    title: "Contactez-nous",
    href: "/contact",
    description: "Contact page",
  },
];

interface INavbar {
  isDark?: boolean;
}

export const Navbar = (props: INavbar) => {
  const [scrollYValue, setScrollYValue] = useState(0);
  const pathname = usePathname();

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
      className={`h-[70] z-20 fixed top-0 w-screen flex justify-between items-center pt-0 pl-[45] pr-[45] pb-0 
        ${pathname === "/" ? "bg-brand-900" : "bg-ui-bg shadow-sm"}
        ${props.isDark && "bg-brand-900"} 
        ${scrollYValue > 50 && "bg-ui-bg shadow-sm"}
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
            <Link href="/services" className="text-base">
              Nos services
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${
              (scrollYValue > 50 || pathname !== "/") && "text-brand-900"
            }`}
          >
            <Link href="/contact" className="text-base">
              Qui sommes nous ?
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Navigat?ionMenuLink > */}
            <Link href="/contact" className="text-base">
              <div className="h-auto bg-accent-500 pt-[10] pb-[10] pl-[15] pr-[15] rounded-3xl text-ui-bg">
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
