import { CardContent, Card } from "../ui/card";
import Image from "next/image";
import { ButtonLink } from "../ui";
import { Heart } from "lucide-react";

interface ProductCardProps {
  categorySlug: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  categorySlug,
  slug,
  name,
  price,
  imageUrl,
  className,
}) => {
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
            <button className="absolute top-0 right-0">
              <Heart size={22} />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
