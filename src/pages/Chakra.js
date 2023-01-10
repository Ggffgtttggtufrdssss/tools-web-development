import React from "react";
import TemplatePage from "../components/TemplatePage";

const chakra = () => {
  return (
    <>
      <TemplatePage
        title="CHAKRA UI"
        description="Chakra est une bibliothèque de composants simple, modulaire et accessible qui vous donne les blocs de construction dont vous avez besoin pour construire vos applications React.  "
        origin="Sortie de la version 1 en février 2021."
        officialWebsite="https://chakra-ui.com"
        cheatSheet="https://chakra-ui.com"
      />
      <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <div className="p-4">
            <li>
              Un cadre CSS fournit à l'utilisateur une feuille de style CSS
              entièrement fonctionnelle, lui permettant de créer une page Web en
              codant simplement le HTML avec des classes, une structure et des
              identifiants appropriés.
            </li>
            <li>
              Les fonctionnalités populaires du site Web telles que le pied de
              page, le curseur, la barre de navigation, le menu hamburger, les
              mises en page basées sur des colonnes, etc. sont déjà incluses
              dans le cadre. Ainsi que le pied de page, le curseur, la barre de
              navigation, le menu hamburger, les mises en page basées sur des
              colonnes, etc.
            </li>
          </div>
        </p>
      </div>
    </>
  );
};

export default chakra;
