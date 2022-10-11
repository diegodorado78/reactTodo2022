import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  // const {} =React.useContext(TodoContext)
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter__loading"}`}>
      Has completado {completedTodos} de {totalTodos} Tareas
    </h2>
  );
}

export { TodoCounter };
