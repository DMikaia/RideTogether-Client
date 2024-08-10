"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/dialog";
import { Label } from "@/components/common/form/label";
import { Button } from "@/components/common/button";

import { Textarea } from "@/components/common/textarea";
import { ReactNode, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { postReview } from "@/services/review/post";
import { useRouter } from "next/navigation";
import { updateReview } from "@/services/review/update";
import { useToast } from "../common/toast/use-toast";

interface Props {
  title: string;
  ownerId?: string;
  reviewId?: string;
  className: string;
  children?: ReactNode;
}

export default function ReviewForm({
  title,
  ownerId,
  reviewId,
  className,
  children,
}: Props) {
  const router = useRouter();
  const { toast } = useToast();
  const [rating, setRating] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(true);

  useEffect(() => {
    if (refresh) {
      router.refresh();
    }
  }, [router, refresh]);

  const setState = (state: boolean) => {
    if (state) {
      setRating(1);
      setText("");
      setRefresh(true);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur durant la publication",
        description:
          "Un problème est survenu lors de la publication de votre commentaire",
      });
      setSubmit(false);
    }
  };

  const onSubmit = async () => {
    if (text) {
      setSubmit(true);

      if (reviewId) {
        const data = {
          text: text,
          stars: rating,
        };

        const response = await updateReview(reviewId, data);
        setState(response);
      } else if (ownerId) {
        const data = {
          recipient: ownerId,
          text: text,
          stars: rating,
        };

        const response = await postReview(data);
        setState(response);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className}>
          {title}

          {children}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Notes et avis</DialogTitle>
          <DialogDescription>
            Comment évaluez-vous l&#39;offre de covoiturage à laquelle vous
            avez participé ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex h-fit w-fit items-center gap-4">
            <Label htmlFor="name" className="text-left hidden">
              Notes
            </Label>
            <ul className="flex gap-1 items-center">
              {[...Array(5)].map((star, index) => {
                const current = index + 1;

                return (
                  <div
                    key={index}
                    className="w-fit h-fit"
                    onClick={() => {
                      if (!submit) setRating(current);
                    }}
                    onMouseEnter={() => {
                      if (!submit) setRating(current);
                    }}
                  >
                    <label className="hidden" htmlFor="rating">
                      Star
                    </label>

                    <input
                      type="radio"
                      name="rating"
                      value={current}
                      className="hidden"
                    />
                    <FaStar
                      key={index}
                      size={18}
                      className={
                        index + 1 <= rating
                          ? "text-yellow-300"
                          : "text-foreground"
                      }
                    />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Label htmlFor="username" className="text-left hidden">
              Avis
            </Label>
            <Textarea
              id="username"
              className="col-span-3 h-32 resize-none"
              placeholder="Ecrivez votre avis ici..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={onSubmit}
            disabled={submit}
            type="submit"
            className="w-full md:w-1/3"
          >
            Publier
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
