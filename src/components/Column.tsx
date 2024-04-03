import React from "react";
import TodoCard from "./TodoCard";

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
    <div className="p-2 rounded-2xl shadow-sm bg-white/5">
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
      </div>
    </div>
  );
};

export default Column;
