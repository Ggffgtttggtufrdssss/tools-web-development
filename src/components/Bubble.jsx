import React from "react";

const Bubble = ({ label }) => {
  return (
    <div className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline cursor-pointer">
      {label}
    </div>
  );
};

export default Bubble;
