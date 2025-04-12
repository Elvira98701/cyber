"use client";

import type { FC } from "react";
import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { FilterCheckbox } from "./filter-checkbox";

interface CheckboxFiltersGroupProps {
  keyGroup: string;
  title: string;
  items: string[];
  onClickCheckbox: (category: string, value: string) => void;
  selected: string[];
  limit?: number;
  className?: string;
}

export const CheckboxFiltersGroup: FC<CheckboxFiltersGroupProps> = ({
  keyGroup,
  title,
  items,
  onClickCheckbox,
  selected,
  limit = 5,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((item) =>
        item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : items?.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3 text-foreground capitalize">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            type="search"
            placeholder="Search"
            className="bg-background"
            onChange={handleChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            value={item}
            checked={selected.includes(item)}
            onCheckedChange={() => onClickCheckbox(keyGroup, item)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t mt-4" : ""}>
          <Button
            onClick={() => setShowAll(!showAll)}
            className="mt-3"
            type="button"
          >
            {showAll ? "- Hide" : "+ Show all"}
          </Button>
        </div>
      )}
    </div>
  );
};
