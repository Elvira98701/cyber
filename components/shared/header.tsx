import { INavItem } from "@/types";
import { Navigation, SearchInput } from "../ui";
import { Container } from "./container";
import { Logo } from "./logo";
import { Heart, Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const navList: INavItem[] = [
  { id: "1", name: "Home", link: "/" },
  { id: "2", name: "Catalog", link: "/catalog" },
  { id: "3", name: "Contact us", link: "/contact" },
];

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-20 w-full bg-background border-b shadow",
        className
      )}
    >
      <Container className="min-h-20 flex items-center justify-between gap-5 lg:gap-14">
        <Logo className="text-foreground" />
        <SearchInput />
        <Navigation navList={navList} className="hidden md:block" />
        <Button className="md:hidden" variant="secondary">
          <Menu />
        </Button>
        <div className="items-center justify-center gap-2 hidden md:flex">
          <Button variant="secondary" size="icon">
            <Heart size={24} />
          </Button>
          <Button variant="secondary" size="icon">
            <ShoppingCart size={24} />
          </Button>
          <Button variant="secondary" size="icon">
            <User size={24} />
          </Button>
        </div>
      </Container>
    </header>
  );
};
