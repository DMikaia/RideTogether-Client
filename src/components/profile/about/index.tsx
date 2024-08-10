"use client";

import { User } from "@/type/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { FaStar } from "react-icons/fa";
import { Review } from "@/type/review";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { uploadFile } from "@/services/firebase/upload";
import { postPicture } from "@/services/user/post-picture";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/common/toast/use-toast";
import { Input } from "@/components/common/form/input";

interface Props {
  user: User;
  connectedId: string;
  reviews: Review[];
}

export default function About({ user, connectedId, reviews }: Props) {
  const mean =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.stars, 0) / reviews.length
      : 0;

  const router = useRouter();
  const { toast } = useToast();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [picture, setPicture] = useState<FileList | null>(null);

  useEffect(() => {
    const uploadProfile = async (picture: FileList) => {
      const url = await uploadFile(picture[0], "profiles");

      if (url) {
        const response = await postPicture(url);

        setPicture(null);

        if (response) {
          toast({
            title: "L'image du profil a été modifiée",
            description: "Votre photo de profil a été modifiée",
          });
          setRefresh(true);
        } else {
          toast({
            variant: "destructive",
            title: "Erreur durant la publication",
            description:
              "Un problème est survenu lors de la publication de votre photo de profile",
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "Erreur durant la publication",
          description:
            "Un problème est survenu lors de la publication de votre photo de profile",
        });
      }
    };

    if (picture) {
      uploadProfile(picture);
    }

    if (refresh) {
      router.refresh();
    }
  }, [picture, router, refresh, toast]);

  return (
    <section className="flex flex-col gap-4 bg-card shadow-md rounded-lg p-4 md:w-[264px] md:h-fit w-full h-fit">
      <div className="w-fit h-fit flex gap-4 items-center justify-center">
        <div className="w-24 h-24 relative">
          <Avatar className="w-full h-full">
            <AvatarImage
              width={56}
              height={56}
              src={user.image}
              alt={user.username}
            />
            <AvatarFallback className="text-sm">
              {user?.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          {connectedId === user.id && (
            <div className="w-fit h-fit absolute bottom-0 right-0">
              <label
                htmlFor="profile"
                className="w-fit h-fit hover:cursor-pointer"
              >
                <div className="bg-card shadow-lg rounded-full p-2">
                  <Camera size={20} className="stroke-foreground" />
                </div>
              </label>
              <Input
                name="profile"
                onChange={(e) => setPicture(e.target.files)}
                id="profile"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
          )}
        </div>

        <div className="w-fit h-fit flex flex-col gap-2">
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        <ul className="flex gap-2 items-center">
          {[...Array(5)].map((star, index) => {
            const current = mean === 0 ? 5 : mean;

            return (
              <FaStar
                key={index}
                size={18}
                className={
                  index + 1 <= current ? "text-yellow-300" : "text-foreground"
                }
              />
            );
          })}
        </ul>
        <p>({reviews.length})</p>
      </div>
    </section>
  );
}
