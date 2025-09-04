import type { FC } from "react";

import { cn } from "@/lib/utils";

interface ProductPricesProps {
  price: number;
  discount: number | null;
  className?: string;
}

export const ProductPrices: FC<ProductPricesProps> = ({
  price,
  discount,
  className,
}) => {
  return (
    <div className={cn("flex gap-3", className)}>
      <span className="font-medium text-xl md:text-2xl">${price}</span>
      {discount && (
        <del className="text-xl md:text-2xl text-zinc-400">${discount}</del>
      )}
    </div>
  );
};
