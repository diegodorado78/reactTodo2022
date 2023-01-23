import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
                      // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
                      const {
                        item: todos, //item es el nombre externo y todos el interno
                        saveItem: saveTodos,
                        sincronizeItem: sincronizeTodos, //function()
                        loading,
                        error,
                      } = useLocalStorage("TODOS_V1", []);
                      // llamo al hook y paso la data inicial y lo que me devuelve lo guado en todos
                      const [openModal, setOpenModal] = React.useState(false);
                      const [searchValue, setSearchValue] = React.useState("");
                      //estados derivados
                      const completedTodos = todos.filter(
                        (todo) => !!todo.completed
                      ).length; //parten de un estado ya creado
                      const totalTodos = todos.length;

                      let searchedTodos = []; //estado derivado mas complejo

                      if (!searchValue.length >= 1) {
                        searchedTodos = todos;
                      } else {
                        searchedTodos = todos.filter((todo) => {
                          const todoText = todo.text.toLowerCase();
                          const searchText = searchValue.toLowerCase();
                          return todoText.includes(searchText);
                        });
                      }

                      const addTodo = (text) => {
                        const newTodos = [...todos];
                        newTodos.push({
                          completed: false,
                          text,
                        });
                        saveTodos(newTodos);
                      };

                      const completeTodo = (text) => {
                        const todoIndex = todos.findIndex(
                          (todo) => todo.text === text
                        );
                        const newTodos = [...todos];
                        newTodos[todoIndex].completed = true;
                        saveTodos(newTodos);
                      };

                      const deleteTodo = (text) => {
                        const todoIndex = todos.findIndex(
                          (todo) => todo.text === text
                        );
                        const newTodos = [...todos];
                        newTodos.splice(todoIndex, 1);
                        saveTodos(newTodos);
                      };
                      const states = {
                        //creo este objeto para dividir los estados de los actualizadores
                        error,
                        loading,
                        totalTodos,
                        completedTodos,
                        searchValue,
                        searchedTodos,
                        openModal,
                      };
                      const updaters =
                        //el objeto provider es el que voy a compartir, por eso paso las props en dentro del objeto ubicado en value
                        {
                          setSearchValue,
                          completeTodo,
                          addTodo,
                          deleteTodo,
                          setOpenModal,
                          sincronizeTodos,
                        };

                      return { states, updaters };
                    }

export { useTodos };
