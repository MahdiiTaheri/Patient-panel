import { ScrollArea } from "./ui/scrollArea";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Options from "./Options";
import { Drug } from "@/app/dashboard/drugs/page";

interface DrugsTableProps {
  drugs: Drug[];
}

function DrugsTable({ drugs }: DrugsTableProps) {
  return (
    <ScrollArea className="h-[800px] w-full p-4">
      <Table className="overflow-hidden" dir="rtl">
        <TableCaption>لیست داروها</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">آیدی</TableHead>
            <TableHead className="text-center w-[400px]">نام دارو</TableHead>

            <TableHead className="text-center w-[50px]">گزینه ها</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drugs.map((drug) => (
            <TableRow key={drug.id}>
              <TableCell className="font-medium text-center">
                {drug.id}
              </TableCell>
              <TableCell className="text-center">{drug.name}</TableCell>
              <TableCell className="text-center">
                <Options />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}

export default DrugsTable;
