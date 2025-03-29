import type { FC } from "react";
import { Checkbox, Label } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface FilterCheckboxProps {
  value: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  endAdornment?: React.ReactNode;
  className?: string;
}

export const FilterCheckbox: FC<FilterCheckboxProps> = ({
  value,
  onCheckedChange,
  checked,
  endAdornment,
  className,
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        id={`checkbox-${String(value)}`}
      />
      <Label
        htmlFor={`checkbox-${String(value)}`}
        className="leading-none cursor-pointer flex-1 font-medium text-[15px]"
      >
        {value}
      </Label>
      {endAdornment}
    </div>
  );
};
