import {
  AddCartItemPayload,
  CartWithItems,
  UpdateCartItemPayload,
} from "@/@types";
import { axiosInstance } from "./instance";

export const getCart = async (): Promise<CartWithItems> => {
  return (await axiosInstance.get<CartWithItems>("/cart")).data;
};

export const addCartItem = async (
  values: AddCartItemPayload
): Promise<CartWithItems> => {
  return (await axiosInstance.post<CartWithItems>("/cart", values)).data;
};

export const updateItemQuantity = async (
  values: UpdateCartItemPayload
): Promise<CartWithItems> => {
  return (await axiosInstance.patch<CartWithItems>("/cart", values)).data;
};

export const removeCartItem = async (
  cartItemId: number
): Promise<CartWithItems> => {
  return (
    await axiosInstance.delete<CartWithItems>("/cart", { data: { cartItemId } })
  ).data;
};
