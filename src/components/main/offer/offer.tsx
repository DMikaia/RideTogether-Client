// import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { Offer } from "@/type/offer";
import Link from "next/link";

interface Props {
  offer: Offer;
}

export default function Item({ offer }: Props) {
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex items-center justify-between pr-8">
        <div className="w-fit h-fit gap-2 flex items-center">
          <Link href={`/profile/${offer.user.username}`}>
            <Avatar>
              <AvatarImage
                width={20}
                height={20}
                src={offer.user.image}
                alt={offer.user.name}
              />
              <AvatarFallback>
                {offer.user.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </Link>

          <section className="w-fit h-fit flex flex-col gap-1">
            <h3 className="text-base">{offer.user.name}</h3>
            <p className="text-xs text-muted-foreground">{offer.date}</p>
          </section>
        </div>

        <button className="w-fit h-fit text-xs text-primary">Rejoindre</button>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <p>{offer.description}</p>
        <div className="w-full h-[200px] bg-muted border-none rounded-lg"></div>
      </div>
    </div>
  );
}
