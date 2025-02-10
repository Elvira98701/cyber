import { PopularProducts, SingleProduct } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function ProductPage({
  params,
}: {
  params: { slug: string; productSlug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.productSlug },
    include: { specs: true, reviews: true },
  });

  return (
    <>
      <SingleProduct product={product} />
      <PopularProducts className="pt-20" />
    </>
  );
}
