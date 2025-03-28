import type { Metadata } from "next";
import { ShoppingCart } from "@/components/shared";

export const metadata: Metadata = {
  title: "Cart",
};

export default function Cart() {
  return (
    <main className="pt-48 pb-28">
      <ShoppingCart />
    </main>
  );
}
