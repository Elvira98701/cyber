import type { FC } from "react";

import { ProductSpec } from "@prisma/client";

import { cn } from "@/lib/utils";

interface ProductSpecProps {
  specs: ProductSpec[];
  className?: string;
}

export const ProductSpecification: FC<ProductSpecProps> = ({
  specs,
  className,
}) => {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {specs.map((spec) => (
        <div
          key={spec.id}
          className="bg-muted p-2 min-h-16 rounded-md flex flex-col items-center justify-center text-xs text-center"
        >
          <span className="text-zinc-400">{spec.key}:</span>
          <span>{spec.value}</span>
        </div>
      ))}
    </div>
  );
};
