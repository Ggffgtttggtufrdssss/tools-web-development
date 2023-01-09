import React from "react";
import TemplatePage from "../components/TemplatePage";

const chakra = () => {
  return (
    <>
      <TemplatePage
        title="CHAKRA UI"
        description="est une bibliothèque de composants simple, modulaire et accessible qui vous donne les blocs de construction dont vous avez besoin pour construire vos applications React."
        description2="Un cadre CSS fournit à l'utilisateur une feuille de style CSS entièrement fonctionnelle, lui permettant de créer une page Web en codant simplement le HTML avec des classes, une structure et des identifiants appropriés. Les cours pour les fonctionnalités populaires du site Web telles que le pied de page, le curseur, la barre de navigation, le menu hamburger, les mises en page basées sur des colonnes, etc. sont déjà incluses dans le cadre."
        titleUrl4="Chakra UI - official website"
        url4="https://chakra-ui.com/getting-started"
        tips1="npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion"
        tips2="Version 2 of Chakra UI is only compatible with React 18. If you are still needing to use React 17 or earlier, please use version 1 of Chakra UI."
      />
    </>
  );
};

export default chakra;
