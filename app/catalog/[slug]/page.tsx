import {
  Container,
  Filters,
  ProductList,
  SortPopup,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });

  if (!category) {
    return notFound();
  }

  const products = await prisma.product.findMany({
    where: { categoryId: category.id },
  });

  if (!products) {
    return notFound();
  }

  return (
    <Container>
      <div className="flex gap-8">
        <div className="filters hidden sm:block">
          <Filters categoryId={category.id} />
        </div>
        <div className="flex-1">
          <header className="flex justify-between items-center mb-6">
            <p>
              Products: <b className="text-foreground">{products.length}</b>
            </p>
            <SortPopup />
          </header>
          <ProductList products={products} categorySlug={params.slug} />
        </div>
      </div>
    </Container>
  );
}
