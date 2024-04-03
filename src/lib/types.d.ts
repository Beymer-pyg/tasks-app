type SEO = {
  title: string;
  description: string;
  image: Image;
  noIndex: boolean;
};

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
  image?: Image;
}
