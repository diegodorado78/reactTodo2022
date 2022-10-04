import React from 'react'
import './TodoList.css'


function TodoList(props) {
    //creo una variable que cambia deacuerdo a si llamo a un render prop o function.
    const renderFunc=props.children||props.render
    return (
      <section className="TodoList__container">
        {
          //hace las validaciones y si se cumplen llama a la funcion que muestra el componente
        }
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {!props.loading && !props.totalTodos && props.onEmptyTodos()}
        {/* hago la validacion de que hayan todos y que no haya ningun todo con el texto buscado */}
        {(!!props.totalTodos &&
          !props.searchedTodos.length) &&
          props.onEmptySearchedTodos(props.searchValue)}
        {/* {props.searchedTodos.map(props.render)} */}
        {/* {props.searchedTodos.map((todo) => props.render(todo))} */}
        {/* si hago una render funcion en lugar de prop debo invocar a props.children */}
        {props.searchedTodos.map(renderFunc)}
      </section>
    );};

export {TodoList};
