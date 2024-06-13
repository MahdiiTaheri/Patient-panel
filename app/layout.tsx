import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/FakeAuthContext";

const myFont = localFont({
  src: "../public/YekanBakh-VF.ttf",
});

export const metadata: Metadata = {
  title: "ادمین پنل بیماران",
  description: "A Admin Panel for Managing Patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body
        className={`bg-gradient-to-r from-gray-100 to-slate-100 ${myFont.className}`}
      >
        <AuthProvider>{children}</AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
