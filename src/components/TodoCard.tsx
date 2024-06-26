import { useBoardStore } from "@/store/BoardStore";
import { CircleMinus } from "lucide-react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) {
  const deleteTask = useBoardStore((state) => state.deleteTask);
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md dark:text-white dark:bg-gray-900/30 hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors duration-200 ease-in-out"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-4">
        <p>{todo.title}</p>
        <button
          onClick={() => deleteTask(index, todo, id)}
          className="text-red-600 hover:text-red-400"
        >
          <CircleMinus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
