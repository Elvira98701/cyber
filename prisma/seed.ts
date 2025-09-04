import { hashSync } from "bcrypt";

import { categories, products, reviews, specsData } from "./constants";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        name: "Andrew",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        name: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
      {
        name: "Marina",
        email: "marina@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  const createdProducts = await prisma.product.findMany({
    where: {
      slug: { in: products.map((p) => p.slug) },
    },
    select: { id: true, slug: true },
  });

  const specsInsertData = specsData
    .map((spec) => {
      const product = createdProducts.find((p) => p.slug === spec.slug);

      if (!product) {
        console.error(`Product with slug ${spec.slug} not found`);
        return null;
      }

      return {
        productId: product.id,
        key: spec.key,
        value: spec.value,
      };
    })
    .filter(
      (spec): spec is { productId: number; key: string; value: string } =>
        spec !== null
    );

  await prisma.productSpec.createMany({
    data: specsInsertData,
  });

  await prisma.review.createMany({
    data: reviews,
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "111111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.createMany({
    data: [
      {
        cartId: 1,
        productId: 1,
        quantity: 2,
      },
    ],
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductSpec" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Review" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Wishlist" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "WishlistItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
