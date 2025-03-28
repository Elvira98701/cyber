"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useShop } from "@/hooks";
import { Product, ProductSpec, Review } from "@prisma/client";
import { Container } from "../container";
import { Button } from "@/components/ui";
import {
  ImagesPresentation,
  ProductColors,
  ProductInfo,
  ProductMemories,
  ProductPrices,
  ProductSpecification,
} from "@/components/shared/product";

interface ProductProps {
  className?: string;
  product: (Product & { specs: ProductSpec[]; reviews: Review[] }) | null;
}

export const SingleProduct: React.FC<ProductProps> = ({
  className,
  product,
}) => {
  const { addCartItem, loading } = useShop();
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  if (!product) return <div>not found</div>;

  const colors = product.colors;
  const memories = product.memory;

  const handleChangeMemory = (index: number) => {
    setMemoryIndex(index);
  };

  const handleChangeColor = (index: number) => {
    setColorIndex(index);
  };

  const handleAddCart = async () => {
    try {
      await addCartItem({
        productId: product.id,
        quantity: 1,
        selectedColor: colors.length > 0 ? colors[colorIndex] : undefined,
        selectedMemory: memories.length > 0 ? memories[memoryIndex] : undefined,
      });

      toast.success(product.name + " added to cart");
    } catch (error) {
      toast.error("Couldn't add product to cart");
      console.error(error);
    }
  };

  return (
    <section className={cn("bg-background py-14", className)}>
      <Container className="flex flex-col md:flex-row gap-12">
        <ImagesPresentation images={product.images} className="flex-1" />
        <div className="flex-1">
          <h1 className="font-bold text-3xl md:text-4xl">{product.name}</h1>
          <ProductPrices
            price={product.price}
            discount={product.discount}
            className="my-4"
          />
          {colors.length > 0 && (
            <ProductColors
              colors={colors}
              colorValue={colors[colorIndex]}
              handleChangeColor={handleChangeColor}
            />
          )}
          {memories.length > 0 && (
            <ProductMemories
              memories={memories}
              className="mt-6"
              memoryValue={memories[memoryIndex]}
              handleChangeMemory={handleChangeMemory}
            />
          )}
          <ProductSpecification specs={product.specs} className="mt-6" />
          <p className="pt-6 mb-8">{product.description}</p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline" className="text-foreground">
              Add to Wishlist
            </Button>
            <Button size="lg" onClick={handleAddCart} loading={loading}>
              Add to Cart
            </Button>
          </div>
          <ProductInfo stock={product.stock} className="mt-8" />
        </div>
      </Container>
    </section>
  );
};
