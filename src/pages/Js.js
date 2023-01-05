import React from "react";

const js = () => {
  return (
    <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>JavaScript</strong> vous permet d'ajouter de l'interactivité à
        vos pages. Les exemples courants que vous avez peut-être vus sur les
        sites Web sont les curseurs, les interactions de clics, les fenêtres
        contextuelles, etc.
        <br />
        <br />
        📌 voir Algorithmes (Codewars...)
        <br />
        📌 voir React.js, Next.js, Vue.js...tous sont basés sur du JavaScript.
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://www.w3schools.com/js/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            W3Schools – JavaScript Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://javascript.info"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            The Modern JavaScript Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.javascripttutorial.net"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Learn JavaScript: Covered many topics
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default js;
