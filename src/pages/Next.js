import React from "react";

const next = () => {
  return (
    <div className="mx-8 lg:mx-20 my-12 text-md lg:text-lg mb-12">
      <p className="mb-8">
        <strong>Next.js</strong> est un framework gratuit et open source,
        développé par Vercel en 2016, s'appuyant sur la bibliothèque JavaScript
        React et sur la technologie Node.js.
        <br />
        <br />
        📌 maitriser un minimum JS est nécessaire
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Next.js - official website
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default next;
