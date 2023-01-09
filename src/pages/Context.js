import React from "react";
import TemplatePage from "../components/TemplatePage";

const context = () => {
  return (
    <>
      <TemplatePage
        title="CONTEXT with React js"
        description="offre un moyen de faire passer des données à travers l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau."
        description2="Dans une application React typique, les données sont passées de haut en bas (du parent à l’enfant) via les <code>props</code>, mais cela peut devenir lourd pour certains types de props (ex. les préférences régionales, le thème de l’interface utilisateur) qui s’avèrent nécessaires pour de nombreux composants au sein d’une application."
        tips1="il offre un moyen de partager des valeurs comme celles-ci entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence. "
        tips2="maitriser un minimum JS est nécessaire"
        titleUrl4="React js & Context - official website"
        url4="https://fr.reactjs.org/docs/context.html#gatsby-focus-wrapper"
      />
    </>
  );
};

export default context;
