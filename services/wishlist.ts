import { WishlistWithItems } from "@/types";
import { axiosInstance } from "./instance";

export const getWishlist = async (): Promise<WishlistWithItems> => {
  return (await axiosInstance.get<WishlistWithItems>("/wishlist")).data;
};

export const toggleWishItem = async (
  productId: number
): Promise<WishlistWithItems> => {
  return (
    await axiosInstance.post<WishlistWithItems>("/wishlist", {
      data: { productId },
    })
  ).data;
};
