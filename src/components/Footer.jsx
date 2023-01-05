import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black rounded pb-1 md:py-3 fixed bottom-1 -z-10 lg:z-0">
        {/* <div className="w-screen px-4 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between"> */}
        <div className="flex px-2 justify-center text-teal-300">
          <p className="mt-4 text-sm text-left  lg:mt-0">
            Copyright &copy; {new Date().getFullYear()} FloM
          </p>
        </div>
        {/* </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
