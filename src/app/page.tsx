"use client";
import Column from "@/components/Column";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable as Droppable } from "@/helpers/StrictModeDroppable";
import { useBoardStore } from "@/store/BoardStore";
import { DialogDemo } from "@/components/DialogDemo";
import { DialogHookForm } from "@/components/DialogHookForm";

export default function Home() {
  const [board, getBoard, setBoardState, updateTodoInDB] = useBoardStore(
    (state) => [
      state.board,
      state.getBoard,
      state.setBoardState,
      state.updateTodoInDB,
    ]
  );
  // console.log(getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    // console.log(result);

    //check if user dragged card outside of the board
    if (!destination) return;

    //Handle column drag
    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      // console.log(entries);
      const [removed] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, removed);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    //needed as the indexes are store as number 0,1,2,etc. Instead of id's with dnd library
    const columns = Array.from(board.columns);
    // console.log(columns);
    const startColIndex = columns[Number(source.droppableId)];
    // console.log(startColIndex);
    const finishColIndex = columns[Number(destination.droppableId)];
    // console.log(finishColIndex);
    if (startColIndex === undefined && finishColIndex === undefined) {
      return;
    }

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };
    // console.log(startCol);
    const finishCol: Column = {
      id: finishColIndex[0],
      todos: finishColIndex[1].todos,
    };
    // console.log(finishCol);

    if (!startCol || !finishCol) return;
    if (source.index === destination.index && startCol === finishCol) return;

    const newTodos = startCol.todos;
    const [todoMoved] = newTodos.splice(source.index, 1);

    if (startCol.id === finishCol.id) {
      //same column task drag
      newTodos.splice(destination.index, 0, todoMoved);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      const newColumns = new Map(board.columns);
      newColumns.set(startCol.id, newCol);

      setBoardState({ ...board, columns: newColumns });
    } else {
      //dragging to another column
      const finishTodos = Array.from(finishCol.todos);
      finishTodos.splice(destination.index, 0, todoMoved);

      const newColumns = new Map(board.columns);

      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };

      newColumns.set(startCol.id, newCol);

      newColumns.set(finishCol.id, {
        id: finishCol.id,
        todos: finishTodos,
      });

      //update DB
      updateTodoInDB(todoMoved, finishCol.id);

      setBoardState({ ...board, columns: newColumns });
    }
  };

  return (
    <>
      <MaxWidthWrapper>
        <div className="font-bold text-3xl mb-4">
          {/* New Task <DialogDemo /> */}
          New Task <DialogHookForm />
        </div>
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
