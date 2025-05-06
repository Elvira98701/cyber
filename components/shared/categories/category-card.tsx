import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  link: string;
  image: string;
  title: string;
  className?: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({
  link,
  image,
  title,
  className,
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
          <CardContent className="flex aspect-square items-center justify-center flex-col py-6 gap-1">
            <Image
              src={image}
              width={150}
              height={150}
              alt={title}
              className="max-w-[150px] w-full h-auto"
            />
            <span className="text-sm sm:text-lg font-semibold">{title}</span>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
