import type { FC } from "react";

import Image from "next/image";

import { Container } from "@/components/shared";
import { ButtonLink } from "@/components/ui";
import { popularProducts } from "@/constants/constants";
import { cn } from "@/lib/utils";

interface PopularProductsProps {
  className?: string;
}

export const PopularProducts: FC<PopularProductsProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="visually-hidden">Popular products</h2>
      <Container className="flex flex-wrap">
        {popularProducts.map((product, index) => (
          <article
            className="w-full sm:w-1/2 lg:w-1/4"
            key={product.id}
            style={{
              backgroundColor: product.color,
              color: index === 3 ? "#fff" : "",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={360}
              className="w-full"
            />
            <div className="px-8 pt-4 pb-14">
              <h3>{product.name}</h3>
              <p className="py-4">{product.description}</p>
              <ButtonLink
                variant="outline"
                href={`/catalog`}
                className={cn(
                  index !== 3 && "text-foreground border-foreground"
                )}
              >
                Shop Now
              </ButtonLink>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
};
