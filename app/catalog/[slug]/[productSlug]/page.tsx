import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PopularProducts, Reviews, SingleProduct } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export const metadata: Metadata = {
  title: "Product",
};

export default async function ProductPage({
  params,
}: {
  params: { slug: string; productSlug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.productSlug },
    include: {
      specs: true,
      reviews: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <>
      <SingleProduct product={product} />
      {product && product.reviews.length > 0 && (
        <Reviews reviews={product.reviews} />
      )}
      <PopularProducts className="pt-20" />
    </>
  );
}
