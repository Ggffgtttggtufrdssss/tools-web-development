import React, { useState } from "react";
// import "../styles/search-module.css";
import datas from "../data/datas.json";
import Card from "./Card";

const SearchBar = () => {
  //const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const handleSearchTerm = (e) => {
    setSearchterm(e.target.value);
  };

  // useEffect(() => {
  //   fetch("https://.....")
  //     .then((response) => response.json())
  //     .then((json) => setDatas(json));
  // }, []);

  return (
    <div className="p-2 ">
      <input
        placeholder="Recherche..."
        type="search"
        className="border-[#526DFE] text-white border-2 border-solid rounded-lg px-2 py-2 bg-transparent "
        required=""
        onChange={handleSearchTerm}
      />

      <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4">
        {datas
          .filter((item) => {
            return searchTerm.toLowerCase() === ""
              ? item
              : item.label.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((item, index) => (
            <Card
              key={index}
              id={item.id}
              label={item.label}
              description={item.description}
              url={item.url}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
