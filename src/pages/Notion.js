import React from "react";
import TemplatePage from "../components/TemplatePage";

const notion = () => {
  return (
    <>
      <TemplatePage
        title="NOTION"
        description="L'application Notion a été fondé en 2016 à San Francisco."
        description2="Au début, il s'agit d'une application de prises de notes, puis elle s'est étendue à un tableur, BDD, tableau Kanban, agenda...."
        text="Notion permet de gérer et stocker du contenu (type CRUD), et possède une API pour interagir avec le contenu"
        tips1="maitriser un minimum JS est nécessaire"
        tips2="permet de gérer un backend assez facilement"
        titleUrl4="Notion - official website"
        url4="https://developers.notion.com/reference/intro"
      />
    </>
  );
};

export default notion;
