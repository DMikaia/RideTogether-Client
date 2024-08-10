import { server } from "@/config/server";
import { getSessionCookie, clearAllCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import axios from "axios";

export const logout = async (): Promise<boolean> => {
  const config = server();
  const url = `${config.serverUrl}/logout`;
  const token = await getSessionCookie();

  try {
    const response = await axios.post<ApiResponse<null>, ApiResponse<null>>(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    if (response.status === 200) {
      await clearAllCookie();

      return true;
    }

    return false;
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
