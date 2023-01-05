import React from "react";

const node = () => {
  return (
    <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>Node.js</strong> est un environnement d'exécution JavaScript
        développé par Ryan Dahl en 2009. Sa capacité à exécuter du code JS en
        dehors d'un navigateur web a permis aux développeurs d'exécuter
        JavaScript presque partout (serveurs, objets connectés, robots, ...).
        <br />
        Grâce à une collection de "modules" qui gèrent diverses fonctionnalités
        de base (comme la gestion des requêtes HTTP, l'accès au système de
        fichiers, ...), nous pouvons écrire toutes sortes d'applications juste
        avec JavaScript et Node. <br />
        <strong>Node.js</strong> présente de nombreux avantages : un système de
        paquets intégré (NPM), un modèle non bloquant, de grandes performances
        (moteur V8), ... Et c'est un logiciel open source !.
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://nodejs.org/fr/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Node.js - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default node;
