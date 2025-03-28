import { cn } from "@/lib/utils";

import { CategoryCard } from "./category-card";
import { getCategories } from "@/services/categories";
import { Container } from "../container";
import { Carousel } from "@/components/ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoriesSliderProps {
  className?: string;
}

export const CategoriesSlider: React.FC<CategoriesSliderProps> = async ({
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
                className="md:basis-1/2 lg:basis-1/5"
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
