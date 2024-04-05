export const todoData: Column[] = [
  {
    id: "todo",
    todos: [
      {
        $id: "1",
        $createdAt: "2024-04-03",
        title: "Ejemplo de tarea",
        status: "todo",
      },
      {
        $id: "2",
        $createdAt: "2024-04-04",
        title: "Completar informe mensual",
        status: "todo",
      },
    ],
  },
  {
    id: "inprogress",
    todos: [
      {
        $id: "3",
        $createdAt: "2024-04-05",
        title: "Reunión de equipo",
        status: "inprogress",
      },
    ],
  },
  {
    id: "done",
    todos: [
      {
        $id: "4",
        $createdAt: "2024-04-06",
        title: "Actualizar la página de inicio",
        status: "done",
      },
    ],
  },
];

const exampleData: Board = {
  columns: new Map([
    [
      "todo",
      {
        id: "todo",
        todos: [
          {
            $id: "1",
            $createdAt: "2023-11-21T12:00:00Z",
            title: "Comprar alimentos",
            status: "todo",
          },
          {
            $id: "2",
            $createdAt: "2023-11-20T09:30:00Z",
            title: "Llamar al médico",
            status: "todo",
          },
        ],
      },
    ],
    [
      "inprogress",
      {
        id: "inprogress",
        todos: [
          {
            $id: "3",
            $createdAt: "2023-11-19T15:00:00Z",
            title: "Escribir reporte",
            status: "inprogress",
          },
        ],
      },
    ],
    [
      "done",
      {
        id: "done",
        todos: [
          {
            $id: "4",
            $createdAt: "2023-11-18T18:00:00Z",
            title: "Enviar correo electrónico",
            status: "done",
          },
        ],
      },
    ],
  ]),
};
