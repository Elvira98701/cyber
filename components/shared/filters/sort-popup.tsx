import type { FC } from "react";
import { Select } from "@/components/ui";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortPopupProps {
  className?: string;
}

export const SortPopup: FC<SortPopupProps> = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] shadow-none bg-background">
        <SelectValue placeholder="Sort by:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
