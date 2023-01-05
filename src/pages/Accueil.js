import React from "react";
// import datas from "../data/datas.json";
// import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const accueil = () => {
  return (
    <div className="text-center justify-center bg-black py-4 ">
      <SearchBar />
      {/* {datas.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          label={item.label}
          description={item.description}
          url={item.url}
        />
      ))} */}
    </div>
  );
};

export default accueil;
