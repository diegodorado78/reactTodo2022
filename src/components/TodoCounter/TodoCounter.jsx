import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  // const {} =React.useContext(TodoContext)
  return (
    <h2>
      {" "}
      Has completado {completedTodos} de {totalTodos} Tareas{" "}
    </h2>
  );
}

export { TodoCounter };
