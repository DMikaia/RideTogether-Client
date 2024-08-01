"use client";

import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";
import { Socket, io } from "socket.io-client";

// Define the socket connection URL
const SOCKET_URL = "http://localhost:5000";

// Create the WebSocket context
export const WebsocketContext = createContext<Socket | null>(null);

interface WebsocketProviderProps {
  children: ReactNode;
  userId: string;
}

// Create the WebSocket provider component
export const WebsocketProvider = ({
  children,
  userId,
}: WebsocketProviderProps) => {
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

// Custom hook to use WebSocket context
export const useWebsocket = () => {
  return useContext(WebsocketContext);
};
