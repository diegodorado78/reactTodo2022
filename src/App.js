import React from 'react'
import { TodoProvider } from './components/TodoContext/TodoContext';
import { AppUi } from './components/AppUi/AppUi';

function App() {
  return(
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App
