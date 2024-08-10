export type Review = Omit<ReviewPost, "recipient"> & {
  id: string;
  createdAt: Date;
  reviewer: {
    id: string;
    name: string;
    username: string;
    image: string;
  };
};

export type ReviewPost = {
  recipient: string;
  text: string;
  stars: number;
};

export type ReviewUpdate = Omit<ReviewPost, "recipient">;
