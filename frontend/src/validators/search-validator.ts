import { z } from "zod";

export const SearchSchema = z.object({
  search: z
    .string()
    .regex(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
});
