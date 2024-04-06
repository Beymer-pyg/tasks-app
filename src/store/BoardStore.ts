import { getTasksRequest, updateTaskRequest } from "@/lib/actions";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;

  newTaskInput: string;
  newTaskType: TypedColumn;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTasksRequest();
    set({ board });
  },
  setBoardState: (board) => set({ board }),

  updateTodoInDB: async (todo, columnId) => {
    await updateTaskRequest(todo, columnId);
  },
  newTaskInput: "",
  newTaskType: "todo",
}));
