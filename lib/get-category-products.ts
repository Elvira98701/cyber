import { prisma } from "@/prisma/prisma-client";

import { findProducts, GetSearchParams } from "./find-products";

export const getCategoryWithProducts = async (
  slug: string,
  searchParams: GetSearchParams
) => {
  const category = await prisma.category.findUnique({
    where: { slug },
  });

  if (!category) {
    return null;
  }

  const products = await findProducts(searchParams, category.id);

  if (!products) {
    return null;
  }

  return { category, products };
};
