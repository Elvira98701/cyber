import { WishlistWithItems } from "@/@types";
import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";

export const getWishlist = async (): Promise<WishlistWithItems> => {
  return (await axiosInstance.get<WishlistWithItems>(`/${ApiRoutes.WISHLIST}`))
    .data;
};

export const toggleWishlistItem = async (
  productId: number
): Promise<WishlistWithItems> => {
  return (
    await axiosInstance.post<WishlistWithItems>(`/${ApiRoutes.WISHLIST}`, {
      productId,
    })
  ).data;
};
