import { server } from "@/config/server";
import { ApiResponse } from "@/type/api";
import axios from "axios";

export const register = async (data: {
  name: string;
  username: string;
  email: string;
  password: string;
}) => {
  const config = await server();
  const url = `${config.serverUrl}/register`;
  const json = JSON.stringify(data);

  try {
    const response = await axios.post<ApiResponse<null>, ApiResponse<null>>(
      url,
      json,
      {
        headers: {
          "Content-Type": "application/json",
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
