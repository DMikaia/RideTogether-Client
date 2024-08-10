import Header from "@/components/common/header";
import ProfileLayout from "@/components/profile/layout";
import { ProfileProps } from "@/interfaces/profile";
import { wait } from "@/libs/wait";
import { getUserOffers } from "@/services/offer/get-user";
import { getReviews } from "@/services/review/get";
import { getRooms } from "@/services/room/get";
import { getUser } from "@/services/user/get-user";
import { getUserProfile } from "@/services/user/get-user-profile";

export default async function Profile({ params }: ProfileProps) {
  const user = await getUser();
  const rooms = await getRooms();
  const profile = await getUserProfile(params.id);
  const offers = await getUserOffers(params.id);
  const reviews = await getReviews(params.id);
  await wait(2000);

  return (
    <main className="flex flex-col h-screen w-full overflow-hidden">
      <Header user={user} rooms={rooms} />
      <ProfileLayout
        userId={user.id}
        profile={profile}
        offers={offers}
        reviews={reviews}
      />
    </main>
  );
}
