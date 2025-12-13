"use client";

import Image from "next/image";
import BeyondFull from "@/public/icons/beyondstrength.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-[300px] w-full bg-brand-900 text-ui-bg mt-10 flex flex-col">
      <div className="w-full h-full grid grid-cols-3">
        <div className="flex items-center justify-center">
          <Image priority src={BeyondFull} alt="BEYOND Logo" height={60} />
        </div>
        <div className="flex flex-col justify-center items-center text-ui-surface font-bold text-base gap-4">
          <Link href="/">Politique de confidentialite</Link>
          <Link href="/">Mentions legales</Link>
        </div>
        <div></div>
      </div>
      <div className="w-full min-h-5 h-8 mt-auto flex items-center justify-center text-bg-surface text-xs">
        Copyright &copy; 2025 BEYOND All rights reserved.
      </div>
    </footer>
  );
};
