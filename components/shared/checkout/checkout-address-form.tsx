"use client";

import { cn } from "@/lib/utils";
import type { FC } from "react";
import { AdressInput, FormTextarea } from "../form";
import { ErrorText } from "../error-text";
import { Controller, useFormContext } from "react-hook-form";

interface CheckoutAddressFormProps {
  className?: string;
}

export const CheckoutAddressForm: FC<CheckoutAddressFormProps> = ({
  className,
}) => {
  const { control } = useFormContext();

  return (
    <div className={cn("bg-muted rounded-lg p-5", className)}>
      <h2 className="mb-3 capitalize font-semibold">Delivery address</h2>
      <div className="flex flex-col gap-3">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && (
                <ErrorText text={fieldState.error.message} />
              )}
            </>
          )}
        />
        <FormTextarea name="comment" rows={5} placeholder="Comment" />
      </div>
    </div>
  );
};
