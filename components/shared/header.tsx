"use client";

import type { FC } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo, Navigation } from "@/components/ui";
import {
  Container,
  MobileMenu,
  UserActions,
  SearchInput,
} from "@/components/shared";
import { navList } from "@/constants/constants";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("paid")) {
      toast.success("The order has been successfully paid for!");
    }

    if (searchParams.has("verified")) {
      toast.success("Mail has been successfully confirmed!");
    }
  }, [searchParams]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-20 w-full bg-background border-b shadow",
        className
      )}
    >
      <Container className="min-h-20 flex items-center justify-between gap-5 lg:gap-14">
        <Logo className="text-foreground" />
        <SearchInput />
        <Navigation navList={navList} className="hidden md:block" />
        <UserActions className="items-center justify-center gap-2 hidden md:flex" />
        <MobileMenu className="md:hidden" navList={navList} />
      </Container>
    </header>
  );
};
