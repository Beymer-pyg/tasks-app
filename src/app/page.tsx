"use client";
import Column from "@/components/Column";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { todoData } from "@/lib/data";
import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/helpers/StrictModeDroppable";

export default function Home() {
  const handleOnDragEnd = () => {
    console.log("drag end");
  };

  return (
    <>
      <MaxWidthWrapper>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="board" direction="horizontal" type="column">
            {(provided) => (
              <div
                className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todoData.map(({ id, todos }, index) => (
                  <Column key={id} id={id} todos={todos} index={index} />
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </MaxWidthWrapper>
    </>
  );
}
