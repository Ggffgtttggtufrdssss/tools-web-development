import React from "react";
import TemplatePage from "../components/TemplatePage";

const context = () => {
  return (
    <>
      <TemplatePage
        title="CONTEXT with React js"
        description="offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau."
        officialWebsite="https://fr.reactjs.org/docs/context.html#gatsby-focus-wrapper"
      />
      <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <div className="p-4">
            <li>
              Dans une application React typique, les données sont passées de
              haut en bas (du parent à l’enfant) via les <code>props</code>,
              mais cela peut devenir lourd pour certains types de props (ex. les
              préférences régionales, le thème de l’interface utilisateur) qui
              s’avèrent nécessaires pour de nombreux composants au sein d’une
              application.
            </li>
            <li>
              Il offre un moyen de partager des valeurs comme celles-ci entre
              des composants sans avoir à explicitement passer une prop à chaque
              niveau de l’arborescence.
            </li>
          </div>
        </p>
      </div>
    </>
  );
};

export default context;
