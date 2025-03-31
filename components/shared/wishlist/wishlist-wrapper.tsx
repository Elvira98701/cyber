"use client";

import { useEffect } from "react";
import type { FC } from "react";
import { useShop } from "@/hooks";
import { Preloader } from "../preloader";
import { WishlistItems } from "./wishlist-items";
import { EmptyWishlist } from "./empty-wishlist";

export const WishlistWrapper: FC = () => {
  const { loadingWishlist, wishlist, fetchWishlist } = useShop();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  return (
    <>
      {loadingWishlist ? (
        <Preloader className="flex justify-center items-center h-full min-h-96" />
      ) : wishlist.length > 0 ? (
        <WishlistItems wishlist={wishlist} />
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};
