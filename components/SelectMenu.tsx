"use client";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { SidebarItem } from "./SidebarItem";
import { Pill, Settings, User } from "lucide-react";
import { MobileNavbarItem } from "./MobileNavbarItem";

function SelectMenu() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleChange(value: string) {
    setValue(value);
  }

  return (
    <div className="lg:hidden flex justify-between items-center gap-2">
      <MobileNavbarItem
        href="/dashboard/patients"
        label="لیست بیماران"
        iconSrc={<User />}
      />
      <MobileNavbarItem
        href="/dashboard/drugs"
        label="لیست داروها"
        iconSrc={<Pill />}
      />
      <MobileNavbarItem
        href="/dashboard/settings"
        label="تنظیمات"
        iconSrc={<Settings />}
      />
    </div>
  );
}

export default SelectMenu;
