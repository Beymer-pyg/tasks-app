type SEO = {
  title: string;
  description: string;
  image: Image;
  noIndex: boolean;
};

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
  title: string;
  status: TypedColumn;
}
