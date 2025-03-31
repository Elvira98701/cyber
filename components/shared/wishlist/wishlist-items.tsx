import type { FC } from "react";
import { cn } from "@/lib/utils";
import { WishlistStateItem } from "@/lib/get-wishlist-details";
import { ProductCard } from "../product-card";

interface WishlistItemsProps {
  wishlist: WishlistStateItem[];
  className?: string;
}

export const WishlistItems: FC<WishlistItemsProps> = ({
  wishlist,
  className,
}) => {
  console.log(wishlist);
  return (
    <ul className={cn("grid grid-cols-4 gap-4", className)}>
      {wishlist.map((product) => (
        <li key={product.id}>
          <ProductCard
            id={product.productId}
            categorySlug={product.categorySlug}
            slug={product.slug}
            name={product.name}
            price={product.price}
            imageUrl={product.images[0]}
            isFavorite={wishlist.some(
              (item) => item.productId === product.productId
            )}
          />
        </li>
      ))}
    </ul>
  );
};
