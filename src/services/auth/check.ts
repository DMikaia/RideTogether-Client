import { server } from "@/config/server";
import { ApiResponse } from "@/type/api";
import axios from "axios";

export const checkEmail = async (email: string): Promise<boolean> => {
  const config = server();
  const url = `${config.serverUrl}/email`;
  const json = JSON.stringify({ email: email });

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
