import PatientsForm from "./PatientsForm";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AddButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-cyan-700 text-gray-100 rounded-xl p-4 mx-6 mb-6">
          اضافه کردن بیمار جدید
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <PatientsForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddButton;
