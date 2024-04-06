interface Board {
  columns: Map<TypedColumn, Column>;
}

// propiedades Column

// tipando el todo
type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  title: string;
  status: TypedColumn;
}
