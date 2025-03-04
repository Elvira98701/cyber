"use client";

import { FilterCheckbox } from "./filter-checkbox";
import { Button, Input } from "../ui";
import { useState } from "react";

interface CheckboxFiltersGroupProps {
  keyGroup: string;
  title: string;
  items: string[];
  limit?: number;
  onClickCheckbox: (category: string, value: string) => void;
  selected: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  keyGroup,
  title,
  items,
  limit = 5,
  className,
  onClickCheckbox,
  selected,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            onChange={onChangeSearchInput}
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
          <Button onClick={() => setShowAll(!showAll)} className="mt-3">
            {showAll ? "- Hide" : "+ Show all"}
          </Button>
        </div>
      )}
    </div>
  );
};
