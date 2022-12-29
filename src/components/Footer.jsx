import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black py-1 md:py-3 fixed bottom-0">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start"></div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              Copyright &copy; {new Date().getFullYear()} Mon site
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
