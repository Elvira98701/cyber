"use client";

import type { FC } from "react";

import { Heart } from "lucide-react";
import Image from "next/image";

import { CardContent, Card, ButtonLink } from "@/components/ui";
import { useShop } from "@/hooks";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  categorySlug: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  isFavorite: boolean;
  className?: string;
  contentClassName?: string;
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
  contentClassName,
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
      <Card className="py-6 px-3 sm:p-6 text-center relative">
        <CardContent
          className={cn(
            "flex flex-col items-center justify-between gap-2 p-0",
            contentClassName
          )}
        >
          <Image
            src={imageUrl}
            width={400}
            height={400}
            alt={name}
            className="bg-background rounded-lg object-contain size-full max-w-48"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <h3 className="font-medium text-sm md:text-base">{name}</h3>
            <span className="font-semibold text-base sm:text-2xl">
              ${price}
            </span>
            <ButtonLink href={`/catalog/${categorySlug}/${slug}`}>
              Buy Now
            </ButtonLink>
            <button
              className="absolute top-4 right-4"
              onClick={() => handleToggleWishlistItem(id)}
              type="button"
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
