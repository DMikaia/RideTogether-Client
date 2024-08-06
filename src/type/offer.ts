export type Offer = {
  user: {
    username: string;
    name: string;
    image: string;
  };
  date: string;
  description: string;
  image: string;
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
