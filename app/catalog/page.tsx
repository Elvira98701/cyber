import type { Metadata } from "next";

import { Categories, Container } from "@/components/shared";
import { getCategories } from "@/services/categories";

export const metadata: Metadata = {
  title: "Catalog",
};

export default async function Catalog() {
  const categories = await getCategories();

  return (
    <Container>
      <Categories categories={categories} />
    </Container>
  );
}
