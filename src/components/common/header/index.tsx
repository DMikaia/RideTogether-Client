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
import { LayoutDashboard, LogOut, Menu, Plus, Settings } from "lucide-react";
import { DropdownMenuShortcut } from "../dropdown-menu";

interface Props {
  user?: User;
}

import Link from "next/link";
import { Button } from "../button";
import Logo from "../logo";
import { RoomBox } from "@/components/room/box";
import { User } from "@/type/user";

export default function Header({ user }: Props) {
  return (
    <header className="w-full h-[70px] p-2 md:px-8 flex items-center justify-between bg-background-muted">
      <div className="w-fit h-fit flex gap-8 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-fit h-fit bg-transparent hover:bg-transparent focus:outline-none">
            <Menu
              size={32}
              className="p-1 grid items-center justify-center border-foreground border rounded-lg"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit bg-card" align="start">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="w-full h-full flex gap-0 items-center"
                href={"/dashboard"}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <RoomBox />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="w-full h-full flex gap-0 items-center"
                href={"/offer"}
              >
                <Plus className="mr-2 h-4 w-4" />
                <span>New offer</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Logo width={72} height={53} />
      </div>

      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-fit h-fit bg-transparent hover:bg-transparent rounded-full p-1">
            <Avatar>
              <AvatarImage
                width={16}
                height={16}
                src={user?.image}
                alt={user?.username}
              />
              <AvatarFallback className="text-sm">
                {user?.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-fit bg-card" align="end">
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
