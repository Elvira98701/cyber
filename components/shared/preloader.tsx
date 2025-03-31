import type { FC } from "react";
import { Loader } from "lucide-react";

interface PreloaderProps {
  className?: string;
}

export const Preloader: FC<PreloaderProps> = ({ className }) => {
  return (
    <div className={className}>
      <Loader className="w-5 h-5 animate-spin" />
    </div>
  );
};
