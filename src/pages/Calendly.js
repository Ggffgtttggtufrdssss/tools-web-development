import React from "react";

const calendly = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        Calendly est un logiciel de planification et de prise de rendez-vous qui
        aide les particuliers et les organisations à planifier et à gérer les
        rendez-vous et les réunions avec les clients et les collègues. Il permet
        aux utilisateurs de créer des liens de planification personnalisables
        qui peuvent être partagés avec d'autres, ce qui leur permet de planifier
        facilement des rendez-vous ou des réunions avec l'utilisateur à un
        moment qui fonctionne pour les deux parties.
        <br />
        <br />
        📌 <code>npm install --save react-calendly</code>
        <div className="p-4">
          Ajout de l'un des 5 widgets possibles
          <a
            href="https://www.npmjs.com/package/react-calendly?activeTab=readme"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            (voir doc npmjs de react-calendly)
          </a>
          <li>InlineWidget</li>
          <li>
            PopupWidget - possibilité de styliser avec
            <code> textColor,</code>
            <code> text,</code>
            <code> et color</code>
          </li>
          <li>PopupButton</li>
          <li>CustomButton</li>
          <li>useCalendlyEventListener</li>
        </div>
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default calendly;
