import React from "react";
import { Link } from "react-router-dom";

import "../style/card-module.css";
import BtnCode from "./BtnCode";

const Card = ({ label, description, url }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <h3 className="title">{label}</h3>
          <p className="subtitle"> Hover me :)</p>
        </div>

        <div className="back">
          <p className="description ">{description}</p>
          <div className="pt-6">
            <Link to={url}>
              <BtnCode label="Ressources" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
