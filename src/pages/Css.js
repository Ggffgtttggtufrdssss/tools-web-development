import React from "react";

const css = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>CSS</strong> est la langue utilisée pour styliser l'avant-plan
        de tout site Web. CSS est une technologie de pierre angulaire du World
        Wide Web, aux côtés de HTML et de JavaScript.
        <br />
        <br />
        📌 voir Responsive design & Media Queries
        <br />
        📌 voir Tailwind, Chakra UI, Material UI...
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            W3Schools : Learn CSS
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/learn/responsive-web-design/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            FreeCodeCamp — Responsive Web Design
          </a>
        </li>
        <li>
          <a
            href="https://learn.shayhowe.com/html-css/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Learn to Code HTML & CSS
          </a>
        </li>
        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />

        <li>
          <a
            href="https://www.youtube.com/watch?v=yfoY53QXEnI"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : CSS Crash Course For Absolute Beginners
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=D-h8L5hgW-w"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : HTML and CSS Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=FqmB-Zj2-PA"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : CSS Masterclass - Tutorial & Course for Beginners
          </a>
        </li>
      </ul>
    </div>
  );
};

export default css;
