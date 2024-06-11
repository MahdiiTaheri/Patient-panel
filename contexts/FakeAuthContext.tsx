"use client";

import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
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
};

const AuthContext = createContext<ContextType>({} as ContextType);

const FAKE_USER = {
  name: "Mahdi",
  email: "mahdi@example.com",
  password: "1234",
};

function AuthProvider({ children }: { children: React.ReactNode }) {
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

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
    console.log(isAuthenticated);
  }, [isAuthenticated, router]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, login }}>
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
