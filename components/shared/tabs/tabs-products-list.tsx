"use client";

import type { FC } from "react";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { ProductCard } from "../product-card";
import { useShop } from "@/hooks";

type ProductProp = {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: string[];
  category: {
    slug: string;
  };
};

interface TabsListProps {
  products: ProductProp[];
  className?: string;
}

export const TabsProductsList: FC<TabsListProps> = ({
  products,
  className,
}) => {
  const { wishlist, fetchWishlist } = useShop();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <Tabs defaultValue="new" className={className}>
      <TabsList className="grid sm:w-[500px] grid-cols-3 mb-8">
        <TabsTrigger value="new">New Arrival</TabsTrigger>
        <TabsTrigger value="bestseller">Bestseller</TabsTrigger>
        <TabsTrigger value="featured">Featured Products</TabsTrigger>
      </TabsList>
      <TabsContent value="new">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              categorySlug={product.category.slug}
              slug={product.slug}
              name={product.name}
              price={product.price}
              imageUrl={product.images[0]}
              isFavorite={wishlist.some(
                (item) => item.productId === product.id
              )}
              contentClassName="min-h-[250px] sm:min-h-80"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="bestseller">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.slice(4, 12).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              categorySlug={product.category.slug}
              slug={product.slug}
              name={product.name}
              price={product.price}
              imageUrl={product.images[0]}
              isFavorite={wishlist.some(
                (item) => item.productId === product.id
              )}
              contentClassName="min-h-[250px] sm:min-h-80"
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="featured">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.slice(-8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              categorySlug={product.category.slug}
              slug={product.slug}
              name={product.name}
              price={product.price}
              imageUrl={product.images[0]}
              isFavorite={wishlist.some(
                (item) => item.productId === product.id
              )}
              contentClassName="min-h-[250px] sm:min-h-80"
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
