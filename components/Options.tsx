import { EllipsisVertical, Pencil, Send, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

function Options() {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger className="hover:bg-slate-200 rounded-xl w-10 h-10">
        <EllipsisVertical className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            className="flex items-center justify-center p-4 w-full cursor-pointer rounded-lg hover:bg-destructive "
            variant="ghost"
          >
            <Trash className="w-4 h-4 ml-2" />
            <p className="mt-0.5">حذف</p>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="flex items-center justify-center p-4 w-full cursor-pointer rounded-lg hover:bg-hospital"
            variant="ghost"
          >
            <Pencil className="w-4 h-4 ml-2" />
            <p className="mt-0.5">باز کردن فرم</p>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            className="flex items-center justify-center p-4 w-full cursor-pointer rounded-lg hover:bg-green-600"
            variant="ghost"
          >
            <Send className="w-4 h-4 ml-2" />
            <p className="mt-0.5">ارسال</p>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Options;
