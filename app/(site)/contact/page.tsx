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

export default function ContactPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavbarPosition("fixed"));
    dispatch(setPageOverflow("hidden"));
  }, [dispatch]);

  return (
    <div
      id="main"
      className="w-full min-h-screen flex items-center justify-center text-brand-900"
    >
      <AnimatePresence>
        <div className="grid grid-cols-2 w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex  flex-col gap-4 justify-center items-center"
          >
            <div className="text-accent-500 font-bold mb-7 justify-items-start w-full text-sm">
              Contact us
            </div>
            <div>
              <div className="text-base w-full justify-items-start mb-2">
                Dont be shy
              </div>
              <div className="font-bold text-5xl pr-9 w-full justify-items-start">
                Lets collaborate together !
              </div>
            </div>
          </motion.div>
          <div className="h-full flex justify-center items-center pt-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-ui-surface py-10 flex flex-col justify-center items-center shadow-xl rounded-xl w-full h-full"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
