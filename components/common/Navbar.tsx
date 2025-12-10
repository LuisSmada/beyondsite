"use client"

import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/NavigationMenu";
import Image from "next/image";
import BeyondStrengthIcon from "../../public/icons/beyondstrength.svg"
import BeyondIcon from "../../public/icons/BEYOND.svg"
import Link from "next/link";

interface INavItems {
    title: string;
    href: string;
    description: string;
}

const NAV_ITEMS: INavItems[] = [
    {
        title: "Nos services",
        href: "/services",
        description: "Service page"
    },
    {
        title: "Qui sommes-nous ?",
        href: "/about",
        description: "About us page"
    },
    {
        title: "Contactez-nous",
        href: "/contact",
        description: "Contact page"
    },
]

export const Navbar = () => {
    return <div className="h-[70] absolute border-b-2 border-red-500 w-screen flex justify-between items-center pt-0 pl-[45] pr-[45] pb-0">
        <Image priority src={BeyondIcon} alt="BEYOND Icon" className="h-[25] w-min  cursor-pointer" />
        <NavigationMenu className="">
            <NavigationMenuList className="flex-wrap gap-[65]">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Nos services</NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" className="text-base">Qui sommes nous ?</Link>
                </NavigationMenuItem>
                <NavigationMenuItem >
                    {/* <Navigat?ionMenuLink > */}
                    <Link href="/contact" className="text-base">
                        <div className="h-auto bg-[#F9BF4B] pt-[10] pb-[10] pl-[15] pr-[15] rounded-3xl text-white">
                            Contactez-nous
                        </div>
                    </Link>
                    {/* </NavigationMenuLink> */}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    </div>
};