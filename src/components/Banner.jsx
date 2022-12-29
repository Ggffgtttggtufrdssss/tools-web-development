import React from "react";
import myYear from "../images/gif.png";

const Banner = () => {
  return (
    <div>
      {" "}
      <img src={myYear} alt="présentation 2023" className="h-1/5 w-1/5 " />
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4  py-8 mx-auto text-left  md:text-center">
          <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white  sm:leading-none md:text-6xl  lg:text-7xl">
            <span className="inline md:block">Mind map</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              For
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                Web Development
              </span>
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg"></div>
        </div>
        <hr className="text-white mx-5" />
      </section>
    </div>
  );
};

export default Banner;
