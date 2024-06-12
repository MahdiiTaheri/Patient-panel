"use client";

import { redirect, useRouter } from "next/navigation";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) redirect("/");
  // }, [isAuthenticated, router]);

  // return isAuthenticated ? children : null;
  return children;
}

export default ProtectedRoute;
