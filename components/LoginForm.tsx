"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useAuth } from "@/contexts/FakeAuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z
    .string({ invalid_type_error: "نام کاربری باید فقط شامل حروف باشد" })
    .min(3, {
      message: "نام کاربری باید حداقل 3 کاراکتر باشد",
    })
    .email("لطفا یک ایمیل معتبر وارد کنید"),
  password: z.string().min(4, {
    message: "رمز عبور باید حداقل 4 کاراکتر باشد",
  }),
});

export default function LoginForm() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email && values.password) login(values.email, values.password);
  }

  return (
    <Card className=" min-w-[350px] lg:w-[500px] bg-zinc-300">
      <CardHeader>
        <CardTitle className="font-semibold text-lg text-center">
          ورود به بخش بیماران
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@gmail.com"
                      className="text-lg"
                      dir="ltr"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="****"
                      {...field}
                      type="password"
                      className="text-lg"
                      dir="ltr"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-8 justify-between ">
              <Button className="text-lg bg-hospital" type="submit" size="lg">
                ورود
              </Button>

              <Button asChild variant="ghost" className="mt-1">
                <Link href="/forgot">رمز خود را فراموش کردید؟</Link>
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
