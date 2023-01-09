import React from "react";
import TemplatePage from "../components/TemplatePage";

const react = () => {
  return (
    <>
      <TemplatePage
        title="REACT.js"
        description="Bibliothèque développée par Facebook avec une première version en 2011. Open source depuis 2013."
        tips1=" maitriser un minimum JS est nécessaire"
        tips2="est le choix idéal lorsque vous souhaitez développer des applications à page unique (SPA), car il peut réécrire et mettre à jour le contenu d'une page Web sans qu'il soit nécessaire de recharger ou de rafraîchir la page"
        titleUrl4="React js - official website"
        url4="https://fr.reactjs.org/"
      />
      <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <strong>Déclaratif</strong>
          <br />
          Grâce à React, il est facile de créer des interfaces utilisateurs
          interactives. Définissez des vues simples pour chaque état de votre
          application, et lorsque vos données changeront, React mettra à jour,
          de façon optimale, juste les composants qui en auront besoin.
          <br /> Des vues déclaratives rendent votre code plus prévisible et
          plus facile à déboguer.
          <br />
          <br />
          <strong>À base de composants</strong>
          <br />
          Créez des composants autonomes qui maintiennent leur propre état, puis
          assemblez-les pour créer des interfaces utilisateurs complexes.
          <br />
          Dans la mesure où les composants sont écrits en JavaScript plutôt que
          sous la forme de gabarits, vous pouvez facilement utiliser des données
          complexes dans vos applications et garder l’état hors du DOM.
          <br />
          <br />
          <strong>Utilisable partout</strong>
          <br />
          Comme nous ne présumons rien sur les autres technologies que vous
          utilisez, vous pouvez développer de nouvelles fonctionnalités avec
          React sans avoir à réécrire votre code existant.
          <br />
          React peut aussi être utilisé côté serveur avec Node, ou pour créer
          des applications mobiles grâce à React Native.
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default react;
