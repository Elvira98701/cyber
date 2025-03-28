import { useCartStore } from "@/store/cart";

export const useCart = () => {
  const cartState = useCartStore((state) => state);

  return cartState;
};
