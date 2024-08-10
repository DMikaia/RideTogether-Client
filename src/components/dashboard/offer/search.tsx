import { SearchProps } from "@/interfaces/dashboard";
import { Search } from "lucide-react";

export default function SearchBar({ setValue }: SearchProps) {
  return (
    <form className="w-fit h-fit flex items-center border-b border-foreground pb-2 gap-4">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Rechercher..."
        className="focus:outline-none text-muted-foreground text-xs"
      />

      <Search size={16} />
    </form>
  );
}
