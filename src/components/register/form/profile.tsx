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
import { profileSchema } from "@/libs/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterStore } from "@/store/register";
import { register } from "@/services/auth/register";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";
import { useToast } from "@/components/common/toast/use-toast";
import { wait } from "@/libs/wait";

export default function ProfileFom() {
  const { credentials } = useRegisterStore();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      router.push("/login");
    }
  }, [router, redirect]);

  const onSubmit = async (value: z.infer<typeof profileSchema>) => {
    if (credentials) {
      setLoading(true);

      const data = {
        name: value.name,
        username: value.username,
        email: credentials.email,
        password: credentials.password,
      };

      const response = await register(data);

      if (response) {
        toast({
          title: "Création de compte",
          description: "Votre compte a été créé avec succès",
        });

        await wait(3000);

        setRedirect(true);
      } else {
        toast({
          variant: "destructive",
          title: "Erreur lors de l'inscription",
          description: "Un problème est survenu lors de l'inscription",
        });
      }
    }
  };

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      username: "",
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input type="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
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
