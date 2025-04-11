import React, { FC } from "react";

interface PayOrderTemplateProps {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: FC<PayOrderTemplateProps> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      Pay for the order in the amount of <b>{totalAmount} $</b>. Follow{" "}
      <a href={paymentUrl}>this link</a> to pay for the order.
    </p>
  </div>
);
