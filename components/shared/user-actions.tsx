import React from "react";
import { Button } from "../ui";
import { Heart, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserActionsProps {
  className?: string;
}

export const UserActions: React.FC<UserActionsProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Button variant="secondary" size="icon">
        <Heart size={24} />
      </Button>
      <Button variant="secondary" size="icon">
        <ShoppingCart size={24} />
      </Button>
      <Button variant="secondary" size="icon">
        <User size={24} />
      </Button>
    </div>
  );
};
