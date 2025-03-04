import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";

export type FiltersType = Record<string, string[]>;

export const useFetchFilters = (categoryId: string) => {
  const [filters, setFilters] = useState<FiltersType>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setLoading(true);
        const response = await Api.filters.getFilters(categoryId);
        setFilters(response);
      } catch (error) {
        console.error("Filter loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, [categoryId]);

  return { filters, loading };
};
