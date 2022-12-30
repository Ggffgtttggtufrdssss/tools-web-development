import React from "react";

const html = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        Langage de balisage. Il est utilisé sur le frontend et donne la
        structure à la page Web que vous pouvez styliser à l'aide de CSS et
        rendre interactive à l'aide de JavaScript.
        <br />
        📌 voir Accessibility
        <br />
        📌 voir SEO
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://www.w3schools.com/html/html_intro.asp"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            W3Schools : Learn HTML{" "}
          </a>
        </li>
        <li>
          <a
            href="https://htmlreference.io"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Html reference.io : All HTML elements at a glance
          </a>
        </li>
        <li>
          <a
            href="https://html.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            HTML For Beginners The Easy Way
          </a>
        </li>
        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
        <li>
          <a
            href="https://www.internetingishard.com/html-and-css/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Courses : Web Development Basics
          </a>
        </li>
        <li>
          <a
            href="https://www.codecademy.com/learn/learn-html"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Courses : Codecademy - Learn HTML
          </a>
        </li>
        <li>
          <a
            href="https://github.com/denysdovhan/learnyouhtml"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Courses : Interactive HTML Course
          </a>
        </li>
        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
        <li>
          <a
            href="https://www.youtube.com/watch?v=mJgBOIoGihA"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : HTML Full Course for Beginners | Complete All-in-One
            Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=pQN-pnXPaVg"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : HTML Full Course - Build a Website Tutorial
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=qz0aGYrrlhU"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Watch : HTML Tutorial for Beginners: HTML Crash Course
          </a>
        </li>
      </ul>
    </div>
  );
};

export default html;
