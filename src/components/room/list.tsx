import Link from "next/link";
import { Button } from "../common/button";
import { ScrollArea, ScrollBar } from "../common/scroll-area";

export default function RoomList() {
  const rooms = [
    "Antsirabe - Faratsiho",
    "Ambositra - Itaosy",
    "Toliara - Mahajanga",
    "Ivato - Antsiranana",
  ];

  return (
    <ScrollArea className="h-[88px] w-full py-1">
      <ul className="w-full h-fit  flex flex-col gap-2">
        {rooms.map((room, index) => (
          <Link key={index} href={`room/${room}`}>
            <Button variant={"accent"} size={"sm"} className="w-full">
              {room}
            </Button>
          </Link>
        ))}
      </ul>

      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
