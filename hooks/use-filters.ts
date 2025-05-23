import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "qs";
import { FiltersType } from "./use-fetch-filters";

export interface Price {
  min?: number;
  max?: number;
}

export const useFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<FiltersType>({});
  const [priceRange, setPriceRange] = useState<Price>({
    min: undefined,
    max: undefined,
  });

  useEffect(() => {
    const params = qs.parse(searchParams.toString(), { comma: true }) as Record<
      string,
      string | string[]
    >;

    const parsedFilters: FiltersType = {};
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        parsedFilters[key] = value;
      } else if (typeof value === "string") {
        parsedFilters[key] = value.split(",");
      }
    });

    setSelectedFilters(parsedFilters);

    setPriceRange({
      min: params.priceFrom ? Number(params.priceFrom) || undefined : undefined,
      max: params.priceTo ? Number(params.priceTo) || undefined : undefined,
    });
  }, [searchParams]);

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[category] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : category === "sortingValue" || category === "sorting"
        ? [value]
        : [...currentValues, value];

      return {
        ...prev,
        [category]: updatedValues,
      };
    });
  };

  useEffect(() => {
    const queryParams = {
      ...selectedFilters,
      priceFrom: priceRange.min,
      priceTo: priceRange.max,
    };

    const queryString = qs.stringify(queryParams, {
      arrayFormat: "comma",
      skipNulls: true,
    });

    router.push(`?${queryString}`, { scroll: false });
  }, [selectedFilters, priceRange, router]);

  return { selectedFilters, priceRange, setPriceRange, toggleFilter };
};
