import React from "react";

function EmptySearchedTodos(props) {
  return <h3>No existe un Todo para {props.searchValue}</h3>;
}

export { EmptySearchedTodos };
