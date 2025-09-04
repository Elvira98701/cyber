"use client";

import type { FC } from "react";

import { SlidersHorizontal } from "lucide-react";
import { useMedia } from "react-use";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { useFetchFilters, useFilters } from "@/hooks";

import { FiltersGroup } from "./filters-group";

interface FiltersProps {
  categoryId: number;
}

export const Filters: FC<FiltersProps> = ({ categoryId }) => {
  const { filters, loading } = useFetchFilters(String(categoryId));
  const { selectedFilters, priceRange, setPriceRange, toggleFilter } =
    useFilters();
  const isWide = useMedia("(min-width: 640px)", false);

  const filtersGroup = (
    <FiltersGroup
      filters={filters}
      loading={loading}
      selectedFilters={selectedFilters}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      toggleFilter={toggleFilter}
    />
  );

  return (
    <>
      {isWide ? (
        filtersGroup
      ) : (
        <Dialog>
          <DialogTrigger className="bg-background text-foreground border transition w-full flex sm:hidden items-center justify-between rounded-md px-4 py-2">
            <span>Filters</span>
            <SlidersHorizontal size={18} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-bold">Filters</DialogTitle>
              <DialogDescription>
                Adjust the filters to find product.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-96 overflow-y-auto p-4">{filtersGroup}</div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
