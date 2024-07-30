"use client";

import { z } from "zod";
import { Input } from "@/components/common/form/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/common/form";
import { credentialsSchema } from "@/libs/register";
import { checkEmail } from "@/services/auth/check";
import { useToast } from "@/components/common/toast/use-toast";
import { useRegisterStore } from "@/store/register";
import { useState } from "react";
import { Button } from "@/components/common/button";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CredentialsFom() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const incrementStep = useRegisterStore((state) => state.incrementStep);
  const update = useRegisterStore((state) => state.updateCredentials);

  const onSubmit = async (value: z.infer<typeof credentialsSchema>) => {
    setLoading(true);
    const exist = await checkEmail(value.email);

    if (!exist) {
      toast({
        variant: "destructive",
        title: "Email déjà utilisé",
        description:
          "L'adresse électronique que vous avez saisie est déjà prise",
      });

      setLoading(false);
    }

    update(value);
    incrementStep();
  };

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading}>
          {!loading ? (
            <>S&#39;inscrire</>
          ) : (
            <div className="flex space-x-2 justify-center items-centen">
              <div className="h-3 w-3 bg-muted rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-3 w-3 bg-muted rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-3 w-3 bg-muted rounded-full animate-bounce"></div>
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
