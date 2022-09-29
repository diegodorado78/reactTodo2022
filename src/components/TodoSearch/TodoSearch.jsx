import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return [
    <input
      key="1"
      className="TodoSearch"
      type="text"
      placeholder="What are you looking for?"
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>,
  ];
}

export { TodoSearch };
