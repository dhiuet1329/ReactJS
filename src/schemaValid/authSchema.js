import * as z from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullname: z.string(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullname: z.string(),
});

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPass: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "Password not match",
    path: ["confirmPass"],
  });
