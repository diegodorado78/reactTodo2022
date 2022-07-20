import React from "react";
import ReactDOM from "react-dom";
import "./TodoModal.css";

function TodoModal({ children }) {
  // al llamar al modal le enviamos un hijo para que lo teletransporte y renderice
  return ReactDOM.createPortal(
    <div className="modal__background">{children}</div>,
    document.getElementById("modal")
  );
}

export { TodoModal };
