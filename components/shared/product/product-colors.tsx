import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface ProductColorsProps {
  colors: string[];
  colorValue: string;
  handleChangeColor: (index: number) => void;
  className?: string;
}

export const ProductColors: React.FC<ProductColorsProps> = ({
  colors,
  colorValue,
  handleChangeColor,
  className,
}) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <span>Select color: </span>
      <ul className="flex gap-1">
        {colors.map((color, index) => (
          <li key={color}>
            <Button
              style={{ backgroundColor: color }}
              size="icon"
              className={"w-8 h-8 rounded-full"}
              onClick={() => handleChangeColor(index)}
            >
              {color === colorValue && <Check className="text-primary" />}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
