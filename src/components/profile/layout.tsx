"use client";

import About from "./about";
import OfferList from "./offer";
import { ScrollArea } from "../common/scroll-area";
import { Offer } from "@/type/offer";
import { User } from "@/type/user";
import { useState } from "react";
import Reviews from "./reviews";
import { Review } from "@/type/review";

interface Props {
  profile: User;
  offers: Offer[];
  reviews: Review[];
  userId: string;
}

export default function ProfileLayout({
  userId,
  profile,
  offers,
  reviews,
}: Props) {
  const [section, setSection] = useState<string>("offer");

  return (
    <div className="w-full h-main md:px-40 px-4 py-4 flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">
      <About reviews={reviews} user={profile} connectedId={userId} />

      <div className="w-full md:w-1/2 h-list md:h-full flex flex-col gap-4">
        <nav className="w-full flex items-center gap-4 h-[33px] md:px-4">
          <span
            onClick={() => setSection("offer")}
            className={`text-lg text-foreground hover:cursor-pointer w-fit pb-1 duration-200 ease-linear hover:border-b hover:border-foreground hover:opacity-100 ${section === "offer" ? "border-b border-foreground opacity-100" : "border-b border-transparent opacity-50"}`}
          >
            Offres
          </span>
          <span
            onClick={() => setSection("review")}
            className={`text-lg text-foreground hover:cursor-pointer w-fit pb-1 duration-200 ease-linear hover:border-b hover:border-foreground hover:opacity-100 ${section !== "offer" ? "border-b border-foreground opacity-100" : "border-b border-transparent opacity-50"}`}
          >
            Notes et avis
          </span>
        </nav>

        <ScrollArea className="h-profile md:px-4">
          <div className="w-full h-fit">
            {section === "offer" ? (
              <OfferList userId={userId} offers={offers} />
            ) : (
              <Reviews userId={userId} reviews={reviews} />
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
