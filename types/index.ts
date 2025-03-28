import {
  Cart,
  CartItem,
  Product,
  Wishlist,
  WishlistItem,
} from "@prisma/client";

export interface INavItem {
  id: string;
  name: string;
  link: string;
}

export type CartWithItems = Cart & {
  items: (CartItem & { product: Product })[];
};

export interface AddCartItemPayload {
  productId: number;
  quantity?: number;
  selectedColor?: string;
  selectedMemory?: string;
}

export interface UpdateCartItemPayload {
  cartItemId: number;
  quantity: number;
}

export type WishlistWithItems = Wishlist & {
  items: WishlistItem & { product: Product };
};
