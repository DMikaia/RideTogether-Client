"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { join } from "@/services/offer/join";
import { Offer } from "@/type/offer";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewForm from "../review/form";

interface Props {
  offer: Offer;
  review: boolean;
  userId?: string;
}

export default function Item({ offer, review, userId }: Props) {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.refresh();
    }
  }, [router, redirect]);

  const findUser = (userId: string) => {
    return offer.participants.find((participant) => participant.id === userId);
  };

  const joinOffer = async (id: string) => {
    setLoading(true);
    const response = await join(id);

    if (response) {
      setRedirect(true);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex items-center justify-between pr-8">
        <div className="w-fit h-fit gap-2 flex items-center">
          <Link href={`/profile/${offer.owner.id}`}>
            <Avatar>
              <AvatarImage
                width={20}
                height={20}
                src={offer.owner.image}
                alt={offer.owner.name}
              />
              <AvatarFallback>
                {offer.owner.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </Link>

          <section className="w-fit h-fit flex flex-col gap-1">
            <h3 className="text-base">{offer.owner.name}</h3>
            <p className="text-xs text-muted-foreground">
              {format(offer.createdAt, "dd/MM/yyyy")}
            </p>
          </section>
        </div>

        {review ? (
          userId &&
          findUser(userId) &&
          offer.owner.id !== userId && (
            <ReviewForm
              className="w-fit h-fit text-xs text-primary"
              title="Noter"
              ownerId={offer.owner.id}
            />
          )
        ) : (
          <button
            onClick={() => {
              joinOffer(offer.id);
            }}
            disabled={loading}
            className={`w-fit h-fit text-xs text-primary`}
          >
            Rejoindre
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <p className="text-sm font-normal">
          {offer.departurePlace} à {offer.destinationPlace}, la voiture{" "}
          {offer.vehicle.toLocaleLowerCase()} partira le{" "}
          {format(offer.departureDate, "dd MMMM 'à' H'h'mm", { locale: fr })}{" "}
          avec {offer.seats - offer.taken} place(s) restante(s)
        </p>
        <Image
          className="w-auto h-auto bg-muted border-none rounded-lg"
          style={{
            aspectRatio: "auto",
          }}
          priority={true}
          src={offer.image}
          width={400}
          height={200}
          alt={offer.destinationPlace}
        />
      </div>
    </div>
  );
}
