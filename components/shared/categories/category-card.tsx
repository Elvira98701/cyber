import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  className?: string;
  link: string;
  image: string;
  title: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  className,
  link,
  image,
  title,
}) => {
  return (
    <div
      className={cn(
        "p-1 hover:-translate-y-1 transition duration-300 ease-in-out",
        className
      )}
    >
      <Link href={link}>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center flex-col p-6 gap-1 min-h-[200px]">
            <Image src={image} width={150} height={150} alt={title} />
            <span className="text-lg font-semibold">{title}</span>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
