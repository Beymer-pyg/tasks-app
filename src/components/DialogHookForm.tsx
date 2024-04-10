"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { CirclePlus } from "lucide-react";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import { useBoardStore } from "@/store/BoardStore";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
const formSchema = z.object({
  todoname: z
    .string()
    .min(5, {
      message: "El nombre debe tener al menos 5 caracteres.",
    })
    .max(100),
});

export function DialogHookForm() {
  const [addTask, newTaskInput, setNewTaskInput, newTaskType, setNewTaskType] =
    useBoardStore((state) => [
      state.addTask,
      state.newTaskInput,
      state.setNewTaskInput,
      state.newTaskType,
      state.setNewTaskType,
    ]);

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todoname: "",
    },
  });

  const myHandleSubmit = () => {
    wait().then(() => setOpen(false));

    if (!newTaskInput) return;

    addTask(newTaskInput, newTaskType);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <Button className="text-green-500 hover:text-green-600 bg-transparent hover:bg-transparent">
          <CirclePlus className="h-7 w-7" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] dark:bg-slate-900/70">
        <DialogHeader>
          <DialogTitle className="text-lg leading-6 pb-2">
            Agregar tarea
          </DialogTitle>
          <DialogDescription>
            Apunta y organiza tus tareas de forma sencilla y rápida. Hook-Form
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(myHandleSubmit)}>
            <FormField
              control={form.control}
              name="todoname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      id="name"
                      placeholder="Pasear al perro"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:bg-opacity-90 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-gray-900"
                      {...field}
                      value={newTaskInput}
                      onChange={(e) => {
                        setNewTaskInput(e.target.value);
                        field.onChange(e); //llamar a esto para que react-hook-form actualice su estado interno
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    Agrega el nombre de la tarea a realizar.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 py-4">
              <TaskTypeRadioGroup />
            </div>
            <DialogFooter>
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-md outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-800 disabled:scale-100 disabled:bg-opacity-60 dark:disabled:bg-gray-800 dark:disabled:text-gray-700"
                disabled={!newTaskInput}
              >
                Agregar tarea
              </button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
