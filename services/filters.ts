import { ApiRoutes } from "./constants";
import { axiosInstance } from "./instance";

export const getFilters = async (categoryId: string) => {
  const { data } = await axiosInstance.get(ApiRoutes.FILTERS, {
    params: { categoryId },
  });

  return data;
};
