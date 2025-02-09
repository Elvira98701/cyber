import { Product } from "@prisma/client";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const search = async (
  query: string
): Promise<(Product & { category: { slug: string } })[]> => {
  const { data } = await axiosInstance.get<
    (Product & { category: { slug: string } })[]
  >(ApiRoutes.SEARCH_PRODUCTS, {
    params: { query },
  });

  return data;
};
