import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { User } from "@/type/user";
import axios from "axios";

export const getUserProfile = async (id: string) => {
  const config = await server();
  const url = `${config.serverUrl}/user/${id}`;
  const token = await getSessionCookie();

  if (token === undefined) {
    throw new Error("Session token has expired.");
  }

  try {
    const response = await axios.get<ApiResponse<User>, ApiResponse<User>>(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token.value,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
