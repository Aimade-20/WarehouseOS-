import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .max(100, "Le nom est trop long"),

  sku: z
    .string()
    .trim()
    .min(3, "Le SKU est obligatoire")
    .max(30, "Le SKU est trop long")
    .regex(
      /^[A-Z0-9-_]+$/,
      "Le SKU ne peut contenir que des lettres majuscules, chiffres, - et _"
    ),

  description: z
    .string()
    .trim()
    .min(10, "La description doit contenir au moins 10 caractères")
    .max(1000, "La description est trop longue"),

  category: z
    .string()
    .min(1, "La catégorie est obligatoire"),

  price: z
    .number({
      required_error: "Le prix est obligatoire",
      invalid_type_error: "Le prix doit être un nombre",
    })
    .positive("Le prix doit être supérieur à 0"),

  initialQuantity: z
    .number({
      required_error: "La quantité est obligatoire",
      invalid_type_error: "La quantité doit être un nombre",
    })
    .int("La quantité doit être un entier")
    .min(0, "La quantité ne peut pas être négative"),
});

export type ProductInput = z.infer<typeof productSchema>;