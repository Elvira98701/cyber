import type { Metadata } from "next";
import { Checkout } from "@/components/shared";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <main className="pt-48 pb-28">
      <Checkout />
    </main>
  );
}
