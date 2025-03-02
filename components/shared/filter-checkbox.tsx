import { cn } from "@/lib/utils";
import { Checkbox, Label } from "../ui";

export interface FilterCheckboxProps {
  className?: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  className,
  value,
  endAdornment,
  onCheckedChange,
  checked,
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
