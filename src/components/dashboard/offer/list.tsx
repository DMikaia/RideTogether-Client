"use client";

import { ScrollArea, ScrollBar } from "@/components/common/scroll-area";
import Item from "@/components/offer";
import SearchBar from "./search";
import { useState } from "react";
import { OfferProps } from "@/interfaces/dashboard";

export default function OfferList({ offers }: OfferProps) {
  const [value, setValue] = useState<string>("");
  const filteredOffer = offers.filter(
    (offer) =>
      offer.departurePlace.startsWith(value) ||
      offer.destinationPlace.startsWith(value)
  );

  return (
    <section className="h-full w-full self-center md:self-auto max-w-[432px] md:w-[432px] flex flex-col gap-4">
      <div className="w-full h-fit flex justify-between items-center px-4">
        <h1>Offres</h1>

        <SearchBar setValue={setValue} />
      </div>

      {filteredOffer.length > 0 ? (
        <ScrollArea className="h-full w-full">
          <ul className="w-full h-fit flex flex-col gap-8 px-4 justify-center items-center">
            {filteredOffer.map((offer, index) => (
              <Item key={index} offer={offer} review={false} />
            ))}
          </ul>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      ) : (
        <div className="h-[100px] w-full flex justify-center items-center">
          {value.length > 0 ? (
            <p className="text-xs text-muted-foreground">
              Aucune offre trouvée
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Aucune offre à afficher
            </p>
          )}
        </div>
      )}
    </section>
  );
}
