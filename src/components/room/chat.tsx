"use client";

import { useEffect, useState } from "react";
import Form from "./form";
import { useWebsocket } from "@/hooks/use-websocket";
import { Message } from "@/type/message";
import { ScrollArea, ScrollBar } from "../common/scroll-area";
import Content from "./message";
import { ChatProps } from "@/interfaces/room";

export default function Chat({ user, room }: ChatProps) {
  const socket = useWebsocket();
  const [messages, addMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!socket) return;

    const handleConnect = () => {
      console.log("Connected to WebSocket");
      socket.emit("join", { roomName: room, userId: user.id });
      socket.emit("messages", { roomName: room, userId: user.id });
    };

    const handleChat = (data: Message) => {
      console.log("Received chat message:", data);
      addMessages((prevMessages) => [...prevMessages, data]);
    };

    const handleMessages = (data: Message[]) => {
      addMessages(data);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", () => {});
    socket.on("chat", handleChat);
    socket.on("messages", handleMessages);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", () => {});
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
