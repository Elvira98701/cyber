import { create } from "zustand";
import { AddCartItemPayload, UpdateCartItemPayload } from "@/types";
import { Api } from "@/services/api-client";
import { CartStateItem, getCartDetails } from "@/lib/get-cart-details";
import { getWishlistDetails } from "@/lib";
import { WishlistStateItem } from "@/lib/get-wishlist-details";

export interface ShopState {
  loading: boolean;
  loadingItems: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
  wishlist: WishlistStateItem[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (values: UpdateCartItemPayload) => Promise<void>;
  addCartItem: (values: AddCartItemPayload) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
  fetchWishlist: () => Promise<void>;
  toggleWishlistItem: (productId: number) => Promise<void>;
}

const initialState = {
  items: [],
  wishlist: [],
  error: false,
  loading: false,
  loadingItems: true,
  totalAmount: 0,
};

export const useShopStore = create<ShopState>((set) => ({
  ...initialState,

  fetchCartItems: async () => {
    try {
      set({ loadingItems: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loadingItems: false });
    }
  },

  updateItemQuantity: async (values: UpdateCartItemPayload) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set((state) => ({
        loading: true,
        error: false,
        items: state.items.map((item) =>
          item.id === id ? { ...item, disabled: true } : item
        ),
      }));
      const data = await Api.cart.removeCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set((state) => ({
        loading: false,
        items: state.items.map((item) => ({ ...item, disabled: false })),
      }));
    }
  },

  addCartItem: async (values: AddCartItemPayload) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  fetchWishlist: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.wishlist.getWishlist();
      set(getWishlistDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  toggleWishlistItem: async (productId: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.wishlist.toggleWishlistItem(productId);
      set(getWishlistDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
