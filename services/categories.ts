import { prisma } from "@/prisma/prisma-client";
import { Category } from "@prisma/client";
import { cache } from "react";

export const getCategories = cache(async (): Promise<Category[]> => {
  return prisma.category.findMany();
});
