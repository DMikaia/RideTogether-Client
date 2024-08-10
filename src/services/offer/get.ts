import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { Offer } from "@/type/offer";
import axios from "axios";

export const getOffers = async () => {
  const config = server();
  const url = `${config.serverUrl}/offer`;
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
