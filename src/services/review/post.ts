import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { ReviewPost } from "@/type/review";
import axios from "axios";

export const postReview = async (review: ReviewPost) => {
  const config = server();
  const url = `${config.serverUrl}/review`;
  const json = JSON.stringify(review);
  const token = await getSessionCookie();

  try {
    const response = await axios.post<ApiResponse<null>, ApiResponse<null>>(
      url,
      json,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    if (response.status === 201) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};
