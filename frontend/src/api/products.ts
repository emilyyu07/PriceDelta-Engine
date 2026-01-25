// product API calls
import { apiClient } from "./client";

export const productsApi = {
  getAll: async () => {
    const response = await apiClient.get("/products");
    return response.data;
  },
  getById: async (productId: string) => {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  },
};
