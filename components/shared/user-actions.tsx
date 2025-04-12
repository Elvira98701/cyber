"use client";

import { useState, type FC } from "react";
import { ButtonLink } from "../ui";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";

interface UserActionsProps {
  className?: string;
}

export const UserActions: FC<UserActionsProps> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <div className={cn("", className)}>
      <ButtonLink
        href="/wishlist"
        variant="secondary"
        size="icon"
        title="wishlist"
        className="hover-hover:bg-primary hover-hover:text-background"
      >
        <Heart size={24} />
      </ButtonLink>
      <ButtonLink
        href="/cart"
        variant="secondary"
        size="icon"
        title="cart"
        className="hover-hover:bg-primary hover-hover:text-background"
      >
        <ShoppingCart size={24} />
      </ButtonLink>
      <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
      <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
    </div>
  );
};
