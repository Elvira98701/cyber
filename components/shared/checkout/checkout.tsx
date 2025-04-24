"use client";

import { useEffect, useState } from "react";
import type { FC } from "react";
import { Container } from "../container";
import { useShop } from "@/hooks";
import { CartSidebar } from "../cart";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutPersonalForm } from "./checkout-personal-form";
import { CheckoutAddressForm } from "./checkout-address-form";
import { checkoutFormSchema, CheckoutFormValues } from "./checkout-form-schema";
import { Preloader } from "../preloader";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";

interface CheckoutProps {
  className?: string;
}

export const Checkout: FC<CheckoutProps> = ({ className }) => {
  const { totalAmount, fetchCartItems, loadingItems } = useShop();
  const [submitting, setSubmitting] = useState(false);

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

  const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);

      toast.error(
        "The order was successfully placed! 📝 Switching to payment... ",
        {
          icon: "✅",
        }
      );

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Couldn't create an order", {
        icon: "❌",
      });
    } finally {
      setSubmitting(false);
    }
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
                  totalAmount > 0 && (
                    <CartSidebar
                      totalAmount={totalAmount}
                      type="form"
                      loading={submitting}
                    />
                  )
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </Container>
    </section>
  );
};
