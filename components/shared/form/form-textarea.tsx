"use client";

import type { FC, TextareaHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";

import { ClearButton } from "@/components/shared";
import { Textarea } from "@/components/ui";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  name: string;
  label?: string;
  required?: boolean;
}

export const FormTextarea: FC<Props> = ({
  className,
  name,
  label,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const handleClickClear = () => {
    setValue(name, "");
  };

  return (
    <div className={className}>
      <p className="font-medium mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </p>

      <div className="relative">
        <Textarea
          className="text-md bg-background shadow-none"
          {...register(name)}
          {...props}
        />

        {value && (
          <ClearButton
            onClick={handleClickClear}
            className="absolute right-3 top-3"
          />
        )}
      </div>

      {errorText && <p className="text-red-500 text-sm mt-2">{errorText}</p>}
    </div>
  );
};
