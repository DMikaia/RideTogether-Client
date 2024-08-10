import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { ReviewUpdate } from "@/type/review";
import axios from "axios";

export const updateReview = async (reviewId: string, data: ReviewUpdate) => {
  const config = server();
  const url = `${config.serverUrl}/review/${reviewId}`;
  const json = JSON.stringify(data);
  const token = await getSessionCookie();

  try {
    const response = await axios.patch<ApiResponse<null>, ApiResponse<null>>(
      url,
      json,
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
