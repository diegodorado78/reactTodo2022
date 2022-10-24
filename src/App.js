import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";

import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import demonPic from "./assets/demon.png";
import { TodoModal } from "./components/TodoModal/TodoModal";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { useTodos } from "./useTodos";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { TodosError } from "./components/TodosError/TodosError";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { EmptySearchedTodos } from "./components/EmptySearchedTodos/EmptySearchedTodos";
import { ChangeAlert } from "./components/ChangeAlert/ChangeAlert";

function App() {
  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos,
  } = useTodos(); //custon hook que provee el estado
  return (
    <React.Fragment>
      <img src={demonPic} alt="logo"></img>
      <h1> Tanjiro's to do list</h1>
      {/* dentro de todo counter y todo search me encargo de consumir directamente el estado global */}
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      {/* <TodoContext.Consumer> */}
      {/* render props=> son una funcion que reciben el obejto value que proviene del provider */}
      {/* {() =>(// la funcion permite recibir el estado del provider y devolver elementos paso para el return de jsx */}

      <TodoList
        //pasamos algunas props para que haga validaciones y deacuerdo a estas se rendericen o no ciertos componentes
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchedTodos={(searchValue) => (
          <EmptySearchedTodos searchValue={searchValue} />
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
        //SI LLAMO ESTA RENDER FUNCTION EN EL COMPONENTE TODOLIST DEBO INVOCAR A PROPS.CHILDREN
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>

      {/* LOGICA PARA RENDERIZAR EL MODAL */}
      {!!openModal && ( // si open Modal es true renderiza en comp TodoModal
        <TodoModal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </TodoModal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export default App;
