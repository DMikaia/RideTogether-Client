import { Offer } from "@/type/offer";

export interface OfferProps {
  offers: Offer[];
}

export interface SearchProps {
  setValue: (value: string) => void;
}
