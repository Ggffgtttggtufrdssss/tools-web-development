import React from "react";

const context = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        Le{" "}
        <code>
          <strong>Context</strong>
        </code>{" "}
        offre un moyen de faire passer des données à travers l’arborescence du
        composant sans avoir à passer manuellement les props à chaque niveau.
        <br />
        <br />
        Dans une application React typique, les données sont passées de haut en
        bas (du parent à l’enfant) via les <code>props</code>, mais cela peut
        devenir lourd pour certains types de props (ex. les préférences
        régionales, le thème de l’interface utilisateur) qui s’avèrent
        nécessaires pour de nombreux composants au sein d’une application. Le{" "}
        <code>
          <strong>Context</strong>
        </code>{" "}
        offre un moyen de partager des valeurs comme celles-ci entre des
        composants sans avoir à explicitement passer une prop à chaque niveau de
        l’arborescence.
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://fr.reactjs.org/docs/context.html#gatsby-focus-wrapper"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            React js & Context - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default context;
