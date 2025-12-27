"use client";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import {
  setNavbarPosition,
  setPageOverflow,
} from "@/lib/features/application/applicationSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { ContactForm } from "./ContactForm";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BadgeSection } from "@/components/common/BadgeSection";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavbarPosition("fixed"));
    dispatch(setPageOverflow("hidden"));
  }, [dispatch]);

  return (
    <div
      id="main"
      className="w-full min-h-svh flex items-center justify-center text-brand-900 px-4 md:px-11 2xl:px-81"
    >
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-2 2xl:grid-cols-2   w-full h-full  gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex  flex-col gap-4 justify-center items-center  lg:col-span-2 xl:col-span-1 2xl:col-span-1 mt-18 md:mt-0 md:col-span-2 "
          >
            <div className=" ">
              <div className="flex justify-center md:justify-start w-full mb-8">
                <BadgeSection>{t("#ContactUs")}</BadgeSection>
              </div>
              <div className="text-base w-full text-center md:text-start mb-2">
                {t("#DontBeShy")}
              </div>
              <div className="font-bold text-3xl px-4 md:px-0 sm:px-0 sm:text-4xl lg:text-5xl pr-0 lg:pr-9 w-full text-center md:text-start flex md:justify-start ">
                {t("#Collaborate")}
              </div>
            </div>
          </motion.div>
          <div className="h-full flex justify-center items-center pt-10 md:col-span-3 lg:col-span-3 xl:col-span-1 2xl:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-ui-surface py-10 flex flex-col justify-center  shadow-xl rounded-xl w-full h-full px-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
