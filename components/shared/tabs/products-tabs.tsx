import type { FC } from "react";

import { notFound } from "next/navigation";

import { Container } from "@/components/shared";
import { cn } from "@/lib/utils";
import { prisma } from "@/prisma/prisma-client";

import { TabsProductsList } from "./tabs-products-list";

interface ProductsTabsProps {
  className?: string;
}

export const ProductsTabs: FC<ProductsTabsProps> = async ({ className }) => {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      images: true,
      slug: true,
      price: true,
      category: { select: { slug: true } },
    },
    take: 15,
  });

  if (!products) {
    return notFound();
  }

  const shuffledProducts = products.sort(() => Math.random() - 0.5);

  return (
    <section className={cn("py-14 bg-muted", className)}>
      <h2 className="visually-hidden">Products</h2>
      <Container>
        <TabsProductsList products={shuffledProducts} className="w-full" />
      </Container>
    </section>
  );
};
