"use client";

import { z } from "zod";
import { Input } from "../common/form/input";
import { loginSchema } from "@/libs/login";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../common/form";
import { signInWithEmailAndPass } from "@/services/firebase/login";
import { Button } from "../common/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../common/toast/use-toast";
import { login } from "@/services/auth/login";

export default function LoginFom() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.push("/login");
    }
  }, [router, redirect]);

  const onSubmit = async (value: z.infer<typeof loginSchema>) => {
    setLoading(true);

    try {
      const token = await signInWithEmailAndPass(value.email, value.password);

      if (token == null) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Informations d'identification non valides",
        });
        return;
      }

      await login(token);

      setRedirect(true);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Un problème est survenu lors de la connection",
      });
    }
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
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
            <>Se connecter</>
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
