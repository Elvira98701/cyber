import { prisma } from "@/prisma/prisma-client";

export const findOrCreateWishlist = async (token: string) => {
  let userWishlist = await prisma.wishlist.findFirst({
    where: {
      token,
    },
  });

  if (!userWishlist) {
    userWishlist = await prisma.wishlist.create({
      data: {
        token,
      },
    });
  }

  return userWishlist;
};
