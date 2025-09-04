"use client";

import type { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useFilters } from "@/hooks";

interface SortPopupProps {
  className?: string;
}

const sortingList = [
  {
    id: 1,
    value: "name",
  },
  {
    id: 2,
    value: "popularity",
  },
  {
    id: 3,
    value: "price",
  },
];

export const SortPopup: FC<SortPopupProps> = () => {
  const { toggleFilter } = useFilters();

  const handleChangeSort = (value: string) => {
    toggleFilter("sortingValue", value);
  };

  return (
    <Select onValueChange={handleChangeSort}>
      <SelectTrigger className="w-[180px] shadow-none bg-background">
        <SelectValue placeholder="Sort by:" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          {sortingList.map((item) => (
            <SelectItem
              key={item.id}
              value={item.value}
              className="cursor-pointer capitalize"
            >
              {item.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
