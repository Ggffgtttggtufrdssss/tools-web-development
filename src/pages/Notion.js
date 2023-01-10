import React from "react";
import TemplatePage from "../components/TemplatePage";

const notion = () => {
  return (
    <>
      <TemplatePage
        title="NOTION"
        description="Au début, il s'agit d'une application de prises de notes, puis elle s'est étendue à un tableur, BDD, tableau Kanban, agenda.... Notion permet de gérer et stocker du contenu (type CRUD), et possède une API pour interagir avec le contenu. permet de gérer un backend assez facilement.
        Il s'agit d'un CMS headless.Cela signifie que le CMS n’est pas directement relié au front-office (head). Le CMS agit comme un back-office indépendant, qui propose une API permettant d’afficher le contenu sur tous types de supports (web, mobile, IoT, etc.)"
        origin="L'application est lancée en mars 2016 pour les navigateurs Web et OS X, en mai 2017 pour Microsoft Windows et en juin 2017 pour iOS . En mars 2018, l'équipe publie Notion 2.0 et introduit les bases de données. 
        "
        officialWebsite="https://developers.notion.com/reference/intro"
        cheatSheet="https://developers.notion.com/reference/intro"
      />
    </>
  );
};

export default notion;
