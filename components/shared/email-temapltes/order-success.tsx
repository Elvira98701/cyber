import { CartItem, Product } from "@prisma/client";
import type { FC } from "react";

interface OrderSuccessTemplateProps {
  orderId: number;
  items: (CartItem & { product: Product })[];
}

export const OrderSuccessTemplate: FC<OrderSuccessTemplateProps> = ({
  orderId,
  items,
}) => (
  <div>
    <h1>Thank you for your purchase! 🎉</h1>

    <p>Your order #{orderId} has been paid for. List of products:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.product.name} | {item.product.price} $ x {item.quantity} ={" "}
          {item.product.price * item.quantity} $
        </li>
      ))}
    </ul>
  </div>
);
