"use client";

import { CartStateItem } from "@/lib/get-cart-details";
import Image from "next/image";
import React, { useState } from "react";
import { CountButtons } from "../count-buttons";
import { Button } from "@/components/ui";
import { Trash2Icon } from "lucide-react";

interface CartListProps {
  items: CartStateItem[];
  loading: boolean;
  handleRemoveCartItem: (id: number) => Promise<void>;
  handleUpdateItemQuantity: (
    cartItemId: number,
    quantity: number
  ) => Promise<void>;
  className?: string;
}

export const CartList: React.FC<CartListProps> = ({
  items,
  loading,
  handleRemoveCartItem,
  handleUpdateItemQuantity,
  className,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <ul className={className}>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between py-4 border-b"
        >
          <div className="flex gap-4 items-center">
            <Image
              src={item.images[0]}
              width={90}
              height={90}
              alt={item.name}
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium">{item.name}</h2>
              <div className="flex items-center gap-2">
                {item.selectedColor && (
                  <span
                    style={{ backgroundColor: item.selectedColor }}
                    className={"w-8 h-8 rounded-full inline-block"}
                  />
                )}
                {item.selectedMemory && <span>{item.selectedMemory}</span>}
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-xl font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <CountButtons
              value={item.quantity}
              cartItemId={item.id}
              quantity={item.quantity}
              handleUpdateItemQuantity={handleUpdateItemQuantity}
            />

            <Button
              size="icon"
              onClick={() => {
                setActiveId(item.id);
                handleRemoveCartItem(item.id);
              }}
              loading={activeId === item.id ? loading : false}
            >
              <Trash2Icon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
