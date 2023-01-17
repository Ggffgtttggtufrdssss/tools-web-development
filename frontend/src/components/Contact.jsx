import React, { useState } from "react";
import codeThinking from "../images/code-thinking.png";

export default function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row m-2 lg:m-8 text-md lg:text-lg mb-12 items-center">
      <img
        src={codeThinking}
        alt="idea"
        className="w-3/4 h-3/4 lg:w-1/2 lg:h-1/2"
      />

      <form
        className="flex flex-col pt-2 w-3/4 h-3/4 lg:w-1/2 lg:h-1/2 "
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          className="shadow appearance-none  rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline border-2 border-black"
          type="hidden"
          name="form-name"
          value="contact"
        />

        <label htmlFor="name">Nom :</label>
        <input
          className="block text-black p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
          type="text"
          name="name"
          placeholder="Nom"
          value={formValue.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="mt-4">
          Email :
        </label>
        <input
          className=" block text-black p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
          type="text"
          name="email"
          placeholder="Email"
          value={formValue.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="mt-4">
          Boite à idées :
        </label>
        <textarea
          className=" block text-black p-2 text-sm font-bold mt-1 border-2 border-gray-300 rounded-lg"
          htmlFor="message"
          type="text"
          name="message"
          placeholder="Message"
          value={formValue.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          className="mt-4 rounded-lg  border-[#526DFE] border-4 hover:bg-[#526DFE] hover:text-white"
          type="submit"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
