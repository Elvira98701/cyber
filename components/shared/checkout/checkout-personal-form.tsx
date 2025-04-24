import type { FC } from "react";

import { FormInput } from "../form";
import { cn } from "@/lib/utils";

interface CheckoutPersonalFormProps {
  className?: string;
}

export const CheckoutPersonalForm: FC<CheckoutPersonalFormProps> = ({
  className,
}) => {
  return (
    <div className={cn("bg-muted rounded-lg p-5", className)}>
      <h2 className="mb-3 capitalize font-semibold">Personal data</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <FormInput name="firstName" label="Name" placeholder="Ivan" required />
        <FormInput
          name="lastName"
          label="Lastname"
          placeholder="Ivanov"
          required
        />
        <FormInput
          name="email"
          label="Email"
          placeholder="example@mail.ru"
          required
        />
        <FormInput
          name="phone"
          label="Phone"
          placeholder="89001234567"
          required
        />
      </div>
    </div>
  );
};
