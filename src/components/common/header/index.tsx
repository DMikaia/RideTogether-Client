"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LogOut, Settings } from "lucide-react";
import { DropdownMenuShortcut } from "../dropdown-menu";

interface Props {
  user?: {
    name: string;
    image: string;
    username: string;
  };
}

import { Geo } from "next/font/google";
import Link from "next/link";
import { Button } from "../button";

const geo = Geo({ weight: "400", subsets: ["latin"] });

export default function Header({ user }: Props) {
  return (
    <header className="w-full h-fit p-4 md:px-8 flex items-center justify-between bg-background-muted">
      <h1 className={`${geo.className} text-xl`}>Ride Together</h1>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-fit h-fit bg-transparent hover:bg-transparent rounded-full p-1">
            <Avatar>
              <AvatarImage
                width={24}
                height={24}
                src={user?.image}
                alt={user?.username}
              />
              <AvatarFallback>
                {user?.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[118px] bg-card" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={"accent"} className="w-[128px] h-fit text-sm">
          <Link href={"/login"}>Se connecter</Link>
        </Button>
      )}
    </header>
  );
}
