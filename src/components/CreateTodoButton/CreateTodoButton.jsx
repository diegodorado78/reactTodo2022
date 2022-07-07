import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(todos,setTodos) {
    const openModal=(msg)=> console.log(msg)
    return(
   <button 
   className="CreateTodoButton"
   onClick={()=>openModal('cree un nuevo toDo')} //hago un arrow function para que no se ejecute auto sino solo cuando click 
   >+</button> 
 );};

export {CreateTodoButton};
