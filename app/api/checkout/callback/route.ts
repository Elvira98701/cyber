import { prisma } from "@/prisma/prisma-client";
import { PaymentCallbackData } from "@/@types/yookassa";
import { OrderStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/send-email";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" });
    }

    const isSucceeded = body.object.status === "succeeded";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    // const items = JSON.parse(order.items as string);

    if (isSucceeded) {
      await sendEmail(
        order.email,
        "Cyber / Your order has been successfully placed",
        `<div>
          <h1>Thank you for your purchase! 🎉</h1>
          <p>Your order #${order.id} has been paid for.</p>
        </div>`
      );
    }
  } catch (error) {
    console.log("[Checkout Callback] Error:", error);
    return NextResponse.json({ error: "Server error" });
  }
}
