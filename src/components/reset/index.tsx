"use client";

import { useEffect, useState } from "react";
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
import { resetSchema } from "@/libs/forgot";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword } from "@/services/firebase/reset";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "../common/toast/use-toast";
import { wait } from "@/libs/wait";

export default function ResetForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get("oobCode");
  const { toast } = useToast();
  const [disabled, setDisbaled] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!oobCode || redirect) {
      router.push(`/login`);
    }
  }, [router, redirect, oobCode]);

  const onSubmit = async (value: z.infer<typeof resetSchema>) => {
    setDisbaled(true);

    if (!oobCode) {
      toast({
        variant: "destructive",
        title: "Action non autorisée",
        description: "Demande refusée sans code oob",
      });

      setDisbaled(false);
      return;
    }

    try {
      const response = await changePassword(oobCode, value.password);

      if (response) {
        toast({
          title: "Mot de passe réinitialisé",
          description:
            "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe",
        });

        await wait(3000);

        setRedirect(true);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Échec de l'action",
        description: "Erreur lors de la réinitialisation",
      });
    }
  };

  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={disabled}>
          {!disabled ? (
            <>Réinitialiser</>
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
