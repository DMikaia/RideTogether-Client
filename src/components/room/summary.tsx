import { Button } from "@/components/common/button";
import RoomList from "./list";
import Link from "next/link";
import { ListProps } from "@/interfaces/room";

export default function RoomSummary({ rooms }: ListProps) {
  return (
    <div className="h-fit flex-col gap-2 rounded-lg p-2 hidden md:flex md:w-[256px] shadow-sm bg-card">
      <Link href={"/offer"} className="w-full h-fit">
        <Button className="w-full">Créer une offre</Button>
      </Link>

      <section className="w-full h-fit flex flex-col gap-2">
        <div className="flex gap-2 w-full items-center">
          <hr className="border-foreground border w-full" />
          <h1 className="w-fit text-center text-xs font-normal">Groupes</h1>
          <hr className="border-foreground border w-full" />
        </div>

        <RoomList rooms={rooms} />
      </section>
    </div>
  );
}
