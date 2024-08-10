import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import axios from "axios";

export const deleteReview = async (reviewId: string) => {
  const config = await server();
  const url = `${config.serverUrl}/review/${reviewId}`;
  const token = await getSessionCookie();

  try {
    const response = await axios.delete<ApiResponse<null>, ApiResponse<null>>(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};
