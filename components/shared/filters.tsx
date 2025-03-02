"use client";

import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFetchFilters, useFilters } from "@/hooks";

interface FiltersProps {
  className?: string;
  categoryId: number;
}

export const Filters: React.FC<FiltersProps> = ({ className, categoryId }) => {
  const { filters, loading } = useFetchFilters(String(categoryId));
  const { selectedFilters, priceRange, setPriceRange, toggleFilter } =
    useFilters();

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
              setPriceRange((prev) => ({
                ...prev,
                min: Number(e.target.value) || undefined,
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
              setPriceRange((prev) => ({
                ...prev,
                max: Number(e.target.value) || undefined,
              }))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[priceRange.min || 0, priceRange.max || 5000]}
          onValueChange={([min, max]) => setPriceRange({ min, max })}
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
              loading={loading}
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
