import Link from "next/link";
import { Button } from "../common/button";
import { ScrollArea, ScrollBar } from "../common/scroll-area";
import { Room } from "@/type/room";

interface Props {
  rooms: Room[];
}

export default function RoomList({ rooms }: Props) {
  return (
    <>
      {rooms.length > 0 ? (
        <ScrollArea className="h-[88px] w-full py-1">
          <ul className="w-full h-fit  flex flex-col gap-2">
            {rooms.map((room, index) => (
              <Link key={index} href={`/room/${room.name}`}>
                <Button variant={"accent"} size={"sm"} className="w-full">
                  {room.name}
                </Button>
              </Link>
            ))}
          </ul>

          <ScrollBar orientation="vertical" />
        </ScrollArea>
      ) : (
        <div className="w-full h-[48px] flex justify-center items-center">
          <p className="text-xs text-muted-foreground">La liste est vide</p>
        </div>
      )}
    </>
  );
}
