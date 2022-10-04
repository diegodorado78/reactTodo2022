import React from "react";
import tanjiro from "../../assets/Picture1.png";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal }) {
  // al llamar al Form le enviamos un hijo para que lo teletransporte y renderice
  const [newTodoValue, setNewTodoValue] = React.useState("");
  // const newTodoRef = useRef(null);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); //metodo que evita la recarga de la pagina
    addTodo(newTodoValue);
    setOpenModal(false);
    // newTodoRef.current.value = null;
  };
  return (
    <form onSubmit={onSubmit}>
      <img src={tanjiro} alt="" />
      <label> Add a new toDo to your list</label>
      <textarea
        name=""
        // ref={newTodoRef}
        value={newTodoValue}
        onChange={onChange}
        placeholder="Type here what you need to do"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          {" "}
          Cancel
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          {" "}
          Add toDo
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
