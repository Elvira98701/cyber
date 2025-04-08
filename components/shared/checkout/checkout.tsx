"use client";

import { useEffect, type FC } from "react";
import { Container } from "../container";
import { useShop } from "@/hooks";
import { CartSidebar } from "../cart";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutPersonalForm } from "./checkout-personal-form";
import { CheckoutAddressForm } from "./checkout-address-form";
import { checkoutFormSchema, CheckoutFormValues } from "./checkout-form-schema";
import { Preloader } from "../preloader";

interface CheckoutProps {
  className?: string;
}

export const Checkout: FC<CheckoutProps> = ({ className }) => {
  const { totalAmount, fetchCartItems, loadingItems } = useShop();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className={className}>
      <Container className="min-h-[50vh]">
        <h1 className="text-4xl md:text-5xl font-thin pb-8 md:pb-10">
          Making an <span className="font-bold">Order</span>
        </h1>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              <div className="flex flex-col gap-10 flex-1">
                <CheckoutPersonalForm
                  className={
                    loadingItems ? "opacity-40 pointer-events-none" : ""
                  }
                />
                <CheckoutAddressForm
                  className={
                    loadingItems ? "opacity-40 pointer-events-none" : ""
                  }
                />
              </div>

              <div className="max-w-sm w-full">
                {loadingItems ? (
                  <Preloader className="flex justify-center items-center h-full" />
                ) : (
                  <CartSidebar totalAmount={totalAmount} type="form" />
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </section>
  );
};
