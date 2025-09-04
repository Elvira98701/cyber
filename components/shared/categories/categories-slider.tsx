import type { FC } from "react";

import { Container } from "@/components/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { getCategories } from "@/services/categories";

import { CategoryCard } from "./category-card";

interface CategoriesSliderProps {
  className?: string;
}

export const CategoriesSlider: FC<CategoriesSliderProps> = async ({
  className,
}) => {
  const categories = await getCategories();

  return (
    <section className={cn("py-20", className)}>
      <h2 className="visually-hidden">Categories</h2>
      <Container>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <CategoryCard
                  link={`/catalog/${category.slug}`}
                  image={category.image}
                  title={category.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 xl:-left-8 2xl:-left-12" />
          <CarouselNext className="right-1 xl:-right-8 2xl:-right-12" />
        </Carousel>
      </Container>
    </section>
  );
};
