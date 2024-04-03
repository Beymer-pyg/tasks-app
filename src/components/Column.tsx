import React from "react";
import TodoCard from "./TodoCard";
import { CirclePlus } from "lucide-react";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const Column = ({ id, todos, index }: Props) => {
  return (
    <div className="p-2 rounded-2xl shadow-sm bg-violet-100/50">
      <h2 className="flex justify-between font-semibold text-xl">
        {idToColumnText[id]}
        <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
          5
        </span>
      </h2>
      <div>
        {todos.map((todo, index) => (
          <TodoCard key={todo.$id} todo={todo} index={index} id={id} />
        ))}

        <div className="flex items-end justify-end p-3">
          <button className="text-green-500 hover:text-green-600">
            <CirclePlus className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Column;
