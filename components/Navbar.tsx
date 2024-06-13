import { User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import LogoutButton from "./LogoutButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Link from "next/link";
import SelectMenu from "./SelectMenu";

function Navbar() {
  return (
    <header className="w-full h-14 border-b-2 flex items-center" dir="ltr">
      <nav className="flex gap-7 ml-4 mt-2 py-2 px-2 w-full">
        <div className="px-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="ml-4">
              <DropdownMenuLabel className="text-center text-md">
                کاربر مهدی
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SelectMenu />
      </nav>
    </header>
  );
}

export default Navbar;
