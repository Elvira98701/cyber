"use client";

import type { FC } from "react";

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface AdressInputProps {
  onChange?: (value?: string) => void;
}

export const AdressInput: FC<AdressInputProps> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token={process.env.NEXT_PUBLIC_DADATA_API_KEY!}
      onChange={(data) => onChange?.(data?.value)}
      filterLanguage="en"
    />
  );
};
