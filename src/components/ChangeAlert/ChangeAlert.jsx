import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert__background">
        <div className="ChangeAlert__container">
          <p>Parece que hubo cambios en los Todos en otra pestaña</p>
          <p>Quieres sincronizar tus TODOS?</p>
          {/* al llamar a este boton, invocamos a props.sincronize  que dispara el use effect*/}
          <button onClick={toggleShow}>Refresh!</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
