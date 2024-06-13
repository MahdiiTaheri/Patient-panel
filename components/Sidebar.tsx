import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Pill, Settings, User } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full min-w-[100px] max-w-[300px] lg:w-[279px] lg:fixed right-0 top-0 px-4 flex-col bg-gray-200",
        className
      )}
    >
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3  mb-10">
          <Image src="/logo.png" height={60} width={60} alt="Logo" />
          <h1 className="text-xl font-extrabold text-hospital">
            پنل مدیریت بیماران
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          href="/dashboard/patients"
          label="لیست بیماران"
          iconSrc={<User />}
        />
        <SidebarItem
          href="/dashboard/drugs"
          label="لیست داروها"
          iconSrc={<Pill />}
        />
        <SidebarItem
          href="/dashboard/settings"
          label="تنظیمات"
          iconSrc={<Settings />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
