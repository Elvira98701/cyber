import type { FC } from "react";
import { Button } from "../ui";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface CountButtonsProps {
  value: number;
  cartItemId: number;
  quantity: number;
  handleUpdateItemQuantity: (
    cartItemId: number,
    quantity: number
  ) => Promise<void>;
  className?: string;
}

export const CountButtons: FC<CountButtonsProps> = ({
  value,
  cartItemId,
  quantity,
  handleUpdateItemQuantity,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        size="icon"
        variant="ghost"
        disabled={quantity === 1}
        onClick={() => {
          handleUpdateItemQuantity(cartItemId, quantity - 1);
        }}
        type="button"
      >
        <Minus size={12} />
      </Button>
      <b className="border w-10 h-10 rounded-md flex items-center justify-center font-medium">
        {value}
      </b>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          handleUpdateItemQuantity(cartItemId, quantity + 1);
        }}
        type="button"
      >
        <Plus />
      </Button>
    </div>
  );
};
