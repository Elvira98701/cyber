"use client";

import type { FC } from "react";
import { FiltersType } from "@/hooks/use-fetch-filters";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FiltersSkeleton } from "./filters-skeleton";
import { Price } from "@/hooks/use-filters";
import { Input, RangeSlider } from "@/components/ui";

interface FiltersGroupProps {
  filters: FiltersType;
  loading: boolean;
  selectedFilters: FiltersType;
  priceRange: Price;
  setPriceRange: React.Dispatch<React.SetStateAction<Price>>;
  toggleFilter: (category: string, value: string) => void;
  className?: string;
}

export const FiltersGroup: FC<FiltersGroupProps> = ({
  filters,
  loading,
  selectedFilters,
  priceRange,
  setPriceRange,
  toggleFilter,
  className,
}) => {
  if (loading) {
    return <FiltersSkeleton />;
  }

  return (
    <div className={className}>
      <div className="border-b pb-7">
        <p className="font-bold mb-3 text-foreground">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            className="bg-background"
            type="number"
            placeholder="0"
            min={0}
            max={4900}
            value={priceRange.min || ""}
            onChange={(e) =>
              setPriceRange((prev: Price) => ({
                ...prev,
                min: e.target.value ? Number(e.target.value) : undefined,
              }))
            }
          />
          <Input
            className="bg-background"
            type="number"
            min={100}
            max={5000}
            placeholder="5000"
            value={priceRange.max || ""}
            onChange={(e) =>
              setPriceRange((prev: Price) => ({
                ...prev,
                max: e.target.value ? Number(e.target.value) : undefined,
              }))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[priceRange.min || 0, priceRange.max || 5000]}
          onValueChange={([min, max]) =>
            setPriceRange((prev: Price) => ({ ...prev, min, max }))
          }
        />
      </div>

      {Object.entries(filters).map(([key, values]) => {
        if (values.length > 0) {
          return (
            <CheckboxFiltersGroup
              key={key}
              keyGroup={key}
              className="mt-5"
              title={key}
              limit={4}
              selected={selectedFilters[key] || []}
              items={values}
              onClickCheckbox={toggleFilter}
            />
          );
        }
      })}
    </div>
  );
};
