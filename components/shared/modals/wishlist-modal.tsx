"use client";

import { Dialog } from "@/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useShop } from "@/hooks";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type FC } from "react";
import { CartLoader } from "../cart/cart-loader";
import { WishlistItems } from "../wishlist-items";

interface WishlistModalProps {
  className?: string;
}

export const WishlistModal: FC<WishlistModalProps> = ({ className }) => {
  const { loading, wishlist, fetchWishlist } = useShop();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetchWishlist();
  }, []);

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
        {loading ? (
          <CartLoader className="flex justify-center h-full" />
        ) : wishlist.length > 0 ? (
          <WishlistItems wishlist={wishlist} />
        ) : (
          <div>empty</div>
        )}
      </DialogContent>
    </Dialog>
  );
};
