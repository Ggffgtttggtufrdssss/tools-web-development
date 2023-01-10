import React from "react";

const TemplatePage = ({
  title,
  description,
  officialWebsite,
  origin,
  cheatSheet,
  titleUrl1,
  titleUrl2,
  titleUrl3,
  titleUrl4,
  titleUrl5,
  titleUrl6,
  titleUrl7,
  titleUrl8,
  titleUrl9,
  titleUrl10,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  url7,
  url8,
  url9,
  url10,
}) => {
  return (
    <div className="mx-8 p-2 lg:p-8 lg:mx-48 my-12 text-md lg:text-lg mb-12 rounded-2xl bg-black shadow-lg shadow-white ">
      <h1 className="text-2xl pb-8">
        <strong>{title}</strong>
      </h1>
      <p className="mb-8">
        <strong>{title}</strong> {description} <br />
        <br />
        {origin}
      </p>
      <h2>Official website</h2>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          {" "}
          <a
            href={officialWebsite}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            Site Officiel
          </a>
        </li>
        <li>
          {" "}
          <a
            href={cheatSheet}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            Cheat sheet
          </a>
        </li>
      </ul>
      <h2 className="mt-4">Ressources</h2>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href={url1}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl1}
          </a>
        </li>
        <li>
          <a
            href={url2}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl2}
          </a>
        </li>
        <li>
          <a
            href={url3}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl3}
          </a>
        </li>

        <li>
          <a
            href={url4}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl4}
          </a>
        </li>
        <li>
          <a
            href={url5}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl5}
          </a>
        </li>
        <li>
          <a
            href={url6}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl6}
          </a>
        </li>

        <li>
          <a
            href={url7}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl7}
          </a>
        </li>
        <li>
          <a
            href={url8}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl8}
          </a>
        </li>
        <li>
          <a
            href={url9}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl9}
          </a>
        </li>

        <li>
          <a
            href={url10}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-300 "
          >
            {titleUrl10}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TemplatePage;
