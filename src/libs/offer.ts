import { z } from "zod";

export const offerSchema = z
  .object({
    room: z.string({
      required_error: "Un nom de groupe de discussion est requis",
    }),
    departurePlace: z.string({
      required_error: "Le lieu de départ est requis",
    }),
    destinationPlace: z.string({
      required_error: "Le lieu d'arrivée est requis",
    }),
    departureDate: z.string({
      required_error: "La date et l'heure de départ sont requises",
    }),
    image: z
      .string({ required_error: "Une image du lieu d'arrivée est requise" })
      .optional(),
    vehicle: z.string({ required_error: "Un moyen de transport est requis" }),
    seats: z.string({
      required_error: "Un nombre limité de places est requis",
    }),
  })
  .strict();
