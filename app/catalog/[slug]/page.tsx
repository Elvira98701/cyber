import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Container,
  Filters,
  ProductList,
  SortPopup,
} from "@/components/shared";
import { GetSearchParams } from "@/lib/find-products";
import { getCategoryWithProducts } from "@/lib";

export const metadata: Metadata = {
  title: "Products",
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: GetSearchParams;
}) {
  const data = await getCategoryWithProducts(params.slug, searchParams);

  if (!data) {
    return notFound();
  }

  const { category, products } = data;

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
