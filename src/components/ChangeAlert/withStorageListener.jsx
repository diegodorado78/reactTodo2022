import React from "react";
import { useState } from "react";

function withStorageListener(WrappedComponent) {
  //recibe un componente para modificarlo y devolver algo visual con al siguiente f()
  return function WrappedComponentWithStorageListener(props) {
    //recibimos las props de nuestro HOC
    const [storageChange, setstorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        // si el cambio fue el el key TODOS_V1 "donde guardamos nuestros todos"
        console.log("Hubo cambios en TODOS_V1");
        setstorageChange(true); // cambia el state de false a true y esto generara que se muestre el parrafo
      }
    });
    const toggleShow = () => {
      props.sincronize(); //llamamos a la prop que le estamos pasando al componente envuelto en un HOC
      setstorageChange(false);
    };
    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
