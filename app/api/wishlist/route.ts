import { NextRequest, NextResponse } from "next/server";

import { findOrCreateWishlist } from "@/lib";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("wishlistToken")?.value;

    if (!token) {
      return NextResponse.json({ items: [] });
    }

    const userWishlist = await prisma.wishlist.findFirst({
      where: { token },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                slug: true,
                price: true,
                category: { select: { slug: true } },
              },
            },
          },
        },
      },
    });

    return NextResponse.json(userWishlist);
  } catch (error) {
    console.error("[WISHLIST_GET] Server error", error);
    return NextResponse.json(
      { message: "Couldn't get the wishlist" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    let token = req.cookies.get("wishlistToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userWishlist = await findOrCreateWishlist(token);

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: userWishlist.id,
        productId,
      },
    });

    if (existingItem) {
      await prisma.wishlistItem.delete({
        where: { id: existingItem.id },
      });
    } else {
      await prisma.wishlistItem.create({
        data: {
          wishlistId: userWishlist.id,
          productId,
        },
      });
    }

    const updatedWishlist = await prisma.wishlist.findFirst({
      where: { token },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                images: true,
                slug: true,
                price: true,
                category: { select: { slug: true } },
              },
            },
          },
        },
      },
    });

    const resp = NextResponse.json(updatedWishlist);
    resp.cookies.set("wishlistToken", token);
    return resp;
  } catch (error) {
    console.error("[WISHLIST_POST] Server error", error);
    return NextResponse.json(
      { message: "Couldn't add product to favorites" },
      { status: 500 }
    );
  }
}
