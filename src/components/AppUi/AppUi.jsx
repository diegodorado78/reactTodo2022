import React from 'react';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import demonPic from '../../assets/demon.png';

function AppUi({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    todos,
    setTodos
}){

    return (
        <React.Fragment>
          <img src ={demonPic} width='250px' alt="logo"></img>
          <h1> Tanjiro's to do list </h1>
          <TodoCounter
           total={totalTodos}
           completed={completedTodos}
          />
          
          <TodoSearch
          //el primer searchValue es la prop que recibe el componente el otro es la var(estado) que estoy pasando
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
          <TodoList>
          {/* Si la var loading es true carga el parrafo */}
            {error && <p> Upss hubo un error con tu consulta</p>} 
            {loading && <p> Loading...</p>} 
            {/* si ya no esta cargando y el array esta vacio entonces */}
            {(!loading && !searchedTodos.lenght) && <p> Create your first Todo</p>} 

         {searchedTodos.map(todo=> (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
         ))} 
         </TodoList>
      
        <CreateTodoButton
         id='button' 
         todos={todos}
         setTodos={setTodos}
         />
      
        </React.Fragment>
        );
}
export {AppUi}