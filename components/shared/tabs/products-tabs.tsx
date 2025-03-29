import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { prisma } from "@/prisma/prisma-client";
import { TabsProductsList } from "./tabs-products-list";
import { notFound } from "next/navigation";

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
