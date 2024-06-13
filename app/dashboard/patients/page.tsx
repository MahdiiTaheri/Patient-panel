"use client";

import AddButton, { formSchema } from "@/components/AddButton";
import PatientTable from "@/components/PatientTable";
import { useState } from "react";
import { z } from "zod";

export interface Patient {
  id: string;
  name: string;
  payment: string;
  status: string;
}

const patients: Patient[] = [
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

function PatientsPage() {
  const [patientsList, setPatientsList] = useState<Patient[]>(patients);
  const [open, setOpen] = useState(false);

  function handleSubmit(values: z.infer<typeof formSchema>) {
    if (!values.id || !values.name || !values.payment || !values.status) return;

    const newPatient: Patient = {
      id: String(values.id),
      name: values.name,
      payment: String(values.payment),
      status: values.status,
    };

    setPatientsList((curPatients) => [newPatient, ...curPatients]);
    setOpen(false);
  }

  return (
    <div className="flex flex-col">
      <AddButton onSubmit={handleSubmit} open={open} setOpen={setOpen} />
      <PatientTable patients={patientsList} />
    </div>
  );
}

export default PatientsPage;
