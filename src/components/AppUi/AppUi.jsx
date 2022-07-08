import React from 'react';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoItem} from '../TodoItem/TodoItem';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import demonPic from '../../assets/demon.png';
import { TodoProvider } from '../TodoContext/TodoContext';
import { TodoContext } from '../TodoContext/TodoContext';
function AppUi(){

    return (
        <React.Fragment>
          <img src ={demonPic} width='250px' alt="logo"></img>
          <h1> Tanjiro's to do list </h1>
          {/* dentro de todo counter y todo search me encargo de consumir directamente el estado global */}

          <TodoCounter />
          <TodoSearch  />

         <TodoContext.Consumer>
          {/* render props=> son una funcion que reciben el obejto value que proviene del provider */}
            {({
            error,
            loading,
            searchedTodos,
            completeTodo,
            deleteTodo
        }) =>(// la funcion permite recibir el estado del provider y devolver elementos paso para el return de jsx
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
          )}
         </TodoContext.Consumer>
      
        <CreateTodoButton />
      
        </React.Fragment>
        );
}
export {AppUi}