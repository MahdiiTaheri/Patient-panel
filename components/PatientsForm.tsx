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

const formSchema = z.object({
  id: z.string().min(1, { message: "آیدی نباید خالی باشد" }).max(4),
  name: z
    .string()
    .min(3, { message: "نام بیمار نباید کمتر از 3 حرف باشد" })
    .max(30),
  payment: z.number({ invalid_type_error: "لطفا عدد وارد کنید   " }),
  status: z.string(),
});

export default function PatientsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      payment: 0,
      status: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Card className=" min-w-[350px] lg:w-full border-none   ">
      <CardHeader>
        <CardTitle className="font-semibold text-lg text-center">
          مشخصات بیمار جدید
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel dir="">آیدی</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="17"
                      className="text-md"
                      dir="rtl"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام بیمار</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="علی علوی"
                      {...field}
                      className="text-md"
                      dir="rtl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وضعیت</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ترخیص شده"
                      {...field}
                      className="text-md"
                      dir="rtl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>هزینه</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10000 تومان"
                      {...field}
                      className="text-md"
                      dir="rtl"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-8 justify-between ">
              <Button className="text-lg bg-hospital" type="submit" size="lg">
                ثبت
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
