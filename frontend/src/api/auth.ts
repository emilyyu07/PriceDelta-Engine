// authentication API calls
import { apiClient } from "./client";
import type { AuthCredentials, RegisterCredentials } from "../types"; // Import new types

export const authApi = {
  login: async (credentials: AuthCredentials) => {
    const res = await apiClient.post("/auth/login", credentials);
    return res.data; // {token,user}
  },
  register: async (userData: RegisterCredentials) => {
    const res = await apiClient.post("auth/register", userData);
    return res.data;
  },
};
