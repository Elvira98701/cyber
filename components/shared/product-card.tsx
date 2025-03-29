"use client";

import type { FC } from "react";
import { CardContent, Card } from "../ui/card";
import Image from "next/image";
import { ButtonLink } from "../ui";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useShop } from "@/hooks";

interface ProductCardProps {
  id: number;
  categorySlug: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  isFavorite: boolean;
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  categorySlug,
  slug,
  name,
  price,
  imageUrl,
  isFavorite,
  className,
}) => {
  const { toggleWishlistItem } = useShop();

  const handleToggleWishlistItem = async (productId: number) => {
    try {
      await toggleWishlistItem(productId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={className}>
      <Card className="py-6 px-4 text-center">
        <CardContent className="flex flex-col items-center justify-between gap-4 relative min-h-96">
          <Image
            src={imageUrl}
            width={400}
            height={400}
            alt={name}
            className="p-4 bg-background rounded-lg object-contain"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="font-medium">{name}</h3>
            <span className="font-semibold text-2xl">${price}</span>
            <ButtonLink href={`/catalog/${categorySlug}/${slug}`}>
              Buy Now
            </ButtonLink>
            <button
              className="absolute top-0 right-0"
              onClick={() => handleToggleWishlistItem(id)}
            >
              <Heart
                size={22}
                className={cn("transition-colors", {
                  "fill-red-700 text-red-700": isFavorite,
                })}
              />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
