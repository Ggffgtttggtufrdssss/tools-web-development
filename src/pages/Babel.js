import React from "react";

const babel = () => {
  return (
    <div className="m-8 text-md lg:text-lg mb-12">
      <p className="mb-8">
        Si vous souhaitez voir comment certains éléments JSX spécifiques sont
        compilés en JavaScript, vous pouvez utiliser le compilateur Babel en
        ligne.
      </p>
      <ul className="pl-4 shadow-2xl rounded-xl">
        <li>
          <a
            href="https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.20.11&externalPlugins=&assumptions=%7B%7D"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-700 "
          >
            Compilateur Babel
          </a>
        </li>

        <hr className="border-black mx-5 border-2 my-4 font-extrabold" />
      </ul>
    </div>
  );
};

export default babel;
