import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import axios from "axios";

export const postPicture = async (picture: string) => {
  const config = server();
  const url = `${config.serverUrl}/profile`;
  const json = JSON.stringify({ image: picture });
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

    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};
