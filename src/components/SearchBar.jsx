import React, { useState } from "react";
import "../style/search-module.css";
import datas from "../data/datas.json";
import Card from "./Card";

const SearchBar = () => {
  //const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchterm] = useState("");

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    value.length > 2 && setSearchterm(value);
  };

  // useEffect(() => {
  //   fetch("https://.....")
  //     .then((response) => response.json())
  //     .then((json) => setDatas(json));
  // }, []);

  return (
    <div className="p-8 ">
      <input
        placeholder="Recherche..."
        type="text"
        className="input"
        required=""
        onChange={handleSearchTerm}
      />
      <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4">
        {datas
          .filter((val) => {
            return val.label.toLowerCase().includes(searchTerm.toLowerCase());
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
