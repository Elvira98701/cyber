import {
  Container,
  Filters,
  ProductList,
  SortPopup,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });

  if (!category) return <div>не найдено</div>;

  const products = await prisma.product.findMany({
    where: { categoryId: category.id },
  });

  return (
    <Container>
      <div className="flex gap-8">
        <div className="w-64">
          <Filters />
        </div>
        <div className="flex-1">
          <header className="flex justify-between items-center mb-6">
            <p>
              Selected Products:{" "}
              <b className="text-foreground">{products.length}</b>
            </p>
            <SortPopup />
          </header>
          <ProductList products={products} categorySlug={params.slug} />
        </div>
      </div>
    </Container>
  );
}
