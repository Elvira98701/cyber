import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "The name must contain at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "The last name must contain at least 2 characters." }),
  email: z.string().email({ message: "Enter the correct email address." }),
  phone: z.string().min(10, { message: "Enter the correct phone number." }),
  address: z.string().min(5, { message: "Enter the correct address." }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
