import React from "react";
import { CategoryCard } from "./category-card";
import { Category } from "@prisma/client";

interface CategoriesProps {
  className?: string;
  categories: Category[];
}

export const Categories: React.FC<CategoriesProps> = ({
  className,
  categories,
}) => {
  return (
    <section className={className}>
      <h1 className="text-4xl md:text-5xl font-thin pb-8 md:pb-10">
        Product <span className="font-bold">Catalog</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            link={`/catalog/${category.slug}`}
            image={category.image}
            title={category.name}
          />
        ))}
      </div>
    </section>
  );
};
