import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-black">
      <h1 class="text-9xl font-extrabold text-white  p-12 tracking-widest">
        404
      </h1>
      <div class="bg-[#BB88F7] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <Link class="relative inline-block text-sm font-medium text-[#BB88F7] group active:text-orange-500 focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#BB88F7] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">ACCUEIL</Link>
          </span>
        </Link>
      </button>
    </main>
  );
};

export default NotFound;