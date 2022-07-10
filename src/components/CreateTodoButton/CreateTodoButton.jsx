import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const openModal=()=> {
      props.setOpenModal(prevState=>!prevState)// puedo enviar directamente el estado o una funcion que invierte el estado actual
    };
    return(
   <button 
   className="CreateTodoButton"
   onClick={openModal} //hago un arrow function para que no se ejecute auto sino solo cuando click 
   >+</button> 
 );};

export {CreateTodoButton};
