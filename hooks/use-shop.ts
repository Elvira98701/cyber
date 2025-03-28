import { useShopStore } from "@/store/shop";

export const useShop = () => {
  const shopState = useShopStore((state) => state);

  return shopState;
};
