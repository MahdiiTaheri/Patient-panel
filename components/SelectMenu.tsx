import { Pill, Settings, User } from "lucide-react";
import { MobileNavbarItem } from "./MobileNavbarItem";

function SelectMenu() {
  return (
    <div className="lg:hidden flex justify-between items-center gap-2 ">
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
