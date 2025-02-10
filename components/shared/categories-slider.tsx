import { cn } from "@/lib/utils";
import { Carousel } from "../ui";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Container } from "./container";
import { CategoryCard } from "./category-card";
import { getCategories } from "@/services/categories";

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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
};
