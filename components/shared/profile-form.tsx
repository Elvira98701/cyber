"use client";

import type { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { updateUserInfo } from "@/app/actions";
import { Button } from "@/components/ui";

import { FormInput } from "./form";
import {
  formRegisterSchema,
  FormRegisterValues,
} from "./modals/auth/form/schemas";

interface ProfileFormProps {
  data: User;
}

export const ProfileForm: FC<ProfileFormProps> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      name: data.name,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        name: data.name,
        password: data.password,
      });

      toast.error("The data has been updated 📝", {
        icon: "✅",
      });
    } catch (error) {
      console.log(error);
      return toast.error("Error updating data", {
        icon: "❌",
      });
    }
  };

  const handleClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <section>
      <h1 className="text-4xl md:text-5xl font-thin pb-8 md:pb-10">
        Personal <span className="font-bold">Data</span>
      </h1>

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-72 sm:w-96 mt-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="name" label="Name" required />

          <FormInput
            type="password"
            name="password"
            label="New password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Repeat the password"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-2"
            type="submit"
          >
            Save
          </Button>

          <Button
            onClick={handleClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Exit
          </Button>
        </form>
      </FormProvider>
    </section>
  );
};
