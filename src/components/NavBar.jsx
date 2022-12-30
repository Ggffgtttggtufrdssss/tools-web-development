import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black p-2 flex items-center justify-end">
      <div className="flex items-center lg:text-lg">
        <Link to="/" className="px-4 py-2 text-white hover:bg-gray-700">
          Accueil
        </Link>
        <Link to="/about" className="px-4 py-2 text-white hover:bg-gray-700">
          À propos
        </Link>
        <Link to="/contact" className="px-4 py-2 text-white hover:bg-gray-700">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
