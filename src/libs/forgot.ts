import { z } from "zod";

export const forgotSchema = z.object({
  email: z
    .string({ required_error: "L'e-mail est obligatoire" })
    .email("L'email doit être valide"),
});

export const resetSchema = z.object({
  password: z
    .string({ required_error: "Le mot de passe est requis" })
    .min(8, "Le mot de passe doit comporter au moins 8 caractères")
    .max(16, "Le nombre maximum de caractères du mot de passe est de 16"),
});
