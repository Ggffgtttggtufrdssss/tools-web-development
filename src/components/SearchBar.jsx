import React from "react";
import "../style/search-module.css";

const SearchBar = () => {
  return (
    <div className="p-8">
      <input
        placeholder="Recherche..."
        type="text"
        className="input"
        required=""
      ></input>
    </div>
  );
};

export default SearchBar;
