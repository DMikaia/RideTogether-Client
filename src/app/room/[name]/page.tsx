import Chat from "@/components/room/chat";
import { WebsocketProvider } from "@/context/websocket";
import { getUser } from "@/services/user/get-user";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: { name: string };
}

export default async function Room({ params }: Props) {
  const user = await getUser();

  return (
    <main className="flex flex-col h-screen w-full">
      <section className="p-4 flex w-full justify-between bg-primary text-primary-foreground">
        <Link
          href={"/main"}
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
