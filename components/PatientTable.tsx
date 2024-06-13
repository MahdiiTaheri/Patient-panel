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
import { Patient } from "./Patients";

interface PatientTableProps {
  patients: Patient[];
}

export default function PatientTable({ patients }: PatientTableProps) {
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
    <ScrollArea className="h-[770px] w-full p-4">
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
