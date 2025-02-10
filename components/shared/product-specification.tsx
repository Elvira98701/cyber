import { cn } from "@/lib/utils";
import { ProductSpec } from "@prisma/client";
import React from "react";

interface ProductSpecProps {
  className?: string;
  specs: ProductSpec[];
}

export const ProductSpecification: React.FC<ProductSpecProps> = ({
  className,
  specs,
}) => {
  console.log(specs);
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
