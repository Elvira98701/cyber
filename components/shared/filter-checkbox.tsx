import { cn } from "@/lib/utils";
import { Checkbox, Label } from "../ui";

export interface FilterCheckboxProps {
  className?: string;
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  className,
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <Label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1 font-medium text-[15px]"
      >
        {text}
      </Label>
      {endAdornment}
    </div>
  );
};
