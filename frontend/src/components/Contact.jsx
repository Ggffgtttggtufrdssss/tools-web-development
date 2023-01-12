import React from "react";
import codeThinking from "../images/code-thinking.png";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row m-2 lg:m-8 text-md lg:text-lg mb-12 items-center">
      <img
        src={codeThinking}
        alt="idea"
        className="w-3/4 h-3/4 lg:w-1/2 lg:h-1/2"
      />
      <form
        className="flex flex-col pt-2 w-3/4 h-3/4 lg:w-1/2 lg:h-1/2 "
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input
          className="shadow appearance-none  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline border-2 border-black"
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div hidden>
          <input name="bot-field" />
        </div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          name="name"
          className="block text-white p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
        />

        <label htmlFor="email" className="mt-4">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className=" block text-white p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
        />

        <label htmlFor="message" className="mt-4">
          Boite à idées:
        </label>
        <textarea
          name="message"
          className=" block text-white p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="mt-4 rounded-lg  border-[#526DFE] border-4 hover:bg-[#526DFE] hover:text-white"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
