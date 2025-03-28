import { findOrCreateCart, updateCartTotalAmount } from "@/lib";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        items: {
          orderBy: { createdAt: "desc" },
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.error("[CART_GET] Server error", error);
    return NextResponse.json(
      { message: "Couldn't get the shopping cart" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity, selectedColor, selectedMemory } =
      await req.json();
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ message: "Товар не найден" }, { status: 404 });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productId,
        selectedColor,
        selectedMemory,
      },
    });

    if (existingItem) {
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productId,
          quantity,
          selectedColor,
          selectedMemory,
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.error("[CART_POST] Server error", error);
    return NextResponse.json(
      { message: "Не удалось добавить товар в корзину" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { cartItemId, quantity } = await req.json();
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findUnique({
      where: { id: cartItemId },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: "Товар в корзине не найден" },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.error("[CART_PATCH] Server error", error);
    return NextResponse.json(
      { message: "Не удалось обновить товар в корзине" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { cartItemId } = await req.json();
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findUnique({
      where: { id: cartItemId },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: "Товар в корзине не найден" },
        { status: 404 }
      );
    }

    await prisma.cartItem.delete({ where: { id: cartItemId } });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.error("[CART_DELETE] Server error", error);
    return NextResponse.json(
      { message: "Не удалось удалить товар из корзины" },
      { status: 500 }
    );
  }
}
