import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SortPopupProps {
  className?: string;
}

export const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-1 border px-5 h-10 max-w-64 w-full rounded-[var(--radius)] cursor-pointer bg-background",
        className
      )}
    >
      <b className="font-normal text-[15px]">By rating</b>
      <ChevronDown size={16} />
    </div>
  );
};
