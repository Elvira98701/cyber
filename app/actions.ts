"use server";

import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";

export async function createOrder(data: CheckoutFormValues) {
  console.log(data);
}
