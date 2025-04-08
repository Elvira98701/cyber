import { Input, Label } from "@/components/ui";
import type { FC, InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorText, ClearButton } from "@/components/shared";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<FormInputProps> = ({
  name,
  label,
  required,
  className,
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
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      <Label htmlFor={name}>
        {label} {required && "&#9913;"}
      </Label>

      <div className="relative">
        <Input
          className="bg-background shadow-none"
          id={name}
          {...register(name)}
          {...props}
        />
        {value && (
          <ClearButton
            onClick={handleClickClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 "
          />
        )}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
