import Patients from "@/components/Patients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل بیماران",
};

function PatientsPage() {
  return <Patients />;
}

export default PatientsPage;
