import React from "react";

import "../style/btn-module.css";

const BtnCode = ({ label }) => {
  return (
    <button className="cssbuttons-io">
      <span>{label}</span>
    </button>
  );
};

export default BtnCode;
