import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "./ui/scrollArea";
import { cn } from "@/lib/utils";
import Options from "./Options";

interface Patients {
  id: string;
  name: string;
  payment: string;
  status: string;
}

export const patients: Patients[] = [
  {
    id: "01",
    name: "علی علوی",
    payment: "1000000",
    status: "بستری",
  },
  {
    id: "02",
    name: "مریم مریمی",
    payment: "2000000",
    status: "ترخیص شده",
  },
  {
    id: "03",
    name: "رضا رضایی",
    payment: "1000000",
    status: "بستری",
  },
  {
    id: "04",
    name: "محمد محمدی",
    payment: "4000000",
    status: "بستری",
  },
  {
    id: "05",
    name: "علی رضایی",
    payment: "1000000",
    status: "ترخیص شده",
  },
  {
    id: "06",
    name: "محمد علوی",
    payment: "1000000",
    status: "ترخیص شده",
  },
  {
    id: "07",
    name: "کیانوش رضایی",
    payment: "1000000",
    status: "پرداخت نشده",
  },
  {
    id: "08",
    name: "مهدی مهدوی",
    payment: "15000000",
    status: "ترخیص شده",
  },
  {
    id: "09",
    name: "محمد مهدوی",
    payment: "10000",
    status: "ترخیص شده",
  },
  {
    id: "10",
    name: "رضا کیانی",
    payment: "1000000",
    status: "ترخیص شده",
  },
  {
    id: "11",
    name: "فرامز رضایی",
    payment: "1000000",
    status: "ترخیص شده",
  },
  {
    id: "12",
    name: "کیارش عیاری",
    payment: "1000000",
    status: "بستری",
  },
  {
    id: "13",
    name: "مهدی محمدی",
    payment: "4000000",
    status: "ترخیص شده",
  },
  {
    id: "14",
    name: "مهدی رضایی",
    payment: "1500000",
    status: "ترخیص شده",
  },
  {
    id: "15",
    name: "رضا تهرانی",
    payment: "1000000",
    status: "ترخیص شده",
  },
  {
    id: "16",
    name: "محمد همدانی",
    payment: "1300000",
    status: "بستری",
  },
];

export default function PatientTable() {
  const paymentSum = patients.reduce(
    (acc, { payment }) => acc + Number(payment),
    0
  );

  function formatPayment(payment: String) {
    const parts = payment.toString().split("");
    let formattedPayment = "";
    for (let i = 0; i < parts.length; i++) {
      if (i > 0 && (parts.length - i) % 3 === 0) {
        formattedPayment += ".";
      }
      formattedPayment += parts[i];
    }
    return formattedPayment + " تومان";
  }

  const formattedInvoices = patients.map((patient) => ({
    ...patient,
    payment: formatPayment(patient.payment),
  }));

  return (
    <ScrollArea className="h-[800px] w-full p-4">
      <Table className="overflow-hidden" dir="rtl">
        <TableCaption>لیست بیماران اخیر</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">آیدی</TableHead>
            <TableHead className="text-center w-[400px]">نام بیمار</TableHead>
            <TableHead className="text-center w-[110px]">وضعیت</TableHead>
            <TableHead className="text-center">هزینه</TableHead>
            <TableHead className="text-center w-[50px]">گزینه ها</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formattedInvoices.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell className="font-medium text-center">
                {patient.id}
              </TableCell>
              <TableCell className="text-center">{patient.name}</TableCell>
              <TableCell
                className={cn(
                  "text-center",
                  patient.status === "ترخیص شده"
                    ? "text-green-600"
                    : "text-blue-600",
                  patient.status === "پرداخت نشده" && "text-red-600"
                )}
              >
                {patient.status}
              </TableCell>
              <TableCell className="text-center w-[300px]">
                {patient.payment}
              </TableCell>
              <TableCell className="flex justify-center items-center w-[50px]">
                <Options />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>مجموع هزینه</TableCell>
            <TableCell className="text-center">
              {formatPayment(String(paymentSum))}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ScrollArea>
  );
}
