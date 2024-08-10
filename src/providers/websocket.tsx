"use client";

import { server } from "@/config/server";
import { WebsocketContext } from "@/contexts/websocket";
import { WebsocketProviderProps } from "@/interfaces/websocket";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const WebsocketProvider = ({
  children,
  userId,
}: WebsocketProviderProps) => {
  // Change the url according to the server url you configured
  const config = server();
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(config.serverUrl, {
      query: { userId },
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [userId]);

  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  );
};
