import React from "react";

const strapi = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>Strapi</strong> est un CMS headless, open-source, javascript,
        permettant de créer, gérer et exposer des expériences riches en contenu
        à tout appareil numérique.
        <br />
        <br />
        Un <strong>CMS “headless”</strong> signifie que le CMS n’est pas
        directement relié au front-office (head). Le CMS agit comme un
        back-office indépendant, qui propose une API permettant d’afficher le
        contenu sur tous types de supports (web, mobile, IoT, etc.) .
        <br />
        <br />
        <li>permet de gérer et stocker du contenu (type CRUD)</li>
        <li>possède une API pour interagir avec le contenu</li>
        <br />
        <br />
        <h5>Avantages selon Orianne Brion :</h5>
        <li>
          <strong>Compatibilité</strong> avec différents langages de
          programmation et conception du front-office flexible.
        </li>
        <li>
          <strong>Aucune contrainte de design</strong> : Ce système offre
          beaucoup plus de possibilités d'affichage qu'avec la plupart des CMS
          traditionnels. Les CMS headless permettent donc une plus grande
          personnalisation de l’expérience de vos utilisateurs.
        </li>
        <li>
          <strong>Marketing omnicanal</strong> : les équipes marketing et
          contenus n’ont plus qu’à créer les contenus une seule fois, et à les
          diffuser sur tous les appareils et canaux.
        </li>
        <li>
          <strong>Données dynamiques</strong> : dans un CMS traditionnel, la
          récupération du contenu d'un site web nécessite un rechargement de la
          page. Au contraire, l'API REST fournit des données dynamiques qui
          peuvent être intégrées dans la structure de la page à tout moment,
          même sans la rafraîchir.
        </li>
        <li>
          Sécurité : l’utilisation d’un CMS headless réduit le risque d’attaques
          DDoS.
        </li>
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://strapi.io/tutorials"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Strapi - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default strapi;
