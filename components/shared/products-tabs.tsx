import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { ProductCard } from "./product-card";
import { prisma } from "@/prisma/prisma-client";

interface ProductsTabsProps {
  className?: string;
}

export const ProductsTabs: React.FC<ProductsTabsProps> = async ({
  className,
}) => {
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

  const shuffledProducts = products.sort(() => Math.random() - 0.5);

  return (
    <section className={cn("py-14 bg-muted", className)}>
      <h2 className="visually-hidden">Products</h2>
      <Container>
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid sm:w-[500px] grid-cols-3 mb-8">
            <TabsTrigger value="new">New Arrival</TabsTrigger>
            <TabsTrigger value="bestseller">Bestseller</TabsTrigger>
            <TabsTrigger value="featured">Featured Products</TabsTrigger>
          </TabsList>
          <TabsContent value="new">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {shuffledProducts.slice(0, 8).map((product) => (
                <ProductCard
                  key={product.id}
                  categorySlug={product.category.slug}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.images[0]}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="bestseller">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {shuffledProducts.slice(4, 12).map((product) => (
                <ProductCard
                  key={product.id}
                  categorySlug={product.category.slug}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.images[0]}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="featured">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {shuffledProducts.slice(-8).map((product) => (
                <ProductCard
                  key={product.id}
                  categorySlug={product.category.slug}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.images[0]}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};
