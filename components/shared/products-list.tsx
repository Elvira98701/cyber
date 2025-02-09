import { Suspense } from "react";
import { ProductCard } from "./product-card";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
  categorySlug: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  categorySlug,
}) => {
  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            categorySlug={categorySlug}
            slug={product.slug}
            name={product.name}
            price={product.price}
            imageUrl={product.images[0]}
          />
        ))}
      </div>
    </Suspense>
  );
};
