import React from 'react';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import demonPic from '../../assets/demon.png';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoModal } from '../TodoModal/TodoModal';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoHeader } from "../TodoHeader/TodoHeader";

function AppUi() {
  const {
    // recibe el value que es un objeto con todas esas props (value.errror)
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <img src={demonPic} alt="logo"></img>
      <h1> Tanjiro's to do list</h1>
      {/* dentro de todo counter y todo search me encargo de consumir directamente el estado global */}
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      {/* <TodoContext.Consumer> */}
      {/* render props=> son una funcion que reciben el obejto value que proviene del provider */}
      {/* {() =>(// la funcion permite recibir el estado del provider y devolver elementos paso para el return de jsx */}
      <TodoList>
        {/* Si la var loading es true carga el parrafo */}
        {error && <p> Upss hubo un error con tu consulta</p>}
        {loading && <p> Loading...</p>}
        {/* si ya no esta cargando y el array esta vacio entonces */}
        {!loading && !searchedTodos.lenght && <p> Create your first Todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {/* LOGICA PARA RENDERIZAR EL MODAL */}
      {!!openModal && ( // si open Modal es true renderiza en comp TodoModal
        <TodoModal>
          <TodoForm></TodoForm>
        </TodoModal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
export {AppUi}