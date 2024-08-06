import Header from "@/components/common/header";
import OfferForm from "@/components/offer/form";
import { getUser } from "@/services/user/get-user";

export default async function Offer() {
  const user = await getUser();

  return (
    <main className="h-screen w-full flex flex-col">
      <Header user={user} />

      <div className="m-auto w-full h-full md:w-fit md:h-fit">
        <OfferForm />
      </div>
    </main>
  );
}
