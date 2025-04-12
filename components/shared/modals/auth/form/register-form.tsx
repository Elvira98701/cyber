import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, FormRegisterValues } from "./schemas";
import toast from "react-hot-toast";
import { FormInput } from "@/components/shared/form";
import { Button } from "@/components/ui";
import { registerUser } from "@/app/actions";

interface RegisterFormProps {
  onClose?: VoidFunction;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onClose }) => {
  const form = useForm<FormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        name: data.name,
        password: data.password,
      });

      toast.error("Registration is successful. Confirm your email", {
        icon: "✅",
      });

      onClose?.();
    } catch (error) {
      console.log(error);
      return toast.error("Incorrect E-Mail or password", {
        icon: "❌",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <h3>Register with your e-mail</h3>
          </div>
        </div>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="name" label="Name" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Confirm password"
          type="password"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Create Account
        </Button>
      </form>
    </FormProvider>
  );
};
