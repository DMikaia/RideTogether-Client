import { Review } from "@/type/review";
import { ReactNode } from "react";

export interface ActionProps {
  id: string;
}

export interface FormProps {
  title: string;
  ownerId?: string;
  reviewId?: string;
  className: string;
  children?: ReactNode;
}

export interface ItemProps {
  review: Review;
  userId: string;
}
