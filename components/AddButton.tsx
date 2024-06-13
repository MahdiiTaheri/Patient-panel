import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Dispatch, SetStateAction } from "react";

const StatusTypeSchema = z.enum(["پرداخت نشده", "ترخیص شده", "بستری"], {
  message: "وضعیت بیمار باید بستری، ترخیص شده و یا پرداخت نشده باشد",
  required_error: "این فیلد باید پر شود",
});
export const formSchema = z.object({
  id: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number({ invalid_type_error: "آیدی باید عدد باشد" })
      .positive()
      .min(1, { message: "آیدی نباید خالی باشد" })
  ),
  name: z
    .string()
    .min(3, { message: "نام بیمار نباید کمتر از 3 حرف باشد" })
    .max(30),
  payment: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number({ invalid_type_error: "هزینه باید عدد باشد" }).positive().min(1)
  ),
  status: StatusTypeSchema,
});

interface AddButtonProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function AddButton({ onSubmit, open, setOpen }: AddButtonProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
      name: "",
      payment: 0,
      status: "بستری",
    },
  });

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="bg-cyan-700 text-gray-100 rounded-xl p-4 mx-6 mb-6">
          اضافه کردن بیمار جدید
        </DialogTrigger>
        <DialogContent>
          <Card className=" min-w-[350px] lg:w-full border-none">
            <DialogHeader>
              <CardTitle className="font-semibold text-lg text-center">
                مشخصات بیمار جدید
              </CardTitle>
            </DialogHeader>

            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
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
                            // type="number"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <div className="flex justify-between w-full">
                      <DialogClose asChild>
                        {/* <div className="flex gap-8 justify-between "> */}
                        <Button
                          className="text-lg "
                          variant="ghost"
                          type="submit"
                          size="lg"
                        >
                          بازگشت
                        </Button>
                        {/* </div> */}
                      </DialogClose>
                      <Button
                        className="text-lg bg-cyan-800"
                        type="submit"
                        size="lg"
                      >
                        ثبت
                      </Button>
                    </div>
                  </DialogFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddButton;
