import { z } from "zod";

export const profileSchema = z
  .object({
    name: z.string({ required_error: "Le nom est requis" }).min(1),
    username: z
      .string({ required_error: "Le nom d'utilisateur est requis" })
      .min(1),
  })
  .strict();

export const credentialsSchema = z
  .object({
    email: z
      .string({ required_error: "L'e-mail est obligatoire" })
      .email("L'email doit être valide"),
    password: z
      .string({ required_error: "Le mot de passe est requis" })
      .min(8, "Le mot de passe doit comporter au moins 8 caractères")
      .max(16, "Le nombre maximum de caractères du mot de passe est de 16"),
  })
  .strict();
