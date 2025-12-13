"use client";

import { pageOverflowSelector } from "@/lib/features/application/applicationSelector";
import { useAppSelector } from "@/lib/hooks";
import { ReactNode } from "react";

export const InnerLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const pageOverflow = useAppSelector(pageOverflowSelector);

  console.log(pageOverflow);

  return (
    <div
      className={`w-full min-h-screen h-full ${
        pageOverflow === "hidden" ? "overflow-hidden" : "overflow-y-auto"
      }`}
    >
      {children}
    </div>
  );
};
