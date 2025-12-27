"use client";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/TextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TContactFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  email: z.email({ message: "It s not an email " }),
  phone: z.string().max(13),
  company: z.string().min(2).max(50),
  message: z.string().min(2),
});

export const ContactForm = () => {
  const t = useTranslations("ContactPage");

  const [formKey, setFormKey] = useState(0);

  const defaultFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const onValid = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      console.log(values);
      toast.success(t("#MessageSent"));

      form.reset();
      setFormKey((k) => k + 1);
    } else {
      toast.error("Erreur d'envoi");
    }
  };

  const onInvalid = () => {
    toast.warning(t("#IncorrectFields"));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid, onInvalid)}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:px-5 px-1 lg:px-0  gap-6 lg:flex lg:items-start md:gap-4 sm:px-5 ">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {t("#FirstName")} <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} className="" />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs leading-4" /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {t("#LastName")} <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs leading-4" /> */}
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  px-1 md:px-5 lg:px-0 gap-6 lg:flex lg:items-center md:gap-4 sm:px-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  {t("#Email")} <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs" /> */}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>{t("#PhoneNumber")}</FormLabel>
                <FormControl>
                  <Input placeholder="+33 ..." {...field} />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs" /> */}
              </FormItem>
            )}
          />
        </div>
        <div className="px-1 sm:px-5  lg:px-0">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("#Company")} <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={t("#CompanyPlaceholder")} {...field} />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs" /> */}
              </FormItem>
            )}
          />
        </div>

        <div className="px-1 sm:px-5  lg:px-0">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {t("#Message")} <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder={t("#MessagePlaceholder")}
                    {...field}
                  />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs" /> */}
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-center md:justify-start md:px-5 lg:px-0">
          <Button className="h-auto  bg-accent-500  hover:bg-accent-500 py-2.5 px-6 rounded-3xl text-ui-surface">
            {t("#Send")}
          </Button>
        </div>
      </form>
    </Form>
  );
};
