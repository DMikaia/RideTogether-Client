import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Hero from "@/components/landing/hero";
import Offer from "@/components/landing/offer";
import QA from "@/components/landing/qa";
import Reason from "@/components/landing/reason";
import { wait } from "@/libs/wait";

export default async function LandingLayout() {
  await wait(2000);

  return (
    <main className="w-full relative overflow-y-auto h-fit flex flex-col bg-background">
      <Header />
      <Hero />
      <Reason />
      <Offer />
      <QA />
      <Footer />
    </main>
  );
}
