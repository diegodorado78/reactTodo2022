import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert__background">
        <div className="ChangeAlert__container">
          <p>Parece que hubo cambios en los Todos en otra pestaña</p>
          <p>Quieres sincronizar tus TODOS?</p>
          {/* al llamar a este boton, invocamos a props.sincronize  que dispara el use effect*/}
          <button onClick={() => toggleShow(false)}>Refresh!</button>
        </div>
      </div>
    );
  } else {
    return;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };
