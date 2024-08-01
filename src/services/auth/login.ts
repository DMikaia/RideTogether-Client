import { server } from "@/config/server";
import { setAuthCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { Login } from "@/type/login";
import axios from "axios";

export const login = async (session: string): Promise<boolean> => {
  const config = await server();
  const url = `${config.serverUrl}/login`;

  try {
    const response = await axios.post<ApiResponse<Login>, ApiResponse<Login>>(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      }
    );

    if (response.data.cookie && response.data.expiration) {
      await setAuthCookie(response.data.cookie, response.data.expiration);
      return true;
    } else {
      console.error("Invalid response data:", response.data);
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Axios error:",
        error.response?.status,
        error.response?.data
      );
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
};
