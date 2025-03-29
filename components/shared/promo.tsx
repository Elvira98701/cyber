import type { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { ButtonLink } from "../ui";

interface PromoProps {
  className?: string;
}

export const Promo: FC<PromoProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "bg-[url(/images/promo.jpg)] bg-no-repeat bg-center bg-cover",
        className
      )}
    >
      <Container className="min-h-96 md:min-h-[448px] flex items-center justify-center text-center">
        <div>
          <h2 className="font-thin text-background text-5xl md:text-7xl">
            Big Summer <span className="font-bold">Sale</span>
          </h2>
          <p className="mt-2 mb-4">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
          <ButtonLink href="/catalog" variant="outline" size="lg">
            Shop Now
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};
