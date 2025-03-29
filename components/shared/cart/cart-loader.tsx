import type { FC } from "react";
import { Loader } from "lucide-react";

interface CartLoaderProps {
  className?: string;
}

export const CartLoader: FC<CartLoaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Loader className="w-5 h-5 animate-spin" />
    </div>
  );
};
