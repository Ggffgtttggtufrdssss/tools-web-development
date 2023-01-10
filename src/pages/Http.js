import React from "react";
import code from "../images/httpCode.png";

const http = () => {
  return (
    <div className="mx-8 p-2 lg:p-8 lg:mx-20 my-12 text-md lg:text-lg mb-12 rounded-2xl bg-black shadow-lg shadow-white">
      <p className="mb-8">
        Le serveur répond au client avec une représentation de la ressource dans
        le corps de la réponse. Pour une ressource donnée, plusieurs formats
        sont possibles : HTML, XML, JSON, JSON-LD, CSV, etc. C'est au client de
        demander un format spécifique dans les en-têtes de la requête. C'est ce
        qu'on appelle la "négociation du contenu".
        <br />
        <br /> En voici quelques exemples :
      </p>

      <div className="p-4">
        <img src={code} alt="code-http-response" />
      </div>
    </div>
  );
};

export default http;
