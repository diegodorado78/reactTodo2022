import { useState } from "react";

function useStorageListener(sincronize) {
  //recibe un componente para modificarlo y devolver algo visual con al siguiente f()
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
    sincronize(); //llamamos a la prop que le estamos pasando al componente envuelto en un HOC
    setstorageChange(false);
  };
  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
