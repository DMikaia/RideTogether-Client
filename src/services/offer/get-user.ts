import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { Offer } from "@/type/offer";
import axios from "axios";

export const getUserOffers = async (id: string) => {
  const config = await server();
  const url = `${config.serverUrl}/offer/${id}`;
  const token = await getSessionCookie();

  try {
    const response = await axios.get<
      ApiResponse<Offer[]>,
      ApiResponse<Offer[]>
    >(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return [] as Offer[];
  } catch (error) {
    throw error;
  }
};
