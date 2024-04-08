import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "@/lib/actions";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;

  newTaskInput: string;
  newTaskType: TypedColumn;

  setNewTaskInput: (input: string) => void;
  setNewTaskType: (columnId: TypedColumn) => void;

  addTask: (todo: string, columnId: TypedColumn) => void;
  deleteTask: (taskIndex: number, todo: Todo, id: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  newTaskInput: "",
  newTaskType: "todo",
  getBoard: async () => {
    const board = await getTasksRequest();
    set({ board });
  },
  setBoardState: (board) => set({ board }),

  deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
    const newColumns = new Map(get().board.columns);

    // delete todoId from newColumns
    newColumns.get(id)?.todos.splice(taskIndex, 1);

    set({ board: { columns: newColumns } });

    await deleteTaskRequest(todo.$id);
  },

  updateTodoInDB: async (todo, columnId) => {
    await updateTaskRequest(todo, columnId);
  },

  setNewTaskInput: (input: string) => set({ newTaskInput: input }),
  setNewTaskType: (columnId: TypedColumn) => set({ newTaskType: columnId }),
  addTask: async (todo: string, columnId: TypedColumn) => {
    console.log("creando documento");
    const result = await createTaskRequest(todo, columnId);

    console.log("la base de datos responde", result);
    if (!result) {
      throw new Error("Failed to create task");
    }
    const { id, createdAt } = result;
    const $id = id;

    set({ newTaskInput: "" });

    set((state) => {
      const newColumns = new Map(state.board.columns);

      const newTodo: Todo = {
        $id,
        $createdAt: new Date().toISOString(),
        $updatedAt: createdAt.toISOString(),
        title: todo,
        status: columnId,
      };

      const column = newColumns.get(columnId);

      if (!column) {
        newColumns.set(columnId, {
          id: columnId,
          todos: [newTodo],
        });
      } else {
        newColumns.get(columnId)?.todos.push(newTodo);
      }

      return {
        board: { columns: newColumns },
      };
    });
  },
}));
