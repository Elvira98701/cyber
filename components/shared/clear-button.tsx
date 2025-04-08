import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React from "react";

interface ClearButtonProps {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearButton: React.FC<ClearButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn("opacity-30 hover:opacity-100 cursor-pointer", className)}
    >
      <X className="h-5 w-5" />
    </button>
  );
};
