import { WebsocketContext } from "@/contexts/websocket";
import { ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface WebsocketProviderProps {
  children: ReactNode;
  userId: string;
}

export const WebsocketProvider = ({
  children,
  userId,
}: WebsocketProviderProps) => {
  // Change the url according to the server url you configured
  const SOCKET_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:5000";
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL, {
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
