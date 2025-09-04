import {
  AddCartItemPayload,
  CartWithItems,
  UpdateCartItemPayload,
} from "@/@types";

import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const getCart = async (): Promise<CartWithItems> => {
  return (await axiosInstance.get<CartWithItems>(`/${ApiRoutes.CART}`)).data;
};

export const addCartItem = async (
  values: AddCartItemPayload
): Promise<CartWithItems> => {
  return (await axiosInstance.post<CartWithItems>(`/${ApiRoutes.CART}`, values))
    .data;
};

export const updateItemQuantity = async (
  values: UpdateCartItemPayload
): Promise<CartWithItems> => {
  return (
    await axiosInstance.patch<CartWithItems>(`/${ApiRoutes.CART}`, values)
  ).data;
};

export const removeCartItem = async (
  cartItemId: number
): Promise<CartWithItems> => {
  return (
    await axiosInstance.delete<CartWithItems>(`/${ApiRoutes.CART}`, {
      data: { cartItemId },
    })
  ).data;
};
