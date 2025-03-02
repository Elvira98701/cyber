"use client";

import { InputHTMLAttributes, useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Input } from "@/components/ui";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<
    (Product & { category: { slug: string } })[]
  >([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.warn(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/60 z-30" />
      )}
      <div
        ref={ref}
        className={cn("relative w-full rounded-lg z-30", className)}
      >
        <Search
          className="absolute top-1/2 translate-y-[-50%] left-2 text-zinc-400"
          size={18}
        />
        <Input
          className="w-full pl-8 bg-background"
          type="search"
          placeholder="Search"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          {...props}
        />

        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-background rounded-lg p-1 sm:p-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                className="flex items-center gap-3 rounded-lg w-full px-2 sm:px-3 py-2 hover:bg-primary/90 hover:text-background transition-all"
                href={`/catalog/${product.category.slug}/${product.slug}`}
                onClick={onClickItem}
              >
                <Image
                  className="rounded-sm h-8 w-8 object-cover"
                  src={product.images[0]}
                  alt={product.name}
                  width={32}
                  height={32}
                />
                <span className="text-xs sm:text-sm lg:text-base">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
