"use client";

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Button, SearchInput } from "../ui";
import { useState } from "react";

interface CheckboxFiltersGroupProps {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  loading?: boolean;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<CheckboxFiltersGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  className,
  // loading,
  // onClickCheckbox,
  // selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((item) =>
        item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : defaultItems?.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3 text-foreground">{title}</p>

      {showAll && (
        <div className="mb-5">
          <SearchInput
            className="bg-background"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
            name={name}
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
