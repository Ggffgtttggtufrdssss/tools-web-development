import React from "react";
import ArticleCard from "./ArticleCard";
import dataArticle from "../datas/dataArticle.json";

const ArticleList = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 text-center  justify-center bg-black py-4 ">
        {dataArticle.map((item, index) => {
          return (
            <ArticleCard
              key={index}
              _id={item._id}
              img={item.img}
              title={item.title}
              titleTheme={item.titleTheme}
              description={item.description}
              url=""
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticleList;
