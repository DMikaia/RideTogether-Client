export type Offer = {
  id: string;
  departurePlace: string;
  destinationPlace: string;
  createdAt: Date;
  departureDate: Date;
  image: string;
  vehicle: string;
  closed: boolean;
  owner: {
    id: string;
    image: string;
    name: string;
    username: string;
  };
  participants: {
    id: string;
  }[];
  seats: number;
  taken: number;
};

export type OfferPost = {
  room: string;
  departureDate: string;
  departurePlace: string;
  destinationPlace: string;
  vehicle: string;
  seats: number;
  image: string;
};
