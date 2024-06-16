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

import SelectMenu from "./SelectMenu";

function Navbar() {
  return (
    <header className="w-full h-14 border-b-2 flex items-center" dir="ltr">
      <nav className="flex gap-7 ml-4 mt-2 py-2 px-2 w-full overflow-x-auto">
        <div className=" flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full">
              <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
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
