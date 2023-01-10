import React from "react";
import TemplatePage from "../components/TemplatePage";

const express = () => {
  return (
    <>
      <TemplatePage
        title="EXPRESS.js"
        description="Framework pour construire des applications web basées sur Node.js. C'est de fait le framework standard pour le développement de serveur en Node.js. Express apporte une couche fine de fonctionnalités d'application Web fondamentales, sans masquer les fonctionnalités de Node.js.Grâce à une foule de méthodes utilitaires HTTP et de middleware mise à votre disposition, la création d'une API robuste est simple et rapide. Express est flexible qui fournit un ensemble de fonctionnalités robuste pour les applications Web et mobiles."
        origin="Sortie en novembre 2010."
        officialWebsite="https://expressjs.com"
        cheatSheet="https://expressjs.com/en/starter/installing.html"
      />
    </>
  );
};

export default express;
