import Loading from "@/components/loading";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Se connecter",
  description: "Trouver tous les covoiturages près de chez vous",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
