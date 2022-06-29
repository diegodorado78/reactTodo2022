import React from 'react'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    // const [] = React.useState("Tanjiro");

    const onSearchValueChange =(e)=>{
    setSearchValue(e.target.value)
    }

    return[
        <input 
        key='1'
        className='TodoSearch' 
        type="text"
        placeholder="what are you looking for?" 
        value={searchValue}
        onChange={onSearchValueChange} 
         />,
    ];};

export {TodoSearch};
