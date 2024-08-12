"use client";

import { z } from "zod";
import { Input } from "../common/form/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../common/form";
import { Button } from "../common/button";
import { forgotSchema } from "@/libs/forgot";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordResetEmail } from "@/services/firebase/reset";
import { useToast } from "../common/toast/use-toast";
import { useEffect, useState } from "react";
import { wait } from "@/libs/wait";
import { useRouter } from "next/navigation";

export default function ForgotForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [disabled, setDisbaled] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.replace("/login");
    }
  }, [router, redirect]);

  const onSubmit = async (value: z.infer<typeof forgotSchema>) => {
    setDisbaled(true);
    const response = await passwordResetEmail(value.email);

    if (response) {
      toast({
        title: "Vérifiez votre boîte de réception",
        description:
          "Un courriel a été envoyé pour réinitialiser votre mot de passe.",
      });

      await wait(1000);
      setRedirect(true);
    } else {
      toast({
        variant: "destructive",
        title: "Échec de l'action",
        description: "Erreur lors de l'envoie",
      });
    }
  };

  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
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

        <Button type="submit" disabled={disabled}>
          {!disabled ? (
            <>Envoyer</>
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
