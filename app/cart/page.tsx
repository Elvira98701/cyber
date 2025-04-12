import type { Metadata } from "next";
import { ShoppingCart } from "@/components/shared";

export const metadata: Metadata = {
  title: "Cart",
};

export default function Cart() {
  return (
    <main className="pt-28 pb-12 md:pt-48 md:pb-28">
      <ShoppingCart />
    </main>
  );
}
