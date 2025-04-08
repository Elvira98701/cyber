"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token={process.env.NEXT_PUBLIC_DADATA_API_KEY!}
      onChange={(data) => onChange?.(data?.value)}
      filterLanguage="en"
    />
  );
};
