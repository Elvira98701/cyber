import type { Metadata } from "next";
import { Container } from "@/components/shared";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default function Wishlist() {
  return (
    <main>
      <section>
        <Container>
          <h1 className="text-2xl font-bold">Wishlist</h1>
          <p>Здесь будут сохранённые товары.</p>
        </Container>
      </section>
    </main>
  );
}
