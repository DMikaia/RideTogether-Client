import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { Room } from "@/type/room";
import axios from "axios";

export const getRooms = async () => {
  const config = server();
  const url = `${config.serverUrl}/room`;
  const token = await getSessionCookie();

  try {
    const response = await axios.get<ApiResponse<Room[]>, ApiResponse<Room[]>>(
      url,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    }

    return [] as Room[];
  } catch (error) {
    throw error;
  }
};
