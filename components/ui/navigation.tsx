import { INavItem } from "@/types";
import Link from "next/link";

interface NavigationProps {
  className?: string;
  navList: INavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({
  className,
  navList,
}) => {
  return (
    <nav className={className}>
      <ul className="flex items-center justify-center gap-6 lg:gap-12">
        {navList.map(({ id, name, link }) => (
          <li key={id}>
            <Link
              className="font-semibold capitalize text-nowrap text-zinc-600 hover:text-primary transition"
              href={link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
