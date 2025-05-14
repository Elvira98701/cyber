import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";

export interface GetSearchParams {
  brand?: string;
  priceFrom?: string;
  priceTo?: string;
  memory?: string;
  Display?: string;
  Processor?: string;
  RAM?: string;
  Battery?: string;
  Video?: string;
  Lens?: string;
  Bluetooth?: string;
  Motherboard?: string;
  Videocard?: string;
  Smart?: string;
  Sound?: string;
  Power?: string;
  sortingValue?: string;
  order?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 5000;

export const findProducts = async (
  params: GetSearchParams,
  categoryId: number
) => {
  const whereConditions: Prisma.ProductWhereInput = { categoryId };
  const sortField: string = Array.isArray(params.sortingValue)
    ? params.sortingValue[0]
    : params.sortingValue || "name";

  const sortOrder = params.order || "asc";

  if (params.brand) {
    whereConditions.brand = { in: params.brand.split(",") };
  }

  if (params.priceFrom || params.priceTo) {
    whereConditions.price = {
      gte: Number(params.priceFrom) || DEFAULT_MIN_PRICE,
      lte: Number(params.priceTo) || DEFAULT_MAX_PRICE,
    };
  }

  if (params.memory) {
    whereConditions.memory = {
      hasSome: params.memory.split(","),
    };
  }

  const specFilters = Object.entries(params)
    .filter(
      ([key]) =>
        key !== "brand" &&
        key !== "priceFrom" &&
        key !== "priceTo" &&
        key !== "memory"
    )
    .map(([key, value]) => ({
      specs: {
        some: {
          key,
          value: { in: value.split(",") },
        },
      },
    }));

  if (specFilters.length) {
    whereConditions.AND = specFilters;
  }

  const products = await prisma.product.findMany({
    where: whereConditions,
    orderBy: [
      {
        [sortField]: sortOrder,
      },
    ],
    include: {
      specs: true,
    },
  });

  return products;
};
