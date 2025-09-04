"use client";

import type { FC } from "react";
import { Suspense, useEffect } from "react";

import { Product } from "@prisma/client";

import { ProductCard } from "@/components/shared";
import { useShop } from "@/hooks";

interface ProductListProps {
  products: Product[];
  categorySlug: string;
}

export const ProductList: FC<ProductListProps> = ({
  products,
  categorySlug,
}) => {
  const { wishlist, fetchWishlist } = useShop();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            categorySlug={categorySlug}
            slug={product.slug}
            name={product.name}
            price={product.price}
            imageUrl={product.images[0]}
            isFavorite={wishlist.some((item) => item.productId === product.id)}
            contentClassName="min-h-[270px] sm:min-h-80"
          />
        ))}
      </div>
    </Suspense>
  );
};
