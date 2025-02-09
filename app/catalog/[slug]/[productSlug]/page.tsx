import { prisma } from "@/prisma/prisma-client";

export default async function ProductPage({
  params,
}: {
  params: { slug: string; productSlug: string };
}) {
  const product = await prisma.product.findUnique({
    where: { slug: params.productSlug },
  });

  return (
    <div>
      Product {params.productSlug} {product?.price}
    </div>
  );
}
