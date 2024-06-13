"use client";

import { toast } from "@/components/ui/use-toast";
import { usePathname, useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  user: {
    name: string;
    email: string;
    password: string;
  };
  setUser: Dispatch<
    SetStateAction<{ name: string; password: string; email: string }>
  >;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<ContextType>({} as ContextType);

const FAKE_USER = {
  name: "Mahdi",
  email: "mahdi@example.com",
  password: "1234",
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      setUser(FAKE_USER);
      setIsAuthenticated(true);
    } else
      toast({
        title: "خطا",
        description: "ایمیل یا رمز ورود اشتباه است لطفا دوباره تلاش کنید",
        variant: "destructive",
      });
  }

  function logout() {
    setUser({ name: "", email: "", password: "" });
    setIsAuthenticated(false);
    router.push("/");
  }

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard/patients");
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (
      (pathname.startsWith("/dashboard/patients") ||
        pathname.startsWith("/dashboard/drugs") ||
        pathname.startsWith("/dashboard/settings")) &&
      !isAuthenticated
    )
      router.push("/");
  }, [router, pathname, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("context was used outside of the provider");

  return context;
}

export { AuthProvider, useAuth };
