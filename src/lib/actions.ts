"use server";
import { db } from "@/db";

export async function getTasksRequest() {
  try {
    const todos = await db.todos.findMany();
    if (!todos) throw new Error("No data found");

    const columns = todos.reduce((acc, todo) => {
      if (!acc.get(todo.status)) {
        acc.set(todo.status, {
          id: todo.status,
          todos: [],
        });
      }
      // console.log(acc);
      acc.get(todo.status)!.todos.push({
        $id: todo.id,
        $createdAt: todo.createdAt.toISOString(),
        $updatedAt: todo.updatedAt.toISOString(),
        title: todo.title,
        status: todo.status,
      });
      return acc;
    }, new Map<TypedColumn, Column>());
    // console.log(columns);

    // if columns doesnt have inprogress, todo and done, add them with empty todos
    const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];

    for (const columnType of columnTypes) {
      if (!columns.get(columnType)) {
        columns.set(columnType, {
          id: columnType,
          todos: [],
        });
      }
    }
    // console.log(columns);
    // console.log("the colums entries is: ", columns.entries());
    const sortedColumns = new Map(
      // [...columns.entries()]
      Array.from(columns.entries()).sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );

    const board: Board = {
      columns: sortedColumns,
    };

    return board;
  } catch (error) {
    console.log("Database error - Failed to fetch data: ", error);
    console.error(error);
    // return {
    //   message: "Database error: Failed to fetch data",
    // };
  }
}

export async function getTaskRequest() {}

export const createTaskRequest = async (
  todo: string,
  columnId: TypedColumn
) => {
  try {
    const { id, createdAt } = await db.todos.create({
      data: {
        title: todo,
        status: columnId,
      },
    });
    // if (id === undefined) throw new Error("Failed to create data");

    return { id, createdAt };
  } catch (error) {
    console.log("Database error: Failed to create data");
  }
};

export const updateTaskRequest = async (todo: Todo, columnId: TypedColumn) => {
  try {
    await db.todos.update({
      where: {
        id: todo.$id,
      },
      data: {
        title: todo.title,
        status: columnId,
      },
    });
  } catch (error) {
    console.log("Database error: Failed to update data");
  }
};

export const deleteTaskRequest = async (id: string) => {};
