import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { Review } from "@/type/review";
import axios from "axios";

export const getReviews = async (userId: string) => {
  const config = await server();
  const url = `${config.serverUrl}/review/${userId}`;
  const token = await getSessionCookie();

  try {
    const response = await axios.get<
      ApiResponse<Review[]>,
      ApiResponse<Review[]>
    >(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return [] as Review[];
  } catch (error) {
    throw error;
  }
};
