// "use client";

import React, { use, useEffect } from "react";
import TodoCard from "./TodoCard";
import { CirclePlus } from "lucide-react";
import { DialogDemo } from "./DialogDemo";
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/helpers/StrictModeDroppable";
import { useBoardStore } from "@/store/BoardStore";

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
  const [setNewTaskType] = useBoardStore((state) => [state.setNewTaskType]);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-violet-100/50 rounded-xl dark:bg-violet-300"
        >
          {/* render droppable todos in the column */}
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm dark:bg-gray-900/70 ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-semibold text-xl dark:text-white/90">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {todos.length}
                  </span>
                </h2>
                <div className="space-y-2 mt-2 dark:bg-gray-400">
                  {todos.map((todo, index) => {
                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided) => (
                          <TodoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}

                  <div className="flex items-end justify-end p-3">
                    {/* <button
                      onClick={handleAddTodo}
                      className="text-green-500 hover:text-green-600"
                    >
                      <CirclePlus className="h-7 w-7" />
                    </button> */}

                    {/* <DialogDemo /> */}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
