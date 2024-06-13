import { Button } from "@/components/ui/button";
import Link from "next/link";

function ForgotPage() {
  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-10">
      <div className="rounded-lg bg-white p-20 text-center shadow-xl h-[2 00px] w-[400px]">
        <h3 className="mb-4 text-2xl font-bold">بازیابی ایمیل و رمز عبور</h3>
        <p className="text-gray-600 mb-4 text-lg">
          ایمیل: <span className="font-bold">mahdi@example.com</span>
        </p>
        <p className="text-gray-600 mb-4 text-lg">
          رمز ورود: <span className="font-bold">1234</span>
        </p>
        <Button className="bg-cyan-700 text-lg" size="lg">
          <Link href="/">بازگشت</Link>
        </Button>
      </div>
    </div>
  );
}

export default ForgotPage;
