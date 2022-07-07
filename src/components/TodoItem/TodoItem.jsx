import React from 'react'
import './TodoItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashCan,faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
   
    const onDelete = ()=>{
        alert('borraste la tarea '+ props.text)//se ejecuta en el onclick del todoItem
    }
    return (
        <li className="TodoItem">
            {/* ${props.completed} es un condicional que agrega lo que va despues del  && como otro classname */}
          <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
          > 
          <FontAwesomeIcon icon={faCheckCircle} />
          </span>

          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
            {props.text}
          </p>

           <span
           className="Icon Icon-delete"
           onClick={props.onDelete}
           >
          <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </li>
      );
};

export {TodoItem};
