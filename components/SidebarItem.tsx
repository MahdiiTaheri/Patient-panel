"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

type Props = {
  label: string;
  iconSrc: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ href, iconSrc, label }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px] flex gap-3 text-lg"
      asChild
    >
      <Link href={href}>
        {iconSrc}
        {label}
      </Link>
    </Button>
  );
};
