import { server } from "@/config/server";
import { getSessionCookie } from "@/libs/cookie";
import { ApiResponse } from "@/type/api";
import { OfferPost } from "@/type/offer";
import axios from "axios";

export const postOffer = async (offer: OfferPost) => {
  const config = await server();
  const url = `${config.serverUrl}/offer`;
  const json = JSON.stringify(offer);
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
