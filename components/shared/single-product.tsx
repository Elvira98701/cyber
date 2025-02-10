import { Product, ProductSpec, Review } from "@prisma/client";
import React from "react";
import { ImagesPresentation } from "./images-presentation";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { ProductSpecification } from "./product-specification";
import { Button } from "../ui";
import { BadgeCheck, Store, Truck } from "lucide-react";

interface ProductProps {
  className?: string;
  product: (Product & { specs: ProductSpec[]; reviews: Review[] }) | null;
}

export const SingleProduct: React.FC<ProductProps> = ({
  className,
  product,
}) => {
  if (!product) return <div>not found</div>;

  return (
    <section className={cn("bg-background py-14", className)}>
      <Container className="flex flex-col md:flex-row gap-12">
        <ImagesPresentation images={product.images} className="flex-1" />
        <div className="flex-1">
          <h1 className="font-bold text-4xl">{product.name}</h1>
          <div className="flex gap-3 my-4">
            <span className="font-medium text-2xl">${product.price}</span>
            {product.discount && (
              <del className="text-2xl text-zinc-400">${product.discount}</del>
            )}
          </div>
          {product.colors.length > 0 && (
            <div className="flex items-center gap-6">
              <span>Select color: </span>
              <div className="flex gap-1">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-8 h-8 rounded-full"
                  />
                ))}
              </div>
            </div>
          )}
          {product.memory.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {product.memory.map((mem) => (
                <span key={mem} className="py-4 px-6 border rounded-md">
                  {mem}
                </span>
              ))}
            </div>
          )}
          <ProductSpecification specs={product.specs} className="mt-6" />
          <p className="pt-6 mb-8">{product.description}</p>
          <div className="flex gap-4">
            <Button size="lg" variant="outline" className="text-foreground">
              Add to Wishlist
            </Button>
            <Button size="lg">Add to Cart</Button>
          </div>
          <div className="flex flex-wrap mt-8 gap-8">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
                <Truck size={24} />
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-zinc-500">Free Delivery</span>
                <span>1-2 day</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
                <Store size={24} />
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-zinc-500">In Stock</span>
                <span>{product.stock}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 bg-muted flex items-center justify-center rounded-md">
                <BadgeCheck size={24} />
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-zinc-500">Guaranteed</span>
                <span>1 year</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
