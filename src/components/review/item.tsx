import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import Action from "@/components/review/action";
import { Review } from "@/type/review";
import { format } from "date-fns";
import Link from "next/link";

import { FaStar } from "react-icons/fa";

interface Props {
  review: Review;
  userId: string;
}

export default function Item({ review, userId }: Props) {
  return (
    <section className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex gap-8 items-center">
        <div className="w-full h-fit flex gap-4 items-center">
          <Link
            href={`/profile/${review.reviewer.id}`}
            className="w-fit h-fit"
          >
            <Avatar className=" w-10 h-10 z-20">
              <AvatarImage
                width={24}
                height={24}
                src={review.reviewer.image}
                alt={review.reviewer.username}
              />
              <AvatarFallback className="text-sm">
                {review.reviewer.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </Link>

          <p className="font-semibold">{review.reviewer.name}</p>
        </div>

        {userId === review.reviewer.id && <Action id={review.id} />}
      </div>

      <div className="flex gap-4 items-center">
        <ul className="flex gap-1 items-center">
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              size={14}
              className={
                index + 1 <= review.stars
                  ? "text-yellow-300"
                  : "text-foreground"
              }
            />
          ))}
        </ul>

        <span className="text-xs text-muted-foreground">
          {format(review.createdAt, "dd/MM/yyyy")}
        </span>
      </div>

      <p>{review.text}</p>
    </section>
  );
}
