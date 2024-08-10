import { Offer } from "@/type/offer";
import { Review } from "@/type/review";
import { User } from "@/type/user";

export interface ProfileProps {
  params: {
    id: string;
  };
}

export interface LayoutProps {
  profile: User;
  offers: Offer[];
  reviews: Review[];
  userId: string;
}

export interface AboutProps {
  user: User;
  connectedId: string;
  reviews: Review[];
}

export interface OfferProps {
  offers: Offer[];
  userId: string;
}

export interface ReviewProps {
  reviews: Review[];
  userId: string;
}
