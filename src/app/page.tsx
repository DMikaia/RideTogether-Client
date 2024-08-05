import LandingLayout from "@/components/landing/layout";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <LandingLayout />
    </Suspense>
  );
}
