import * as z from "zod";

const productSchema = z.object({
  title: z.string().min(6, { message: "Toi thieu 6 ki tu" }).max(100),
  price: z.number().min(0),
  description: z.string().optional(),
});

export default productSchema;
