import Item from "@/components/offer";
import { OfferProps } from "@/interfaces/profile";

export default function OfferList({ offers, userId }: OfferProps) {
  return (
    <div className="w-full h-fit">
      {offers.length > 0 ? (
        <ul className="h-full w-full flex flex-col gap-8">
          {offers.map((offer, index) => (
            <Item key={index} offer={offer} review={true} userId={userId} />
          ))}
        </ul>
      ) : (
        <div className="h-[80px] w-full flex justify-center items-center text-xs text-muted-foreground">
          <p>Aucune offre publié pour l&#39;instant</p>
        </div>
      )}
    </div>
  );
}
