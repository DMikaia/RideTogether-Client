"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../common/form";
import { offerSchema } from "@/libs/offer";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../common/form/input";
import { Button } from "../common/button";
import { useEffect, useState } from "react";
import { uploadFile } from "@/services/firebase/upload";
import { postOffer } from "@/services/offer/post";
import { useRouter } from "next/navigation";

export default function OfferForm() {
  const router = useRouter();
  const [image, setImage] = useState<FileList | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    if (redirect) {
      router.push("/dashboard");
    }
  }, [redirect, router]);

  const form = useForm<z.infer<typeof offerSchema>>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      departurePlace: "",
      destinationPlace: "",
      departureDate: "",
      vehicle: "",
      seats: "0",
      image: "",
      room: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof offerSchema>) => {
    if (image && value) {
      setLoading(true);

      value.image = await uploadFile(image[0], "offers");

      const data = {
        departureDate: value.departureDate + ":00.000Z",
        departurePlace: value.departurePlace,
        destinationPlace: value.destinationPlace,
        vehicle: value.vehicle,
        seats: parseInt(value.seats),
        image: value.image,
        room: value.room,
      };

      const success = await postOffer(data);

      if (success) {
        form.reset();
        setRedirect(true);
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <section className="w-full h-fit md:w-fit flex flex-col gap-2 bg-transparent md:bg-card rounded-lg shadow-sm p-4">
      <h1 className="text-lg font-bold">Creation d&#39;offre</h1>

      <hr className="w-full border-foreground border" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-[500px] flex flex-col gap-4 justify-center items-end h-fit"
        >
          <div className="w-full h-fit flex flex-col md:flex-row gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="departurePlace"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Lieu de départ</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destinationPlace"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Lieu d&#39;arrivée</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Date et heure de départ</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicle"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Véhicule</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full h-fit flex flex-col md:flex-row gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="seats"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Places</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full md:w-1/2 h-fit">
              <FormLabel>Image du lieu</FormLabel>
              <Input
                onChange={(e) => setImage(e.target.files)}
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>

          <div className="w-full h-fit">
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/2 h-fit">
                  <FormLabel>Nom du groupe</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full md:w-1/3" disabled={loading}>
            {!loading ? (
              <p>Envoyer</p>
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
    </section>
  );
}
