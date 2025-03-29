import type { FC } from "react";
import { cn } from "@/lib/utils";
import { BadgeCheck, Store, Truck } from "lucide-react";

interface ProductInfoProps {
  stock: number;
  className?: string;
}

export const ProductInfo: FC<ProductInfoProps> = ({ stock, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-8", className)}>
      <div className="flex items-center gap-4">
        <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
          <Truck size={24} />
        </span>
        <div className="flex flex-col text-sm">
          <span className="text-zinc-500">Free Delivery</span>
          <span>1-2 day</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
          <Store size={24} />
        </span>
        <div className="flex flex-col text-sm">
          <span className="text-zinc-500">In Stock</span>
          <span>{stock}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
          <BadgeCheck size={24} />
        </span>
        <div className="flex flex-col text-sm">
          <span className="text-zinc-500">Guaranteed</span>
          <span>1 year</span>
        </div>
      </div>
    </div>
  );
};
