import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Toaster } from "@/components/common/toast/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ride Together",
    template: `%s - Ride Together`,
  },
  description: "The carpooling website you search for",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-fit w-full`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
