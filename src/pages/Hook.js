import React from "react";
import TemplatePage from "../components/TemplatePage";

const hook = () => {
  return (
    <>
      <TemplatePage
        title="HOOKS avec React.js"
        description=" sont des fonctions JavaScript simples que nous pouvons utiliser pour isoler la pièce réutilisable d'un composant fonctionnel."
        officialWebsite="https://fr.reactjs.org/docs/hooks-intro.html"
      />
      <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <div className="p-4">
            <li>
              Les Hooks sont arrivés avec React 16.8. Ils vous permettent de
              bénéficier d’un état local et d’autres fonctionnalités de React
              sans avoir à écrire une classe.
            </li>
          </div>
        </p>
      </div>
    </>
  );
};

export default hook;
