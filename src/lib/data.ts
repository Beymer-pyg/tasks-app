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

/* {
  $id: "4",
  $createdAt: "2024-04-06",
  title: "Actualizar la página de inicio",
  status: "done",
  image: {
    src: "ruta/de/imagen3.jpg",
    alt: "Actualización de la página de inicio",
  },
}, */
