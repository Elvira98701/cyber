"use client";

import type { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
      <NextTopLoader />
    </>
  );
};
