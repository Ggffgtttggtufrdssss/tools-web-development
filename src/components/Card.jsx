import React from "react";

import "../style/card-module.css";
import BtnCode from "./BtnCode";

const Card = ({ label, description }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <h3 className="title">{label}</h3>
          {/* <p class="subtitle">Hover me :)</p> */}
        </div>

        <div className="back">
          <p className="description ">{description}</p>
          <div className="pt-6">
            <BtnCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
