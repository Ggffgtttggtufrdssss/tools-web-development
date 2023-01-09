import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <p className="text-white bg-black  text-base lg:text-xl p-1 pl-10 ">
        🚧 Ce site est en cours de développement.
      </p>
      <nav className="bg-black p-2 flex items-center justify-end">
        <div className="flex ml-24 items-center lg:text-lg">
          <Link to="/" className="px-4 py-2 text-white hover:bg-gray-700">
            Accueil
          </Link>
          <Link
            to="/article"
            className="px-4 py-2 text-white hover:bg-gray-700"
          >
            Articles
          </Link>
          <Link to="/about" className="px-4 py-2 text-white hover:bg-gray-700">
            À propos
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-white hover:bg-gray-700"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
