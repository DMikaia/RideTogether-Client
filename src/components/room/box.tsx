import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { UsersRound } from "lucide-react";
import RoomList from "./list";

export function RoomBox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:cursor-pointer hover:bg-accent focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <UsersRound className="mr-2 h-4 w-4" />
          <span>Mes groupes</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mes groupes</DialogTitle>
        </DialogHeader>
        <RoomList />
      </DialogContent>
    </Dialog>
  );
}
