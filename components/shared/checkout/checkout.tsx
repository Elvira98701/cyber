import type { FC } from "react";
import { Container } from "../container";

interface CheckoutProps {
  className?: string;
}

export const Checkout: FC<CheckoutProps> = ({ className }) => {
  return (
    <section className={className}>
      <Container className="min-h-[50vh]">
        <h1 className="text-4xl md:text-5xl font-thin pb-8 md:pb-10">
          Making an <span className="font-bold">Order</span>
        </h1>
      </Container>
    </section>
  );
};
