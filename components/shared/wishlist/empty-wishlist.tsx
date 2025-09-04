import type { FC } from "react";

import { Heart } from "lucide-react";

import { ButtonLink } from "@/components/ui";

export const EmptyWishlist: FC = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 py-20">
      <Heart size={50} className="text-red-700 fill-red-700" />
      <h2 className="font-bold">Your wishlist is currently empty</h2>
      <p className="max-w-md text-center">
        Before you start managing your wishlist, you should add some items to
        it. You will find many interesting products on the Catalog page.
      </p>
      <ButtonLink href="/catalog" size="lg">
        Catalog
      </ButtonLink>
    </div>
  );
};
