import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui";

interface CartSidebarProps {
  totalAmount: number;
  type?: "default" | "form";
  loading?: boolean;
  className?: string;
}

const TAX = 50;
const DELIVERY_PRICE = 29;

export const CartSidebar: FC<CartSidebarProps> = ({
  totalAmount,
  type = "default",
  loading = false,
  className,
}) => {
  const tax = totalAmount > 0 ? TAX : 0;
  const deliveryPrice = totalAmount > 0 ? DELIVERY_PRICE : 0;
  const totalPrice = totalAmount + tax + deliveryPrice;

  return (
    <aside className={cn("border rounded-md p-8", className)}>
      <h2 className="font-bold mb-10 text-xl">Order Summary</h2>
      <div className="mb-4 flex justify-between">
        <b className="font-medium">Subtotal</b>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <b className="font-normal">Estimated Tax</b> <span>${tax}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <b className="font-normal">Estimated shipping & Handling</b>
        <span>${deliveryPrice}</span>
      </div>
      <div className="mb-4 flex justify-between">
        <b className="font-medium">Total</b>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      {type === "form" ? (
        <Button className="w-full" size="lg" type="submit" loading={loading}>
          Place an order
        </Button>
      ) : (
        <ButtonLink className="w-full" size="lg" href="/checkout">
          Checkout
        </ButtonLink>
      )}
    </aside>
  );
};
