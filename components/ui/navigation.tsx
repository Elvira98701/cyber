"use client";

import { cn } from "@/lib/utils";
import { INavItem } from "@/@types";
import Link from "next/link";

interface NavigationProps {
  className?: string;
  navList: INavItem[];
  variant?: "default" | "mobile";
  handleClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  className,
  navList,
  variant = "default",
  handleClick = () => {},
}) => {
  return (
    <nav className={className}>
      <ul
        className={cn(
          "flex",
          variant === "default"
            ? "gap-6 items-center justify-center lg:gap-12"
            : "flex-col gap-4"
        )}
      >
        {navList.map(({ id, name, link }) => (
          <li key={id}>
            <Link
              className="font-semibold capitalize text-nowrap text-zinc-600 hover:text-primary transition"
              href={link}
              onClick={variant === "mobile" ? handleClick : undefined}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
