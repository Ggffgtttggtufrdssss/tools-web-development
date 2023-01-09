import React from "react";
import TemplatePage from "../components/TemplatePage";

const strapi = () => {
  return (
    <>
      <TemplatePage
        title="STRAPI"
        description="est un CMS headless, open-source, javascript,
      permettant de créer, gérer et exposer des expériences riches en contenu
      à tout appareil numérique."
        tips1="maitriser un minimum JS est nécessaire"
        tips2="permet de gérer un backend assez facilement"
        titleUrl4="Strapi - official website"
        url4="https://strapi.io/tutorials"
      />
      <div className="mx-8 lg:mx-28 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
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
            récupération du contenu d'un site web nécessite un rechargement de
            la page. Au contraire, l'API REST fournit des données dynamiques qui
            peuvent être intégrées dans la structure de la page à tout moment,
            même sans la rafraîchir.
          </li>
          <li>
            Sécurité : l’utilisation d’un CMS headless réduit le risque
            d’attaques DDoS.
          </li>
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default strapi;
