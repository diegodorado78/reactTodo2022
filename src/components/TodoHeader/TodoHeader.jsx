import React from "react";

function TodoHeader({ children, loading }) {
  //como segundo arg pasamos un objeto con las props que queremos tenga nuestro clon
  //pone los children en un array que el clone entiende
  return (
    // retornamos el clon de la prop children con la modificacion
    <header>
      {//vamos a crear un clon de los hijos de todoHeader
      //por cada elemento del array vamos a llamar el clone
      React.Children.toArray(children).map((child) =>
        //asi no pase la prop al search el la toma porque al crear el clon se la paso junto con los children del header
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };
