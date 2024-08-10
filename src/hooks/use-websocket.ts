import { WebsocketContext } from "@/contexts/websocket";
import { useContext } from "react";

export const useWebsocket = () => {
  return useContext(WebsocketContext);
};
