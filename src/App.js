import React from 'react'
import {TodoCounter} from './components/TodoCounter';
import {TodoItem} from './components/TodoItem'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from './components/TodoList'
import {CreateTodoButton} from './components/CreateTodoButton'
import demonPic from './assets/demon.png'
// import './App.css'


const defaultTodos=[
  {text:'Buy groceries for ramen', completed:true},
  {text:'Workout', completed:true},
  {text:'Go out and hunt some demons', completed:false},
  {text:'Take a nap', completed:false},
  {text:'Cook some dinner', completed:false},
  {text:'Go to sleep', completed:false},

  


]
function App() {
  const [todos,setTodos]=React.useState(defaultTodos);// el estado inicial es el array aboveS
  const [searchValue, setSearchValue]=React.useState('');

  const completedTodos= todos.filter(todo=> !!todo.completed).length; // doble negacion o sea evalua si es true
  const totalTodos= todos.length;

  let searchedTodos = [];

  if(searchValue < 1){// si no hay nada en el input se muestran todos los todos
    searchedTodos=todos
  }else{
    searchedTodos=todos.filter(todo=>{
      const todoText =todo.text.toLowerCase();
      const searchedText= searchValue.toLowerCase();
      return todoText.includes(searchedText);

    })
  }

  //metodo para marcar todos completados
   const completeTodo = (text)=>{ //recibe el texto de los todos para rayarlo
   const todoIndex= todos.findIndex(todo=>todo.text===text)//busca el texto en cada todo.text del array
   const newTodos= [...todos];
   newTodos[todoIndex].completed=true;//cmabia el la prop completed del item que coincide
   setTodos(newTodos);//pasa el nuevo arreglo como nuevo estado para re renderizar
  }
  //METODO PARA ELIMINAR TODOS
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


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

export default App
