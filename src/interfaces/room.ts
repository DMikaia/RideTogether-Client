import { Message } from "@/type/message";
import { Room } from "@/type/room";
import { User } from "@/type/user";

export interface RoomProps {
  params: { name: string };
}

export interface ListProps {
  rooms: Room[];
}

export interface ChatProps {
  user: User;
  room: string;
}

export interface FormProps {
  user: User;
  roomName: string;
}

export interface MessageProps {
  message: Message;
}
