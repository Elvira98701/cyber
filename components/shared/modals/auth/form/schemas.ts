import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(6, { message: "The password must contain at least 6 characters" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Enter the correct email address" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      name: z.string().min(2, { message: "Enter a name" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type FormLoginValues = z.infer<typeof formLoginSchema>;
export type FormRegisterValues = z.infer<typeof formRegisterSchema>;
