"use client";

import { ScrollArea, ScrollBar } from "@/components/common/scroll-area";
import Offer from "./offer";
import { offers } from "@/store/offert";
import SearchBar from "./search";
import { useState } from "react";

export default function OfferList() {
  const [value, setValue] = useState<string>("");
  const filteredOffer = offers.filter((offer) =>
    offer.description.includes(value)
  );

  return (
    <section className="h-full w-full self-center md:self-auto max-w-[432px] md:w-[432px] flex flex-col gap-4">
      <div className="w-full h-fit flex justify-between items-center px-4">
        <h1>Offres</h1>

        <SearchBar setValue={setValue} />
      </div>

      <ScrollArea className="h-full w-full">
        <ul className="w-full h-fit flex flex-col gap-8 px-4 justify-center items-center">
          {filteredOffer.map((offer, index) => (
            <Offer key={index} offer={offer} />
          ))}
        </ul>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </section>
  );
}
