import Item from "@/components/review/item";
import { Review } from "@/type/review";

interface Props {
  reviews: Review[];
  userId: string;
}

export default function Reviews({ reviews, userId }: Props) {
  return (
    <div className="w-full h-fit">
      {reviews.length > 0 ? (
        <ul className="h-full w-full flex flex-col gap-4">
          {reviews.map((review, index) => (
            <li key={index} className="w-full h-full">
              <Item userId={userId} review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-[80px] w-full flex justify-center items-center text-xs text-muted-foreground">
          <p>Aucun avis pour l&#39;instant</p>
        </div>
      )}
    </div>
  );
}
