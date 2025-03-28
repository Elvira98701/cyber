"use client";

import { FC, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Container } from "../container";
import { CartSidebar } from "./cart-sidebar";
import { CartList } from "./cart-list";
import { ButtonLink } from "@/components/ui";
import { CartLoader } from "./cart-loader";
import { useShop } from "@/hooks/use-shop";

interface ShoppingCartProps {
  className?: string;
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ className }) => {
  const {
    totalAmount,
    items,
    loading,
    loadingItems,
    updateItemQuantity,
    fetchCartItems,
    removeCartItem,
  } = useShop();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleRemoveCartItem = async (id: number) => {
    try {
      await removeCartItem(id);
      toast.success("Product removed from cart");
    } catch (error) {
      toast.error("Couldn't remove product from cart");
      console.error(error);
    }
  };

  const handleUpdateItemQuantity = async (
    cartItemId: number,
    quantity: number
  ) => {
    try {
      await updateItemQuantity({ cartItemId, quantity });
      toast.success("Quantity updated");
    } catch (error) {
      toast.error("Couldn't updated product quantity");
      console.error(error);
    }
  };

  return (
    <section className={className}>
      <Container className="flex gap-12 min-h-[50vh]">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
          {loadingItems ? (
            <CartLoader className="flex justify-center items-center h-full" />
          ) : totalAmount > 0 ? (
            <CartList
              items={items}
              handleRemoveCartItem={handleRemoveCartItem}
              handleUpdateItemQuantity={handleUpdateItemQuantity}
              loading={loading}
            />
          ) : (
            <div className="flex justify-center items-center flex-col gap-4 py-20">
              <Image src="/images/cart.svg" width={75} height={86} alt="cart" />
              <h2>Your shopping cart is currently empty</h2>
              <p className="max-w-md text-center">
                Before you start placing an order, you should add some items to
                your shopping cart. You will find many interesting products on
                the Catalog page.
              </p>
              <ButtonLink href="/catalog" size="lg">
                Catalog
              </ButtonLink>
            </div>
          )}
        </div>

        {totalAmount > 0 && (
          <div className="max-w-sm w-full relative">
            <CartSidebar totalAmount={totalAmount} />
          </div>
        )}
      </Container>
    </section>
  );
};
