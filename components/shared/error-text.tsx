import { cn } from "@/lib/utils";
import type { FC } from "react";

interface ErrorTextProps {
  text: string;
  className?: string;
}

export const ErrorText: FC<ErrorTextProps> = ({ text, className }) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
