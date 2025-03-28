import { Loader } from "lucide-react";
import React from "react";

interface CartLoaderProps {
  className?: string;
}

export const CartLoader: React.FC<CartLoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Loader className="w-5 h-5 animate-spin" />
    </div>
  );
};
