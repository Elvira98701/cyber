"use server";

import { cookies } from "next/headers";
import { CheckoutFormValues } from "@/components/shared/checkout/checkout-form-schema";
import { createPayment } from "@/lib";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus, Prisma } from "@prisma/client";
import { getUserSession } from "@/lib/get-user-session";
import { hashSync } from "bcrypt";
import { sendEmail } from "@/lib/send-email";

export const createOrder = async (data: CheckoutFormValues) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("cartToken")?.value;

    if (!token) {
      throw new Error("Cart token not found");
    }

    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        user: true,
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    const order = await prisma.order.create({
      data: {
        token,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
        name: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: "Order payment #" + order.id,
    });

    if (!paymentData) {
      throw new Error("Payment data not found");
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await sendEmail(
      data.email,
      "Cyber / Pay for the order #" + order.id,
      `<div>
        <h1>Order #${order.id}</h1>
        <p>Pay for the order in the amount of <b>${order.totalAmount} $</b>. Follow <a href=${paymentUrl}>this link</a> to pay for the order.
        </p>
      </div>`
    );

    return paymentUrl;
  } catch (error) {
    console.log("[CreateOrder] Server error", error);
  }
};

export const updateUserInfo = async (body: Prisma.UserUpdateInput) => {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("The user was not found");
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        name: body.name,
        email: body.email,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser?.password,
      },
    });
  } catch (error) {
    console.log("Error [CREATE_USER]", error);
    throw error;
  }
};

export const registerUser = async (body: Prisma.UserCreateInput) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Email has not been confirmed");
      }

      throw new Error("The user already exists");
    }

    const createdUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      "Cyber / 📝 Confirmation of registration",
      `<div>
        <h2>Confirmation code: ${code}</h2>
        <p>
        <a href=${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/verify?code=${code}>
          Confirm registration
        </a>
        </p>
      </div>`
    );
  } catch (error) {
    console.log("Error [CREATE_USER]", error);
    throw error;
  }
};
