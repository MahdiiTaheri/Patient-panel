import DrugsTable from "@/components/DrugsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل داروها",
};

export interface Drug {
  id: string;
  name: string;
}

const drugs: Drug[] = [
  {
    id: "01",
    name: "آپروتینین",
  },
  {
    id: "02",
    name: "آتراکوریوم",
  },
  {
    id: "03",
    name: "آتروپین",
  },
  {
    id: "04",
    name: "آتورواستاتین",
  },
  {
    id: "05",
    name: "آتنولول",
  },
  {
    id: "06",
    name: "آزاتیوپرین",
  },
  {
    id: "07",
    name: "آزیترومایسین",
  },
  {
    id: "08",
    name: "آسیکلوویر",
  },
  {
    id: "09",
    name: "آستمیزول",
  },
  {
    id: "10",
    name: "آکاربوز",
  },
  {
    id: "11",
    name: "آکسار",
  },
  {
    id: "12",
    name: "آمودیاکین",
  },
  {
    id: "13",
    name: "آلبندازول",
  },
];

function DrugsPage() {
  return <DrugsTable drugs={drugs} />;
}

export default DrugsPage;
