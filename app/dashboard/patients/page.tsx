import AddButton from "@/components/AddButton";
import PatientTable from "@/components/PatientTable";

function PatientsPage() {
  return (
    <div className="flex flex-col">
      <AddButton />
      <PatientTable />
    </div>
  );
}

export default PatientsPage;
