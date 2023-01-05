import React from "react";

const express = () => {
  return (
    <div className="mx-8 lg:mx-20  my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>Express.js</strong> est un framework pour construire des
        applications web basées sur Node.js. C'est de fait le framework standard
        pour le développement de serveur en Node.js.
        <br />
        <br />
        <strong>Applications Web</strong>
        <br />
        Express est une infrastructure d'applications Web Node.js minimaliste et
        flexible qui fournit un ensemble de fonctionnalités robuste pour les
        applications Web et mobiles.
        <br />
        <br />
        <strong>API</strong>
        <br />
        Grâce à une foule de méthodes utilitaires HTTP et de middleware mise à
        votre disposition, la création d'une API robuste est simple et rapide.
        <br />
        <br />
        <strong>Performance</strong>
        <br />
        Express apporte une couche fine de fonctionnalités d'application Web
        fondamentales, sans masquer les fonctionnalités de Node.js.
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://expressjs.com/fr/starter/installing.html"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Express - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default express;
