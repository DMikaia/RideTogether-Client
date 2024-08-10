import Chat from "@/components/room/chat";
import { RoomProps } from "@/interfaces/room";
import { wait } from "@/libs/wait";
import { WebsocketProvider } from "@/providers/websocket";
import { getUser } from "@/services/user/get-user";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Room({ params }: RoomProps) {
  const user = await getUser();
  await wait(2000);

  return (
    <main className="flex flex-col h-screen w-full">
      <section className="p-4 flex w-full justify-between bg-primary text-primary-foreground">
        <Link
          href={"/dashboard"}
          className="flex gap-1 items-center justify-center"
        >
          <ArrowLeft size={16} className="stroke-primary-foreground" />
          <p>Retour</p>
        </Link>
        <h1 className="font-bold">{params.name}</h1>
      </section>

      <WebsocketProvider userId={user.id}>
        <Chat user={user} room={params.name} />
      </WebsocketProvider>
    </main>
  );
}
