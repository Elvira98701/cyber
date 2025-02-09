import { Categories } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Catalog() {
  const categories = await prisma.category.findMany();

  return (
    <>
      <Categories categories={categories} />
    </>
  );
}
