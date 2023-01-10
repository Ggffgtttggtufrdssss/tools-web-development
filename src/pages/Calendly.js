import React from "react";
import TemplatePage from "../components/TemplatePage";

const calendly = () => {
  return (
    <>
      <TemplatePage
        title="CALENDLY"
        description="est un logiciel de planification et de prise
    de rendez-vous qui aide les particuliers et les organisations à
    planifier et à gérer les rendez-vous et les réunions avec les clients et
    les collègues. Il permet aux utilisateurs de créer des liens de
    planification personnalisables qui peuvent être partagés avec d'autres,
    ce qui leur permet de planifier facilement des rendez-vous ou des
    réunions avec l'utilisateur à un moment qui fonctionne pour les deux
    parties."
        origin="Calendly a été fondée à Atlanta en 2013 par Tope Awotona."
        officialWebsite="https://calendly.com/fr"
        cheatSheet=""
        titleUrl7="Ajout de l'un des 5 widgets possibles"
        url7="https://www.npmjs.com/package/react-calendly?activeTab=readme"
      />
      <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
        <p className="mb-8">
          <div className="p-4">
            (voir doc npmjs de react-calendly)- possibilité de styliser avec
            <code>
              <strong> textColor</strong>,
            </code>
            <code>
              <strong>text</strong>,
            </code>
            <code>
              et <strong>color</strong>
            </code>
            <li>
              <strong>InlineWidget</strong>
            </li>
            <li>
              <strong>PopupWidget</strong>
            </li>
            <li>
              <strong>PopupButton</strong>
            </li>
            <li>
              <strong>CustomButton</strong>
            </li>
            <li>
              <strong>useCalendlyEventListener</strong>
            </li>
          </div>
        </p>
      </div>
    </>
  );
};

export default calendly;
