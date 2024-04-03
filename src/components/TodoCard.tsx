import { CircleMinus } from "lucide-react";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
};

function TodoCard({ todo, index, id }: Props) {
  return (
    <div className="bg-white rounded-md space-y-2 drop-shadow-md">
      <div className="flex justify-between items-center p-4">
        <p>{todo.title}</p>
        <button className="text-red-600 hover:text-red-400">
          <CircleMinus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
