"use client";

import { useEffect } from "react";
import type { FC } from "react";

import { usePathname, useRouter } from "next/navigation";

import { EmptyWishlist, Preloader, WishlistItems } from "@/components/shared";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui";
import { useShop } from "@/hooks";
import { cn } from "@/lib/utils";

interface WishlistModalProps {
  className?: string;
}

export const WishlistModal: FC<WishlistModalProps> = ({ className }) => {
  const { loadingWishlist, wishlist, fetchWishlist } = useShop();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const open = pathname === "/wishlist";

  return (
    <Dialog open={open} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-6 w-full max-w-screen-xl min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <DialogHeader>
          <DialogTitle>My wishlist</DialogTitle>
          <DialogDescription>
            My favorite products are stored here.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[450px] overflow-y-auto">
          {loadingWishlist ? (
            <Preloader className="flex justify-center h-full" />
          ) : wishlist.length > 0 ? (
            <WishlistItems wishlist={wishlist} />
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
