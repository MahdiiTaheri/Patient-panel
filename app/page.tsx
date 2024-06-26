import LoginForm from "@/components/LoginForm";
import bg from "@/public/pattern.png";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = { title: "ورود به پنل" };

function LoginPage() {
  return (
    <>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="background pattern"
        className="object-cover object-top -z-50 opacity-[3%]"
      />

      <main className="min-h-screen flex items-center flex-col justify-center gap-8">
        <div className="flex flex-col mb-6 items-center justify-center">
          <div className="relative w-20 h-20">
            <Image
              src={logo}
              quality={100}
              fill
              className="object-cover"
              alt="Logo"
            />
          </div>
          <h2 className="text-4xl p-1 font-bold text-hospital text-center">
            بیمارستان
          </h2>
          <p className="text-center text-lg text-zinc-800/80">مدیریت بیماران</p>
        </div>

        <LoginForm />

        <Link href="/forgot" className="text-center text-md hover:underline">
          ساخت حساب کاربری جدید
        </Link>
      </main>
    </>
  );
}

export default LoginPage;
