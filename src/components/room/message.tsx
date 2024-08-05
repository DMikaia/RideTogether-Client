import { format } from "date-fns";
import { Message } from "@/type/message";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";

interface Props {
  message: Message;
}

export default function Content({ message }: Props) {
  const formattedDate = format(message.createdAt, "dd/MM/yyyy HH:mm");

  return (
    <section className="w-full p-4 flex gap-2 items-start">
      <Avatar>
        <AvatarImage
          width={48}
          height={48}
          src={message.sender.image}
          alt={message.sender.name}
        />
        <AvatarFallback>
          {message.sender.name
            .split(" ")
            .map((chunk) => chunk[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="w-fit">
        <div className="flex gap-2 items-center w-fit justify-center text-foreground">
          <h3 className="font-bold text-lg">{message.sender.username}</h3>
          <p className="font-light text-xs">{formattedDate}</p>
        </div>
        <p className="font-light">{message.content}</p>
      </div>
    </section>
  );
}