import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
      disabled={loading} //se desactiva (es true) cuando loading es true
    ></input>,
  ];
}

export { TodoSearch };
