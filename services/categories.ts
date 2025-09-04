import { cache } from "react";

import { Category } from "@prisma/client";
import { notFound } from "next/navigation";

import { prisma } from "@/prisma/prisma-client";

export const preload = () => {
  void getCategories();
};

export const getCategories = cache(async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();

  if (!categories.length) notFound();

  return categories;
});
