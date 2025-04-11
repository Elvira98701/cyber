import { CartWithItems } from "@/@types";

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  images: string[];
  price: number;
  disabled?: boolean;
  selectedColor?: string | null;
  selectedMemory?: string | null;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartWithItems): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.product.name,
    images: item.product.images,
    price: item.product.price,
    disabled: false,
    selectedColor: item.selectedColor,
    selectedMemory: item.selectedMemory,
  }));

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
