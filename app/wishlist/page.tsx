import type { Metadata } from "next";
import { Container, WishlistWrapper } from "@/components/shared";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default function Wishlist() {
  return (
    <main className="pt-48 pb-28">
      <section className="min-h-[50vh]">
        <Container>
          <h1 className="text-2xl font-bold mb-10">Wishlist</h1>
          <WishlistWrapper />
        </Container>
      </section>
    </main>
  );
}
