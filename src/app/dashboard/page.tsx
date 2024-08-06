import { getUser } from "@/services/user/get-user";

import Header from "@/components/common/header";
import OfferList from "@/components/main/offer/list";
import RoomList from "@/components/room/summary";
import { wait } from "@/libs/wait";

export default async function Main() {
  const user = await getUser();
  await wait(2000);

  return (
    <main className="h-screen w-full flex flex-col">
      <Header user={user} />

      <div className="mx-auto w-full md:w-fit h-main py-4">
        <div className="w-full md:w-fit h-full flex flex-col md:flex-row justify-center items-start gap-4">
          <RoomList />
          <OfferList />
        </div>
      </div>
    </main>
  );
}
