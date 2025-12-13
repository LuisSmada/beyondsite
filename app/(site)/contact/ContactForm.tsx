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

  const onValid = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
    toast.success("Message envoyé");
    setFormKey((k) => k + 1);
  };

  const onInvalid = () => {
    toast.warning("Un ou plusieurs champs sont incorrects.");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onValid, onInvalid)}
        className="space-y-4"
      >
        <div className="flex items-start gap-4">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Firstname <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
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
                  Lastname <span className="text-ui-danger">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs leading-4" /> */}
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>
                  Email <span className="text-ui-danger">*</span>
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
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="+33 ..." {...field} />
                </FormControl>
                {/* <FormMessage className="min-h-4 text-xs" /> */}
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Entreprise <span className="text-ui-danger">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Nom de l’entreprise" {...field} />
              </FormControl>
              {/* <FormMessage className="min-h-4 text-xs" /> */}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-ui-danger">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                  {...field}
                />
              </FormControl>
              {/* <FormMessage className="min-h-4 text-xs" /> */}
            </FormItem>
          )}
        />

        <Button type="submit">Envoyer</Button>
      </form>
    </Form>
  );
};
