import { Button } from "../common/button";
import { Input } from "../common/form/input";
import { useState } from "react";
import { useWebsocket } from "@/hooks/use-websocket"; // Adjust the import path as needed
import { Send } from "lucide-react";
import { FormProps } from "@/interfaces/room";

export default function Form({ user, roomName }: FormProps) {
  const [value, setValue] = useState<string>("");
  const socket = useWebsocket();

  const onSend = (event: React.FormEvent) => {
    event.preventDefault();
    if (value.length > 0) {
      if (socket) {
        socket.emit("chat", {
          content: value,
          room: roomName,
          sender: {
            id: user.id,
          },
        });
        setValue("");
      }
    }
  };

  return (
    <form
      onSubmit={onSend}
      className="flex gap-2 py-4 items-center justify-center h-fit bg-muted w-full"
    >
      <Input
        name="message"
        type="text"
        className="w-[256px]"
        value={value}
        placeholder="Ecrivez votre message ici..."
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" disabled={value.length > 0 ? false : true}>
        <Send className="stroke-primary-foreground" size={18} />
      </Button>
    </form>
  );
}
