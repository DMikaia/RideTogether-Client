import { Room } from "@/type/room";
import { User } from "@/type/user";

export interface HeaderProps {
  user?: User;
  rooms?: Room[];
}
