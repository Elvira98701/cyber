import { WishlistWithItems } from "@/@types";

export type WishlistStateItem = {
  id: number;
  productId: number;
  name: string;
  images: string[];
  price: number;
  slug: string;
  categorySlug: string;
};

interface ReturnProps {
  wishlist: WishlistStateItem[];
}

export const getWishlistDetails = (data: WishlistWithItems): ReturnProps => {
  const wishlist = data.items.map((item) => ({
    id: item.id,
    productId: item.product.id,
    name: item.product.name,
    images: item.product.images,
    price: item.product.price,
    slug: item.product.slug,
    categorySlug: item.product.category.slug,
  }));

  return { wishlist };
};
