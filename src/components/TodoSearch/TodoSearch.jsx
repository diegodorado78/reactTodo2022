import React from 'react'
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css'

    

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange =(e)=>{
    setSearchValue(e.target.value)
    }

    return [
        <input 
        key='1'
        className='TodoSearch' 
        type="text"
        placeholder="What are you looking for?" 
        value={searchValue}
        onChange={onSearchValueChange}
       >
      </input>
    ]
       
              
;};

export {TodoSearch};
