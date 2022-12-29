import React from "react";
import datas from "../data/datas.json";
import Card from "../components/Card";

const accueil = () => {
  return (
    <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4">
      {datas.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          label={item.label}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default accueil;
