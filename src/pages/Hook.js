import React from "react";

const hook = () => {
  return (
    <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        Les <strong>HOOKS</strong> React sont des fonctions JavaScript simples
        que nous pouvons utiliser pour isoler la pièce réutilisable d'un
        composant fonctionnel.
        <br />
        <br />
        Les <strong>HOOKS</strong> sont arrivés avec React 16.8. Ils vous
        permettent de bénéficier d’un état local et d’autres fonctionnalités de
        React sans avoir à écrire une classe.
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://fr.reactjs.org/docs/hooks-intro.html"
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            React js & Hooks - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default hook;
