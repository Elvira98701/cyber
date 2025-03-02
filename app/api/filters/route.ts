import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const categoryId = parseInt(
    req.nextUrl.searchParams.get("categoryId") || "0"
  );

  const products = await prisma.product.findMany({
    where: { categoryId },
    select: {
      brand: true,
      memory: true,
      specs: {
        select: {
          key: true,
          value: true,
        },
      },
    },
  });

  const filters: Record<string, string[]> = {};

  filters["brand"] = [...new Set(products.map((p) => p.brand))];

  filters["memory"] = [...new Set(products.flatMap((p) => p.memory))];

  products.forEach(({ specs }) => {
    specs.forEach(({ key, value }) => {
      if (!filters[key]) filters[key] = [];
      if (!filters[key].includes(value)) filters[key].push(value);
    });
  });

  return NextResponse.json(filters);
}
