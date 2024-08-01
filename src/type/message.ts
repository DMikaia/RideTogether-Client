export interface Message {
  createdAt: Date;
  content: string;
  sender: {
    id: string;
    name: string;
    username: string;
    image: string;
  };
}
