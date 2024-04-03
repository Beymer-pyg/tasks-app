import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModalStore } from "@/store/ModalStore";
import { CirclePlus } from "lucide-react";
import { RadioGroupDemo } from "./RadioGroupDemo";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";

export function DialogDemo() {
  // const [isOpen, closeModal] = useModalStore((state) => [
  //   state.isOpen,
  //   state.closeModal,
  // ]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <Button className="text-green-500 hover:text-green-600 bg-transparent hover:bg-transparent">
          <CirclePlus className="h-7 w-7" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg leading-6 pb-2">
            Add a Task
          </DialogTitle>
          <DialogDescription>
            Apunta y organiza tus tareas de forma sencilla y rápida.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <input
              id="name"
              placeholder="Ingresa la tarea aqui..."
              className="col-span-3 border border-gray-300 rounded-md outline-none p-2"
            />
          </div>

          <TaskTypeRadioGroup />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="px-5 py-2 disabled:bg-gray-100 disabled:text-gray-300 disabled:cursor-not-allowed"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
