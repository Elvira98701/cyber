"use client";

import type { FC } from "react";
import { Suspense, useEffect } from "react";
import { ProductCard } from "./product-card";
import { Product } from "@prisma/client";
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
  }, []);

  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          />
        ))}
      </div>
    </Suspense>
  );
};
