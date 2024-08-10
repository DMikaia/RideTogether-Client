"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { EllipsisVertical, PenLine, X } from "lucide-react";
import ReviewForm from "./form";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/common/dialog";
import { Button } from "../common/button";
import { deleteReview } from "@/services/review/delete";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../common/toast/use-toast";
import { ActionProps } from "@/interfaces/review";

export default function Action({ id }: ActionProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [refresh, setRefresh] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (refresh) {
      router.refresh();
    }
  }, [router, refresh]);

  const onDelete = async () => {
    setDisabled(true);
    const response = await deleteReview(id);

    if (response) {
      setRefresh(true);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur durant la suppression",
        description:
          "Un problème est survenu lors de la suppression de votre commentaire",
      });
      setDisabled(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <EllipsisVertical size={14} className="stroke-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background shadow-sm">
        <ReviewForm
          reviewId={id}
          title="Modifier"
          className="w-full flex items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent"
        >
          <PenLine size={12} className="stroke-foreground" />
        </ReviewForm>
        <Dialog>
          <DialogTrigger asChild>
            <button className="w-full flex items-center justify-between rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent">
              <span>Supprimer</span>{" "}
              <X size={12} className="stroke-foreground" />
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Êtes-vous absolument sûr ?</DialogTitle>
              <DialogDescription>
                Cette action ne peut être annulée. Elle supprimera
                définitivement votre commentaire.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button
                variant={"destructive"}
                onClick={onDelete}
                disabled={disabled}
              >
                Supprimer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
