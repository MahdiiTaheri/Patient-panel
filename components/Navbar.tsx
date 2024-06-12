import { LogOut, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function Navbar() {
  return (
    <header className=" w-full h-14 border-b-2" dir="ltr">
      <nav className="flex flex-row flex-nowrap py-2 px-2">
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
                <Button
                  className="p-4 cursor-pointer hover:bg-destructive rounded-lg"
                  variant="destructive"
                >
                  خروج از حساب
                  <LogOut className="ml-2 w-6 h-6" />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
