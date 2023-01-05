import React from "react";
import { Link } from "react-router-dom";
import mind_map from "../images/Mind_map.png";
import BtnCode from "./BtnCode";

const ContactForm = () => {
  return (
    <section className="flex flex-col justify-center ">
      <div className="group w-20 h-20 lg:w-28 lg:h-28 [perspective:1000px]">
        <div className="relative  w-full h-full rounded-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
          <div className="absolute inset-x-0 bottom-8 lg:inset-0">
            <span className="flex">
              <span className="animate-ping relative inline-flex rounded-full h-3 w-3 bg-[#526DFE] "></span>
            </span>
            <img
              src={mind_map}
              alt="mind"
              className="h-2/5 lg:h-4/5 w-4/5 lg:w-full  rounded-xl object-cover shadow-xl shadow-black/40"
            />
          </div>
          {/* backface */}
          <div className="absolute inset-x-0 bottom-0 lg:inset-0 h-full w-full rounded-xl  bg-black/60 px-2 py-2 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
            <div className="flex  flex-col items-center justify-center">
              <p className="text-xs lg:text-base pt-2">Une idée ?</p>

              <div className="fixed bottom-2 lg:bottom-4">
                <Link to="/contact">
                  <BtnCode label="Formulaire" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
