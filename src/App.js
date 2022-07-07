import React from 'react'
import { TodoProvider } from './components/TodoContext/TodoContext';
import { AppUi } from './components/AppUi/AppUi';

// import {useLocalStorage} from './hooks/useLocalStorage';
// import './App.css'


// const defaultTodos=[
//   {text:'Buy groceries for ramen', completed:true},
//   {text:'Workout', completed:true},
//   {text:'Go out and hunt some demons', completed:false},
//   {text:'Take a nap', completed:false},
//   {text:'Cook some dinner', completed:false},
//   {text:'Go to sleep', completed:false},
// ]


function App() {
  return(
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App
