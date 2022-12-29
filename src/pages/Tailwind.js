import React from "react";

const tailwind = () => {
  return (
    <div className="m-8 text-md lg:text-2xl mb-12">
      <p className="mb-8">
        CSS Framework qui fournit des classes CSS atomiques pour vous aider à
        styliser des composants, par exemple flex, pt-4, text-center et
        rotate-90 qui peuvent être composés pour construire n'importe quelle
        conception, directement dans votre balisage.
        <br />
        <br />
        📌 Un cadre CSS fournit à l'utilisateur une feuille de style CSS
        entièrement fonctionnelle, lui permettant de créer une page Web en
        codant simplement le HTML avec des classes, une structure et des
        identifiants appropriés. Les cours pour les fonctionnalités populaires
        du site Web telles que le pied de page, le curseur, la barre de
        navigation, le menu hamburger, les mises en page basées sur des
        colonnes, etc. sont déjà incluses dans le cadre.
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700"
          >
            Official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default tailwind;
