import {
  Container,
  Filters,
  ProductList,
  SortPopup,
} from "@/components/shared";
import { findProducts, GetSearchParams } from "@/lib/find-products";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: GetSearchParams;
}) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });

  if (!category) {
    return notFound();
  }

  const products = await findProducts(searchParams, category.id);

  if (!products) {
    return notFound();
  }

  return (
    <Container>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <aside className="filters">
          <Filters categoryId={category.id} />
        </aside>
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
