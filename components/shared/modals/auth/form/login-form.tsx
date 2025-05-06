import type { FC } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { formLoginSchema, FormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/shared/form";
import { Button } from "@/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  onClose: VoidFunction;
}

export const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        throw Error();
      }

      toast.success("You have successfully logged in to your account", {
        icon: "✅",
      });

      onClose();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      toast.error("Couldn't log in to account", {
        icon: "❌",
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <h3>Log in</h3>
          </div>
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button
          loading={form.formState.isSubmitting}
          className="h-12 text-base"
          type="submit"
        >
          Enter
        </Button>
      </form>
    </FormProvider>
  );
};
