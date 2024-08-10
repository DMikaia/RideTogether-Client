import Loading from "@/components/loading";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Création d'une offre",
  description: "Trouver tous les covoiturages près de chez vous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
