import React from "react"   ;
import { useLocalStorage } from "./useLocalStorage";

const TodoContext= React.createContext()   ;   


function TodoProvider(props) {
    // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
    const {
       item:todos,
       saveItem:saveTodos,
       loading,
       error
     } = useLocalStorage('TODOS_V1', []);// llamo al hok y paso la data inicial y lo que me devuelve lo guado en todos    

   const [searchValue, setSearchValue] = React.useState('');
   const completedTodos = todos.filter(todo => !!todo.completed).length;
   const totalTodos = todos.length   ;

   let searchedTodos = []   ;

   if (!searchValue.length >= 1) {
   searchedTodos = todos;
   } else {
   searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
   });   
   }

   const completeTodo = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text);
   const newTodos = [...todos];
   newTodos[todoIndex].completed = true;
   saveTodos(newTodos);
   }   ;

   const deleteTodo = (text) => {
   const todoIndex = todos.findIndex(todo => todo.text === text);
   const newTodos = [...todos];
   newTodos.splice(todoIndex, 1);
   saveTodos(newTodos);
   }   ;



    return(
        //el objeto provider es el que voy a compartir, por eso paso las props en dentro del objeto ubicado en value
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo
        }}>

            {props.children}
    </TodoContext.Provider> 
    )


    
}

export {TodoContext,TodoProvider};