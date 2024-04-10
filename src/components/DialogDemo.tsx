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
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import { useBoardStore } from "@/store/BoardStore";
import { FormEvent, useState } from "react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export function DialogDemo() {
  const [addTask, newTaskInput, setNewTaskInput, newTaskType, setNewTaskType] =
    useBoardStore((state) => [
      state.addTask,
      state.newTaskInput,
      state.setNewTaskInput,
      state.newTaskType,
      state.setNewTaskType,
    ]);

  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    wait().then(() => setOpen(false));

    if (!newTaskInput) return;

    addTask(newTaskInput, newTaskType);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-green-500 hover:text-green-600 bg-transparent hover:bg-transparent">
          <CirclePlus className="h-7 w-7" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-lg leading-6 pb-2">
            Agregar tarea
          </DialogTitle>
          <DialogDescription>
            Apunta y organiza tus tareas de forma sencilla y rápida.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <input
                type="text"
                id="name"
                value={newTaskInput}
                onChange={(e) => setNewTaskInput(e.target.value)}
                placeholder="Ingresa la tarea aqui..."
                className="col-span-3 border border-gray-300 rounded-md outline-none p-2"
              />
            </div>

            <TaskTypeRadioGroup />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="px-5 py-2 disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed"
              disabled={!newTaskInput}
            >
              Agregar tarea
            </Button>
            {/* <DialogClose asChild>
            <Button>Cerrar</Button>
          </DialogClose> */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
