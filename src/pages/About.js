import React from "react";
import powerful from "../images/powerful.png";

const about = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mx-8 lg:mx-20 my-4 text-md lg:text-lg mb-12">
      <div>
        <p className=" text-base lg:text-xl mb-8 ">
          🚧 Ce site est en cours de développement, et je vous invite à
          collaborer (idées, corrections, tutos...).
        </p>
        <p>
          Cette application est un lieu de partage de connaissances et de bonnes
          pratiques.
        </p>
        <p>
          Vous êtes invités à déposer vos idées, vos lectures, vos tutos
          préférés...
        </p>
      </div>
      <div>
        <img src={powerful} alt="powerfull-symbol" />
      </div>
    </div>
  );
};

export default about;
