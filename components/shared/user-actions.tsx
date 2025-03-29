import type { FC } from "react";
import { Button, ButtonLink } from "../ui";
import { Heart, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserActionsProps {
  className?: string;
}

export const UserActions: FC<UserActionsProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Button variant="secondary" size="icon">
        <Heart size={24} />
      </Button>
      <ButtonLink href="/cart" variant="secondary" size="icon" title="cart">
        <ShoppingCart size={24} />
      </ButtonLink>
      <Button variant="secondary" size="icon">
        <User size={24} />
      </Button>
    </div>
  );
};
