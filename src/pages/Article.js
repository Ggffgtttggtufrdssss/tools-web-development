import React from "react";
import { Link } from "react-router-dom";
import photoArticle from "../images/article-photo.jpg";
import photoArticle2 from "../images/ressource-photo.jpg";

const article = () => {
  return (
    <div className="text-center justify-center bg-black py-4 ">
      <div className="flex flex-wrap mx-5  justify-center gap-4">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg " src={photoArticle} alt="article" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Card title
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/*"
              className=" inline-block px-6 py-2.5 bg-[#526DFE] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Article 1
            </Link>
          </div>
        </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <img className="rounded-t-lg" src={photoArticle2} alt="article" />

          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              Card title
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/*"
              className=" inline-block px-6 py-2.5 bg-[#526DFE] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Article 2
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default article;
