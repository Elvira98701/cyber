import { Container } from "./container";
import Image from "next/image";
import { ButtonLink } from "../ui";
import { cn } from "@/lib/utils";

interface PopularProductsProps {
  className?: string;
}

interface IPopularProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

const popularProducts: IPopularProduct[] = [
  {
    id: "1",
    name: "Popular Products",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/1.png",
    color: "#FFFFFF",
  },
  {
    id: "2",
    name: "Ipad Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/2.png",
    color: "#F9F9F9",
  },
  {
    id: "3",
    name: "Samsung Galaxy ",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/3.png",
    color: "#EAEAEA",
  },
  {
    id: "4",
    name: "Macbook Pro",
    description:
      "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/cards/4.png",
    color: "#2C2C2C",
  },
];

export const PopularProducts: React.FC<PopularProductsProps> = async ({
  className,
}) => {
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
