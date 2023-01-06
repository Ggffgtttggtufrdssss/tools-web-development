import React from "react";

const three = () => {
  return (
    <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>Three.js</strong> est une bibliothèque JavaScript pour créer des
        scènes 3D dans un navigateur web. Elle peut être utilisée avec la balise
        canvas du HTML5 sans avoir besoin d'un plugin. Le code source est
        hébergé sur le GitHub de son créateur mrDoob
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            Three.js - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default three;
