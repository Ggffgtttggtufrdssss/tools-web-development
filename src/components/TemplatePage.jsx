import React from "react";

const TemplatePage = ({
  title,
  description,
  description2,
  tips1,
  tips2,
  text,
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
    <div className="mx-8 lg:mx-28 my-12 text-md lg:text-lg mb-12">
      <h1 className="text-2xl pb-8">
        <strong>{title}</strong>
      </h1>
      <p className="mb-8">
        <strong>{title}</strong> {description} <br />
        {description2}
        <br />
        <br />
        📌 {tips1}
        <br />
        📌 {tips2}
      </p>
      <p>{text}</p>
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
        <hr className="border-white mx-5 border-2 my-4 font-extrabold" />
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
        <hr className="border-white mx-5 border-2 my-4 font-extrabold" />
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
        <hr className="border-white mx-5 border-2 my-4 font-extrabold" />
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
        <hr className="border-white mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default TemplatePage;
