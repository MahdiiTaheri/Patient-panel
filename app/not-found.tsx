import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صفحه یافت نشد",
};

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-100 ">
      <div className="rounded-lg bg-white p-20 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-bold">404</h1>
        <p className="text-gray-600 mb-4 text-lg">
          متاسفانه صفحه مورد نظر پیدا نشد☹️
        </p>
        <Button className="bg-hospital p-6 mt-4 text-lg" asChild>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
