"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
      <NextTopLoader />
    </>
  );
};
