"use client";

import { User } from "@/type/user";
import { useEffect, useState } from "react";
import Form from "./form";
import { useWebsocket } from "@/context/websocket";
import { Message } from "@/type/message";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";
import Content from "./message";
import { ScrollArea, ScrollBar } from "../common/scroll-area";

interface Props {
  user: User;
  room: string;
}

export default function Chat({ user, room }: Props) {
  const socket = useWebsocket();
  const [messages, addMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!socket) return;

    const handleConnect = () => {
      console.log("Connected to WebSocket");
      setIsConnected(true);
      socket.emit("join", { roomName: room, userId: user.id });
      socket.emit("messages", { roomName: room, userId: user.id });
    };

    const handleDisconnect = () => {
      setIsConnected(false);
    };

    const handleChat = (data: Message) => {
      console.log("Received chat message:", data);
      addMessages((prevMessages) => [...prevMessages, data]);
    };

    const handleMessages = (data: Message[]) => {
      addMessages(data);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("chat", handleChat);
    socket.on("messages", handleMessages);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("chat", handleChat);
      socket.off("messages", handleMessages);
    };
  }, [socket, room, user.id]);

  return (
    <div className="h-full overflow-hidden flex flex-col w-full relative">
      <ScrollArea className="w-full chat-height">
        <ul className="w-full h-full">
          {messages.map((message, index) => (
            <li key={index} className="w-full h-fit">
              <Content message={message} />
            </li>
          ))}
        </ul>

        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <Form user={user} roomName={room} />
    </div>
  );
}
