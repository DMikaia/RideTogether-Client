import { getUser } from "@/services/user/get-user";
import Header from "@/components/common/header";
import OfferList from "@/components/dashboard/offer/list";
import RoomList from "@/components/room/summary";
import { wait } from "@/libs/wait";
import { getOffers } from "@/services/offer/get";
import { getRooms } from "@/services/room/get";

export default async function Main() {
  const user = await getUser();
  const offers = await getOffers();
  const rooms = await getRooms();
  await wait(2000);

  return (
    <main className="h-screen w-full flex flex-col">
      <Header user={user} rooms={rooms} />

      <div className="mx-auto w-full md:w-fit h-main py-4">
        <div className="w-full md:w-fit h-full flex flex-col md:flex-row justify-center items-start gap-4">
          <RoomList rooms={rooms} />
          <OfferList offers={offers} />
        </div>
      </div>
    </main>
  );
}
