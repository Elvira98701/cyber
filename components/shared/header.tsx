import { cn } from "@/lib/utils";
import { Logo, Navigation } from "@/components/ui";
import {
  Container,
  MobileMenu,
  UserActions,
  SearchInput,
} from "@/components/shared";
import { navList } from "@/lib/constants";

interface HeaderProps {
  className?: string;
}

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
        <UserActions className="items-center justify-center gap-2 hidden md:flex" />
        <MobileMenu className="md:hidden" navList={navList} />
      </Container>
    </header>
  );
};
