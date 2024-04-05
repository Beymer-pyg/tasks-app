"use client";
import Column from "@/components/Column";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { exampleData, todoData } from "@/lib/data";
import React, { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/helpers/StrictModeDroppable";
import { useBoardStore } from "@/store/BoardStore";

export default function Home() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  console.log(getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

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
                {Array.from(board.columns.entries()).map(
                  ([id, column], index) => (
                    <Column
                      key={id}
                      id={id}
                      todos={column.todos}
                      index={index}
                    />
                  )
                )}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </MaxWidthWrapper>
    </>
  );
}
