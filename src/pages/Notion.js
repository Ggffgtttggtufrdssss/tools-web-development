import React from "react";

const notion = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        L'application <strong>Notion</strong> a été fondé en 2016 à San
        Francisco.
        <br />
        <br />
        Au début, il s'agit d'une application de prises de notes, puis elle
        s'est étendue à un tableur, BDD, tableau Kanban, agenda....
        <br />
        <br />
        <li>permet de gérer et stocker du contenu (type CRUD)</li>
        <li>possède une API pour interagir avec le contenu</li>
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://developers.notion.com/reference/intro"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Notion - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default notion;
