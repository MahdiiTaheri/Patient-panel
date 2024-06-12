"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/contexts/FakeAuthContext";

function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Button
      className="p-4 cursor-pointer hover:bg-destructive rounded-lg"
      variant="destructive"
      onClick={logout}
    >
      خروج از حساب
      <LogOut className="ml-2 w-6 h-6" />
    </Button>
  );
}

export default LogoutButton;
